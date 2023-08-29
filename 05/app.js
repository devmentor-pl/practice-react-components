import React from 'react';
import { createRoot } from 'react-dom/client';

import Weather from './Weather';

const root = createRoot(document.querySelector('#root'));

const App = () => {
	return <Weather city={'barcelona'} />;
};

root.render(<App />);
