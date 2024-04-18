const router = require("express").Router();
const upload = require("../libs/uploadImage");
const CarAdmin = require("../Controllers/carAdminController");

router.get("/", CarAdmin.carPage);
router.get("/create", CarAdmin.createCarPage);
router.post("/admin/create", upload, CarAdmin.createCar);
router.get("/edit/:id", CarAdmin.editCarPage);
router.post("/admin/edit/:id", upload, CarAdmin.editCar);
router.post("/admin/delete/:id", CarAdmin.deleteCar);

module.exports = router;
