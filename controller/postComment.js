const Blog = require("../models/blog");
const Comment = require("../models/comment");

postComment = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  if (!body.author || !body.text) {
    return res.status(400).json({ success: false, error: "You must provide a comment." });
  }
  if (!Number(id)) {
    return res.status(500).json({
      success: false,
      error: "The blog id should be a number.",
    });
  }
  const { author, text } = req.body;

  const newComment = await Comment.create({ author, text, blogId: id });
  await Blog.findOneAndUpdate({ id }, { $push: { comments: newComment } }, { new: true })
    .then((doc) => {
      return res.status(201).json({
        success: true,
        data: doc,
        message: "Comment created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "Comment not created!",
      });
    });
};

module.exports = { postComment };
