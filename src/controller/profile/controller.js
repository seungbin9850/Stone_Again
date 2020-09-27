const { Diary } = require("../../models");

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
    res.status(400).end();
  }
};

module.exports = {
  writeDiary,
};
