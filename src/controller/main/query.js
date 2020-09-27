const { User, Todo, Stone, Phrase } = require("../../models");

const showAll = async (userId, time) => {
  try {
    const main = await User.findOne({
      include: [
        {
          model: Todo,
          attributes: ["todo"],
        },
        {
          model: Stone,
          attributes: ["id", "level", "exp"],
        },
      ],
      where: { userId },
      attributes: ["name", "time"],
    });
    return main;
  } catch (e) {
    throw e;
  }
};

module.exports = {
  showAll,
};
