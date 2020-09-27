const router = require("express")();
const controller = require("../controller/profile/controller");
const auth = require("../middlewares/auth");

router.post("/diary", auth.authMiddleware, controller.writeDiary);

module.exports = router;
