import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

class App extends React.Component {
    state = {
        counter: 0,
    }
    render() {
        console.log('render');

        return <h1>{ this.state.counter }</h1>
    }
    componentDidMount(){
        console.log('Component did mount!');
        this.id = setInterval(()=>{
            const {counter} = this.state;
            this.setState({counter: counter + 1})
        }, 1000);
    }
    componentDidUpdate(){
        console.log('Component did update!')   
    }
    componentWillUnmount(){
        console.log('Component will unmount');
        clearInterval(this.id);
    }
}

root.render(<App/>);
