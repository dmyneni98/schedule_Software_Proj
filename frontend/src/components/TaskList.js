import React from 'react';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Header from './Header'
import Typography from '@mui/material/Typography';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default class TaskList extends React.Component{
 
  
  constructor(props) {
    super(props);

    this.state = {
        items: [],
        DataisLoaded: false
    };
}
componentDidMount() {
  fetch(
        "http://127.0.0.1:8000/api")
      .then((res) => res.json())
      .then((json) => {
          this.setState({
              items: json,
              DataisLoaded: true
          });
      })
      
}


  render(){

    const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;
       
    return (
        <div className="text-center m-3-auto">
        <TableContainer component={Paper} sx={{borderRadius: 5, border: 1,alignItem: 'center', borderRadius: '16px'}}>
        <Table sx={{ minWidth: 650,ml:5,mt:2,pr:10, borderRadius: 5, border: 1,align: 'center', borderRadius: '16px'  }}  size="small" aria-label="a dense table">
          <TableHead>
          <TableRow>
          <StyledTableCell>ID</StyledTableCell>
          <StyledTableCell >Task Title</StyledTableCell>
          <StyledTableCell >Task Type</StyledTableCell>
          <StyledTableCell >Start Time</StyledTableCell>
          <StyledTableCell >End Time</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {items.map((row) => (
          <TableRow
            key={row.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">{row.id}</TableCell>
            <TableCell >{row.title}</TableCell>
            <TableCell >{row.tasktype}</TableCell>
            <TableCell >{row.startDate}</TableCell>
            <TableCell >{row.endDate}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  </div>
  
  )
        }
}
