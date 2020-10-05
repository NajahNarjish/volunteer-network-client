import React, { useState,  useEffect } from 'react';
import Project from '../Project/Project';


const Home = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("https://tranquil-reef-85303.herokuapp.com/events")
        .then(res => res.json())
        .then(data => setProjects(data))
    }, [])
   
    return (
        <div>
            <div class = 'container'>
                <div class = 'row mb-5'>
                    <div className="col-lg-12">
                        <h1 class = 'text-center'>Grow by helping people</h1>
                        <h4 class = 'text-center'>Interested in any event below?</h4>
                     </div>
                </div>
                <div class = 'row'>
                    { 
                        projects.map (item => <Project project ={item}></Project>) 
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;