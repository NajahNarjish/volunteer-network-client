import React from 'react';

const SingleEvent = (props) => {
    const { image, title, _id, participationDate } = props.registeredEvent;
    
    const deleteRegistration = () => {
        fetch(("https://tranquil-reef-85303.herokuapp.com/delete/" + _id), {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => { 
                if(result){
                    console.log("deleted successfully");
                }    
            });       
    }

    return (
        <div class="col-lg-6" id = "single_event">
                <div class="card mb-3" style={{maxWidth: "540px"}}>
                    <div class="row no-gutters">
                        <div class="col-md-4">
                            <img src={image} class="card-img" alt="..."></img>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">{title}</h5>
                                <p class="card-text">{(new Date(participationDate).toDateString("dd/mm/yyyy"))}</p>
                                <button onClick={() => deleteRegistration()}>delete</button>
                            </div>
                        </div>
                    </div>
                </div>     
            </div>
    );
};

export default SingleEvent;