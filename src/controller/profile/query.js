const { User, Goal, Diary, Check } = require("../../models");

const showProfile = async (userId) => {
  try {
    const profile = await User.findOne({
      include: [
        {
          model: Goal,
          attributes: ["todo", "deadline"],
        },
        {
          model: Diary,
          attributes: ["content"],
        },
        {
          model: Check,
          attributes: ["check"],
          order: [["createdAt", "DESC"]],
          limit: 7,
        },
      ],
      where: { userId },
      attributes: ["name", "time"],
    });
    return profile;
  } catch (e) {
    throw e;
  }
};

module.exports = {
  showProfile,
};
