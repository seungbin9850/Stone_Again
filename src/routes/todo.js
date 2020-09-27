const router = require("express")();
const controller = require("../controller/todo/controller");
const auth = require("../middlewares/auth");

router.post("/", auth.authMiddleware, controller.setTodo);
router.post("/success", auth.authMiddleware, controller.successTodo);

module.exports = router;
