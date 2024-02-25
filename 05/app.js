import React from "react";
import { createRoot } from "react-dom/client";
import Weather from "./components/Weather";

const root = createRoot(document.querySelector("#root"));

root.render(
    <div>
        <Weather lat={52.232222} lng={21.008333} />
        <Weather lat={50.20528} lng={19.27498} />
        <Weather lat={50.07262} lng={19.9325} />
        <Weather lat={51.11} lng={17.022222} />
    </div>
);
