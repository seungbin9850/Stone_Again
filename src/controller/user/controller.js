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
    if (!user) throw new Error("존재하지 않는 유저");
    if (!(await query.passwordCompare(password, user.password)))
      res.status(409).end();
    const accessToken = await mkToken.mkAccess(req, user);
    const refreshToken = await mkToken.mkRefresh(req, user);
    if (user.first) {
      user.first = false;
      await user.save();
      res.status(201).json({ accessToken, refreshToken });
    }
    res.status(200).json({ accessToken, refreshToken });
  } catch (e) {
    res.status(404).end();
  }
};

const refresh = async (req, res, next) => {
  const user = await query.findOneByUserId(req.decoded.userId);
  const accessToken = await mkToken.mkAccess(req, user);
  res.status(200).json({ accessToken });
};

module.exports = {
  register,
  login,
  refresh,
};
