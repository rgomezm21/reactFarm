import React from 'react';
import FusePageSimple from '@fuse/core/FusePageSimple';
import Buscador from './components/Buscador';
import TableContenido from './components/TableContenido';
import ButtonNew from './components/ButtonsNew';
import Grid from '@material-ui/core/Grid';


const HistorialVentasScreen = () => {
    return (
        <FusePageSimple
			header={
				<div className="p-24">
					<h1>Modulo de ventas.</h1>
				</div>
			}
			contentToolbar={
				<div className="px-24">
                    <Grid container spacing={2}>
                         <Grid item xs={10}>
                         <h2>Historial ventas.</h2>
                         </Grid>
                         <Grid item xs={2}>
                         <ButtonNew/>
                         </Grid>
                    </Grid>
				</div>
			}
			content={
				<div className="p-24">
                    <Buscador/>
                    <hr/>
                    <TableContenido/>
				</div>
			}
		/>
    )
}
export default HistorialVentasScreen;
