const React = require('react');
// const Layout = require('./Layout');

module.exports = function Navbar({ user }) {
  return (
    <div>
      <div className="ccd">
        {user?.name}
        <a className="ddott" href="/auth/log">Login</a>
      </div>
      <div className="ccd">
        <a className="ddott" href="/auth/reg">Registration</a>
      </div>
      <div className="ccd">
        <a className="ddott" href="/auth/out">Logout</a>
      </div>
    </div>
  );
};
