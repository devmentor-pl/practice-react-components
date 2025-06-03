import React from 'react';
import { createRoot } from 'react-dom/client';

import Weather from './components/Weather';

const root = createRoot(document.querySelector('#root'));

root.render(<Weather lat={52.232222} lon={21.008333}/>) 