const React = require('react');

module.exports = function Navbar() {
  return (
    <div>
      <div>
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