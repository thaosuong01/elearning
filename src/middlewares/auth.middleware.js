const jwt = require("jsonwebtoken");
const db = require("../models");

const isAuthentication = (req, res, next) => {
  try {
    const bearerHeader = req.headers["authorization"];
    const access_token = bearerHeader.split(" ")[1];
    const decodeJwt = jwt.verify(
      access_token,
      process.env.SECRET_JWT
    ).dataValues;
    req.userId = decodeJwt.id; //gán id cho req sau
    next();
  } catch (e) {
    if (e instanceof jwt.TokenExpiredError) {
      return res.status(401).send("Expired tokens.");
    }

    return res.status(401).send("Invalid authentication!");
  }
};

const isAdmin = async (req, res, next) => {
  try {
    const userId = req.userId;
    const user = await db.User.findByPk(userId);
    if (+user?.group_id == 1) {
      next();
    } else {
      return res.status(401).send("Non-admin authentication!");
    }
  } catch (e) {
    return res.status(401).send("Invalid authentication!");
  }
};

module.exports = { isAuthentication, isAdmin };
