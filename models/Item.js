const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
  },
  text: {
    type: Array,
  },
  pic: {
    type: Array,
  },
  video: {
    type: Array,
  },
  list: {
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
