// W pliku app.js znajdziesz kod komponentu, który był omawiany w materiałach.

// Odszukaj tam state o nazwie searchQuery, który do tej pory nie był wykorzystywany.

// Twoim zadaniem będzie dodanie do kodu JSX pola <input/> (nie musi być on wew. <form/>).

// Jego zadaniem będzie filtrowanie listy użytkowników. Czyli jeśli użytkownik wpisał jakąś wartość do tego pola (onChange) to należy wyświetlić tylko tych użytkowników, którzy zawierają ten ciąg znaków.

// Do filtrowania możesz użyć metody .filter().

// Pamiętaj, aby nic nie usuwać ze state ponieważ usunięcie treści z pola <input/> powinno spowodować wyświetlenie wszystkich dostępnych użytkowników.

// Podpowiedź
// W state przechowuj tylko treść z pola <input/> natomiast w .renderUsersList() zrób warunek (ifa), który będzie zwracał pełną listę lub przefiltrowaną.



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
        const { users } = this.state;
        if (this.state.searchQuery === '') {
            return this.returnUserList(users)
        }
        return this.filteredUserList(users)
    }




    returnUserList(users) {
        return users.map((name, id) => {
            return (
                <li key={id} onClick={this.clickHandler}>
                    {name}
                </li>
            );
        });
    }


    filteredUserList(users) {
        const query = this.state.searchQuery.toLowerCase();
        const filterUsers = users.filter(
            user => user.toLowerCase().includes(query))

        return filterUsers.map((name, id) => {
            return (
                <li key={id} onClick={this.clickHandler}>
                    {name}
                </li>
            );
        });
    }

    clickHandler = e => {
        const { innerText: userName } = e.target;
        this.removeUser(userName);
    }

    inputChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    }

    render() {
        const { firstName, lastName } = this.state;
        return (
            <section onSubmit={this.submitHandler}>
                <label>Wyszukaj użytkownika: <input onChange={this.getQuery} /></label>
                <form>
                    <input name="firstName"
                        value={firstName}
                        onChange={this.inputChange}
                    />
                    <input name="lastName"
                        value={lastName}
                        onChange={this.inputChange}
                    />
                    <input type="submit" />
                </form>
                <ul>{this.renderUsersList()}</ul>
            </section>
        );
    }

    getQuery = e => {
        const query = e.target.value;
        this.setState({ searchQuery: query })
    }

    submitHandler = e => {
        e.preventDefault();

        const { firstName, lastName } = this.state;
        if (firstName && lastName) {
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

ReactDOM.render(<App />, document.querySelector('#root'));