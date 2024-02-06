import React from "react";
import ReactDOM from 'react-dom';

import Weather from "./components/Weather";

class App extends React.Component {
    render() {
        return (
            <Weather lat='51.11' lng='17.022222' /> //Wrocław
        );
    };
};

ReactDOM.render(<App/> ,document.querySelector('#root'));
