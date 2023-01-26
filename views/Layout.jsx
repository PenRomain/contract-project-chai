const React = require('react');
const Navbar = require('./Navbar');
// const Admin = require('./Admin');

module.exports = function Layout({ title, children, user }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="stylesheet" href="/styles/normalize.css" />
        <link rel="stylesheet" href="/styles/application.css" />
        <link rel="stylesheet" href="/styles/countries.css" />
        <link rel="stylesheet" href="/styles/account.css" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script defer src="/scripts/client.js" />
        <script defer src="/scripts/account.js" />
        <title>{title}</title>
      </head>
      <body>
        <Navbar user={user} />
        {/* пропс,аунтификация или личный кабинет юзера или админа, и кнопка logout */}
        <div className="bg-dk-green pad-t-2 pad-s-1 pad-b-8 mar-b-16 c-white">
          <div className="max-w-700 center">{children}</div>
        </div>
        {/* <Table user={user} /> */}
      </body>
    </html>
  );
};
