import React from 'react'

const CotizacionesConfig = {
    settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/cotizacion',
			component: React.lazy(() => import('./CotizacionesScreen'))
		}
	]
}
export default CotizacionesConfig;
