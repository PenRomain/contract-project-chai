/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Teas', [{
      name: 'Принцесса Нури',
      image: 'https://gipermix.ru/upload/iblock/c10/c10564790265616ed0cc190dd57962b5.jpg',
      description: 'Великолепный, вкусный чай!',
      country_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Ассам',
      image: 'https://avatars.mds.yandex.net/get-mpic/5209712/img_id1220860871838156647.jpeg/orig',
      description: 'Неумирающая классика',
      country_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Азерчай',
      image: 'https://mosbasa.ru/upload/iblock/7d6/7d649e436d1388e0f244d3f4c6fa7afe.jpg',
      description: 'Байховый с бергамотом!',
      country_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Teas', null, {});
  },
};
