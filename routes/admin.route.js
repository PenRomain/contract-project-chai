const router = require('express').Router();

const { Country, Tea, Comment } = require('../db/models');

const Admin = require('../views/Admin');

router.get('/', async (req, res) => {
  const countries = await Country.findAll({ raw: true });
  const teas = await Tea.findAll({ raw: true });
  const comments = await Comment.findAll({ raw: true });

  res.renderComponent(Admin, { countries, teas });
});

module.exports = router;
