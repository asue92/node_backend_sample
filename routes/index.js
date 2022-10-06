const express = require("express");
const { getBlogs } = require("../controller/getBlogs");
const { postBlog } = require("../controller/postBlog");
const { getBlog } = require("../controller/getBlog");
const { postComment } = require("../controller/postComment");
const { getComments } = require("../controller/getComments");

const router = express.Router();

router.get("/blog/:id", getBlog);
router.get("/blog/post/:id/comment", getComments);
router.get("/blogs", getBlogs);
router.post("/blog/post", postBlog);
router.post("/blog/post/:id/comment", postComment);

module.exports = router;
