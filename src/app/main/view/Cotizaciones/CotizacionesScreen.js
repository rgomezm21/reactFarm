import React from 'react';
import FusePageSimple from '@fuse/core/FusePageSimple';
import Buscador from './components/Buscador';
import Grid from '@material-ui/core/Grid';
import TableCont from './components/TableCont';
import ButtonsNewCoti from './components/ButtonsNewCoti';


const CotizacionesScreen = () => {
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
                         <h2>Cotizaciones.</h2>
                         </Grid>
                         <Grid item xs={2}>
                         <div style={{marginLeft:100}}>
                         <ButtonsNewCoti/>
                         </div>
                         </Grid>
                    </Grid>
				</div>
			}
			content={
				<div className="p-24">
                    <Buscador/>
                    <hr/>
                    <TableCont/>
				</div>
			}
		/>
    )
}
export default CotizacionesScreen;
