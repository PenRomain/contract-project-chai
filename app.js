require('@babel/register');
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const ssr = require('./middleware/ssr');
const sessionConfig = require('./config/session');

const app = express();

const PORT = process.env.PORT || 4000;

const authRoute = require('./routes/auth.route');
const mainRoute = require('./routes/main.route');
const adminRoute = require('./routes/admin.route');
const accountRoute = require('./routes/account.route');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(ssr);
app.use(morgan('dev'));
app.use(cookieParser());
app.use(session(sessionConfig));

app.use('/auth', authRoute);
app.use('/', mainRoute);
app.use('/admin', adminRoute);
app.use('/account', accountRoute);

app.listen(PORT, () => {
  console.log(`Полет нормальный на ${PORT}`);
});
