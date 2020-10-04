const router = require("express")();
const controller = require("../controller/profile/controller");
const auth = require("../middlewares/auth");

router.post("/diary", auth.authMiddleware, controller.writeDiary);
router.get("/", auth.authMiddleware, controller.showProfile);
router.put("/time", auth.authMiddleware, controller.setTime);
router.get("/stone", auth.authMiddleware, controller.showStone);

module.exports = router;
