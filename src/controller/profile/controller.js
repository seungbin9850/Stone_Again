const { Diary, User, Stone, Encyclopedia } = require("../../models");
const query = require("./query");

const writeDiary = async (req, res, next) => {
  const content = req.body.content;
  const userId = req.decoded.userId;
  try {
    const diary = await Diary.findOne({ where: { userId } });
    if (!diary) await Diary.create({ content, userId });
    diary.content = content;
    await diary.save();
    res.status(200).end();
  } catch (e) {
    res.status(400).send(e.message);
  }
};

const showProfile = async (req, res, next) => {
  const userId = req.decoded.userId;
  try {
    const profile = await query.showProfile(userId);
    res.status(200).json(profile);
  } catch (e) {
    res.status(400).end();
  }
};

const setTime = async (req, res, next) => {
  const time = req.body.time;
  const userId = req.decoded.userId;
  try {
    const user = await User.findOne({ where: { userId } });
    user.time = time;
    await user.save();
    res.status(200).end();
  } catch (e) {
    res.status(400).end();
  }
};

const showStone = async (req, res, next) => {
  const userId = req.decoded.userId;
  try {
    const stone = await Stone.findOne({
      where: { userId },
      attributes: ["level", "exp"],
    });
    const encyclopedia = await Encyclopedia.findAll({
      where: { userId },
      attributes: ["level", "goal", "date"],
    });
    res.status(200).json({ stone, encyclopedia });
  } catch (e) {
    res.status(400).send(e.message);
  }
};

module.exports = {
  writeDiary,
  showProfile,
  setTime,
  showStone,
};
