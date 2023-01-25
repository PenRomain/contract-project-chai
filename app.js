require('@babel/register');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const ssr = require('./middleware/ssr');

const app = express();

const PORT = 3000;
const authRoute = require('./routes/auth.route');
const mainRoute = require('./routes/main.route');
const adminRoute = require('./routes/admin.route');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(ssr);
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/auth', authRoute);
app.use('/', mainRoute);
app.use('/admin', adminRoute);

app.listen(PORT, () => {
  console.log(`Полет нормальный на ${PORT}`);
});
