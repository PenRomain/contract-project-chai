const router = require('express').Router();
const Main = require('../views/Main');
const CountryView = require('../views/CountryView');
const Admin = require('../views/Admin');

const { Comment, Country, Tea } = require('../db/models');

router.get('/', async (req, res) => {
  const { comments } = await Comment.findAll({
    where: {
      user_id: req.session.user.id,
    },
  });
  res.renderComponent(Admin, { comments });
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
