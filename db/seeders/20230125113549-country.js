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
    },
    {
      name: 'Japan',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Vietnam',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Taiwan',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Australia',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Kenia',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Azorskie Ostrova',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Ekvador',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Peru',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Brazilia',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Argentina',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Kamerun',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Turkey',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Uganda',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Ruanda',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Burundi',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Milavi',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Zimbabve',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Uznaya Afrika',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Mozambik',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Tanzania',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Madagaskar',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Mavrikii',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Post Sssr',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Shri-Lanka',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Nepal',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Malazia',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Bangladesh',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Indonezia',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Countries', null, {});
  },
};
