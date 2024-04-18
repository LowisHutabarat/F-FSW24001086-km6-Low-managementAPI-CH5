const router = require("express").Router();

const Car = require("../Controllers/carController");

router.post("/", Car.createCar);

module.exports = router;