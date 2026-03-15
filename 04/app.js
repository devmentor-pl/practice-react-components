import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector("#root"));

class App extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    searchQuery: "",
    users: [
      "Jan Kowalski",
      "Michał Nowak",
      "Anna Wiśniewska",
      "Piotr Zieliński",
      "Katarzyna Dąbrowska",
      "Tomasz Lewandowski",
      "Magdalena Wójcik",
    ],
  };

  renderUsersList() {
    const { users, searchQuery } = this.state;
    const filteredUsers = searchQuery
      ? users.filter((name) =>
          name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()),
        )
      : users;
    return filteredUsers.map((name) => {
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
          <input name="lastName" value={lastName} onChange={this.inputChange} />
          <input type="submit" />
        </form>
        <br />
        <div>
          <label htmlFor="searchQuery">Filter: </label>
          <input
            name="searchQuery"
            value={this.state.searchQuery}
            onChange={this.inputChange}
          ></input>
        </div>
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
      alert("Please enter first and last name");
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
