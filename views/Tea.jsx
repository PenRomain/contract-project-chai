const React = require('react');

module.exports = function Tea({ tea, user }) {
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
