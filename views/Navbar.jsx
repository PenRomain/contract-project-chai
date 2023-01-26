const React = require('react');
// const Layout = require('./Layout');

module.exports = function Navbar({ user }) {
  return (
    <div>
      <div>
        {user?.name}
        <a href="/auth/log">Login</a>
      </div>
      <div>
        <a href="/auth/reg">Registration</a>
      </div>
      <div>
        <a href="/auth/out">Logout</a>
      </div>
    </div>
  );
};
