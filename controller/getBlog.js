const Blog = require("../models/blog");

getBlog = async (req, res) => {
  const { id } = req.params;
  if (!Number(id)) {
    // This is an example of good error handling.
    // This prevents against passing params that aren't
    // a number. For example: /api/blog/blah
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
      data: blog,
    });
  }).catch((err) => console.log(err));
};

module.exports = { getBlog };
