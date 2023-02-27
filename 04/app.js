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

		if (searchQuery === '') {
			return users.map((name) => this.createLiElement(name));
		} else {
			const usersFiltered = users.filter((user) =>
				user.toLowerCase().includes(searchQuery.toLowerCase())
			);
			return usersFiltered.map((user) => this.createLiElement(user));
		}
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
						name='firstName'
						value={firstName}
						onChange={this.inputChange}
					/>
					<input name='lastName' value={lastName} onChange={this.inputChange} />
					<input type='submit' />
				</form>
				<label htmlFor='search'>Szukaj:</label>
				<input
					name='searchQuery'
					onChange={this.inputChange}
					type='text'
					id='search'
					value={searchQuery}
				/>
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
		const currUsers = this.state.users.filter((user) => user != name);

		this.setState({
			users: currUsers,
		});
	}

	createLiElement(value) {
		return <li onClick={this.clickHandler}>{value}</li>;
	}
}

root.render(<App />);
