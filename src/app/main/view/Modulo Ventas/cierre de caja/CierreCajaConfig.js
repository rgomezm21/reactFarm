import React from 'react'

const CierreCajaConfig = {
    settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/cierredecaja',
			component: React.lazy(() => import('./CierreCajaScreen'))
		}
	]
}
export default CierreCajaConfig;
