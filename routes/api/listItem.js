const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const Item = require('../../models/Item');
const User = require('../../models/User');

//@route  GET api/listItem
// @desc  Test route
//@access Public

router.get('/:id', async (req, res) => {
  let id = req.params.id;
  if (id) {
    let item = await Item.findById(id);
    if (!item) {
      return res.status(400).json({
        errors: [{ msg: 'Item not found!' }],
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

router.post(
  '/submit',
  [
    check('title', 'Title is required').not().isEmpty(),
    check('tag', 'Tag is required').not().isEmpty(),
    check('user', 'UserId is required').not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
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
    console.log(saved_item);
    if (aboveItemId) {
      let key = saved_item.tag;
      let obj = {};
      obj[key] = {
        id: saved_item._id,
        title: saved_item.title,
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
    res.status(200).json({
      saved_item,
    });
  }
);

module.exports = router;
