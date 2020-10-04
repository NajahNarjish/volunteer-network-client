import React, { useState, useContext, useEffect } from 'react';
import Project from '../Project/Project';
import fakedata from '../../fakedata/fakedata.js';
import { Link } from 'react-router-dom';
import { VolunteerContext } from '../../App';


const Home = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/events")
        .then(res => res.json())
        .then(data => setProjects(data))
    }, [])
    const handleAddEvent = () => {
        fetch("http://localhost:5000/addEvent", {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(fakedata)

        })
    }

    return (
        <div>
            <div class = 'container'>
                <div class = 'row '>
                    <div className="col-lg-12">
                        <h1 class = 'text-center'>I grow by helping people</h1>
                        <button onClick = {handleAddEvent}>Add event</button>
                     </div>
                </div>
                <div class = 'row'>
                    
                    {
                        
                        projects.map (item => <Link to= "/register"><Project project ={item}></Project></Link>)
                        
                    }

                    
                 
                </div>

            </div>

        </div>
    );
};

export default Home;