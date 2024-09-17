import React from "react";
import { createRoot } from 'react-dom/client';
import Weather from "./Weather";
const root = createRoot(document.querySelector('#root'));

class App extends React.Component {
  render(){
    return (
        <Weather lat="51.11" lon="17.022222"></Weather>
    )
  }
}

root.render(<App/>)