import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

class App extends React.Component {
    state = {
        counter: 0,
    }

    constructor(props) {

        super(props)
        console.log("constructor")
    }
    render() {
        console.log('render');

        return <h1>{ this.state.counter }</h1>
    }

   
    componentDidMount(){
        console.log('ComponentDidMount')
        
    this.id =  setInterval(() => {
       const { counter } = this.state
       this.setState({counter: counter + 1})
     } ,5000)
     
    }

    componentDidUpdate(){
        console.log('ComponentDidUpdate')

    }
    componentWillUnmount(){
       
        clearInterval(this.id)
        console.log('ComponentWillUnmount')
    }
}

root.render(<App/>);
