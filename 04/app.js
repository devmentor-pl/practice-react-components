import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    searchQuery: '',
    users: ['Jan Kowalski', 'Michał Nowak'],
  };

  renderUsersList() {
    const { users } = this.state;

    if (this.state.searchQuery) {
      const name = this.state.searchQuery;

      const filteredArray = users.filter((user) => {
        return user.toLowerCase().includes(name);
      });

      return filteredArray.map((name) => {
        return <li>{name}</li>;
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

  filterUsers = (e) => {
    const { value: namePassed } = e.target;
    this.setState({ searchQuery: namePassed });
  };

  render() {
    const { firstName, lastName } = this.state;
    return (
      <section onSubmit={this.submitHandler}>
        <form>
          <input
            name='firstName'
            value={firstName}
            onChange={this.inputChange}
          />
          <input name='lastName' value={lastName} onChange={this.inputChange} />
          <input type='submit' />
        </form>
        <ul>{this.renderUsersList()}</ul>
        Filtruj imiona
        <input
          type='text'
          onChange={this.filterUsers}
          value={this.state.searchQuery}
        />
      </section>
    );
  }

  submitHandler = (e) => {
    e.preventDefault();

    const { firstName, lastName } = this.state;
    if (firstName && lastName) {
      this.addUser(`${firstName} ${lastName}`);
      this.setState({
        firstName: '',
        lastName: '',
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

ReactDOM.render(<App />, document.querySelector('#root'));
