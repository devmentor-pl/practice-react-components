import React from 'react'

export class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      counter: 0
    }
  }

  render() {
    console.log('render h1')
    return (
      <h1>{this.state.counter}</h1>
    )
  }

  componentDidUpdate() {
    console.log('ComponentDidupdate')
}

componentDidMount() {
    console.log('ComponentDidMount')
    this.id = setInterval(() => {
        this.setState((prevState) => ({counter: prevState.counter + 1}))
    }, 1000)
}

componentWillUnmount() {
    console.log('componentWillUnmount')
    clearInterval(this.id)
    this.setState({ counter: 0})
}
}

export default Header