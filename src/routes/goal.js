const router = require("express")();
const controller = require("../controller/goal/controller");
const auth = require("../middlewares/auth");

router.post("/", auth.authMiddleware, controller.setGoal);
router.post("/success", auth.authMiddleware, controller.successGoal);

module.exports = router;
