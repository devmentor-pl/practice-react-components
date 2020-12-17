import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    state = { 
        firstName: '',
        lastName: '',
        searchQuery: '',
        users: ['Jan Kowalski', 'Michał Nowak'],
        filteredUsers: [],
    }

    renderUsersList() {
        const {users,searchQuery,filteredUsers} = this.state;

        if(searchQuery !== ''){
            return filteredUsers.map(name => {
                return (
                    <li onClick={this.clickHandler}>
                        {name}
                    </li>
                );
            });
        } else {
            return users.map(name => {
                return (
                    <li onClick={ this.clickHandler }>
                        { name }
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

    queryChange = e => {
        const query = e.target.value;
        this.setState({
            searchQuery : query,
        });

        this.filterUsers(query);
        
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
                    <label> Filter
                        <input name ="query"
                        value={searchQuery}
                        onChange={ this.queryChange }
                        />
                    </label>
                    <input type="submit"/>
                </form>
                <ul>{ this.renderUsersList() }</ul>
            </section>
        );
    }

    filterUsers(query){

        const filteredArray = this.state.users.filter(
            user => user.includes(query)
        );

        this.setState({
            filteredUsers: filteredArray,
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