const React = require('react');

function Comment({ comment }) {
  return (
    <h5>{comment.text}</h5>
  );
}

module.exports = Comment;
