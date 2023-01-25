const router = require('express').Router();
const Main = require('../views/Main');

router.get('/', (req, res) => {
  res.renderComponent(Main, { title: 'Карта чая' });
});

module.exports = router;
