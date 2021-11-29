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
        const { users , searchQuery } = this.state;

        if( searchQuery.length === 0 ) {
            return users.map( user => {
                return (
                    <li onClick={ this.clickHandler }>
                        { user }
                    </li>
                );
            });
        } else {

            const searchedUser = users.filter( user =>
                user.toLowerCase().includes( searchQuery.toLowerCase() )
            );

            return searchedUser.map( user => {
                return (
                    <li onClick={ this.clickHandler }>
                        { user }
                    </li>
                );
            });
         }
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
        const { firstName, lastName , searchQuery } = this.state;

        return (
            <section onSubmit={ this.submitHandler }>
                <form>
                    <input name='firstName'
                           value={ firstName }
                           onChange={ this.inputChange }
                    />
                    <input name='lastName'
                           value={ lastName }
                           onChange={ this.inputChange }
                    />
                    <input type="submit"/>
                    <label style = {{ position: 'absolute', top: '5vh', right: '5vh' }} htmlFor = 'searchQuery'>Search:
                        <input name = 'searchQuery'
                               id = 'searchQuery'
                               value = { searchQuery }
                               onChange = { this.inputChange }
                        />
                    </label>
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

ReactDOM.render(<App/>, document.querySelector('#root'));