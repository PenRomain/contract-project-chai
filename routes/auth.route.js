const router = require('express').Router();
const { User } = require('../db/models');
const Log = require('../views/Log');
const Reg = require('../views/Reg');

router.get('/reg', (req, res) => {
  res.renderComponent(Reg, { title: 'Registration' });
});

router.get('/log', (req, res) => {
  res.renderComponent(Log, { title: 'Login' });
});

router.post('/reg', async (req, res) => {
  try {
    const { name, password, email } = req.body;
    if (name && password && email) {
      const user = await User.findOne({ where: { name, email } });
      if (!user) {
        User.create({ name, password, email }).then((result) => {
          res.app.locals.name = result.name;
          res.app.locals.id = result.id;
          res.status(201).json({ message: 'успешно!' }); // redirect mainPage '/' windows.location.assign
        });
      } else {
        res.status(412).json({ message: 'Такое имя пользователя существует!' }); // обработка fetch
      }
    } else {
      res.status(412).json({ message: 'Заполните все поля!' }); // fetch
    }
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так' });
  }
});

router.post('/log', (req, res) => {
  try {
    User.findOne({ where: { name: req.body.name, password: req.body.password } })
      .then((result) => {
        if (result) {
          res.app.locals.name = result.name;
          res.app.locals.id = result.id;
          res.redirect('/'); // тут не уверен что перейдет нужно тестить
        } else {
          res.status(412);
        }
      })
      .catch(() => res.status(412).json({ message: 'не верный логин или пароль' })); // fetch
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так' });
  }
});

module.exports = router;
