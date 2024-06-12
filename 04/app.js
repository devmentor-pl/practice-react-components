import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector("#root"));

class App extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    searchQuery: "",
    users: ["Jan Kowalski", "Michał Nowak"],
  };

  generateKey = (pre) => {
    return `${pre}_${new Date().getTime()}`;
  };

  renderUsersList() {
    const { users, searchQuery } = this.state;

    let currUsers = [];
    if (searchQuery !== "") {
      currUsers = users.filter((user) =>
        user.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else {
      currUsers = users;
    }

    return currUsers.map((name) => {
      return (
        <li key={this.generateKey(name)} onClick={this.clickHandler}>
          {name}
        </li>
      );
    });
  }

  clickHandler = (e) => {
    const { innerText: userName } = e.target;
    this.removeUser(userName);
  };

  inputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { firstName, lastName, searchQuery } = this.state;
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
          name="searchQuery"
          type="text"
          value={searchQuery}
          onChange={this.inputChange}
        />
        <ul>{this.renderUsersList()}</ul>
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
      users: [...this.state.users, name],
    });
  }

  removeUser(name) {
    const currUsers = this.state.users.filter((user) => user != name);

    this.setState({
      users: currUsers,
    });
  }
}

root.render(<App />);
