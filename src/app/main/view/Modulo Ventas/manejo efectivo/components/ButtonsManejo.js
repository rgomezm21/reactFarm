import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ModalManejo from './ModalManejo/ModalManejo';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width:250,
    },
  },
}));

export default function ButtonsManejo() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ModalManejo/>
    </div>
  );
}