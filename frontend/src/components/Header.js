import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';


export default class AccountMenu extends React.Component {
  
  render(){
    return (
      <React.Fragment>
         
        <Box sx={{ borderRadius: 5, ml:1, display: 'flex', alignItems: 'center', textAlign: 'center',backgroundColor:'#003233', height: 100}}>
          <Typography sx={{ minWidth: 100, ml:10, fontSize:20}}><Link href="http://localhost:3000/login" underline="none" color="#9EC596">Login</Link></Typography>
          <Typography sx={{ minWidth: 100,ml:10, fontSize:20 }}><Link href="http://localhost:3000/tasklist" underline="none" color="#9EC596"> Task List</Link></Typography>
          <Typography sx={{ minWidth: 100,ml:10, fontSize:20 }}><Link href="http://localhost:3000/TaskCreate" underline="none" color="#9EC596">Add Task</Link></Typography>
          <Typography sx={{ minWidth: 100,ml:10, fontSize:20 }}><Link href="http://localhost:3000/calendar" underline="none" color="#9EC596">Calendar</Link></Typography>
        </Box>
      </React.Fragment>
    );

  }
  
}
