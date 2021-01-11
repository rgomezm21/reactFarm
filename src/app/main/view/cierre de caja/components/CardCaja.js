import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import InputCaja from './InputsCaja';
import ButtonsCard from './ButtonsCard';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    margin:'20px auto',
    background:'#F9F6F5',
    textAlign:'center',
  },
  media: {
    height: 350,
  },
  botones:{
      alignItems:'center'
  },
});

export default function CardCaja() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          style={{
              width:'100px',
              height:'100px',
              margin:'10px auto',
            }}
          className={classes.media}
          image="/material-ui-static/images/cards/Registradora.svg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Apertura Caja
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Realiza la apertura de la caja para poder empezar con las ventas.
          </Typography>
          <hr/>
          <InputCaja/>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.botones}>
        <ButtonsCard/>
      </CardActions>
    </Card>
  );
}
