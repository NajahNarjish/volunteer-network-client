import React, { useState, useEffect } from 'react';
import SingleEvent from '../SingleEvent/SingleEvent';

const Events = () => {
    const [registeredEvents, setRegisteredEvents] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/showRegisteredEvents")
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