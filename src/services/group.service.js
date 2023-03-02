const db = require("../models");
const APIError = require("../middlewares/api-error");

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
}

module.exports = new GroupService();
