const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Blog = new Schema({
  id: { type: String, required: true },
  author: { type: String, required: true },
  title: { type: String, required: true },
  body: { type: String, required: true },
  comments: { type: Array },
});

module.exports = mongoose.model("blog", Blog);
