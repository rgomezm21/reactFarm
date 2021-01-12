import React from 'react'

const VenderConfig = {
    settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/vender',
			component: React.lazy(() => import('./VenderScreen'))
		}
	]
}

export default VenderConfig;
