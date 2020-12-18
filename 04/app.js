import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    state = { 
        firstName: '',
        lastName: '',
        searchQuery: '',
        users: ['Jan Kowalski', 'Michał Nowak', 'Jan Grzech', 'Kazimierz Złoty'],
    }
 

    renderUsersList(name) {

       if(this.state.searchQuery === '') {
     
            const {users} = this.state;
            return users.map((name, id) => {
                return (
                    <li key={id} onClick={ this.clickHandler }>
                        { name }
                    </li>
                );
            });
            
       } else if (this.state.searchQuery.length > 0){
    

        const {users, searchQuery} = this.state;
        return users.map((user,id) => {
               if(user.toLowerCase().includes(searchQuery.toLowerCase())) {
                   return (
                       <li key={id} onClick={this.clickHandler}>
                       { user }
                       </li>
                   )
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

    render() {
        const { firstName, lastName } = this.state;
        return (
            <section onSubmit={ this.submitHandler }>
                <form>
                    <input name="firstName"
                        value={ firstName }
                         placeholder="Dodaj Imię "
                        onChange={ this.inputChange }
                    />
                    <input name="lastName"
                        value={ lastName }
                         placeholder="Nazwisko"
                        onChange={ this.inputChange }
                    />
                    <input type="submit"/>
                </form>


                <input
                type="text"
                value={this.searchQuery}
                onChange={this.inputChange}
                name="searchQuery"
                placeholder="Wyszukaj"
                
                />


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