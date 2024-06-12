import React from "react";
import { createRoot } from "react-dom/client";

import Weather from "./Weather";
import Api from "./Api";

const root = createRoot(document.querySelector("#root"));

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { component } = this.props;

    return component;
  }
}

root.render(
  <App component={<Weather api={new Api} lat={52.232222} lng={21.008333} />} />
);
