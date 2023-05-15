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
}

root.render(<App/>);
