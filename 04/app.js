import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        searchQuery: "",
        users: ["Jan Kowalski", "Michał Nowak"],
    };

    renderUsersList() {
        const { users, searchQuery } = this.state;
        /*
        return users.map((name) => {
            return <li onClick={this.clickHandler}>{name}</li>;
        });*/
        return users.flatMap((name) =>
            name.includes(searchQuery) ? (
                <li onClick={this.clickHandler}>{name}</li>
            ) : null
        );
    }

    clickHandler = (e) => {
        const { innerText: userName } = e.target;
        this.removeUser(userName);
    };

    inputChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    };

    render() {
        const { firstName, lastName, searchQuery } = this.state;
        return (
            <section onSubmit={this.submitHandler}>
                <form>
                    <input
                        name="firstName"
                        value={firstName}
                        onChange={this.inputChange}
                    />
                    <input
                        name="lastName"
                        value={lastName}
                        onChange={this.inputChange}
                    />
                    <input type="submit" />
                </form>
                <form>
                    <input
                        name="searchQuery"
                        value={searchQuery}
                        onChange={this.inputChange}
                    ></input>
                    <input type="submit" value="Search" />
                </form>
                <ul>{this.renderUsersList()}</ul>
            </section>
        );
    }

    submitHandler = (e) => {
        e.preventDefault();

        const { firstName, lastName } = this.state;
        if (firstName && lastName) {
            this.addUser(`${firstName} ${lastName}`);
            this.setState({
                firstName: "",
                lastName: "",
            });
        } else {
            // tutaj komunikat dla użytkownika
        }
    };

    addUser(name) {
        this.setState({
            users: [...this.state.users, name],
        });
    }

    removeUser(name) {
        const currUsers = this.state.users.filter((user) => user != name);

        this.setState({
            users: currUsers,
        });
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
