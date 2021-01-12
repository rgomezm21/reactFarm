import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';

// const suggestions = ['Sea', 'Sky', 'Forest', 'Aerial', 'Art'].map(item => ({
//      value: item,
//      label: item
//  }));

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function FormSecond() {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState('EUR');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Typography className="h2 mb-24">Descuento</Typography>
      <div>
        <TextField type="number" id="outlined-basic" label="Retención (%)" variant="outlined" />
      </div>
    </form>
  );
}