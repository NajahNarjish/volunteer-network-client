import React, { useState, useEffect, useContext } from 'react';
import SingleEvent from '../SingleEvent/SingleEvent';
import { VolunteerContext } from '../../App';

const Events = () => {
    const [loggedInUser, setLoggedInUser] = useContext(VolunteerContext);

    const [registeredEvents, setRegisteredEvents] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/showRegisteredEvents?email="+ loggedInUser.email)
        .then(res => res.json())
        .then(data => setRegisteredEvents(data))
    }, [registeredEvents])
    return (
        
            <div className="container">
                <div className="row">
                {
                    registeredEvents.map(item =><SingleEvent registeredEvent = {item} ></SingleEvent>)
                }

                </div>

            </div>
            
            
        
    );
};

export default Events;