import React from 'react';
// import fakedata from '../../fakedata/fakedata.js';

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
            <button onClick = {handleAddEvent}>Add event</button>
        </div>
    );
};

export default AddNew;
