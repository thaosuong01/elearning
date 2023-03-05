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

  async getAllGroup(req, res, next) {
    try {
      const groups = await groupService.getAllGroupService();

      return res.status(200).json(groups);
    } catch (error) {
      next(error);
    }
  }

  async deleteGroup(req, res, next) {
    try {
      const response = await groupService.deleteGroupService(req.params);

      if (response) {
        return res.status(200).json("Delete user group successfully!");
      }
    } catch (error) {
      next(error);
    }
  }

  async updateGroup(req, res, next) {
    try {
      const response = await groupService.updateGroupService(
        req.params.id,
        req.body
      );

      if (response[0] == 1) {
        return res.status(200).json("Update user group successfully!");
      }

      return res.status(400).json("User group do not exist!");
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

module.exports = new GroupController();
