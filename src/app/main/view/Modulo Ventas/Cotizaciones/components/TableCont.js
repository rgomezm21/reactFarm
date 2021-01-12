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
    minWidth: 650,
  },
});

function createData(numeracion, cliente, estado, fecha, total, opciones) {
  return { numeracion, cliente, estado, fecha, total, opciones };
}

const rows = [
  createData('Frozen 1', 'erick', 'pagada', '05/ene./2021 - 12:01 p. m.', 5000, 'las opciones'),
];

export default function TableCont() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="caption table">
        <caption>A basic table example with a caption</caption>
        <TableHead>
          <TableRow>
            <TableCell>N°</TableCell>
            <TableCell align="right">Cliente</TableCell>
            <TableCell align="right">Estado</TableCell>
            <TableCell align="right">Fecha</TableCell>
            <TableCell align="right">Total</TableCell>
            <TableCell align="right">Opciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.numeracion}
              </TableCell>
              <TableCell align="right">{row.cliente}</TableCell>
              <TableCell align="right">{row.estado}</TableCell>
              <TableCell align="right">{row.fecha}</TableCell>
              <TableCell align="right">{row.total}</TableCell>
              <TableCell align="right">{row.opciones}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}