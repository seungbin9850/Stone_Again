const { Goal, Stone, User } = require("../../models");
const setGoal = async (req, res, next) => {
  const { todo, deadline, time, left } = req.body;
  const userId = req.decoded.userId;
  try {
    await Goal.create({ todo, deadline, userId });
    await Stone.create({ userId, left });
    const user = await User.findOne({ where: { userId } });
    user.time = time;
    await user.save();
    res.status(200).end();
  } catch (e) {
    res.status(400).end();
  }
};

module.exports = {
  setGoal,
};
