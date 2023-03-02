const groupService = require("../services/group.service");

class GroupController {
  async create(req, res, next) {
    try {
      const group = await groupService.createService(req.body);

      return res.status(200).json(group);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new GroupController();
