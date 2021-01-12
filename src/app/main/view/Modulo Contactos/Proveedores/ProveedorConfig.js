import React from 'react';

const ProveedorConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/proveedor',
			component: React.lazy(() => import('./ProveedoresScreen'))
		}
	]
};
export default ProveedorConfig;
