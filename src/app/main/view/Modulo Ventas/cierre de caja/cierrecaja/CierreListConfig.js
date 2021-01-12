import React from 'react'

const CierreListConfig = {
    settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/cierrecaja',
			component: React.lazy(() => import('./CierreListScreen'))
		}
	]
}
export default CierreListConfig;
