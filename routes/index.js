const router = require("express").Router();

const Car = require("./carRouter");
const CarAdmin = require("./carAdminRouter");

router.use("/api/v1/cars", Car);
router.use("/cars", CarAdmin);


router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

module.exports = router;