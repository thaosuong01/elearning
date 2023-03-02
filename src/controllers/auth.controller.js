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
}
module.exports = new AuthController();
