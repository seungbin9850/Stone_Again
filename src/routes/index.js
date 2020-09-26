const router = require("express")();
const user = require("./user");
const goal = require("./goal");

router.use("/user", user);
router.use("/goal", goal);

module.exports = router;
