const router = require("express")();
const controller = require("../controller/goal/controller");
const auth = require("../middlewares/auth");

router.post("/", auth.authMiddleware, controller.setGoal);

module.exports = router;
