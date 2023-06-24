const router = require("express").Router();

router.use("/cars", require("./car.routes"));
router.use("/auth", require("./auth.routes"));

module.exports = router;
