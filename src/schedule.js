const schedule = require("node-schedule");
const { Todo, Diary } = require("./models");

const interval = schedule.scheduleJob("0 0 0 * * *", async () => {
  try {
    await Todo.destroy({ where: {}, truncate: true });
    await Diary.destroy({ where: {}, truncate: true });
  } catch (e) {
    console.log(e.message);
  }
});

module.exports = {
  interval,
};
