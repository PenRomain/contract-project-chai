const router = require('express').Router();
const Main = require('../views/Main');

const { Country } = require('../db/models');
const { Tea } = require('../db/models');

router.get('/', (req, res) => {
  res.renderComponent(Main, { title: 'Карта чая' });
});

router.get('/:country', async (req, res) => {
  try {
    const country = req.params.country[0].toUpperCase() + req.params.country.substring(1);
    const teaCountry = await Country.findAll({ where: { name: country }, include: Tea });
    res.json(teaCountry); // res.renderComponent(View, {teaCountry})
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так' });
  }
});

module.exports = router;
