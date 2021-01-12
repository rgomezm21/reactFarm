import React from 'react';
import { Redirect } from 'react-router-dom';
import FuseUtils from '@fuse/utils';
import ExampleConfig from 'app/main/example/ExampleConfig';
import PruebaConfig from 'app/main/prueba/PruebaConfig';
import LoginConfig from 'app/main/auth/LoginConfig';
import VenderConfig from 'app/main/view/Modulo Ventas/ventas/VenderConfig'
import CierreCajaConfig from 'app/main/view/Modulo Ventas/cierre de caja/CierreCajaConfig';
import CierreListConfig from 'app/main/view/Modulo Ventas/cierre de caja/cierrecaja/CierreListConfig';
import HistorialVentasConfig from 'app/main/view/Modulo Ventas/historial de ventas/HistorialVentasConfig';
import CotizacionesConfig from 'app/main/view/Modulo Ventas/Cotizaciones/CotizacionesConfig';
import ManejoEfectivoConfig from 'app/main/view/Modulo Ventas/manejo efectivo/ManejoEfectivoConfig';
import ClienteConfig from 'app/main/view/Modulo Contactos/Cliente/ClienteConfig';
import ProveedorConfig from 'app/main/view/Modulo Contactos/Proveedores/ProveedorConfig';

const routeConfigs = [ExampleConfig, PruebaConfig, LoginConfig, VenderConfig, CierreCajaConfig, CierreListConfig, 
					  HistorialVentasConfig, CotizacionesConfig, ManejoEfectivoConfig, ClienteConfig, ProveedorConfig];

const routes = [
	...FuseUtils.generateRoutesFromConfigs(routeConfigs),
	{
		component: () => <Redirect to="/example" />
	}
	// {
	// 	path: '/',
	// 	component: () => <Redirect to="/example" />
	// }
];

export default routes;
