const { Op } = require("sequelize");
const APIError = require("../middlewares/api-error");
const db = require("../models");

class CategoryService {
  async createCategoryService(data) {
    const category = await db.categories.findOne({
      where: {
        name: data.name,
      },
    });

    if (category)
      return Promise.reject(new APIError(400, "Category already exist!"));

    const response = await db.categories.create(data);

    return response;
  }

  async getAllCategoryService() {
    const category = await db.categories.findAll({
      raw: true,
    });

    return category;
  }

  async deleteCategoryService(data) {
    const category = await db.categories.destroy({
      where: {
        id: data.id,
      },
    });

    if (!category)
      return Promise.reject(new APIError(404, "Category do not exist!"));

    return category;
  }

  async updateCategoryService(id, data) {
    const category = await db.categories.findOne({
      where: {
        name: data.name,
        id: { [Op.ne]: id },
      },
    });

    if (category)
      return Promise.reject(new APIError(400, "Category already exist!"));

    const response = await db.categories.update(data, {
      where: {
        id: id,
      },
    });

    return response;
  }
}

module.exports = new CategoryService();
