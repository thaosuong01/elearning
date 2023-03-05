const express = require("express");
const authController = require("../controllers/auth.controller");

const router = express.Router();

router.post("/register", authController.resgisterUser);
router.post("/login", authController.login);
router.get("/", authController.getAllUser);
router.delete("/:id", authController.deleteUser);
router.put("/:id", authController.updateUser);

module.exports = router;
