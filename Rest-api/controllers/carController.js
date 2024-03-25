const { carModel } = require("../models");
const { newPost } = require("./postController");

function getCars(req, res, next) {
  carModel
    .find()
    .populate("userId")
    .then((cars) => res.json(cars))
    .catch(next);
}

function getCar(req, res, next) {
  const { carId } = req.params;

  carModel
    .findById(carId)
    .populate({
      path: "posts",
      populate: {
        path: "userId",
      },
    })
    .then((car) => res.json(car))
    .catch(next);
}

function createCar(req, res, next) {
  const {
    postName,
    carBrand,
    fuel,
    price,
    type,
    gearbox,
    year,
    images,
    mileage,
    engineSize,
    power,
    color,
    description,
  } = req.body;
  const { _id: userId } = req.user;

  carModel
    .create({
      postName,
      carBrand,
      fuel,
      price,
      type,
      gearbox,
      year,
      images,
      mileage,
      engineSize,
      power,
      color,
      description,
      subscribers: [userId],
    })
    .then((car) => {
      // newPost(postText, userId, car._id)
      //     .then(([_, updatedTheme]) => res.status(200).json(updatedTheme))
    })
    .catch(next);
}

function subscribe(req, res, next) {
  const themeId = req.params.themeId;
  const { _id: userId } = req.user;
  themeModel
    .findByIdAndUpdate(
      { _id: themeId },
      { $addToSet: { subscribers: userId } },
      { new: true }
    )
    .then((updatedTheme) => {
      res.status(200).json(updatedTheme);
    })
    .catch(next);
}

module.exports = {
  getCars,
  createCar,
  getCar,
  subscribe,
};
