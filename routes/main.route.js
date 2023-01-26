const router = require('express').Router();
const Main = require('../views/Main');

router.get('/', (req, res) => {
  // const user = res.app.locals;
  // console.log(user);
  res.renderComponent(Main, { title: 'Карта чая' });
});

module.exports = router;
