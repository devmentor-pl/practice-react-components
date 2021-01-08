import React from 'react';
import ReactDOM from 'react-dom';

/*Metody:
render()
construktor()
componentDidUpdate()
.componentDidMount()
.componentWillUnmount().
*/

class App extends React.Component {

        constructor(props) {
            super(props);
            this.state = {counter: 0}
        }

        render() {
            console.log('render');
            return <h1>{ this.state.counter }</h1>

        }


        componentDidMount() {
            this.id = setInterval(() => {
              const {counter} = this.state;
              this.setState({counter: counter +1})
              console.log('Widoczne dla użytkownika, uruchamiam gdy komponent już się dodał, co 5 sek ')
            }, 5000);
      
        }

        componentDidUpdate() {
            console.log('Komponent po aktualizacji');
        }

        componentWillUnmount() {
            console.log('teraz czyszczę interval')
                clearInterval( this.id );
         }
   
}

ReactDOM.render(<App/>, document.querySelector('#root'));