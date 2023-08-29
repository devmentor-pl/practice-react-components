import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

class App extends React.Component {
	state = {
		firstName: '',
		lastName: '',
		searchQuery: '',
		users: ['Jan Kowalski', 'Michał Nowak'],
	};

	renderUsersList() {
		const { users, searchQuery } = this.state;
		const lowercaseSearchQuery = searchQuery.toLowerCase();
		if (!searchQuery)
			return users.map(name => {
				return <li onClick={this.clickHandler}>{name}</li>;
			});
		else {
			const filteredUsers = users.filter(name => name.toLocaleLowerCase().includes(lowercaseSearchQuery));

			//commit 1 - znowu nie rozumiem dlaczego consola nie wspolpracuje
			//console.log(filteredUsers) <== czemu to nie pokazywalo mi aktualnej tablicy z pasujacymi wyszkanymi elemntami

			// ale w mapie juz nagle widzi ze cos w tablicy jest i moze po niej przechodzic :o
			return filteredUsers.map(userMatch => {
				return <li onClick={this.clickHandler}>{userMatch}</li>;
			});
		}
	}

	clickHandler = e => {
		const { innerText: userName } = e.target;
		this.removeUser(userName);
	};

	inputChange = e => {
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
					<input name='firstName' value={firstName} onChange={this.inputChange} />
					<input name='lastName' value={lastName} onChange={this.inputChange} />
					<input type='submit' />
				</form>
				<label htmlFor=''>wyszukaj: </label>
				<input name='searchQuery' value={searchQuery} onChange={this.inputChange} />
				<ul>{this.renderUsersList()}</ul>
			</section>
		);
	}
	submitHandler = e => {
		e.preventDefault();

		const { firstName, lastName, searchQuery } = this.state;
		if (firstName && lastName) {
			this.addUser(`${firstName} ${lastName}`);
			this.setState({
				firstName: '',
				lastName: '',
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
		const currUsers = this.state.users.filter(user => user != name);

		this.setState({
			users: currUsers,
		});
	}
}

root.render(<App />);
