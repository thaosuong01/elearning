const db = require("../models");
const APIError = require("../middlewares/api-error");
const { Op } = require("sequelize");

class GroupService {
  constructor() {}

  async createService(data) {
    const nameGroup = await db.Group.findOne({
      where: {
        name: data.name,
      },
    });

    if (nameGroup) {
      return Promise.reject(new APIError(400, "User groups already exist!"));
    }

    const group = await db.Group.create({
      name: data.name,
    });

    return group;
  }

  async getAllGroupService() {
    const groups = await db.Group.findAll({
      raw: true,
    });

    return groups;
  }

  async deleteGroupService(data) {
    const response = await db.Group.destroy({
      where: {
        id: data.id,
      },
    });

    if (!response)
      return Promise.reject(new APIError(404, "User groups do not exist!"));

    return response;
  }

  async updateGroupService(id, data) {
    try {
      const response = await db.Group.findOne({
        where: {
          name: data.name,
          id: { [Op.ne]: id },
        },
      });

      if (response)
        return Promise.reject(new APIError(404, "User groups already exist!"));

      const update = await db.Group.update(
        {
          name: data.name,
        },
        {
          where: {
            id: id,
          },
        }
      );
      return update;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new GroupService();
