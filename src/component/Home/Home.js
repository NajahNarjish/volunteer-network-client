import React, { useState, useContext } from 'react';
import Project from '../Project/Project';
import fakedata from '../../fakedata/fakedata.js';
import { Link } from 'react-router-dom';
import { VolunteerContext } from '../../App';


const Home = () => {
    const [projects, setProjects] = useContext(VolunteerContext);

    return (
        <div>
            <div class = 'container'>
                <div class = 'row '>
                    <div className="col-lg-12">
                        <h1 class = 'text-center'>I grow by helping people</h1>
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