const React = require('react');
const Layout = require('./Layout');

module.exports = function Log({ title }) {
  return (
    <Layout title={title}>
      <div>main</div>
    </Layout>
  );
};
