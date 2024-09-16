import React from 'react';
import { createRoot } from 'react-dom/client';
import WeatherProvider from './WeatherProvider';

const root = createRoot(document.querySelector('#root'));

root.render(
	<>
		<WeatherProvider lat={52.232222} lng={21.008333} />
		<WeatherProvider lat={50.061389} lng={19.938333} />
		<WeatherProvider lat={51.11} lng={17.022222} />
	</>
);
