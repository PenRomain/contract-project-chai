const React = require('react');

function Comment({}) {
  return (
    <form action="/:country" method="post">
      <input type="text" name="comment" placeholder="Ваше мнение о чае" />
      <button type="submit">Отправить</button>
    </form>
  );
}

module.exports = Comment;
