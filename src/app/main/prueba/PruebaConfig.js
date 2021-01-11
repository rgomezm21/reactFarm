import React from 'react';

const ExampleConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/prueba',
			component: React.lazy(() => import('./Prueba'))
		}
	]
};

export default ExampleConfig;
