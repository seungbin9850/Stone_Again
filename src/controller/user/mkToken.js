const jwt = require("jsonwebtoken");

const mkAccess = async (req, user) => {
  const secret = req.app.get("jwt-secret");
  const token = await jwt.sign(
    {
      userId: user.userId,
      name: user.name,
      hour: user.hour,
      minute: user.minute,
    },
    secret,
    {
      expiresIn: "10m",
    }
  );
  return token;
};

const mkRefresh = async (req, user) => {
  const secret = req.app.get("refresh-secret");
  const token = await jwt.sign(
    {
      userId: user.userId,
      name: user.name,
      hour: user.hour,
      minute: user.minute,
    },
    secret,
    {
      expiresIn: "1w",
    }
  );
  return token;
};

module.exports = {
  mkAccess,
  mkRefresh,
};
