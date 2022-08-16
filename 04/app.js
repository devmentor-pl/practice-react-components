import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    state = { 
        firstName: '',
        lastName: '',
        searchQuery: '',
        users: ['Jan Kowalski', 'Michał Nowak'],
    }

    renderUsersList() {
        const {users, searchQuery} = this.state

        if(searchQuery === '') {
            return this.renderUsers(users)
        } else {
            const usersList = users.filter(user => user.toLowerCase().includes(searchQuery.toLowerCase()))
            return this.renderUsers(usersList)
        }
    }

    renderUsers(users) {
        return users.map(name => {
            return (
                <li onClick={ () => this.removeUser(name) }>
                    { name }
                </li>
            );
        });
    }



    inputChange = e => {
        const {name, value} = e.target
        this.setState({
            [name]: value,
        });
    }

    render() {
        const { firstName, lastName, searchQuery } = this.state
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
                <input name="searchQuery" 
                value={searchQuery} 
                onChange={this.inputChange} />
                <ul>{ this.renderUsersList() }</ul>
            </section>
        );
    }

    submitHandler = e => {
        e.preventDefault()

        const { firstName, lastName } = this.state
        if(firstName && lastName) {
            this.addUser(`${firstName} ${lastName}`)
            this.setState({
                firstName: '',
                lastName: '',
            });
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

ReactDOM.render(<App/>, document.querySelector('#root'))