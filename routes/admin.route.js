const router = require('express').Router();

const { Country, Tea } = require('../db/models');

const Admin = require('../views/Admin');
const TeaView = require('../views/Tea');

router.get('/', async (req, res) => {
  // const countries = await Country.findAll({ raw: true });
  const teas = await Tea.findAll({
    include: {
      model: Country,
      key: 'country_id',
    },
    raw: true,
  });
  // const comments = await Comment.findAll({ raw: true });

  res.renderComponent(Admin, { teas });
});

router.post('/', async (req, res) => {
  const { name, country, image, description } = req.body;

  try {
    const currentCountry = await Country.findOne({ where: { name: country } });

    if (currentCountry) {
      // const countryAdd = await Country.create({ name: country });
      // res.json({ message: `${countryAdd} добавлена`, bool: true });
      const currentTea = await Tea.findOne({
        where: { name, image, description },
      });

      if (!currentTea) {
        const teaAdd = await Tea.create({
          name,
          image,
          description,
          country_id: currentCountry.id,
        });
        const teas = await Tea.findAll({
          include: {
            model: Country,
            key: 'country_id',
          },
          raw: true,
        });
        // res.json({ bool: true, url: '/admin' });
        res.renderComponent(TeaView, { teaAdd }, { doctype: false });
        // res.redirect('/admin');
      }
      res.json({ message: 'Такой чай уже есть' });
    }
  } catch (e) {
    res.json({ message: e.message });
  }
});

router.delete('/:teaId', async (req, res) => {
  const { teaId } = req.params;
  try {
    const deletedTea = await Tea.destroy({ where: { id: teaId } });
    res.json({ key: deletedTea });
  } catch (e) {
    res.json({ message: e.message });
  }
});

module.exports = router;
