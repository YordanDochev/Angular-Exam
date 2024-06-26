const express = require("express");
const router = express.Router();
const { auth } = require("../utils");
const { carController, postController } = require("../controllers");

// middleware that is specific to this router

router.get("/", carController.getCars);
router.get("/lates", carController.getLatestsCars);
router.get("/:carId", carController.getCar);
router.post("/search", carController.searchCars);
router.post("/", auth(), carController.createCar);
router.put("/edit/:carId", auth(), carController.editCar);
router.put("/subscribe", auth(), carController.subscribe);
router.put("/unsubscribe", auth(), carController.unsubscribe);
router.delete("/delete/:carId", auth(), carController.deleteCar);

// router.post("/:carId", auth(), postController.createPost);
// router.put("/:carId/posts/:postId", auth(), postController.editPost);
// router.delete("/:carId/posts/:postId", auth(), postController.deletePost);

// router.get('/my-trips/:id/reservations', auth(), themeController.getReservations);

module.exports = router;
