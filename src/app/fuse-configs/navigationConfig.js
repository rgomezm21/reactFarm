import i18next from 'i18next';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
	{
		id: 'modulos',
		title: 'Modulos',
		translate: 'MODULOS',
		type: 'group',
		icon: 'apps',
		children: [
			{
				id: 'Dashboard',
				title: 'Dashboard',
				translate: 'DAAHBOARD',
				type: 'item',
				icon: 'dashboard',
				url: '/example'
			},
			{
				id: 'ventas',
				title: 'Ventas',
				translate: 'VENTAS',
				type: 'collapse',
				icon: 'shopping_cart',
				children: [
					{
						id: 'vender-page',
						title: 'Vender',
						type: 'item',
						url: '/vender'
					},
					{
						id: 'cierreCaja-page',
						title: 'Cierre de caja',
						type: 'item',
						url: '/cierredecaja'
					},
					{
						id: 'manejoEfectivo-page',
						title: 'Manejo efectivo',
						type: 'item',
						url: '/manejoEfectivo'
					},
					{
						id: 'historialVentas',
						title: 'Historial Ventas',
						type: 'item',
						url: '/historialVentas'
					},
					{
						id: 'cotizaciones-page',
						title: 'Cotizacion',
						type: 'item',
						url: '/cotizacion'
					},
					{
						id: 'giffs-page',
						title: 'Giffs card',
						type: 'item',
						url: '/giff_card'
					}
				]
			},
			{
				id: 'contactos',
				title: 'Contactos',
				translate: 'CONTACTOS',
				type: 'collapse',
				icon: 'dashboard',
				children: [
					{
						id: 'prueba',
						title: 'Prueba',
						type: 'item',
						url: '/prueba'
					}
				]
			},
			{
				id: 'producto',
				title: 'Productos',
				translate: 'PRODUCTO',
				type: 'collapse',
				icon: 'dashboard',
				children: [
					{
						id: 'prueba',
						title: 'Prueba',
						type: 'item',
						url: '/prueba'
					}
				]
			},
			{
				id: 'inventario',
				title: 'Inventarios',
				translate: 'INVENTARIOS',
				type: 'collapse',
				icon: 'dashboard',
				children: [
					{
						id: 'prueba',
						title: 'Prueba',
						type: 'item',
						url: '/prueba'
					}
				]
			},
			{
				id: 'compras',
				title: 'Compras',
				translate: 'COMPRAS',
				type: 'collapse',
				icon: 'dashboard',
				children: [
					{
						id: 'prueba',
						title: 'Prueba',
						type: 'item',
						url: '/prueba'
					}
				]
			}
		]
	}
];

/**
 *
 * {
				id: 'dashboards',
				title: 'Dashboards',
				translate: 'DASHBOARDS',
				type: 'collapse',
				icon: 'dashboard',
				children: [
					{
						id: 'analytics-dashboard',
						title: 'Analytics',
						type: 'item',
						url: '/apps/dashboards/analytics'
					},
					{
						id: 'project-dashboard',
						title: 'Project',
						type: 'item',
						url: '/apps/dashboards/project'
					}
				]
			}
 */

export default navigationConfig;
