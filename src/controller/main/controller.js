const { User, Todo, Stone, Phrase, sequelize } = require("../../models");
const query = require("./query");

const showMain = async (req, res, next) => {
  const userId = req.decoded.userId;

  try {
    const main = await query.showAll(userId);
    const phrase = await Phrase.findOne({
      order: sequelize.random(),
      attributes: ["name", "word"],
    });
    res.status(200).json({ main, phrase });
  } catch (e) {
    res.status(400).end();
  }
};

module.exports = {
  showMain,
};
