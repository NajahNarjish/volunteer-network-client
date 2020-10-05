import React from 'react';

const Volunteer = (props) => {
    const { name, email, title } = props.event;
    
    return (
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-2"></div>
                <div class="col-12 col-lg-8">
                    <p><span>Volunteer-Name:{name}</span>
                    <span>Email:{email}</span>
                    <span>Event name:{title}</span>
                    </p>
                </div>
                <div class="col-12 col-lg-2"></div>
            </div>      
        </div>
    );
};

export default Volunteer;