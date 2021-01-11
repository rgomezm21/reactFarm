import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PrimaryForm from './PrimaryForm';
import SecondForm from './SecondForm';
import Divider from '@material-ui/core/Divider';
import TherdForm from './TherdForm';
import FourForm from './FourForm';
import Botones from './Botones';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  divider: {
    height: 450,
    margin: 4,
  },
}));

export default function GridForm() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
    <div className="p-24">
        <Grid container spacing={2}>
            <Grid item xs={4}>
                {/* <PrimaryForm/> */}
                <SecondForm/>
            </Grid>
            <Grid item xs={1}>
              <Divider className={classes.divider} orientation="vertical" />
            </Grid>
            <Grid item xs={7}>
              <PrimaryForm/>
              <hr/>
              <TherdForm/>
              {/* <SecondForm/> */}
            </Grid>
        </Grid>
        <hr/>
        <FourForm/>
        <hr/>
        <Botones/>
    </div>
  );
}