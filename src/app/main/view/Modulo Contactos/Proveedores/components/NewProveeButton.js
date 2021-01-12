import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ModalProveedor from './Modal Proveedor/ModalProveedor';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width:250,
    },
  },
}));

export default function NewProveeButton() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ModalProveedor/>
    </div>
  );
}