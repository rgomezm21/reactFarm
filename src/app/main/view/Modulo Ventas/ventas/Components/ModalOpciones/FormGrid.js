import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import FormPrimary from './FormPrimary';
import FormSecond from './FormSecond';
import Buttons from './Buttons';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing(2),
  },
  divider: {
    height: 200,
    margin: 4,
  },
}));

export default function FormGrid() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
    <div className="p-24">
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <FormPrimary/>
            </Grid>
            <Grid item xs={1}>
              <Divider className={classes.divider} orientation="vertical" />
            </Grid>
            <Grid item xs={5}>
                <FormSecond/>
            </Grid>
        </Grid>
        <Buttons/>
    </div>
  );
}