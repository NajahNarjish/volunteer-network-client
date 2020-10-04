import React, { useEffect, useState, useContext } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import { VolunteerContext } from '../../App';
// import Grid from '@material-ui/core/Grid';
// import DateFnsUtils from '@date-io/date-fns';
// import {
//   MuiPickersUtilsProvider,
//   KeyboardDatePicker,
// } from '@material-ui/pickers';


const Register = () => {
    const [loggedInUser, setLoggedInUser] = useContext(VolunteerContext);
    
    const {eventKey} = useParams();
    const [event, setEvent] = useState({});
    useEffect(() =>{
        fetch("http://localhost:5000/event/" + eventKey)
        .then(res => res.json())
        .then(data => setEvent(data))
    }, [eventKey]);

    // const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
  
    // const handleDateChange = (date) => {
    //   setSelectedDate(date);
    // };
    const userDescription = document.getElementById("description");
    const history = useHistory();
      
    const handleRegister  = (e) => {
        console.log("form submitted");
        const description = userDescription.value;
        const eventDetail  = { ...loggedInUser, description, ...event,  orderTime: new Date()};
        console.log(eventDetail);
        fetch("http://localhost:5000/addRegisteredEvent", {
            method: 'POST',
            headers:{ 
             "Content-Type": "application/json"
            },
            body: JSON.stringify(eventDetail)
        })
        .then (res => res.json())
        .then (data => {
                if(data){

                    console.log(data);
                    

                   
                }
        });
        e.preventDefault();
        history.push("/events");
    };


    return (
        
        <div class="container">          
                <div class="row mt-5">
                    <div class="col-lg-12">
                        <div className="bookingForm">
                            <h4>Register as a Volunteer</h4>
                             <form>
                                 <div class="form-group">
                                     <label for="Full_name">Full name</label> 
                                     <input type="text" class="form-control" id="Full_name" placeholder="Full name" style={{backgroundColor:"#F2F2F2"}} value = {loggedInUser.name}/>
                                 </div>
                                <div class="form-group">
                                    <label for="Username">Username or Email</label>
                                    <input type="text" class="form-control" id="Username" placeholder="Username or Email" style={{backgroundColor:"#F2F2F2"}} value = {loggedInUser.email}/>
                                </div>
                                {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <Grid container justify="space-around">

                                        <KeyboardDatePicker
                                        margin="normal"
                                        id="date-picker-dialog"
                                        label="Date picker dialog"
                                        format="MM/dd/yyyy"
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                        />
                                    </Grid>
                                </MuiPickersUtilsProvider> */}
                                <div class="form-group">
                                     <label for="description">Description</label> 
                                     <input type="text" class="form-control" id="description" placeholder="Description" style={{backgroundColor:"#F2F2F2"}}/>
                                </div>
                                <div class="form-group">
                                     <label for="ventName">Event Name</label>

                                     <input type="text" class="form-control" id="eventName" placeholder="Event Name" style={{backgroundColor:"#F2F2F2"}} value = {event.title}/>
                                     
                                </div>
                                <button onClick = {handleRegister} class="btn btn-primary" style = {{backgroundColor:"#F9A51A", width: "400px", margin:"10px"}}>Registration</button>   
                             </form>

                         </div>
                     </div>
                 </div>
             </div>

    );
};

export default Register;