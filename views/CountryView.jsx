const React = require('react');
const Layout = require('./Layout');
const Comment = require('./Comment');

function CountryView({ comments, title, teaCountry }) {
  return (
    <Layout title={title}>
      {JSON.stringify(teaCountry)}
      <h1>{teaCountry.name}</h1>
      <ul>
        {teaCountry.Teas.map((tea) => (
          <li key={tea.id}>
            <div>
              <h3>{tea.name}</h3>
              <img src={tea.image} width="150px" alt="" />
              <h5>{tea.description}</h5>
            </div>
            <div>
              <Comment comments={comments} />
            </div>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

module.exports = CountryView;
