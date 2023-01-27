const router = require('express').Router();
const bcrypt = require('bcrypt');

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
      const user = await User.findOne({ where: { name } });
      if (!user) {
        // добавил хэширование пароля при регистрации
        const hash = await bcrypt.hash(req.body.password, 10);
        const newUser = await User.create({ name, password: hash, email });
        res.app.locals.user = { id: newUser.id, name: newUser.name };

        req.session.user = { id: newUser.id, name, email };
        // res.redirect('/');
        res.status(201).json({ url: '/', message: 'успешно!' }); // redirect mainPage '/' windows.location.assign

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

router.post('/log', async (req, res) => {
  const { name, password } = req.body;
  try {
    const userFinded = await User.findOne({
      where: { name },
    });

    // проверка на пароль
    if (userFinded) {
      const equalTo = await bcrypt.compare(password, userFinded.password);

      if (equalTo) {
        res.app.locals.user = {
          id: userFinded.id,
          name,
          // email: userFinded.email,
        };
        // запись в сессию

        req.session.user = {
          id: userFinded.id,
          name,
          email: userFinded.email,
        };
        if (userFinded.name === 'administrator') {
          return res.json({ login: 'admin', url: '/admin' });
        }
        res.json({ login: true, url: '/account' }); // тоже не уверен что так сработает (к)
      }
    }
    // res.redirect('/'); // тут не уверен что перейдет нужно тестить
  } catch (e) {
    res.status(500).json({ message: e });
  }
  // res.redirect('/');
});

// добавил логаут
router.get('/out', (req, res) => {
  req.session.destroy((e) => {
    if (e) {
      res.status(500).json({ message: 'Ошибка при удалении сессии' });
    }
    res.clearCookie('user_sid');
    res.app.locals.user = '';
    // .json({ message: 'Успешный выход' });
    res.redirect('/');
  });
});

module.exports = router;
