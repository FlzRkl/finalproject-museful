const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    required: true,
  },
  aboveItemId: {
    type: String,
  },
  desc: {
    type: String,
  },
  list: {
    type: Array,
  },
  text: {
    type: Array,
  },
  video: {
    type: Array,
  },
  book: {
    type: Array,
  },
  pic: {
    type: Array,
  },
  link: {
    type: Array,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Item = mongoose.model('item', ItemSchema);
