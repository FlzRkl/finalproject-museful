const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//SCHEMA
const UserSchema = new Schema({
  // user: {
  //   type: Schema.Types.ObjectId,
  // },
  name: {
    type: String,
    required: true,
  },
  // progress: {
  //   //SCORE?
  //   type: Number,
  //   required: true,
  // },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = User = mongoose.model("user", UserSchema);
