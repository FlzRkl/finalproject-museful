const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const Item = require('../../models/Item');

//@route  GET api/posts
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

    if (!item.list) {
      return res.status(200).json({
        item,
      });
    }

    let idArr = item.list.map((el) => {
      return el.id;
    });
    let itemList = await Item.find({ _id: { $in: idArr } });

    return res.status(200).json({
      item,
      itemList,
    });
  }
});

router.post(
  '/submit',
  [check('title', 'Title is required').not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }
    const { aboveItemId, title, desc, text, pic, video, list, link } = req.body;

    let item = new Item({
      title,
      desc,
      text,
      pic,
      video,
      list,
      link,
    });

    let saved_item = await item.save();
    if (aboveItemId) {
      await Item.findByIdAndUpdate(aboveItemId, {
        $push: {
          list: {
            id: saved_item._id,
            title: saved_item.title,
          },
        },
      });
    }
    res.status(200).json({
      saved_item,
    });
  }
);

module.exports = router;
