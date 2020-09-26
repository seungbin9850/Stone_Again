const { Goal } = require("../../models");
const { Stone } = require("../../models");

const setGoal = async (req, res, next) => {
  const { todo, deadline } = req.body;
  const userId = req.decoded.userId;
  try {
    await Goal.create({ todo, deadline, userId });
    await Stone.create({ userId });
    res.status(200).end();
  } catch (e) {
    res.status(400).end();
  }
};

module.exports = {
  setGoal,
};
