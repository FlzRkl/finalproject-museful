const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
const checkObjectId = require('../../middleware/checkObjectId');

const Item = require('../../models/Item');
const User = require('../../models/User');

//@route  GET api/listItem/:id
//@desc  Get listITems
//@access Public

router.get('/:id', [auth, checkObjectId('id')], async (req, res) => {
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

// @route    POST api/listITem/submit
// @desc     Post an Item
// @access   Private
router.post(
  '/submit',
  [
    auth,
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
        tag: saved_item.tag,
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

// @route    DELETE api/listITem/:id
// @desc     Delete an Item
// @access   Private
router.delete('/:id', [auth, checkObjectId('id')], async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);

    // Check user
    if (item.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    await item.remove();

    res.json({ msg: 'ListItem removed' });
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});

module.exports = router;
