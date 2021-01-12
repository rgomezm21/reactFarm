import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import AddCircle from '@material-ui/icons/AddCircle';
import Typography from '@material-ui/core/Typography';
import ModalOpciones from './ModalOpciones/ModalOpciones';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 560,
    marginTop:5,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ListaGrid2() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List className={classes.root}>
      <div
				className="flex flex-shrink-0 items-center justify-between px-24 h-64"
				style={{
					background: 'white',
          color: 'black',
          height:44,
				}}
			>
				<Typography className="font-medium truncate" color="inherit">
					Opciones
				</Typography>
        {/* <IconButton>
         <AddCircle />
        </IconButton> */}
        <ModalOpciones />
			</div>
      {["Subtotal", "Descuento", "Iva"].map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)}>
            {/* <ListItemIcon>
              <Checkbox
                edge="start"
                checked={checked.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemIcon> */}
            <ListItemText id={labelId} primary={` ${value}`} />
            <ListItemSecondaryAction>
              33355442.125
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
}