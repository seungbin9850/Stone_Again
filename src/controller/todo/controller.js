const { Todo, Stone, Check } = require("../../models");

const setTodo = async (req, res, next) => {
  const todoArr = req.body.todo;
  const userId = req.decoded.userId;
  const time = req.decoded.time;
  try {
    const todo = await Todo.findAll({ where: { userId } });
    if (todo) throw new Error("이미 투두가 있음");
    for (let todo of todoArr) {
      await Todo.create({ todo, delete: time, userId });
    }
    await Check.create({ userId });
    res.status(200).end();
  } catch (e) {
    res.status(409).end();
  }
};

const successTodo = async (req, res, next) => {
  const userId = req.decoded.userId;
  const userTime = req.decoded.time;
  const time = req.body.time;
  try {
    const todo = await Todo.findOne({ where: { userId } });
    if (userTime < time) {
      res.status(201).end();
    }
    if (!todo) throw new Error("투두가 없음");
    const check = await Check.findOne({
      where: { userId },
      order: [["createdAt", "DESC"]],
    });
    console.log(check);
    check.check = true;
    await check.save();
    const stone = await Stone.findOne({ where: { userId } });
    stone.exp += Math.floor(500 / stone.left);
    if (stone.exp >= 100) {
      stone.level += stone.exp / 100;
      stone.exp -= (stone.level - 1) * 100;
    }
    await stone.save();
    res.status(200).end();
  } catch (e) {
    res.status(400).send(e.message);
  }
};

module.exports = {
  setTodo,
  successTodo,
};
