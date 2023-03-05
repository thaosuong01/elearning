const APIError = require("../middlewares/api-error");
const authService = require("../services/auth.service");

class AuthController {
  constructor() {}

  async resgisterUser(req, res, next) {
    try {
      const newUser = await authService.registerService(req.body);

      return res.status(200).json(newUser);
    } catch (error) {
      next(new APIError(error.status || 500, error.message));
    }
  }

  async login(req, res, next) {
    try {
      const jwtToken = await authService.loginService(req.body);

      return res.status(200).json({
        accessToken: jwtToken,
      });
    } catch (error) {
      next(new APIError(error.status || 500, error.message));
    }
  }

  async getAllUser(req, res, next) {
    try {
      const users = await authService.getAllUserService();
      return res.status(200).json(users);
    } catch (error) {
      next(new APIError(error.status || 500, error.message));
    }
  }

  async deleteUser(req, res, next) {
    try {
      const response = await authService.deleteUserService(req.params);

      if (response) {
        return res.status(200).json("Delete user successfully!");
      }
    } catch (error) {
      next(new APIError(error.status || 500, error.message));
    }
  }

  async updateUser(req, res, next) {
    try {
      const response = await authService.updateUserService(
        req.params.id,
        req.body
      );

      if (response[0] == 1) {
        return res.status(200).json("Update user successfully!");
      }

      return res.status(400).json("User do not exist!");
    } catch (error) {
      next(new APIError(error.status || 500, error.message));
    }
  }
}
module.exports = new AuthController();
