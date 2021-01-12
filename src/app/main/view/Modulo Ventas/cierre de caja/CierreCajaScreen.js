import React from 'react';
import FusePageSimple from '@fuse/core/FusePageSimple';
import CardCaja from './components/CardCaja';

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
					<h2>Apertura de caja.</h2>
				</div>
			}
			content={
				<div className="p-24">
					<CardCaja/>
					<hr />
				</div>
			}
		/>
    )
}
export default CierreCajaScreen;
