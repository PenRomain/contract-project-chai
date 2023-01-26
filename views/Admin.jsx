const React = require('react');
const Layout = require('./Layout');

module.exports = Admin({ title, user }) {
    return (
        <Layout user={user}>
            <h2>Admin</h2>
      <form action="/admin" method="post">
        <label htmlFor="name_input" className="block mar-b-1">
          Name:
        </label>
        <input
          type="text"
          name="name"
          id="name_input"
          className="block w-100 no-outline no-border pad-1 mar-b-2"
          required
        />
        <label htmlFor="password_input" className="block mar-b-1">
          Password:
        </label>
        <input
          type="password"
          name="password"
          id="password_input"
          className="block w-100 no-outline no-border pad-1 mar-b-2"
          required
        />
        <button
          type="submit"
          name="submit_button"
          id="login_button"
          className="block button w-100 mar-t-4 mar-b-3 pad-2 round-1 text-c center no-border no-outline"
        >
          Login
        </button>
      </form>
        </Layout>
    )
}
