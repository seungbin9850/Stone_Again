const { User } = require("../../models/");
const jwt = require("jsonwebtoken");
const query = require("./query");

const register = async (req, res, next) => {
  const { userId, password, name } = req.body;
  try {
    const encodedPassword = await query.passwordEncoding(password);
    await User.create({ userId, password: encodedPassword, name });
    res.status(200).end();
  } catch (e) {
    res.status(409).end();
  }
};

module.exports = {
  register,
};
