import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ModalEmplo from './ModalCliente/ModalEmplo';
 const Component = () => {
    const useStyles = makeStyles((theme) => ({
        root: {
          padding: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          width: 560,
          height:44,
        },
        input: {
          marginLeft: theme.spacing(1),
          flex: 1,
        },
        divider: {
          height: 28,
          margin: 4,
        },
      }));
        const classes = useStyles();
    return (
        <div>
            <Paper component="form" className={classes.root}>
                <InputBase
                    className={classes.input}
                    placeholder="Agregar Cliente"
                    inputProps={{ 'aria-label': 'Agregar Cliente' }}
                />
                <IconButton type="submit" className={classes.iconButton} aria-label="search">
                    <SearchIcon />
                </IconButton>
                <Divider className={classes.divider} orientation="vertical" />
                <IconButton>
                    <ModalEmplo/>
                </IconButton>
            </Paper>
        </div>
    )
}
export default Component;
