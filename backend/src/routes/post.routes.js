const { Router } = require("express");
const multer = require("multer");
const {
  createPost,
  getPost,
  searchPost
} = require("../controllers/post.controllers");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage });

const router = Router();

router.route("/createPost").post(upload.single("postImage"), createPost);
router.route("/getPost").post(getPost);
router.route("/searchPost").post(searchPost);

module.exports = router;
