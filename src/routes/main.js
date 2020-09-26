const router = require("express")();
const controller = require("../controller/main/controller");
const auth = require("../middlewares/auth");

router.get("/", auth.authMiddleware, controller.showMain);

module.exports = router;
