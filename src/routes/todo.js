const router = require("express")();
const controller = require("../controller/todo/controller");
const auth = require("../middlewares/auth");

router.post("/", auth.authMiddleware, controller.setTodo);

module.exports = router;
