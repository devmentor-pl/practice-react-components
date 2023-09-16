import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './Header';

const root = createRoot(document.querySelector('#root'));

class App extends React.Component {
    state = {
        toggle: false
    }
    render() {
        const {  toggle } = this.state
        console.log('render app');

        return (
            <div>
                {
                toggle ? 
                <Header />
                : ''
                }
                <button
                onClick={this.toggleHandler}
                >{toggle ? 'hide' : 'show'}</button>
            </div>
        )
    }

    toggleHandler = () => {
        this.setState((prevState) => ({
            toggle: !prevState.toggle
        }))
    }

    
}

root.render(<App/>);
