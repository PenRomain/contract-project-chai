const router = require('express').Router();
const bcrypt = require('bcrypt');

const { User } = require('../db/models');

const Log = require('../views/Log');
const Reg = require('../views/Reg');

router.get('/reg', (req, res) => {
  const { user } = req.app.locals;
  res.renderComponent(Reg, { title: 'Registration', user });
});

router.get('/log', (req, res) => {
  const { user } = req.app.locals;
  res.renderComponent(Log, { title: 'Login', user });
});

router.post('/reg', async (req, res) => {
  try {
    const { name, password, email } = req.body;
    if (name && password && email) {
      const user = await User.findOne({ where: { name, email } });
      if (!user) {
        // добавил хэширование пароля при регистрации
        const hash = await bcrypt.hash(req.body.password, 10);
        User.create({ name, password: hash, email }).then((result) => {
          res.app.locals.user = { id: result.id, name: result.name };
          // res.app.locals.id = result.id;

          req.session.user = { name, email };
          res.status(201).json({ url: '/', message: 'успешно!' }); // redirect mainPage '/' windows.location.assign
        });
        // и запись в сессию
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
    User.findOne({
      where: { name: req.body.name, password: req.body.password },
    })
      .then(async (result) => {
        if (result) {
          // проверка на пароль
          const equalTo = await bcrypt.compare(
            req.body.password,
            result.password
          );
          if (equalTo) {
            res.app.locals.user = { id: result.id, name: result.name };
            // запись в сессию
            req.session.user = {
              id: result.id,
              name: result.name,
              email: result.email,
            };
          }
          res.json({ url: '/' }); // тоже не уверен что так сработает (к)
          res.redirect('/'); // тут не уверен что перейдет нужно тестить
        } else {
          res.status(412);
        }
      })
      .catch(() =>
        res.status(412).json({ message: 'не верный логин или пароль' })
      ); // fetch
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так' });
  }
});

// добавил логаут
router.get('/out', (req, res) => {
  req.session.destroy((e) => {
    if (e) {
      res.status(500).json({ message: 'Ошибка при удалении сессии' });
    }
    res.clearCookie('user_sid');
    res.app.locals = '';
    // .json({ message: 'Успешный выход' });
    res.redirect('/');
  });
});

module.exports = router;
