const React = require('react');
const Layout = require('./Layout');
const Tea = require('./Tea');

function CountryView({ teas, title, teaCountry }) {
  return (
    <Layout title={title}>
      <h1>{teaCountry.name}</h1>
      {teas.map((tea) => (
        <div key={tea.id}>
          <Tea tea={tea} />
        </div>
      ))}
    </Layout>
  );
}

module.exports = CountryView;
