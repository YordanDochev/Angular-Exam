const express = require("express");
const router = express.Router();
const { auth } = require("../utils");
const { postController } = require("../controllers");

// middleware that is specific to this router

router.get("/:carId",  postController.getPosts);
router.post("/create/:carId", auth(), postController.createPost);

module.exports = router;
