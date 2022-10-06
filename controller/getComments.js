const Blog = require("../models/blog");

getComments = async (req, res) => {
  const { id } = req.params;
  if (!Number(id)) {
    return res.status(500).json({
      success: false,
      error: "The blog id should be a number.",
    });
  }
  await Blog.findOne({ id }, (err, blog) => {
    if (err) {
      return res.status(400).json({
        success: false,
        error: err,
      });
    }
    if (!blog) {
      return res.status(404).json({
        success: false,
        error: `Blog not found`,
      });
    }
    return res.status(200).json({
      success: true,
      data: blog.comments,
    });
  }).catch((err) => console.log(err));
};

module.exports = { getComments };
