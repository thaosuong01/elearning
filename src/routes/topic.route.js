const express = require("express");
const topicController = require("../controllers/topic.controller");

const router = express.Router();

router.post("/create", topicController.createTopic);
router.get("/", topicController.getAllTopic);
router.put("/:id", topicController.updateTopic);
router.delete("/:id", topicController.deleteTopic);

module.exports = router;
