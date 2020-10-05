import React from 'react';
import trash from "../../images/trash.png";

const Volunteer = (props) => {
    const { name, email, participationDate,  title, _id } = props.event;
    const deleteRegistration = () => {
        fetch(("https://tranquil-reef-85303.herokuapp.com/delete/" + _id), {
            method: 'DELETE'
        })
        console.log("deleted");
                 
    }

    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{(new Date(participationDate).toDateString("dd/mm/yyyy"))}</td>
            <td>{title}</td>
            <td><img onClick={() => deleteRegistration()} class = "w-50" style = {{backgroundColor:"red"}}src ={trash} alt="trash"></img></td>
        </tr>
    );
};

export default Volunteer;