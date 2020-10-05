import React from 'react';

const AddNew = () => {
    const handleAddEvent = () => {
        const event = {};
        fetch("https://tranquil-reef-85303.herokuapp.com/addEvent", {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(event)
        })
    }

    return (
        <div>
             <div class = "container">
                <button onClick = {handleAddEvent}>Add event</button>
            </div>    
        </div>
    );
};

export default AddNew;
