import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        searchQuery: '',
        users: ['Jan Kowalski', 'Michał Nowak'],
    }

    renderUsersList() {
        const { users, searchQuery } = this.state;
        const resultUsersList = searchQuery.trim() ? this.filterUsers(users, searchQuery) : users;
        return this.isArrayNotEmpty(resultUsersList) ? this.showUsersList(resultUsersList) : this.showMsg();
    }

    filterUsers(users, filterPhrase) {
        return users.filter(user => user.toLowerCase().includes(filterPhrase.trim().toLowerCase()));
    }

    isArrayNotEmpty(array) {
        return array.length !== 0;
    }

    showUsersList(users) {
        return users.map((user, index) => {
            return (
                <li onClick={this.clickHandler} key={index}>
                    {user}
                </li>
            );
        });
    };

    showMsg() {
        return (<li style={{ fontStyle: 'italic' }}>No results</li>);
    }

    clickHandler = e => {
        const { innerText: userName } = e.target;
        this.removeUser(userName);
    }

    inputChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    }

    render() {
        const { firstName, lastName } = this.state;
        return (
            <section onSubmit={this.submitHandler}>
                <form>
                    <input name="firstName"
                        value={firstName}
                        onChange={this.inputChange}
                    />
                    <input name="lastName"
                        value={lastName}
                        onChange={this.inputChange}
                    />
                    <input type="submit" />
                </form>
                <ul>{this.renderUsersList()}</ul>
                <label htmlFor="searchQuery">Search:</label>
                <input name="searchQuery" id="searchQuery" value={this.state.searchQuery} onChange={this.inputChange} />
            </section>
        );
    }

    submitHandler = e => {
        e.preventDefault();

        const { firstName, lastName } = this.state;
        if (firstName && lastName) {
            this.addUser(`${firstName} ${lastName}`);
            this.setState({
                firstName: '',
                lastName: '',
            });
        } else {
            alert('Both fields must be completed!');
        }
    }

    addUser(name) {
        this.setState({
            users: [...this.state.users, name],
        });
    }

    removeUser(name) {
        const currUsers = this.state.users.filter(
            user => user != name
        );

        this.setState({
            users: currUsers,
        });
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));