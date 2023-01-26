const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ title }) {
  return (
    <Layout title={title}>
      <div className="main_map">
        <div className="china country" title="китайский"><a href="/china">Китай</a></div>
        <div className="japan country"><a href="/japan">Япония</a></div>
        <div className="india country"><a href="/india">Индия</a></div>
        <div className="vietnam country"><a href="/vietnam">Вьетнам</a></div>
        <div className="taiwan country"><a href="/taiwan">Тайвань</a></div>
        <div className="australia country"><a href="/australia">Австралия</a></div>
        {/* <div className="china">china</div>
        <div className="japain">japain</div>
        <div className="india">india</div> */}
      </div>
    </Layout>
  );
};
