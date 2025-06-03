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
        const { users, searchQuery} = this.state;

        if (!searchQuery) {
            return users.map(name => (
                <li onClick={this.clickHandler}>{ name }</li>
            ))
        }

        const filterUsers = users.filter(user => {
            return user.toLowerCase().includes(searchQuery.toLowerCase())
        })
        return filterUsers.map(name => {
            return (
                <li onClick={ this.clickHandler }>
                    { name }
                </li>
            );
        });
    }

    clickHandler = e => {
        const {innerText: userName} = e.target;
        this.removeUser(userName);
    }

    inputChange = e => {
        const {name, value} = e.target;
        this.setState({
            [name]: value,
        });
    }

    handleSearchQueryChange = (e) => {
        this.setState({ searchQuery: e.target.value })
    }

    render() {
        const { firstName, lastName } = this.state;
        return (
            <section onSubmit={ this.submitHandler }>
                <input type='text'
                    value={this.state.searchQuery}
                    onChange={this.handleSearchQueryChange}
                    placeholder='Wyszukaj użytkownika'
                />
                <br></br>
                 <br></br>
                <form>
                    <input name="firstName"
                        value={ firstName }
                        onChange={ this.inputChange }
                        placeholder='Imię'
                    />
                    <input name="lastName"
                        value={ lastName }
                        onChange={ this.inputChange }
                        placeholder='Nazwisko'
                    />
                    <input type="submit"/>
                </form>
                <ul>{ this.renderUsersList() }</ul>
            </section>
        );
    }

    submitHandler = e => {
        e.preventDefault();

        const { firstName, lastName } = this.state;
        if(firstName && lastName) {
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

root.render(<App/>);
