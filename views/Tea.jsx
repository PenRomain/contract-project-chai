const React = require('react');
const Comment = require('./Comment');

function Tea({ tea }) {
  return (
    <div>
      <h3>{tea.name}</h3>
      <img src={tea.image} width="300px" alt="" />
      <h5>{tea.description}</h5>
      <form id="comment-form" action="/comment/:id" method="post">
        <input type="text" name="comment" placeholder="Ваше мнение о чае" />
        <button type="submit">Отправить</button>
      </form>
      {tea.Comments.map((comment) => (
        <div className="tea-comment" key={comment.id}>
          <Comment comment={comment} />
        </div>
      ))}
    </div>
  );
}

module.exports = Tea;
