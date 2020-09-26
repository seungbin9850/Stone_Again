const { User } = require("../../models");
const bcrypt = require("bcrypt-nodejs");

const passwordEncoding = async (password) => {
  return await bcrypt.hashSync(password);
};

const findOneByUserId = async (userId) => {
  try {
    const user = await User.findOne({ where: { userId } });
    return user;
  } catch (e) {
    throw e;
  }
};

const passwordCompare = async (password, encoded) => {
  return await bcrypt.compareSync(password, encoded);
};

module.exports = {
  passwordEncoding,
  findOneByUserId,
  passwordCompare,
};
