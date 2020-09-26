const { Goal, Stone, User } = require("../../models");
const setGoal = async (req, res, next) => {
  const { todo, deadline, hour, minute } = req.body;
  const userId = req.decoded.userId;
  try {
    await Goal.create({ todo, deadline, userId });
    await Stone.create({ userId });
    const user = User.findOne({ userId });
    user.hour = hour;
    user.minute = minute;
    await user.save();
    res.status(200).end();
  } catch (e) {
    res.status(400).end();
  }
};

module.exports = {
  setGoal,
};
