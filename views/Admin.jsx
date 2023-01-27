const React = require('react');
const Layout = require('./Layout');
const AddTea = require('./AddTea');
const TeaTab = require('./TeaTab');

module.exports = function Admin({ user, teasmap, comments }) {
  return (
    <Layout user={user}>
      {/* <h2>{user?.name}</h2> */}
      {user.name === 'administrator' && (
        <div>
          (
          <AddTea />)
          <div className="account_table">
            <div className="teas">
              {teasmap?.map((tea) => (
                <TeaTab key={tea.id} user={user} tea={tea} />
              ))}
            </div>
          </div>
        </div>
      )}
      &rbrace;
      {user.name !== 'administrator' && (
        <div className="user_comments">
          {comments?.map((comment) => (
            <div data-id={comment.id} key={comment.id}>
              {comment.text}
            </div>
          ))}
        </div>
      )}
    </Layout>
  );
};
