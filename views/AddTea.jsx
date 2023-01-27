const React = require('react');

module.exports = function AddTea() {
  return (
    <form action="/admin" method="post" id="addTea">
      <label htmlFor="tea_name_input" className="block mar-b-1">
        Tea name:
      </label>
      <input
        type="text"
        name="name"
        id="tea_name_input"
        className="block w-100 no-outline no-border pad-1 mar-b-2"
        required
      />

      <label htmlFor="country_input" className="block mar-b-1">
        Country:
      </label>
      <input
        type="text"
        name="country"
        id="country_input"
        className="block w-100 no-outline no-border pad-1 mar-b-2"
        required
      />

      <label htmlFor="image_input" className="block mar-b-1">
        Picture:
      </label>
      <input
        type="url"
        name="image"
        id="image_input"
        className="block w-100 no-outline no-border pad-1 mar-b-2"
        required
      />

      <label htmlFor="description_input" className="block mar-b-1">
        Description:
      </label>
      <input
        type="text"
        name="description"
        id="description_input"
        className="block w-100 h-150 no-outline no-border pad-1 mar-b-2"
        required
      />
      <button
        type="submit"
        name="submit_button"
        id="create_button"
        className="block button w-100 mar-t-4 mar-b-3 pad-2 round-1 text-c center no-border no-outline"
      >
        Create
      </button>
    </form>
  );
};
