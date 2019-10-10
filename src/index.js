import React from 'react';
import ReactDom from 'react-dom';

import Button from './Button';
/*
ReactDom.render(
	<Button theme="primary">Primary Button</Button>,
	document.getElementById('app')
);

ReactDom.render(
	<Button theme="secondary">Secondary Button</Button>,
	document.getElementById('app')
);

ReactDom.render(
	<Button isFullWidth>Full Width Button</Button>,
	document.getElementById('app')
);
*/
ReactDom.render(
	<Button theme="primary" isFullWidth>Primary Full Width Button</Button>,
	document.getElementById('app')
);
/*
ReactDom.render(
	<Button url="https://www.hastingsdirect.com">Hastings Direct</Button>,
	document.getElementById('app')
);
*/