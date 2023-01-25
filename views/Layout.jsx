const React = require('react');
const Navbar = require('./Navbar');

module.exports = function Layout({ title, children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
      </head>
      <body>
        <Navbar />
        {' '}
        {/* пропс,аунтификация или личный кабинет юзера или админа, и кнопка logout */}
        {children}
      </body>
    </html>
  );
};
