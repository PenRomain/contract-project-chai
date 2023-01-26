const React = require('react');
const Layout = require('./Layout');

module.exports = function Admin({ user, countries, teas }) {
  return (
    <Layout user={user}>
      <h2>{user?.name}</h2>
      <form action="/admin" method="post">
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
          name="description_true"
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
      <div className="account_table">
        {/* <div className="countries">
          {countries.map((country) => (
            <div key={country.id}>
              <h4>{country.name}</h4>
            </div>
          ))}
        </div> */}
        <div className="teas">
          {teas.map((tea, i) => (
            <div className="tea_tab" key={tea.id}>
              <h1>{countries[i].name}</h1>
              <p>{tea.name}</p>
              <img src={tea.image} alt="" />
              <span className="tea_description">{tea.description}</span>
              <button
                className="delete_tea
                button_delete
                w-66
                mar-t-4
                mar-b-1
                pad-2
                round-1
                text-c
                center
                no-border
                no-outline"
                type="submit"
              >
                Delete
              </button>
              <button
                className="update_tea
                button_update
                w-66

                mar-b-3
                pad-2
                round-1
                text-c
                center
                no-border
                no-outline"
                type="submit"
              >
                Update
              </button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};
