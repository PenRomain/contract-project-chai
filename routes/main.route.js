const router = require('express').Router();
const Main = require('../views/Main');
const CountryView = require('../views/CountryView');

const { Comment, Country, Tea } = require('../db/models');

router.get('/', (req, res) => {
  // const user = res.app.locals;
  // console.log(user);
  res.renderComponent(Main, { title: 'Карта чая' });
});

router.get('/:country', async (req, res) => {
  try {
    const country =
      req.params.country[0].toUpperCase() + req.params.country.substring(1);
    const [teaCountry] = await Country.findAll({
      where: {
        name: country,
      },
      include: Tea,
    });
    const comments = await Comment.findAll();
    // res.json(teaCountry);
    console.log(teaCountry);
    res.renderComponent(CountryView, {
      comments,
      title: 'титле',
      teaCountry,
    });
  } catch (e) {
    res.json({ message: 'OSHIBKA TYT' });
    res.status(500).json({ message: 'Что-то пошло не так' });
  }
});

module.exports = router;
