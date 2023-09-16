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
        if (!searchQuery) {
           return this.renderUserItem(users)
        } else {
            const filterList = users.filter(name => name.toLowerCase().includes(searchQuery.toLocaleLowerCase()))
            return this.renderUserItem(filterList)
        }
    }

    renderUserItem = (list) => {
        return list.map(name => {
            return (
                <li onClick={() => this.removeUser(name)}>
                    {name}
                </li>
            );
        });
    }

    inputChange = e => {
        const { name, value } = e.target;
        console.log(name)
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
                <input name='searchQuery' value={searchQuery} onChange={this.inputChange} />
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
            alert('oba pola muszą być wypełnione')
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
