import React from "react";
import { createRoot } from "react-dom/client";
import Weather from "./Weather";

const root = createRoot(document.querySelector('#root'));

root.render(
  <>
    <Weather lat={52.232222} lng={21.008333} />
    <Weather lat={50.061389} lng={19.938333} />
    <Weather lat={51.11} lng={17.022222} />
  </>
)
