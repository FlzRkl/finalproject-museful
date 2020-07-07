const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");
const checkObjectId = require("../../middleware/checkObjectId");

const Item = require("../../models/Item");
const User = require("../../models/User");

//@route  GET api/listItem/:id
//@desc  Get listITems
//@access Public

router.get("/:id", [auth, checkObjectId("id")], async (req, res) => {
  let id = req.params.id;
  if (id) {
    let item = await Item.findById(id);
    if (!item) {
      return res.status(400).json({
        errors: [{ msg: "Item not found!" }],
      });
    }
    return res.status(200).json({
      item,
    });

    //Function to return Datasets from subElements
    // if (!item.list) {
    //   return res.status(200).json({
    //     item,
    //   });
    // }

    // let idArr = item.list.map((el) => {
    //   return el.id;
    // });
    // let itemList = await Item.find({ _id: { $in: idArr } });

    // return res.status(200).json({
    //   item,
    //   itemList,
    // });
  }
});

// @route    POST api/listITem/submit
// @desc     Post an Item
// @access   Private
router.post(
  "/submit",
  [
    auth,
    check("title", "Title is required").not().isEmpty(),
    check("tag", "Tag is required").not().isEmpty(),
    check("user", "UserId is required").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors);
      return res.status(400).json({
        errors: errors.array(),
      });
    }
    const {
      aboveItemId,
      user,
      title,
      tag,
      desc,
      list,
      text,
      video,
      book,
      pic,
      link,
    } = req.body;

    let item = new Item({
      aboveItemId,
      user,
      title,
      tag,
      desc,
      list,
      text,
      video,
      book,
      pic,
      link,
    });

    //Save to db, save _id to save_item
    let saved_item = await item.save();
    console.log("saved data: ---\n" + saved_item);
    if (aboveItemId) {
      let key = saved_item.tag;
      let obj = {};
      obj[key] = {
        id: saved_item._id,
        title: saved_item.title,
        tag: saved_item.tag,
        desc: saved_item.desc,
        date: saved_item.date,
      };
      await Item.findByIdAndUpdate(
        aboveItemId,
        {
          $push: obj,
        },
        { new: true }
      );
    }

    if (!aboveItemId) {
      let obj = {
        list: {
          id: saved_item._id,
          title: saved_item.title,
          tag: saved_item.tag,
          desc: saved_item.desc,
          date: saved_item.date,
        },
      };
      await User.findByIdAndUpdate(
        user,
        {
          $push: obj,
        },
        { new: true }
      );
    }

    //return _item id
    res.status(200).json(saved_item);
  }
);

// @route    Update api/listITem/:id
// @desc     Update an Item
// @access   Private
router.put("/", [auth], async (req, res) => {
  try {
    let { id, title, desc, tag } = req.body;
    let date = Date.now();
    const item = await Item.findById(id);
    console.log(item);
    // Check user
    if (item.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }

    let updated_item = await Item.findByIdAndUpdate(
      id,
      { title: title, desc: desc, tag: tag, date: date },
      { new: true }
    );

    if (item.aboveItemId) {
      const aItem = item.aboveItemId;
      const tag = item.tag;
      const filt_field_id = `${tag}.id`;
      const filt_field_title = `${tag}.$.title`;
      const filt_field_desc = `${tag}.$.desc`;
      const filt_field_date = `${tag}.$.date`;
      const iId = item._id;

      let aboveList = await Item.findOneAndUpdate(
        { _id: aItem, [filt_field_id]: iId },
        {
          $set: {
            [filt_field_title]: title,
            [filt_field_desc]: desc,
            [filt_field_date]: date,
          },
        },
        { new: true }
      );
    }

    if (!item.aboveItemId) {
      const userId = req.user.id;
      const user = User.findById(userId);
      console.log(user);
      const iId = item._id;
      const filt_field_id = `${tag}.id`;
      const filt_field_title = `${tag}.$.title`;
      const filt_field_desc = `${tag}.$.desc`;
      const filt_field_date = `${tag}.$.date`;
      let userList = await User.findOneAndUpdate(
        { _id: userId, [filt_field_id]: iId },
        {
          $set: {
            [filt_field_title]: title,
            [filt_field_desc]: desc,
            [filt_field_date]: date,
          },
        },
        { new: true }
      );
      console.log(userList);
    }

    res.json(updated_item);
  } catch (err) {
    console.error(err.message);

    res.status(500).send("Server Error");
  }
});

const deleteF = async (id) => {
  Item.findByIdAndDelete(id, (error, data) => {
    console.log("deleted data: ---\n" + data);
    if (error) {
      return error;
    }
    if (data) {
      for (key in data) {
        let item = data[key];
        if (Array.isArray(item) && item.length > 0) {
          item.forEach((element) => {
            console.log("element: ---\n" + element.id);
            deleteF(element.id);
          });
        }
      }
    }
  });
};

// @route    DELETE api/listITem/:id
// @desc     Delete an Item
// @access   Private
router.delete("/:id", [auth, checkObjectId("id")], async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    let deleted_item = item;
    // Check user
    if (item.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }

    const aItem = item.aboveItemId;
    const tag = item.tag;
    const iId = item._id;

    if (item.aboveItemId) {
      let aboveList = await Item.findByIdAndUpdate(
        aItem,
        { $pull: { [tag]: { id: iId } } },
        { new: true }
      );
    }

    deleteF(item.id);

    if (!item.aboveItemId) {
      await User.findByIdAndUpdate(
        item.user,
        {
          $pull: { list: { id: iId } },
        },
        { new: true }
      );
    }
    // await item.remove();
    // console.log('return item: \n' + deleted_item);
    res.json(deleted_item);
  } catch (err) {
    console.log(err.message);

    res.status(500).send("Server Error");
  }
});

module.exports = router;
