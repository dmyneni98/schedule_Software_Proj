import React, { useReducer } from "react";
import { Button,  TextField, Paper, Typography } from "@mui/material";
import { Link } from 'react-router-dom'


function AddTask() {

    console.log("What is going on")
    const [formInput, setFormInput] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            subject: "",
            tasktype: "",
            starttime:"",
            endtime:""
        }
      );
      const handleInput = evt => {
        const name = evt.target.name;
        const newValue = evt.target.value;
        setFormInput({ [name]: newValue });
      };
      const handleSubmit = evt => {
        evt.preventDefault();
    
        let data = { formInput };
        console.log(JSON.stringify(data)) 
    
        fetch("http://127.0.0.1:8000/api/", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(response => response.json())
          .then(response => console.log("Success:", JSON.stringify(response)))
          .catch(error => console.error("Error:", error));
      };
    
      console.log("Welc") 
    return (
        <div>
        <Paper >
        <Typography variant="h5" component="h3">
          Task Creation Form
        </Typography>
        <Typography component="p">This form is used to create new task</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Task Name"
            id="margin-normal"
            name="subject"
            defaultValue={formInput.subject}
            
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
        name="starttime"
        label="Next appointment"
        type="datetime-local"
        onChange={handleInput}    
        sx={{ width: 250 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
          <Button  type="submit" variant="contained" color="primary"   
          > Submit
          </Button>
        </form>
        </Paper>
        </div>
    )
}

export default AddTask