const express = require("express");
const router = express.Router();
const { auth } = require("../utils");
const { carController, postController } = require("../controllers");

// middleware that is specific to this router

router.get("/", carController.getCars);
router.get("/:carId", carController.getCar);
router.post("/", auth(), carController.createCar);
router.get("/lates", carController.getLatestsCars);

router.post("/:carId", auth(), postController.createPost);
router.put("/:carId", auth(), carController.subscribe);
router.put("/:carId/posts/:postId", auth(), postController.editPost);
router.delete("/:carId/posts/:postId", auth(), postController.deletePost);

// router.get('/my-trips/:id/reservations', auth(), themeController.getReservations);

module.exports = router;
