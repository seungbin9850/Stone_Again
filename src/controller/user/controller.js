const { User } = require("../../models/");
const query = require("./query");
const mkToken = require("./mkToken");

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

const login = async (req, res, next) => {
  const { userId, password } = req.body;
  try {
    const user = await query.findOneByUserId(userId);
    if (!(await query.passwordCompare(password, user.password)))
      throw new Error("존재하지 않는 유저");
    const accessToken = await mkToken.mkAccess(req, user);
    const refreshToken = await mkToken.mkRefresh(req, user);
    res.status(200).json({ accessToken, refreshToken }).end();
  } catch (e) {
    res.status(404).end();
  }
};

module.exports = {
  register,
  login,
};
