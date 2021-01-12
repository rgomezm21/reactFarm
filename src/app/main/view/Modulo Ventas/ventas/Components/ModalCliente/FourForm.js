import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

export default function FourForm() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
      <Typography className="h2 mb-24">Dirreción.</Typography>
        <TextField
          id="outlined-full-width"
          label="Direcciónn"
          style={{ margin: 8 }}
          placeholder="Digite la Dirección completa"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <TextField
          label="Barrio"
          id="outlined-margin-normal"
          placeholder="Barrio"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Departamento"
          id="outlined-margin-normal"
          placeholder="Departamento"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Ciudad"
          id="outlined-margin-normal"
          placeholder="Ciudad"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
      </div>
    </div>
  );
}