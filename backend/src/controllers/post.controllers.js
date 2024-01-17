const Post = require("../models/post.model");
const asyncHandler = require("express-async-handler");
const uploadOnCloudinary = require("../utils/cloudinary");

const createPost = asyncHandler(async (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    throw new Error("Please enter all the required fields");
  }
  //console.log(req.file);
  const postImagePath = req.file?.path;

  if (!postImagePath) {
    throw new Error("Post Image is required");
  }

  const postImage = await uploadOnCloudinary(postImagePath);
  //console.log(postImage);
  if (!postImage) {
    throw new Error("Post Image is required H");
  }

  const post = await Post.create({
    title,
    description,
    image: postImage?.url || ""
  });

  if (post) {
    res.status(201).json(post);
  } else {
    res.status(400);
    throw new Error("Failed to create Post");
  }
});

const getPost = asyncHandler(async (req, res) => {
  const sort = req.query.sort;
  let page = 1;
  const limit = 3;
  if (req.query.page) {
    page = req.query.page;
  }
  let data = Post.find();

  if (sort) {
    data = data.sort(sort);
  }
  const postData = await data
    .limit(limit * 1)
    .skip((page - 1) * limit)
    .exec();

  if (postData) {
    res.status(200).json(postData);
  } else {
    res.status(400);
    throw new Error("No Post Found");
  }
});

const searchPost = asyncHandler(async (req, res) => {
  const search = req.query.search || "";
  console.log(search);
  const data = await Post.find({
    $or: [
      { title: { $regex: ".*" + search + ".*", $options: "i" } },
      { description: { $regex: ".*" + search + ".*", $options: "i" } }
    ]
  });
  //console.log(data);
  if (data) {
    res.status(200).json(data);
  } else {
    res.status(400);
    throw new Error("No Post Found");
  }
});

module.exports = { createPost, getPost, searchPost };
