const React = require('react');
const Layout = require('./Layout');

module.exports = function Log({ title }) {
  return (
    <Layout title={title}>
      <h2>
        Regisration
      </h2>
      <form action="/auth/log" method="post">
        <input type="text" name="name" required />
        <input type="email" name="email" required />
        <input type="password" name="password" required />
        <button type="submit">Sign Up</button>
      </form>
    </Layout>
  );
};
