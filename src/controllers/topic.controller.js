const APIError = require("../middlewares/api-error");
const topicService = require("../services/topic.service");

class TopicController {
  async createTopic(req, res, next) {
    try {
      const topic = await topicService.createTopicService(req.body);
      res.status(200).json(topic);
    } catch (error) {
      console.log(error);
      next(new APIError(error.status || 500, error.message));
    }
  }

  async getAllTopic(req, res, next) {
    try {
      const response = await topicService.getAllTopicService();
      res.status(200).json(response);
    } catch (error) {
      console.log(error);
      next(new APIError(error.status || 500, error.message));
    }
  }

  async updateTopic(req, res, next) {
    try {
      const response = await topicService.updateTopicService(
        req.params.id,
        req.body
      );
      if (response[0] === 1) {
        return res.status(200).json("Update topic successfully!");
      }

      return res.status(404).json("Topic do not exist!");
    } catch (error) {
      console.log(error);
      next(new APIError(error.status || 500, error.message));
    }
  }

  async deleteTopic(req, res, next) {
    try {
      const response = await topicService.deleteTopicService(req.params);

      if (response) {
        return res.status(200).json("Delete category successfully!");
      }
    } catch (error) {
      console.log(error);
      next(new APIError(error.status || 500, error.message));
    }
  }
}

module.exports = new TopicController();
