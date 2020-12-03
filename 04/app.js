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
        const {users, searchQuery } = this.state;
        const filteredUsers = users.filter(usr => {
            return usr.toLowerCase().includes(searchQuery.toLowerCase())
        })

        return filteredUsers.map(user => {
            return (<li onClick={ this.clickHandler }>
                        { user }
                    </li>)
        })
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
        const { firstName, lastName, searchQuery } = this.state;
        return (
            <section onSubmit={ this.submitHandler }>
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
                <label>
                    <input  type="search"
                            value={ searchQuery }
                            onChange={ this.updateQuery }
                    />
                </label>
                <ul>{ this.renderUsersList() }</ul>
            </section>
        );
    }

    updateQuery = e => {
        e.preventDefault();

        this.setState({
            searchQuery: e.target.value
        })
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