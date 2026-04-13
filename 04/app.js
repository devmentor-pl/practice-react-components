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

    renderUsersList = () => {
        const { users, searchQuery } = this.state;
        if (!searchQuery) {
            return users.map(name => {
                return (
                    <li onClick={this.clickHandler}>
                        {name}
                    </li>
                );
            });
        } else {
            const currUsers = this.filterUser(searchQuery);

            return currUsers.map(name => {
                return (
                    <li onClick={this.clickHandler}>
                        {name}
                    </li>
                );
            });
        }
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
        console.log(name, value)
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
                <input type='text' name='searchQuery' onChange={this.inputChange} />
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
            alert('Wprowadź dane użytkownika')
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

    filterUser(name) {
        return this.state.users.filter(user =>
            user.toLowerCase().includes(name.toLowerCase())
        )
    }
}

root.render(<App />);
