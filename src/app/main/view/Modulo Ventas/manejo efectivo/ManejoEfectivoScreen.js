import React from 'react';
import FusePageSimple from '@fuse/core/FusePageSimple';
import Grid from '@material-ui/core/Grid';
import TableManejo from './components/TableManejo';
import ButtonsManejo from './components/ButtonsManejo';
import ButtonsManejo2 from './components/ButtonsManejo2';
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
                         <Grid item xs={6}>
                         <h2>Manejo de Efectivo.</h2>
                         </Grid>
                         <Grid item xs={3}>
                         <div style={{marginRight:50}}>
							<ButtonsManejo/>
                         </div>
                         </Grid>
						 <Grid item xs={3}>
                         <div style={{marginLeft:50}}>
							<ButtonsManejo2/>
                         </div>
                         </Grid>
                    </Grid>
				</div>
			}
			content={
				<div className="p-24">
                <TableManejo/> 
				</div>
			}
		/>
    )
}
export default CotizacionesScreen;