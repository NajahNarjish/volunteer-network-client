import React, { useContext } from 'react';
import "./Project.css"
import { VolunteerContext } from '../../App';
import { Link } from 'react-router-dom';

const Project = (props) => {
    const [projects, setProjects, project, setProject] = useContext(VolunteerContext);

    const {title, image, key, title_background} = props.project;
    return (
    // <div class = "col-lg-3 projectDiv" onClick={() => setProject(props.project)}>
        <div class = "col-lg-3 projectDiv" >
            <Link to= {"/register/"+key}>
            
            <img style = {{height:"300px", marginBottom: "35px"}} src = {image} alt="project"></img>
            <p>{title}</p>
            </Link>
            
            
        </div>
    );
};

export default Project;