const React = require('react');

function Comment({ comments }) {
  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>
          {comment.text}
        </li>
      ))}
    </ul>
  );
}

module.exports = Comment;
