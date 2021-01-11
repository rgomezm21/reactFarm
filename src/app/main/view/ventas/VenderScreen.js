import React from 'react';
import FusePageSimple from '@fuse/core/FusePageSimple';
import Grid from '@material-ui/core/Grid';
import Buscador from './Components/Buscador';
import Cardt from './Components/Cardt';
 function VenderScreen() {
 	return (
 		<FusePageSimple
 			header={
 				<div className="p-24">
 					<h1>Modulo de ventas</h1>
 				</div>
 			}
 			contentToolbar={
 				<div className="px-24">
 					<h2>Vender</h2>
 				</div>
 			}
 			content={
 				<div className="p-24">
 					<Grid container spacing={2}>
                         <Grid item xs={7}>
							<Cardt/>
                         </Grid>
                         <Grid item xs={5}>
							 <Buscador/> 
                         </Grid>
                    </Grid>
 				</div>
 			}
 		/>
 	);
 }
 export default VenderScreen;