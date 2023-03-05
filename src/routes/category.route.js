const categoryController = require("../controllers/category.controller");

const express = require("express");

const router = express.Router();

router.post("/create", categoryController.createCategory);
router.get("/", categoryController.getAllCategory);
router.delete("/:id", categoryController.deleteCategory);
router.put("/:id", categoryController.updateCategory);

module.exports = router;
