/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      name: 'Admin',
      email: 'admin@mail.ru',
      password: 'admin',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Roman',
      email: 'roman@mail.ru',
      password: 'roman',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Valera',
      email: 'valera@mail.ru',
      password: 'valera',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
