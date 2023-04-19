import React from 'react';
import { createRoot } from 'react-dom/client';
import Weather from './Weather';

const root = createRoot(document.querySelector('#root'));

root.render(
	<Weather
		lat={52.232222}
		lng={21.008333}
	/>
);
