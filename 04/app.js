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
    const { searchQuery, users } = this.state;

    if (searchQuery) {
      return users.map((name) => {
        return <li onChange={this.checkUser}>{name}</li>;
      });
   
    } else {
      return users.map((name) => {
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
          />
          <input name="lastName" value={lastName} onChange={this.inputChange} />
          <input type="submit" />
        </form>
        <h1>Check Names:</h1>
        <input
          name="searchQuery"
          value={searchQuery}
          onChange={this.inputChange}
        ></input>
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

  checkUser = (e) => {
    const { innerText: text } = e.target;
    const { searchQuery } = this.state;
    console.log(searchQuery);
    const currUsers = this.state.users.filter((user) => user !== text);
    this.setState({
      users: currUsers,
    });
  };

  removeUser(name) {
    const currUsers = this.state.users.filter((user) => user != name);
    this.setState({
      users: currUsers,
    });
  }
}

root.render(<App />);
