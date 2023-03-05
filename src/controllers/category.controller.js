const APIError = require("../middlewares/api-error");
const categoryService = require("../services/category.service");

class CategoryController {
  async createCategory(req, res, next) {
    try {
      const response = await categoryService.createCategoryService(req.body);

      return res.status(200).json(response);
    } catch (error) {
      next(new APIError(error.status || 500, error.message));
    }
  }

  async getAllCategory(req, res, next) {
    try {
      const response = await categoryService.getAllCategoryService();

      return res.status(200).json(response);
    } catch (error) {
      next(new APIError(error.status || 500, error.message));
    }
  }

  async deleteCategory(req, res, next) {
    try {
      const response = await categoryService.deleteCategoryService(req.params);

      if (response) {
        return res.status(200).json("Delete category successfully!");
      }
    } catch (error) {
      next(error);
    }
  }

  async updateCategory(req, res, next) {
    try {
      const response = await categoryService.updateCategoryService(
        req.params.id,
        req.body
      );

      if (response[0] == 1) {
        return res.status(200).json("Update category successfully!");
      }

      return res.status(400).json("Category do not exist!");
    } catch (error) {
      next(error);
    }
  }

  
}

module.exports = new CategoryController();
