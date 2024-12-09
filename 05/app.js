import React from "react";
import { createRoot } from "react-dom/client";
import { Weather } from "./components/Weather";

const root = createRoot(document.querySelector("#root"));

root.render(<Weather lat={51.11} lng={17.022222} />);
