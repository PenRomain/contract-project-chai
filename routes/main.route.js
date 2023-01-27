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
    .then((teaCountry) => res.renderComponent(Main, { title: 'Карта чая', teaContry: teaCountry }))
    .catch(() => res.status(500).json({ message: 'что-то пошло не так' }));
});

// router.get('/:country', async (req, res) => {
//   const country =
//     req.params.country[0].toUpperCase() + req.params.country.substring(1);
//   try {
//     const [teaCountry] = await Country.findAll({
//       where: {
//         name: country,
//       },
//       includes: Tea,
//     });
//     const comments = await Comment.findAll();

 const countryId = teaCountry.id;
    
    const teas = await Tea.findAll({
      where: {
        country_id: countryId,
      },
      include: Comment,
    });
   
   
//     res.renderComponent(CountryView, {
//       comments,
//       title: 'титле',
//       teaCountry,
//     });
//   } catch (e) {
//     console.log(e.message);
//     res.json({ message: 'OSHIBKA TYT' });
//     res.status(500).json({ message: 'Что-то пошло не так' });
//   }
// });





module.exports = router;
