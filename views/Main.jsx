const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <div className="main_map">
        <div className="china">Китай</div>
        <div className="japan">Япония</div>
        <div className="india">Индия</div>
        <div className="vietnam">Вьетнам</div>
        <div className="taiwan">Тайвань</div>
        <div className="australia">Австралия</div>
        {/* <div className="china">china</div>
        <div className="japain">japain</div>
        <div className="india">india</div> */}
      </div>
    </Layout>
  );
};
