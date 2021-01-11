import React from 'react';
import FusePageSimple from '@fuse/core/FusePageSimple';
import CierreList from './CierreList';
import CierreTabs from './CierreTabs';
import ButtonList from './ButtonsList';


const CierreCajaScreen = () => {
    return (
        <FusePageSimple
			header={
				<div className="p-24">
					<h1>Modulo de ventas.</h1>
				</div>
			}
			contentToolbar={
				<div className="px-24">
					<h2>Cierre de caja.</h2>
				</div>
			}
			content={
				<div className="p-24">
					{/* <CardTabs/>
					<hr /> */}
					<CierreList/>
					<hr/>
					<CierreTabs/>
					<ButtonList/>
				</div>
			}
		/>
    )
}
export default CierreCajaScreen;
