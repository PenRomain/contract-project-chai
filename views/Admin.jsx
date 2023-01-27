const React = require('react');
const Layout = require('./Layout');
const AddTea = require('./AddTea');
const Tea = require('./Tea');

module.exports = function Admin({ user, teas, comments }) {
  return (
    <Layout user={user}>
      <h2>{user?.name}</h2>
      {(user.name === 'administrator' && <AddTea /> && (
        <div className="account_table">
          <div className="teas">
            {teas?.map((tea) => (
              <Tea key={tea.id} user={user} tea={tea} />
            ))}
          </div>
        </div>
      )) || (
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
