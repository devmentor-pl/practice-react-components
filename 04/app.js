import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

class App extends React.Component {
    state = { 
        firstName: '',
        lastName: '',
        searchQuery: '',
        users: ['Jan Kowalski', 'Michał Nowak'],
    }
    createLi(name){
        return (
            <li onClick={ this.clickHandler }>
                { name }
            </li>
        );
    }
    renderUsersList() {
        const {users, searchQuery} = this.state;
        if(searchQuery.length > 0){
            return users.filter(name => {
                if(name.includes(searchQuery)){
                    return this.createLi(name);
                }
            })
        }else{
            return users.map(name => {
                return this.createLi(name);
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
    findUser = e => {
        const {name,value} = e.target;
        this.setState({
            [name]: value,
        })
    }
    render() {
        const { firstName, lastName, searchQuery} = this.state;
        return (
            <section onSubmit={ this.submitHandler }>
                <input name="searchQuery" value={searchQuery} onChange={this.findUser}></input>
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
            alert('Missing field')
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

root.render(<App/>);
