import React, {  useEffect, useState } from 'react';
import Volunteer from '../Volunteer/Volunteer';


const Admin = () => {
    const [allRegisteredEvents, setAllRegisteredEvents] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/showAllRegisteredEvents")
        .then(res => res.json())
        .then(data => setAllRegisteredEvents(data))
    }, [])
   
    return (
        <div>
            {
               allRegisteredEvents.map(item => <Volunteer event={item}></Volunteer>) 
            }

        </div>
        
    );
};

export default Admin;