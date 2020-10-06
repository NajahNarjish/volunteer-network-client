import React, { useEffect, useState } from 'react';
import Volunteer from '../Volunteer/Volunteer';
import volunteer from "../../images/volunteer.png";
import plus from "../../images/plus.png";
import { Link } from 'react-router-dom';



const Admin = () => {
    const [allRegisteredEvents, setAllRegisteredEvents] = useState([]);

    useEffect(() => {
        fetch("https://tranquil-reef-85303.herokuapp.com/showAllRegisteredEvents")
            .then(res => res.json())
            .then(data => setAllRegisteredEvents(data))
    }, [allRegisteredEvents])

    return (
        <div class="container mt-5">
            <div class="row">
                <div class="col-lg-2">
                <Link to ="/admin">
                    <div class="pt-5">
                            <img src ={volunteer} alt="volunteer" style = {{height:"20px"}}></img><span>Vol. register list</span>
                    </div>
                </Link>
                <Link to ="/addNew">
                    <div class="pt-5">
                        <img src ={plus} alt="plus" style = {{height:"20px"}}></img><span>Add event</span>
                        
                    </div>
                </Link>

                </div>
                <div class="col-lg-10 bg-light p-5">
                    <div class="bg-white">
                        <h2 class = "text-center mb-5 pt-3">Volunteer register list</h2>
                        <table class="table table-striped">
                            <thead>
                                <tr class = "text-center">
                                    <th scope="col">Volunteer Name</th>
                                    <th scope="col">Email ID</th>
                                    <th scope="col">Registration Date</th>
                                    <th scope="col">Event</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allRegisteredEvents.map(item => <Volunteer event={item}></Volunteer>) 
                                }
                            </tbody>
                        </table>
                    </div>                   
                </div>
            </div>
        </div>

    );
};

export default Admin;