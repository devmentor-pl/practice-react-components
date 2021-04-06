import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    state = { 
        firstName: '',
        lastName: '',
        searchQuery: '',
        users: ['Jan Kowalski', 
                'Michał Nowak',
                'Brenden Kirby',
                'Amy-Louise Holcomb',
                'Renesmee Osborne',
                'Jaylan Childs',
                'Makenzie Talley',
                'Samual Gunn',
                'Laurie Reader',
                'Ella-Mai Kavanagh',
                'Nawal Devlin',
                'Vivek Atherton'
    ],
    }

    renderUsersList() {
        const {users, searchQuery} = this.state;
        if(searchQuery == "") {
            return users.map(name => {
                return (
                    <li onClick={ this.clickHandler }>
                        { name }
                    </li>
                );
            });
        } else {
            const searchedUsers = users.filter((item) => {
                return item.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase());
            });

            const foundUsers = searchedUsers.map((item) => <li>{item}</li>)    

            return foundUsers;
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
        const { firstName, lastName } = this.state;


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
                <ul>{ this.renderUsersList() }</ul>
                <form>
                    <label htmlFor="searchUser">Search for User: </label>
                    <input onChange={this.searchHandle} value={this.state.searchQuery}type="text" id="searchUser" />
                </form>
            </section>
        );
    }

    searchHandle = (e) => {
        const inputValue = e.target.value;

        this.setState({
            searchQuery: inputValue
        });
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