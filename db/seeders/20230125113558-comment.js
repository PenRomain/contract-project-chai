/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Comments', [{
      text: 'Шикарно, вкусно!',
      tea_id: 1,
      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      text: 'Восхитительный чай!',
      tea_id: 2,
      user_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      text: 'Неописуемый вкус!',
      tea_id: 3,
      user_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Comments', null, {});
  },
};
