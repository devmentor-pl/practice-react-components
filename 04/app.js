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

  renderUsersList() {
    const { users, searchQuery } = this.state;
    if (searchQuery) {
      return users.map((user) => {
        if (user.toLowerCase().includes(searchQuery.toLowerCase())) {
          return <li onClick={this.clickHandler}>{user}</li>;
        }
      });
    }
    return users.map((name) => {
      return <li onClick={this.clickHandler}>{name}</li>;
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
    const { firstName, lastName } = this.state;
    return (
      <section onSubmit={this.submitHandler}>
        <form>
          <input
            name="firstName"
            value={firstName}
            onChange={this.inputChange}
          />
          <input
            name="lastName"
            value={lastName}
            onChange={this.inputChange}
          />
          <input type="submit" />
        </form>
        <ul>{this.renderUsersList()}</ul>
        <input
          name="searchQuery"
          onChange={this.inputChange}
        ></input>
      </section>
    );
  }

  searchHandler = (e) => {
    const input = e.target.value;
    console.log("input: ", input);
    const { users } = this.state;
    const usersCopy = [...users];
    const x = users.some((user) => user.includes(input));
    if (input) {
      this.setState({
        users: users.filter((user) => user.includes(input)),
      });
      console.log("users: ", users);
      this.renderUsersList();
    } else {
      console.log("usersCopy", usersCopy);
      this.setState({
        users: usersCopy,
      });
      this.renderUsersList();
    }
  };

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
