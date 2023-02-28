const bcrypt = require("bcrypt");
const APIError = require("../middlewares/api-error");
const db = require("../models");
const authService = require("../services/auth.service");

class AuthController {
  constructor() {
    // this.authService = new AuthService();
  }

  /**
   *
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} res
   * @returns
   */
  async resgisterUser(req, res, next) {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(req.body.password, salt);

      const newUser = await db.User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        username: req.body.username,
        password: hashed,
        group_id: req.body.group_id,
      });

      return res.status(200).json(newUser);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  login = async (req, res, next) => {
    try {
      const jwtToken = await authService.loginService(req.body);

      return res.status(200).json({
        accessToken: jwtToken,
      });
    } catch (error) {
      next(new APIError(error.statusCode || 500, error.message));
    }
  };
}
module.exports = new AuthController();
