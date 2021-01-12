import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 400,
  },
});

function createData(cajero, tipo, fecha, valor) {
  return { cajero, tipo, fecha, valor };
}

const rows = [
  createData('erick', 'venta', '05/ene./2021 - 12:01 p. m.', 5000),
];

export default function TableManejo() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="caption table">
        <caption>A basic table example with a caption</caption>
        <TableHead>
          <TableRow>
            <TableCell align="left">Cajero</TableCell>
            <TableCell align="left">Tipo</TableCell>
            <TableCell align="left">Valor</TableCell>
            <TableCell align="left">Fecha</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="left" component="th" scope="row">
                {row.cajero}
              </TableCell>
              <TableCell align="left">{row.tipo}</TableCell>
              <TableCell align="left">{row.valor}</TableCell>
              <TableCell align="left">{row.fecha}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}