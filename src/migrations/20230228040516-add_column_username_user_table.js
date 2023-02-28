"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return Promise.all([
      queryInterface.addColumn(
        "users", // table name
        "username", // new field name
        {
          after: "email",
          type: Sequelize.STRING,
          unique: true,
        }
      ),
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return Promise.all([
      queryInterface.removeColumn(
        "users", // table name
        "username", // new field name
        {
          type: Sequelize.STRING,
          unique: true,
        }
      ),
    ]);
  },
};
