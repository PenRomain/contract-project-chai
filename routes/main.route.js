const router = require('express').Router();

const Main = require('../views/Main');
const CountryView = require('../views/CountryView');

const { Comment, Country, Tea } = require('../db/models');

router.get('/', async (req, res) => {
  // const user = res.app.locals;
  // console.log(user);
  const allCountry = await Country.findAll({ include: Tea });

  const teaCountry = allCountry.map((country) => ({
    name: country.name,
    teas: country.Teas.map((tea) => tea.name).join('\n'),
  }));
  console.log(teaCountry);
  res.renderComponent(Main, { title: 'Карта чая', teaCountry });

  //  res.renderComponent(Main, { title: 'Карта чая' })
});

router.get('/:country', async (req, res) => {
  const country =
    req.params.country[0].toUpperCase() + req.params.country.substring(1);
  try {
    const [teaCountry] = await Country.findAll({
      where: {
        name: country,
      },
      include: Tea,
    });
    const comments = await Comment.findAll();

    const countryId = teaCountry.id;

    const teas = await Tea.findAll({
      where: {
        country_id: countryId,
      },
      include: Comment,
    });

    res.renderComponent(CountryView, {
      teas,
      title: 'титле',
      teaCountry,
    });
  } catch (e) {
    console.log(e.message);
    res.json({ message: 'OSHIBKA TYT' });
    res.status(500).json({ message: 'Что-то пошло не так' });
  }
});

module.exports = router;
