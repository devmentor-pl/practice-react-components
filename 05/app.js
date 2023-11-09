'use strict';
import React from 'react';
import { createRoot } from 'react-dom/client';
import Weather from './Weather';

const root = createRoot(document.querySelector('#root'));

class App extends React.Component {
  render() {
    const appStyles = {
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
    };
    return (
      <div style={appStyles}>
        <Weather lat={52.2322222} lng={21.008333} />
        <Weather lat={50.061389} lng={19.938333} />
        <Weather lat={51.11} lng={17.022222} />
      </div>
    );
  }
}

root.render(<App />);
