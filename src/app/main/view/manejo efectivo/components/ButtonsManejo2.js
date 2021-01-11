import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ModalManejoMod from './ModalManejo2/ModalManejoMod';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width:250,
    },
  },
}));

export default function ButtonsManejo2() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ModalManejoMod/>
    </div>
  );
}