const APIError = require("../middlewares/api-error");
const GroupService = require("../services/group.service");

class GroupController {
  // constructor(GroupService) {
  //   this.groupService = new GroupService();
  // }

  create = async (req, res, next) => {
    try {
      // const group = await this.groupService.create(req.body)
      return res.status(200).json(req.body);
    } catch (error) {
      next(new APIError(error.statusCode || 500, error.message));
    }
  };
}

module.exports = new GroupController();
