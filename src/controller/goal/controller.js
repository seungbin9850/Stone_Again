const { Goal, Stone, User, Encyclopedia, Todo } = require("../../models");

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

const successGoal = async (req, res, next) => {
  const today = req.body.today;
  const userId = req.decoded.userId;
  try {
    const stone = await Stone.findOne({ where: { userId } });
    if (!stone) res.status(202).end();
    const goal = await Goal.findOne({ where: { userId } });
    if (goal.deadline < today) {
      await goal.destroy();
      await stone.destroy();
      await Todo.destroy({ where: { userId } });
      res.status(201).end();
    }
    await Encyclopedia.create({
      userId,
      level: stone.level,
      goal: goal.todo,
      date: today,
    });
    await goal.destroy();
    await stone.destroy();
    await Todo.destroy({ where: { userId } });
    res.status(200).end();
  } catch (e) {
    res.status(400).end();
  }
};

module.exports = {
  setGoal,
  successGoal,
};
