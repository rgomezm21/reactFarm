import React from 'react';
import FusePageSimple from '@fuse/core/FusePageSimple';
import BuscadorCLI from './components/BuscadorCLI';
import Grid from '@material-ui/core/Grid';
import TableCli from './components/TableCli';
import NewCliButton from './components/NewCliButton';

function ClienteScreen() {
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
                         <h2>Clientes.</h2>
                         </Grid>
                         <Grid item xs={2}>
                         <div style={{marginLeft:100}}>
                         <NewCliButton/>
                         </div>
                         </Grid>
                    </Grid>
				</div>
			}
			content={
				<div className="p-24">
                    <BuscadorCLI/>
                    <hr/>
                    <TableCli/>
				</div>
			}
		/>
    )
}

export default ClienteScreen;
