import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    searchQuery: "",
    users: ["Jan Kowalski", "Michał Nowak", "Rafał Kazik", "Kazik Rafał"],
  };

  renderUsersList() {
    const { users } = this.state;

    if (this.state.searchQuery.length == 0) {
      return users.map((name) => {
        return <li onClick={this.clickHandler}>{name}</li>;
      });
    } else {
      return users.map((name) => {
        if (
          name
            .toLocaleLowerCase()
            .includes(this.state.searchQuery.toLocaleLowerCase())
        )
          return <li onClick={this.clickHandler}>{name}</li>;
      });
    }
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
            placeholder="first name"
          />
          <input
            name="lastName"
            value={lastName}
            onChange={this.inputChange}
            placeholder="last name"
          />

          <input type="submit" />
        </form>
        <input
          name="searchQuery"
          value={searchQuery}
          onChange={this.inputChange}
          placeholder="find user"
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
      alert("błędne dane!");
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
