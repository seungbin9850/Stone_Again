const { Todo } = require("../../models");

const setTodo = async (req, res, next) => {
  const todoArr = req.body.todo;
  const userId = req.decoded.userId;
  const time = req.decoded.time;
  try {
    const todo = await Todo.findAll({ userId });
    if (todo.length) throw new Error("이미 투두를 작성함");
    for (let item of todoArr) {
      console.log(item);
      await Todo.create({ todo: item, delete: time, userId });
    }
    res.status(200).end();
  } catch (e) {
    res.status(409).end();
  }
};

module.exports = {
  setTodo,
};
