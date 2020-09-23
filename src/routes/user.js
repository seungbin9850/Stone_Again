const router = require("express")();
const controller = require("../controller/user/controller");

router.post("/", controller.register);

module.exports = router;
