import React from 'react'

const ManejoEfectivoConfig = {
    settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/manejoEfectivo',
			component: React.lazy(() => import('./ManejoEfectivoScreen'))
		}
	]
}
export default ManejoEfectivoConfig;
