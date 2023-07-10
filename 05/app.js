import React from "react";
import {createRoot} from "react-dom/client";
import Weather from "./Weather";

const root = createRoot(document.querySelector('#root'))

class App extends React.Component {
    render() {
        return (
            <section>
                <Weather
                    lat={52.232222} 
                    lng={21.008333}
                />
            </section>
        )
    }
}

root.render(<App />)