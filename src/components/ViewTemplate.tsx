import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditTwoTone from "@mui/icons-material/EditTwoTone";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Cancel from "@mui/icons-material/Cancel";

const BT = () => {
  return (
    <>
      <Link to="/template/edit-template">
        <IconButton>
          <EditTwoTone />
        </IconButton>
      </Link>
      <IconButton>
        <Cancel />
      </IconButton>
    </>
  );
};

function createData(
  number: number,
  templateName: string,
  date: string,
  action: any
) {
  return { number, templateName, date, action };
}

const rows = [
  createData(1, "Manager", "20/09/21", <BT />),
  createData(2, "Juniors", "20/09/21", <BT />),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow style={{ backgroundColor: "lightblue" }}>
            <TableCell>#</TableCell>
            <TableCell align="right">Template Name</TableCell>
            <TableCell align="right">Last Modified Date</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.number}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.number}
              </TableCell>
              <TableCell align="right">{row.templateName}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
