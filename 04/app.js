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
        const {users} = this.state;
        if (this.state.searchQuery === '') {
            return this.returnUserList(users)
        }
        return this.returnFilteredUserList(users)
    }

    returnUserList(users) {
        return users.map((name, index) => {
            return (
                <li key={index} onClick={this.clickHandler}>
                    { name}
                </li>
            );
        });
    }

    returnFilteredUserList(users) {
        const query = this.state.searchQuery.toLowerCase();
        const searchedUsers = users.filter(
                user => user.toLowerCase().includes(query))
            return searchedUsers.map((name, index) => {
                return (
                    <li key={index} onClick={this.clickHandler}>
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

    render() {
        const { firstName, lastName } = this.state;
        return (
            <section onSubmit={ this.submitHandler }>
                <label>Wyszukaj użytkownika: <input onChange={this.getQuery} /></label>
                <form>
                    <input name="firstName"
                        value={ firstName }
                        onChange={ this.inputChange }
                    />
                    <input name="lastName"
                        value={ lastName }
                        onChange={ this.inputChange }
                    />
                    <input type="submit"/>
                </form>
                <ul>{ this.renderUsersList() }</ul>
            </section>
        );
    }

    getQuery = e => {
        const query = e.target.value;
        this.setState({ searchQuery: query })
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

ReactDOM.render(<App/>, document.querySelector('#root'));