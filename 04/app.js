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
        const filteredUsers = users.filter(item => item.toLowerCase().includes(searchQuery))
        return filteredUsers.map(name => {
            return (
                <li onClick={this.clickHandler}>
                    {name}
                </li>
            );
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
                <input onChange={this.filterHandler} type="text" placeholder='filtruj użytkowników' />
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
            prompt('uzupełnij imię i nazwisko')
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

    filterHandler = e => {
        const { searchQuery } = this.state
        this.setState({ searchQuery: e.target.value.toLowerCase() })
    }
}

root.render(<App />);
