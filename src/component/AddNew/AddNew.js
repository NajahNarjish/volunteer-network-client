import React from 'react';
import volunteer from "../../images/volunteer.png";
import plus from "../../images/plus.png";
import { Link } from 'react-router-dom';

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
        <div class="container mt-5">
            <div class="row">
                <div class="col-lg-2">
                <Link to ="/admin">
                    <div class="pt-5">
                            <img src ={volunteer} alt="volunteer" style = {{height:"20px"}}></img><span>Vol. register list</span>
                    </div>
                </Link>
                <Link to ="/addNew">
                    <div class="pt-5">
                        <img src ={plus} alt="plus" style = {{height:"20px"}}></img><span>Add event</span>
                        
                    </div>
                </Link>



                </div>
                <div class="col-lg-10 bg-light p-5">
                    <div class="bg-white">
                        <h2 class = "text-center pt-3">Add event</h2>
                        <button onClick={handleAddEvent}>Add event</button>

                        <form class = "mb-5 p-5">
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
                </div>
            </div>
        </div>

        
    );
};

export default AddNew;
