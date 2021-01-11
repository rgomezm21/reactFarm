import React from 'react';
import FusePageSimple from '@fuse/core/FusePageSimple';

function Prueba() {
	return (
		<FusePageSimple
			header={
				<div className="p-24">
					<h2>bbcita</h2>
				</div>
			}
			contentToolbar={
				<div className="px-24">
					<h4>Register User</h4>
				</div>
			}
			content={
				<div className="p-24">
					<h1>Hola Mundo</h1>
					<hr />
				</div>
			}
		/>
	);
}

export default Prueba;
