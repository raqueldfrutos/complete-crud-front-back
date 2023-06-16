const router = require("express").Router();

router.use("/cars", require('./car.routes'))

module.exports = router;
