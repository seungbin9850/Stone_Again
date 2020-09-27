const { Todo, Stone } = require("../../models");

const setTodo = async (req, res, next) => {
  const todoArr = req.body.todo;
  const userId = req.decoded.userId;
  const time = req.decoded.time;
  try {
    for (let todo of todoArr) {
      await Todo.create({ todo, delete: time, userId });
    }
    res.status(200).end();
  } catch (e) {
    res.status(409).end();
  }
};

const successTodo = async (req, res, next) => {
  const userId = req.decoded.userId;
  try {
    const todo = await Todo.findAll({ where: { userId } });
    if (todo.length === 0) throw new Error("투두가 없음");
    await Todo.destroy({ where: { userId } });
    const stone = await Stone.findOne({ where: { userId } });
    stone.exp += Math.floor(500 / stone.left);
    if (stone.exp >= 100) {
      stone.level += stone.exp / 100;
      stone.exp -= (stone.level - 1) * 100;
    }
    await stone.save();
    res.status(200).end();
  } catch (e) {
    res.status(400).end();
  }
};

module.exports = {
  setTodo,
  successTodo,
};
