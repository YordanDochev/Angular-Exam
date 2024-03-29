const { carModel, userModel } = require("../models");

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
    .populate("userId")
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
      userId,
      subscribers: [userId],
    })
    .then((car) => {
      return Promise.all([
        userModel.updateOne({ _id: userId }, { $addToSet: { cars: car._id } }),
      ]);
    })
    .then((car) => {
      res.status(200).json(car);
    })
    .catch(next);
}

function getLatestsCars(req, res, next) {
  carModel
    .find()
    .sort({ created_at: -1 })
    .limit(3)
    .populate("userId")
    .then((cars) => {
      res.status(200).json(cars);
    })
    .catch(next);
}

function editCar(req, res, next) {
  const { carId } = req.params;
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

  // if the userId is not the same as this one of the post, the post will not be updated
  carModel
    .findOneAndUpdate(
      { _id: carId, userId },
      {
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
      },
      { new: true }
    )
    .then((updatedPost) => {
      if (updatedPost) {
        res.status(200).json(updatedPost);
      } else {
        res.status(401).json({ message: `Not allowed!` });
      }
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
  getLatestsCars,
  editCar,
};
