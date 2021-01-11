import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '30',
    },
  },
}));

export default function InputCaja() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Typography variant="body2" color="textSecondary" component="p">
        Cantidad inicial.
      </Typography>
      <TextField type="number" id="outlined-basic" label="0" variant="outlined" fullWidth/>
      <Typography variant="body2" color="textSecondary" component="p">
        Nota.
      </Typography>
      <TextField id="outlined-basic" label="." variant="outlined" fullWidth/>
    </form>
  );
}