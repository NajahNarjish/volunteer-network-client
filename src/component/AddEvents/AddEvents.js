import React, { useContext, useEffect } from 'react';
import { VolunteerContext } from '../../App';

// import fakedata from '../../fakedata/fakedata.js';

const AddEvents = () => {
    // const [loggedInUser, setLoggedInUser, projects, setProjects] = useContext(VolunteerContext);
    // let eventParameters  = {};
    //     if (document.getElementById("exampleInputTitle").value) {
    //         eventParameters = {
    //                     title: document.getElementById("exampleInputTitle").value,
                        // key : document.getElementById("exampleInputKey").value,
                        // image: document.getElementById("exampleInputImage").value
    //                 };
    //             }

    // useEffect(() => {
    //     fetch("http://localhost:5000/events")
    //         .then(res => res.json())
    //         .then(data => setProjects(data))
    // }, [])
    
    const handleAddEvent = () => {
        console.log("clicked");
        // fetch("https://tranquil-reef-85303.herokuapp.com/addEvent", {
        //     method: 'POST',
        //     headers: {
        //         "Content-type": "application/json"
        //     },
        //     body: JSON.stringify(fakedata)

        // })
    }

    // const handleAddEvent = () => {
    //     fetch("http://localhost:5000/addEvent", {
    //         method: 'POST',
    //         headers: {
    //             "Content-type": "application/json"
    //         },
    //         body: JSON.stringify(eventParameters)

    //     })
    // }
    return (
        <div class = "container">
            <div className="col-lg-2"></div>
            <div className="col-lg-10">
            <form>
                <div class="form-group">
                    <label for="exampleInputTitle">Event Title</label>
                    <input type="text" class="form-control" id="exampleInputTitle" ></input>
                </div>

                <div class="form-group">
                    <label for="exampleInputKey">Key</label>
                    <input type="text" class="form-control" id="exampleInputKey" aria-describedby="keyHelp"></input>
                    <small id="keyHelp" class="form-text text-muted">type the title again in lower case without any space, that becomes the key</small>
                </div>

                <div class="form-group">
                    <label for="exampleInputImage">Image</label>
                    <input type="text" class="form-control" id="exampleInputImage" aria-describedby="imageHelp"></input>
                    <small id="imageHelp" class="form-text text-muted">please put a url after hosting the image in a third party image hosting site</small>
                </div>
                    <button onClick={handleAddEvent} class="btn btn-primary">Add event</button>
            </form>
            </div>
            <div className="col-lg-2"></div>
        </div>
    );
};

export default AddEvents;