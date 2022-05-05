import React, { useReducer } from "react";
import { Box,Button,  TextField, Paper, Typography } from "@mui/material";



function AddTask() {

    var nee= new Date()
    nee.setTime(nee.getTime() -(5*60*60*1000))
    var strd=nee.toISOString().substring(0,16)
    const [formInput, setFormInput] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            title: "",
            tasktype: "",
            startDate:"",
            endDate:""
        }
      );
      const handleInput = evt => {
        const name = evt.target.name;
        const newValue = evt.target.value;  
        setFormInput({ [name]: newValue });
      };
      const handleSubmit = evt => {
        evt.preventDefault();
    

      
      /*console.log(JSON.stringify(data)) 
      */

        var val = '{"title":"'+ formInput.title+'", "tasktype":"'+ formInput.tasktype+'","startDate":"'+ formInput.startDate+'","endDate":"'+ formInput.endDate+'"}'
        
        fetch("http://127.0.0.1:8000/api/create/", {
          method: "POST",
          body: val,
          headers: {
            "Content-Type": "application/json"
          }
          })
          .then(response => response.json())
          .then(response => console.log("Success:", JSON.stringify(response)))
          .catch(error => console.error("Error:", error));
          window.location.href="http://localhost:3000/tasklist"
        };
    
      /*console.log("Welc") */
    return (
      <Box sx={{'& .MuiTextField-root': { m: 1, width: '25ch', }, left:300, alignItems: 'center' }} autoComplete="off" >
      
       <div>
         <br/>
         <br/>
        <Paper sx={{  alignItems: 'center', textAlign: 'center', }}>
        <Typography variant="h5" component="h3">
          Task Creation Form
        </Typography>
        <Typography component="p">This form is used to create new task</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Task Name"
            id="margin-normal"
            name="title"
            defaultValue={formInput.subject}
            required
            helperText="Enter Task Name"
            onChange={handleInput}
          />
          <TextField
            label="Task Type"
            id="margin-normal"
            name="tasktype"
            defaultValue={formInput.tasktype}
            
            helperText="Soft or Hard"
            onChange={handleInput}
          />

<TextField
        id="datetime-local"
        name="startDate"
        required
        label="Appointment Start Time"
        defaultValue={strd}
        type="datetime-local"
        onChange={handleInput}    
        sx={{ width: 250 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="datetime-local"
        required
        name="endDate"
        defaultValue={strd}
        label="Appointment End Time"
        type="datetime-local"
        onChange={handleInput}    
        sx={{ width: 250 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
        <br/>
          <Button  type="submit" variant="contained" color="primary" > Submit</Button>
        </form>
        </Paper>
        </div>
        </Box>
    )
}

export default AddTask