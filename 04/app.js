import React from 'react'
import { createRoot } from 'react-dom/client'

const root = createRoot(document.querySelector('#root'))

class App extends React.Component {
	state = {
		firstName: '',
		lastName: '',
		searchQuery: '',
		users: ['Jan Kowalski', 'Michał Nowak'],
	}

	renderUsersList() {
		const { users, searchQuery, filteredUsers } = this.state
		if (searchQuery) {
			this.filterUsers()
		} else {
			return users.map(name => {
				return <li onClick={this.clickHandler}>{name}</li>
			})
		}
	}

	filterUsers() {
		const { users, searchQuery } = this.state
		const filteredUsers = users.filter(user => user.toLowerCase().includes(searchQuery.toLowerCase()))
		console.log(filteredUsers)
		return filteredUsers.map(name => {
			return <li>{name}</li>
		})
	}

	clickHandler = e => {
		const { innerText: userName } = e.target
		this.removeUser(userName)
	}

	inputChange = e => {
		const { name, value } = e.target
		this.setState({
			[name]: value,
		})
		console.log(value)
	}

	render() {
		const { firstName, lastName, searchQuery } = this.state
		return (
			<section onSubmit={this.submitHandler}>
				<form>
					<input name="firstName" value={firstName} onChange={this.inputChange} />
					<input name="lastName" value={lastName} onChange={this.inputChange} />
					<input type="submit" />
				</form>
				<input name="searchQuery" value={searchQuery} onChange={this.inputChange} placeholder="wyszukaj użytkownika" />
				<ul>{this.renderUsersList()}</ul>
			</section>
		)
	}

	submitHandler = e => {
		e.preventDefault()

		const { firstName, lastName } = this.state
		if (firstName && lastName) {
			this.addUser(`${firstName} ${lastName}`)
			this.setState({
				firstName: '',
				lastName: '',
			})
		} else {
			// tutaj komunikat dla użytkownika
		}
	}

	addUser(name) {
		this.setState({
			users: [...this.state.users, name],
		})
	}

	removeUser(name) {
		const currUsers = this.state.users.filter(user => user != name)

		this.setState({
			users: currUsers,
		})
	}
}

root.render(<App />)
