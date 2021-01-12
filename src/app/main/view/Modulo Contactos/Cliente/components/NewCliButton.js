import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ModalCliente from './Modal Cliente/ModalCliente';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width:250,
    },
  },
}));

export default function NewCliButton() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ModalCliente/>
    </div>
  );
}