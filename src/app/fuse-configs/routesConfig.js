import React from 'react';
import { Redirect } from 'react-router-dom';
import FuseUtils from '@fuse/utils';
import ExampleConfig from 'app/main/example/ExampleConfig';
import PruebaConfig from 'app/main/prueba/PruebaConfig';
import LoginConfig from 'app/main/auth/LoginConfig';
import VenderConfig from 'app/main/view/ventas/VenderConfig'
import CierreCajaConfig from 'app/main/view/cierre de caja/CierreCajaConfig';
import CierreListConfig from 'app/main/view/cierre de caja/cierrecaja/CierreListConfig';
import HistorialVentasConfig from 'app/main/view/historial de ventas/HistorialVentasConfig';
import CotizacionesConfig from 'app/main/view/Cotizaciones/CotizacionesConfig';
import ManejoEfectivoConfig from 'app/main/view/manejo efectivo/ManejoEfectivoConfig';

const routeConfigs = [ExampleConfig, PruebaConfig, LoginConfig, VenderConfig, CierreCajaConfig, CierreListConfig, HistorialVentasConfig, CotizacionesConfig, ManejoEfectivoConfig];

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
