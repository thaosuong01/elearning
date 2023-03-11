const { Op } = require("sequelize");
const APIError = require("../middlewares/api-error");
const db = require("../models");

class TopicService {
  async createTopicService(data) {
    const topic = await db.Topic.findOne({
      where: {
        title: data.title,
      },
    });

    if (topic) {
      return Promise.reject(new APIError(400, "Topic already exist!"));
    }

    const response = await db.Topic.create(data);
    return response;
  }

  async getAllTopicService() {
    const topic = await db.Topic.findAll({
      raw: true,
    });

    return topic;
  }

  async updateTopicService(id, data) {
    const topic = await db.Topic.findOne({
      where: {
        title: data.title,
        id: { [Op.ne]: id },
      },
    });
    if (topic) {
      return Promise.reject(new APIError(400, "Topic already exist!"));
    }

    const response = await db.Topic.update(data, {
      where: {
        id: id,
      },
    });

    return response;
  }

  async deleteTopicService(data) {
    const topic = await db.Topic.destroy({
      where: {
        id: data.id,
      },
    });

    if (!topic) return Promise.reject(new APIError(404, "Topic do not exist!"));

    return topic;
  }
}

module.exports = new TopicService();
