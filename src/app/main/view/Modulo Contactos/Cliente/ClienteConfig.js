import React from 'react';

const ClienteConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/cliente',
			component: React.lazy(() => import('./ClientesScreen'))
		}
	]
};

export default ClienteConfig;
