/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Countries', [{
      name: 'India',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'China',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Thailand',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Countries', null, {});
  },
};
