const router = require("express")();
const controller = require("../controller/user/controller");

router.post("/", controller.register);
router.post("/login", controller.login);

module.exports = router;
