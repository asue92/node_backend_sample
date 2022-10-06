const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Comment = new Schema({
  author: { type: String, required: true },
  text: { type: String, required: true },
  blog: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "blog",
  },
});

module.exports = mongoose.model("comment", Comment);
