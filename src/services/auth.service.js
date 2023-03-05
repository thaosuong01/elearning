const db = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const APIError = require("../middlewares/api-error");

class AuthService {
  constructor() {}

  async registerService(data) {
    // find and check if this user already exists
    const user = await db.User.findOne({
      where: {
        username: data.username,
      },
    });

    if (user) {
      return Promise.reject(new APIError(400, "User already exist!"));
    }

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(data.password, salt);

    // create new user
    const newUser = await db.User.create({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      username: data.username,
      password: hashed,
      group_id: data.group_id,
    });

    return newUser;
  }

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

  async getAllUserService() {
    const users = await db.User.findAll({
      raw: true,
    });

    return users;
  }

  async deleteUserService(data) {
    const response = await db.User.destroy({
      where: {
        id: data.id,
      },
    });

    if (!response)
      return Promise.reject(new APIError(404, "User do not exist"));

    return response;
  }

  async updateUserService(id, data) {
    try {
      if (data.username) {
        delete data.username;
      }
      const user = await db.User.update(data, {
        where: { id: id },
      });

      return user;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new AuthService();
