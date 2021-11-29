import { map } from 'async';
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
        if(searchQuery === '') {
            return this.mapUserList(users, 'map')
        }
        else {
            return this.mapUserList(users, 'filter', searchQuery);
        }
    }

    mapUserList = (arr, myType, query) => {
        if(myType === 'map') {
            return arr.map(name => {
                return (
                <li onClick={ this.clickHandler }>
                    { name }
                </li>
                )
            })
        } else if(myType === 'filter') {
            return arr.filter(name => { 
                if(name.includes(query)) {
                    return name;
                }
            })
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

    filterName = e => {
        const { value } = e.target;
        this.setState({
            searchQuery: value,
        });
    }

    render() {
        const { firstName, lastName, searchQuery } = this.state;
        return (
            <>
            <section style={{ display: 'flex' }}>
                <p>Filtrowanie: </p>
                <input name="filter" value={ searchQuery } onChange={ this.filterName }></input>
            </section>
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
                <ul>{ this.renderUsersList() }</ul>
            </section>
            </>
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