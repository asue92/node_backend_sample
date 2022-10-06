const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Comment = new Schema({
  author: { type: String, required: true },
  text: { type: String, required: true },
  date: Date,
  blog: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Blog",
  },
});

module.exports = mongoose.model("comment", Comment);
