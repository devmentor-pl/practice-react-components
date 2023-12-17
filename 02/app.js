import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

class Counter extends React.Component {
    state = {
        amount: 0,
    }

    // Metoda do zwiekszania wartosci 
    increment = () => {
        this.setState(prevState => ({ 
            amount: prevState.amount + 1 
        }));
    }
    
    render() {
        // Powiazanie metody z przyciskiem
        return <button onClick={this.increment}>
            click me ({ this.state.amount })
            </button>
    }
}

root.render(<Counter />);
