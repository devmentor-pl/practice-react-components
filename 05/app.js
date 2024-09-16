import React from "react";
import { createRoot } from "react-dom/client";

import WeatherCheck from "./WeatherCheck";

const root = createRoot(document.querySelector("#root"));

root.render(<WeatherCheck lat={52} lot={21} />);
