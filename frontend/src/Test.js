import { ViewState, EditingState, IntegratedEditing } from '@devexpress/dx-react-scheduler';
import { Scheduler, WeekView,Appointments ,AppointmentForm} from '@devexpress/dx-react-scheduler-material-ui';

const Test=() =>{
    return <div id="calendar">
        <Scheduler>
        <ViewState/>
        <EditingState/>
        <IntegratedEditing />
        <WeekView/>
        <Appointments/>
        <AppointmentForm/>
    </Scheduler>
    </div>;
  
}

export default Test;
