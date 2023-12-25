import React from 'react'
import { createRoot } from 'react-dom/client'

const root = createRoot(document.querySelector('#root'))

class Counter extends React.Component {
	state = {
		amount: 0,
	}

	render() {
		let { amount } = this.state
		return (
			<button
				onClick={() => {
					this.increaseAmount(amount)
				}}>
				click me ({amount})
			</button>
		)
	}

	increaseAmount(amount) {
		this.setState({ amount: amount + 1 })
	}
}

root.render(<Counter />)
