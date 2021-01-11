import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Component from './Component';
import Tabla from './Tabla';
import ButtonTop from './ButtonTop';
import ListaGrid2 from './ListaGrid2';
import ButtonPagar from './ButtonPagar';

const useStyles = makeStyles({
  root: {
    minWidth: 290,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Cardt() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} style={{background:'#EAE7E6'}}>
      <CardContent>
      <ButtonTop/>
      <Component/>
      <Tabla/>
	  <ListaGrid2/>
      </CardContent>
      <CardActions>
        <ButtonPagar/>
      </CardActions>
    </Card>
  );
}
