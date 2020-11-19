import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    searchQuery: "",
    users: ["Jan Kowalski", "Michał Nowak"],
  };

  renderUsersList() {
    const { users, searchQuery } = this.state;
    return users
      .filter((name) => {
        if (searchQuery.trim().length > 0) {
          return name.toLowerCase().includes(searchQuery.toLowerCase());
        }

        return true;
      })
      .map((name, index) => {
        return (
          <li key={index} onClick={this.clickHandler}>
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
    const { firstName, lastName, searchQuery, users } = this.state;
    const list = this.renderUsersList();

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
          value={searchQuery}
          onChange={this.inputChange}
        />
        <p>Hidden users: {users.length - list.length}</p>
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

ReactDOM.render(<App />, document.querySelector("#root"));
