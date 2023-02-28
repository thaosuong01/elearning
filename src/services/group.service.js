const db = require("../models");

class GroupService {
  async createGroup(req, res) {
    const name = await db.Group.create({
      where: {
        name: req.body.name,
      },
    });

    if (name) {
      return res.status(400).json("Name group is exist.");
    }

    return name;
  }
}

module.exports = GroupService;
