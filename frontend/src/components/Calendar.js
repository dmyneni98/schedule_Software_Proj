import React from 'react';
import { ViewState, EditingState, IntegratedEditing } from '@devexpress/dx-react-scheduler';
import { Scheduler, WeekView, Appointments, AppointmentForm,Toolbar, DateNavigator,  TodayButton} from '@devexpress/dx-react-scheduler-material-ui';
import Paper from '@mui/material/Paper';


export default class Calendar extends React.Component{
  
  constructor(props) {
    super(props);

    this.state = {
      schedulerData: [],
        DataisLoaded: false
    };
}
componentDidMount() {
  fetch(
        "http://127.0.0.1:8000/api")
      .then((res) => res.json())
      .then((json) => {
          this.setState({
              schedulerData: json,
              DataisLoaded: true
          });
      })
      
}
    render(){

      const { DataisLoaded, schedulerData } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;
            
      
      const saveAppointment = (data) => {
        console.log('committing changes');
        const appointment = data.added;
        var nee= new Date(appointment.startDate.getTime())
        nee.setTime(nee.getTime() -(5*60*60*1000))
        var naa= new Date(appointment.endDate.getTime())
        naa.setTime(naa.getTime() -(5*60*60*1000))
        var val = '{"title":"'+ appointment.title+'", "tasktype":"'+ appointment.notes+'","startDate":"'+ nee.toISOString().substring(0,16)+'","endDate":"'+ naa.toISOString().substring(0,16)+'"}'
        console.log(val)
        //schedulerData.push(val)
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
          window.location.reload(false)
      }      
      return (
        
        <Paper sx={{ mt:2, borderRadius: 5, ml:1, display: 'flex', alignItems: 'center', textAlign: 'center',backgroundColor:'#003233'}}>
        <Scheduler data={schedulerData}  height={800}>
          <ViewState />
          <EditingState onCommitChanges={saveAppointment} />
          <IntegratedEditing />
          <WeekView startDayHour={9} endDayHour={19}/>
          <Toolbar />
          <DateNavigator />
          <TodayButton />
          <Appointments />
          <AppointmentForm />
        </Scheduler>
      </Paper>
          )
    }
}

const FooterStyle = {
  background: "#003233",
  width: "100%",
  
}


