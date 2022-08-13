import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
        }
    }    

    render() {
        console.log('render')

        return <h1>{ this.state.counter }</h1>
    }

    componentDidMount() {
        console.log('component did mount')

        this.id = setInterval(() => {
            const {counter} = this.state
            this.setState({ counter: counter + 1 })
        }, 5000)
    }

    componentDidUpdate() {
        console.log('component did update')
    }

    componentWillUnmount() {
        console.log('component will unmount')

        clearInterval( this.id )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'))