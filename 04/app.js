import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

class App extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        searchQuery: '',
        users: ['Jan Kowalski', 'Michał Nowak'],
    }

    renderUsersList() {
        const { users, searchQuery } = this.state;
        let usersArray = users;

        if (searchQuery.length > 0) {
            usersArray = this.filterUsers();
        }

        return usersArray.map(user => {
            return (
                <li
                    key={user}
                    onClick={this.clickHandler}>
                    {user}
                </li>
            );
        });
    }

    filterUsers() {
        const { users, searchQuery } = this.state;

        return users.filter(user => {
            const userLowerCase = user.toLowerCase();
            const searchQueryLowerCase = searchQuery.toLowerCase();

            if (userLowerCase.includes(searchQueryLowerCase)) return user
        });
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
        const { firstName, lastName, searchQuery } = this.state;
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
                <label htmlFor="search">Search user: </label>
                <input
                    id='search'
                    name='searchQuery'
                    value={searchQuery}
                    onChange={this.inputChange}
                    type="text" />
                <ul>{this.renderUsersList()}</ul>
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
            // tutaj komunikat dla użytkownika
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

root.render(<App />);
