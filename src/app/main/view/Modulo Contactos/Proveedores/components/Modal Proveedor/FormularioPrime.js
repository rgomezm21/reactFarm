import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import CheckProvee from './CheckProvee';

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

export default function FormularioPrime() {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState('EUR');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Typography className="h2 mb-24">TIPO DOCUMENTO</Typography>
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Escoge un tipo de documento"
          value={currency}
          onChange={handleChange}
          variant="outlined"
        >
          <MenuItem value="none">
            <em>Escoge un tipo de documento</em>
            </MenuItem>
            <MenuItem value="hai">Hai</MenuItem>
            <MenuItem value="olivier">Olivier</MenuItem>
            <MenuItem value="kevin">Kevin</MenuItem>
        </TextField>
        <TextField type="number" id="outlined-basic" label="Digite numero documento" variant="outlined" />
        <CheckProvee/>
      </div>
    </form>
  );
}