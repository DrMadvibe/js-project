import React from 'react';
import ReactDom from 'react-dom';

import Button from './Button';

ReactDom.render(
	<Button url="https://www.hastingsdirect.com">Hastings Direct</Button>,
	document.getElementById('app')
);