import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ButtonTop() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{marginBottom:5}}>
      <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
        <Button>Venta en espera</Button>
        <Button>Recuperar venta</Button>
        <Button>Anular</Button>
      </ButtonGroup>
    </div>
  );
}