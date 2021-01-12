import React from 'react';
import FusePageSimple from '@fuse/core/FusePageSimple';
import BuscadorProvee from './components/BuscadorProvee';
import Grid from '@material-ui/core/Grid';
import TableProvee from './components/TableProvee';
import NewProveeButton from './components/NewProveeButton';

function ProveedorScreen() {
    return (
        <FusePageSimple
			header={
				<div className="p-24">
					<h1>Modulo de contactos</h1>
				</div>
			}
			contentToolbar={
				<div className="px-24">
                    <Grid container spacing={2}>
                         <Grid item xs={10}>
                         <h2>Proveedores.</h2>
                         </Grid>
                         <Grid item xs={2}>
                         <div style={{marginLeft:100}}>
                         <NewProveeButton/>
                         </div>
                         </Grid>
                    </Grid>
				</div>
			}
			content={
				<div className="p-24">
                    <BuscadorProvee/>
                    <hr/>
                    <TableProvee/>
				</div>
			}
		/>
    )
}

export default ProveedorScreen;
