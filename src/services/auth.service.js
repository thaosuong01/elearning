const db = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const APIError = require("../middlewares/api-error");

class AuthService {
  constructor() {}

  async loginService(data) {
    const user = await db.User.findOne({
      where: {
        username: data.username,
      },
    });

    if (!user) {
      return Promise.reject(new APIError(404, "User not found!"));
    }

    const isValidPassword = await bcrypt.compare(data.password, user.password);

    if (!isValidPassword) {
      return Promise.reject(new APIError(400, "Password not match!"));
    }

    const { password, ...userNew } = user;

    const jwtToken = jwt.sign({ ...userNew }, process.env.SECRET_JWT, {
      expiresIn: 3600 * 1,
    });

    return jwtToken;
  }
}

module.exports = new AuthService();
