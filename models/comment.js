const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Comment = new Schema({
  author: { type: String, required: true },
  text: { type: String, required: true },
  blogId: { type: String, required: true },
});

module.exports = mongoose.model("comment", Comment);
