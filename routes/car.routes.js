const router = require("express").Router()
const Car = require("../models/Car.model")
const carController = require("../controllers/car.controller");

router.get("/", carController.list)

router.get("/:id", carController.detail)

router.post("/", carController.create)

router.put("/:id", carController.update)

router.delete("/:id", carController.delete)

module.exports = router;