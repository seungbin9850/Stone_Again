const router = require("express")();
const controller = require("../controller/user/controller");
const auth = require("../middlewares/auth");

router.post("/", controller.register);
router.post("/login", controller.login);
router.get("/refresh", auth.refreshMiddleware, controller.refresh);

module.exports = router;
