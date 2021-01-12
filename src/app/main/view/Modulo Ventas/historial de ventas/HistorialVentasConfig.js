import React from 'react'

const HistorialVentasConfig = {
    settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/historialVentas',
			component: React.lazy(() => import('./HistorialVentasScreen'))
		}
	]
}
export default HistorialVentasConfig;
