const router = require("express")();
const user = require("./user");
const goal = require("./goal");
const main = require("./main");

router.use("/user", user);
router.use("/goal", goal);
router.use("/main", main);

module.exports = router;
