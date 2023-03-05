const express = require("express");
const groupController = require("../controllers/group.controller");
const router = express.Router();

router.post("/create", groupController.create);
router.get("/", groupController.getAllGroup);
router.delete("/:id", groupController.deleteGroup);
router.put("/:id", groupController.updateGroup);

module.exports = router;
