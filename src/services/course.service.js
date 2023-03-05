const APIError = require("../middlewares/api-error");
const bcrypt = require("bcrypt");
const db = require("../models");

class CourseService {
  async createCourseService(data) {
    const course = await db.Courses.findOne({
      where: {
        name: data.name,
      },
    });

    if (course)
      return Promise.reject(new APIError(400, "Course already exist!"));

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(data.password, salt);

    const response = await db.Courses.create({
      name: data.name,
      password: hashed,
    });

    return response;
  }

  async enrolCourseService(user_id, data) {

    const course = await db.Courses.findOne({
        where: {
            id: data.course_id
        }
    })

    const isValidPassword = await bcrypt.compare(data.password, course.password);

    if (!isValidPassword) {
      return Promise.reject(new APIError(400, "Password not match!"));
    }

    const response = await db.User_courses.create({
      user_id: user_id,
      course_id: data.course_id,
      enrol: true,
    });

    return response;
  }

  
}

module.exports = new CourseService();
