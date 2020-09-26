const router = require("express")();
const user = require("./user");
const goal = require("./goal");
const main = require("./main");
const todo = require("./todo");

router.use("/user", user);
router.use("/goal", goal);
router.use("/main", main);
router.use("/todo", todo);

module.exports = router;
