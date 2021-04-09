import React from 'react';
import ReactDOM from 'react-dom';


const users = ['Jan Kowalski', 'Michał Nowak'];


class App extends React.Component {
    state = { 
        firstName: '',
        lastName: '',
        searchQuery: '',
        users: users,
    }



    renderUsersList() {
        const {users} = this.state;
        return users.map(name => {
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

    getFilteredUsers(text) {
        return users.filter(user => user.toLowerCase().includes(text.toLowerCase()))
      }


    filterUsers(e) {
        const text = e.currentTarget.value;
        const filteredUsers = this.getFilteredUsers(text);
        this.setState({
            users: filteredUsers
        })
    }

    render() {
        const { firstName, lastName } = this.state;
        return (
            <section onSubmit={ this.submitHandler }>
                <input type='search' onInput={this.filterUsers.bind(this)}
                    />
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
            alert('Wprowadź prawidłowe dane');
        }
    }

    addUser(name) {
        this.setState({
            users: [...users, name],
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