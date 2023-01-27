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


module.exports = function TeaTab({ tea, user }) {
  return (
    <div data-id={tea.id} className="tea_tab" key={tea.id}>
      <h1>{tea['Country.name']}</h1>
      <p>{tea.name}</p>
      <img src={tea.image} alt="" />
      <span className="tea_description">{tea.description}</span>
      <button
        className="delete_tea
                button_delete
                w-5
                mar-t-4
                mar-b-1
                pad-2
                round-1
                text-c

                no-border
                no-outline"
        type="submit"
      >
        Delete
      </button>
      <button
        className="update_tea
                button_update
                w-5

                mar-b-3
                pad-2
                round-1
                text-c

                no-border
                no-outline"
        type="submit"
      >
        Update
      </button>
    </div>
  );
};

