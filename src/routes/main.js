const router = require("express")();
const controller = require("../controller/main/controller");
const auth = require("../middlewares/auth");

router.get("/:time", auth.authMiddleware, controller.showMain);

module.exports = router;
