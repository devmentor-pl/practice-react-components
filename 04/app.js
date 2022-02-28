import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        searchQuery: '',
        users: ['Jan Kowalski', 'Michał Nowak','Cecylia Zator','Krystain Wozny', 'Iwona Szalona', 'Anna Bidog'],
    }

    renderUsersList() {
        const {users,searchQuery} = this.state;
        if(searchQuery === ''){
            return users.map(name => {
                return (
                    <li onClick={ this.clickHandler }>
                        { name }
                    </li>
                );
            });
        }
        else {
            return this.showFilterList();
        }
    }

    filterHandler = e => {
        const text = e.target.value;
        this.setState({searchQuery:text})
    }

    showFilterList(){
        const{searchQuery,users} = this.state;
        const filteredList = users.filter(el => el.toLowerCase().includes(searchQuery.toLowerCase()));
        return filteredList.map(name => {
            return (
                <li>{ name }</li>
            );
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
                <div>
                    <p>Filtrowanie listy uzytkownikow:</p>
                    <input name="filter" onChange={this.filterHandler}/>
                </div>
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