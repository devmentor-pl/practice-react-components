import React from "react";
import ReactDOM from "react-dom";

import Weather from "./Weather";

ReactDOM.render(
	<div>
		<Weather lat={53.1333} lng={	23.15} />
	</div>,
	document.querySelector("#root")
);
