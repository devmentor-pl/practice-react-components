import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    searchQuery: {
      query: "",
      time: 0,
    },
    users: [
      {
        name: "Jan Kowalski",
        time: 32432432,
      },
      {
        name: "Michał Nowak",
        time: 32432434,
      },
    ],
  };

  renderUsersList() {
    const { users, searchQuery } = this.state;
    return users
      .filter((user) => {
        if (searchQuery.query.trim().length > 0) {
          return user.name
            .toLowerCase()
            .includes(searchQuery.query.toLowerCase());
        }

        return true;
      })
      .map((user, index) => {
        return (
          <li key={index}>
            {user.name}{" "}
            <button onClick={() => this.removeClickHandler(user.name)}>
              Remove
            </button>
          </li>
        );
      });
  }

  removeClickHandler = (userName) => {
    this.removeUser(userName);
  };

  inputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  searchQueryChange = (e) => {
    const { value } = e.target;

    this.setState({
      searchQuery: {
        query: value,
        time: Date.now(),
      },
    });
  };

  render() {
    const { firstName, lastName, searchQuery, users } = this.state;
    const list = this.renderUsersList();
    const newUsersCount = users.reduce(
      (total, user) =>
        searchQuery.query.trim().length > 0 && user.time >= searchQuery.time
          ? total + 1
          : total,
      0
    );

    return (
      <section onSubmit={this.submitHandler}>
        <form>
          <input
            name="firstName"
            value={firstName}
            onChange={this.inputChange}
          />
          <input name="lastName" value={lastName} onChange={this.inputChange} />
          <input type="submit" />
        </form>
        <input
          type="text"
          name="searchQuery"
          placeholder="Search user"
          value={searchQuery.query}
          onChange={this.searchQueryChange}
        />
        <p>
          Hidden users: {users.length - list.length}
          <br />
          New users: {newUsersCount}
        </p>
        <ul>{list}</ul>
      </section>
    );
  }

  submitHandler = (e) => {
    e.preventDefault();

    const { firstName, lastName } = this.state;
    if (firstName && lastName) {
      this.addUser(`${firstName} ${lastName}`);
      this.setState({
        firstName: "",
        lastName: "",
      });
    } else {
      // tutaj komunikat dla użytkownika
    }
  };

  addUser(name) {
    this.setState({
      users: [...this.state.users, { name, time: Date.now() }],
    });
  }

  removeUser(name) {
    const currUsers = this.state.users.filter((user) => user.name != name);

    this.setState({
      users: currUsers,
    });
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
