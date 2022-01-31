import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Icon } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));


const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name: string, position: string, grade: number, appraiserRating: number, reviewerRating: number, reviewerStatus: string, viewPA: JSX.Element) {
  return { name, position, grade, appraiserRating, reviewerRating, reviewerStatus, viewPA };
}

const rows = [
  createData('Alexa', 'Network & Security Specialist', 15, 4.2, 4.2, 'Not Started', <Icon>RemoveRedEyeIcon</Icon>),
  createData('Bob', 'Network & Security Specialist', 15, 4.3, 4.3, 'Not Started', <Icon>RemoveRedEyeIcon</Icon>),
  createData('Chris', 'Network & Security Specialist', 15, 4.1, 4.1, 'Not Started', <Icon>RemoveRedEyeIcon</Icon>),
  createData('Denvers', 'Network & Security Specialist', 15, 4.3, 4.3, 'Not Started', <Icon>RemoveRedEyeIcon</Icon>),
  createData('Elon', 'Network & Security Specialist', 15, 3.9, 3.9, 'Not Started', <Icon>RemoveRedEyeIcon</Icon>),
  createData('Frank', 'Network & Security Specialist', 15, 4.4, 4.4, 'Not Started', <Icon>RemoveRedEyeIcon</Icon>),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Employee</StyledTableCell>
            <StyledTableCell align="right">Position</StyledTableCell>
            <StyledTableCell align="right">Grade</StyledTableCell>
            <StyledTableCell align="right">Appraiser Rating</StyledTableCell>
            <StyledTableCell align="right">Revierwer Rating</StyledTableCell>
            <StyledTableCell align="right">Revierwer Status</StyledTableCell>
            <StyledTableCell align="right">View PA</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.position}</StyledTableCell>
              <StyledTableCell align="right">{row.grade}</StyledTableCell>
              <StyledTableCell align="right">{row.appraiserRating}</StyledTableCell>
              <StyledTableCell align="right">{row.reviewerRating}</StyledTableCell>
              <StyledTableCell align="right">{row.reviewerStatus}</StyledTableCell>
              <StyledTableCell align="right">{row.viewPA}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
