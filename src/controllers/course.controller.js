const courseService = require("../services/course.service");

class CourseController {
  async createCourse(req, res, next) {
    try {
      const response = await courseService.createCourseService(req.body);

      return res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }

  async enrolCourse(req, res, next) {
    try {
      const response = await courseService.enrolCourseService(
        req.userId,
        req.body
      );

      return res.status(200).json(response);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

module.exports = new CourseController();
