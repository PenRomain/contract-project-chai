const React = require('react');
const Layout = require('./Layout');

module.exports = function Log({ title }) {
  return (
    <Layout title={title}>
      <h2>
        Login
      </h2>
      <form action="/auth/log" method="post">
        <input type="text" name="name" required />
        <input type="password" name="password" required />
        <button type="submit">Login</button>
      </form>
    </Layout>
  );
};
