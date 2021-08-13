import React from 'react';
import ReactDOM from 'react-dom';

import searchuser from './components/styles/searchuser';
import oddnumberuser from './components/styles/oddnumberuser';
import evennumberuser from './components/styles/evennumberuser';

class App extends React.Component {
    state = { 
        firstName: '',
        lastName: '',
        searchQuery: '',
        users: ['Jan Kowalski',
                'Michał Nowak',
                'Żaneta Żatecka',
                'Ewelina Mróz',
                'Maciej Cebulowski',
                'Sandra Stasiak'],
    }

    renderUsersList = () => {
        const {users, searchQuery} = this.state;

        // alfabetyczne sortowanie users
        users.sort((a, b) => {
            return (a < b) ? -1 : ((a > b) ? 1 : 0);
        });

        // jeśli wyszukaj użytkownika jest puste to renderuj na stronę całą listę użytkowników
        let i = -1;
        let j = 0;
        if (searchQuery === '') {
            return users.map(name => {
                i++;
                j = i % 2;
                // kolorek dla co drugiego użytkownika na liście
                if (j === 0) {
                    return (
                        <li style={oddnumberuser} onClick={this.clickHandler}>
                            {'['}{i + 1}{'] '}{name}
                        </li>
                    );
                } else {
                    return (
                        <li style={evennumberuser} onClick={this.clickHandler}>
                            {'['}{i + 1}{'] '}{name}
                        </li>
                    );
                }
            });
        // jeśli wyszukaj użytkownika zawiera ciąg znaków to renderuj na stronę użytkowników z tym ciągiem znaków 
        } else {const searchedUsers = users.filter((item) => {
            return item.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase());
        });
        
        const foundUsers = searchedUsers.map(name => (
            i++,
            <li style={oddnumberuser}>{'['}{i + 1}{'] '}{name}</li>
        ));
            return foundUsers;
        }
    }

    clickHandler = (e) => {
        const {innerText: userName} = e.target;
        this.removeUser(userName);
    }

    inputChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value,
        });
    }

    render() {
        const {firstName, lastName} = this.state;
        return (
            <section onSubmit={this.submitHandler}>
                <form style={searchuser}>
                    <label htmlFor="searchUser">Dodaj użytkownika: </label>
                    <input name="firstName"
                        value={firstName}
                        placeholder={'Imię'}
                        autoComplete={'off'}
                        onChange={this.inputChange}
                    />
                    <input name="lastName"
                        value={lastName}
                        placeholder={'Nazwisko'}
                        autoComplete={'off'}
                        onChange={this.inputChange}
                    />
                    <input type="submit"/>
                </form>
                <form style={searchuser}>
                    <label htmlFor="searchUser">Wyszukaj użytkownika: </label>
                    <input onChange={this.searchHandle} value={this.state.searchQuery} placeholder={'Imię Nazwisko'} type="text" id="searchUser" />
                </form>
                <ul>{this.renderUsersList()}</ul>
            </section>
        );
    }

    // wyszukaj podany ciąg znaków
    searchHandle = (e) => {
        const inputValue = e.target.value;
        this.setState({
            searchQuery: inputValue
        });
    }

    submitHandler = (e) => {
        e.preventDefault();

        const {firstName, lastName} = this.state;
        if (firstName && lastName) {
            this.addUser(`${firstName} ${lastName}`);
            this.setState({
                firstName: '',
                lastName: '',
            });
        } else {
            // tutaj komunikat dla użytkownika
            alert('Uzupełnij dane!');
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