import React, { useEffect, useState, useContext } from 'react';
import { useParams,  useHistory } from 'react-router-dom';
import { VolunteerContext } from '../../App';
import Grid from '@material-ui/core/Grid';
import "./Register.css"
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';


const Register = () => {
    const [loggedInUser, setLoggedInUser] = useContext(VolunteerContext);
    
    const {eventKey} = useParams();
    const [event, setEvent] = useState({});
    useEffect(() =>{
        fetch("https://tranquil-reef-85303.herokuapp.com/event/" + eventKey)
        .then(res => res.json())
        .then(data => setEvent(data))
    }, [eventKey]);

    const [selectedDate, setSelectedDate] = useState({
        participationDate: new Date()
    });
  
    const handleDate = (date) => {
        const newDate = {...selectedDate};
        newDate.participationDate = date;
        setSelectedDate(newDate);
    };
    const userDescription = document.getElementById("description");
    const history = useHistory();
      
    const handleRegister  = (e) => {
        const description = userDescription.value;
        const eventDetail  = { ...loggedInUser, description, ...event, ...selectedDate};
        console.log(eventDetail);
        fetch("https://tranquil-reef-85303.herokuapp.com/addRegisteredEvent", {
            method: 'POST',
            headers:{ 
             "Content-Type": "application/json"
            },
            body: JSON.stringify(eventDetail)
        })
        
        e.preventDefault();
        history.push("/events");
    };

    return (      
        <div class="container">          
                <div class="row mt-5">
                    <div class="col-12 col-lg-2"></div>
                    <div class="col-lg-8">
                        <div className="bookingForm">
                            <h4 class = "text-center">Register as a Volunteer</h4>
                            <form class = "px-5">
                                <div class="form-group">
                                     <label for="Full_name">Full name</label> 
                                     <input type="text" class="form-control" id="Full_name" placeholder="Full name"  style={{backgroundColor:"#F2F2F2"}}  value = {loggedInUser.name}/>
                                </div>
                                <div class="form-group">
                                    <label for="Username">Username or Email</label>
                                    <input type="text" class="form-control" id="Username" placeholder="Username or Email" style={{backgroundColor:"#F2F2F2"}} value = {loggedInUser.email}/>
                                </div>
                                <div class="form-group">
                                    <label for="Date">Date of Participation</label>
                                    <div class="text-left" style={{backgroundColor:"#F2F2F2"}}>
                                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                            <Grid container justify="space-around">
                                                <KeyboardDatePicker
                                                    margin="normal"
                                                    id="date-picker-dialog"
                                                    // label="Date of participation"
                                                    format="dd/MM/yyyy"
                                                    value={selectedDate.participationDate}
                                                    onChange={handleDate}
                                                    KeyboardButtonProps={{
                                                        'aria-label': 'change date',
                                                    }}
                                                />
                                            </Grid>
                                        </MuiPickersUtilsProvider>
                                    </div>   
                                </div>
                                
                                <div class="form-group">
                                     <label for="description">Description</label> 
                                     <input type="text" class="form-control" id="description" style={{backgroundColor:"#F2F2F2"}} placeholder="Description" />
                                </div>
                                <div class="form-group">
                                     <label for="ventName">Event Name</label>
                                     <input type="text" class="form-control" id="eventName" placeholder="Event Name" style={{backgroundColor:"#F2F2F2"}} value = {event.title}/>                                     
                                </div>
                                <button onClick = {handleRegister} class="btn btn-primary" style = {{backgroundColor:"#F9A51A", width: "650px"}}>Register</button>   
                            </form>
                         </div>
                     </div>
                     <div class="col-12 col-lg-2"></div>
                 </div>
             </div>
    );
};

export default Register;