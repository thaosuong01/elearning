const express = require("express");
const courseController = require("../controllers/course.controller");
const { isAuthentication } = require("../middlewares/auth.middleware");

const router = express.Router();

router.post("/create", [isAuthentication], courseController.createCourse)
router.post("/enrol", [isAuthentication], courseController.enrolCourse)

module.exports = router;
