const router = require('express').Router();
const { logger } = require('sequelize/lib/utils/logger');
const Main = require('../views/Main');
const CountryView = require('../views/CountryView');

const { Comment, Country, Tea } = require('../db/models');

router.get('/', async (req, res) => {
  // const user = res.app.locals;
  // console.log(user);
  Country.findAll({ include: Tea })
    .then((allCountry) => allCountry.map((country) => ({
      name: country.name,
      teas: country.Teas.map((tea) => tea.name).join('\n'),
    })))
    .then((teaCountry) => res.renderComponent(Main, { title: 'Карта чая', teaContry: teaCountry }));
});

router.get('/:country', async (req, res) => {
  try {
    const country = req.params.country[0].toUpperCase() + req.params.country.substring(1);
    // console.log('country==', country);
    const [teaCountry] = await Country.findAll({
      where: {
        name: country,
      },
      include: Tea,
    });
    // console.log('teaCountry==', teaCountry);
    const countryId = teaCountry.id;
    // console.log('countryId==', countryId);
    const teas = await Tea.findAll({
      where: {
        country_id: countryId,
      },
      include: Comment,
    });
    // console.log('teas==', teas);
    // const comments = await Comment.findAll({
    //   include: teas,
    // });
    // console.log('comments==', comments);
    // res.json(teaCountry);
    // console.log(teaCountry);
    res.renderComponent(CountryView, {
      teas,
      title: 'титле',
      teaCountry,
    });
  } catch (e) {
    res.json({ message: 'OSHIBKA TYT' });
    res.status(500).json({ message: 'Что-то пошло не так' });
  }
});

module.exports = router;
