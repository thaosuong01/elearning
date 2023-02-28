const express = require("express");
const authController = require("../controllers/auth.controller");
const router = express.Router();

router.post("/register", authController.resgisterUser);
router.post("/login", authController.login);

module.exports = router;
