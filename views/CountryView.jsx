const React = require('react');
const Layout = require('./Layout');
// const Comment = require('./Comment');

function CountryView({ teas, title, teaCountry }) {
  return (
    <Layout title={title}>
      <h1>{teaCountry.name}</h1>
      <ul>
        {teas.map((tea) => (
          <li key={tea.id}>
            <div>
              <h3>{tea.name}</h3>
              <img src={tea.image} width="150px" alt="" />
              <h5>{tea.description}</h5>
              <ul>
                {tea.Comments.map((comment) => (
                  <li key={comment.id}>
                    <h5>{comment.text}</h5>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
      {/* <Comment /> */}
    </Layout>
  );
}

module.exports = CountryView;
