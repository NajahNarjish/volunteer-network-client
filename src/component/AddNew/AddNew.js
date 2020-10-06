import React from 'react';
import volunteer from "../../images/volunteer.png";
import plus from "../../images/plus.png";
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import "./AddNew.css"

const AddNew = () => {
    const { register, handleSubmit,  errors } = useForm();

    const onSubmit = data => {
        fetch("https://tranquil-reef-85303.herokuapp.com/addSingleEvent", {
          method: 'POST',
          headers:{ 
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        })
        .then (res => res.json())
        .then (data => {
          if(data){
            
            alert("Event added successfully")
          }
        })      
      };

    return (
        <div class="container mt-5">
            <div class="row">
                <div class="col-lg-2">
                    <Link to="/admin">
                        <div class="pt-5">
                            <img src={volunteer} alt="volunteer" style={{ height: "20px" }}></img><span>Vol. register list</span>
                        </div>
                    </Link>
                    <Link to="/addNew">
                        <div class="pt-5">
                            <img src={plus} alt="plus" style={{ height: "20px" }}></img><span>Add event</span>
                        </div>
                    </Link>
                </div>
                <div class="col-lg-10 bg-light p-5">
                    <div class="bg-white">
                        <h2 class="text-center pt-3">Add New Event</h2>

                        <form className = "addNewForm" onSubmit={handleSubmit(onSubmit)}>

                            <input name="title"  ref={register({ required: true })} placeholder="title" />
                            {errors.name && <span className="error">Title is required</span>}

                            <input name="key" ref={register({ required: true })} placeholder="key" />
                            <small class="form-text text-muted">type the title again in lower case without any space, that becomes the key</small>
                            {errors.email && <span className="error">key is required</span>}

                            <input name="image"  ref={register({ required: true })} placeholder="Image url" />
                            {errors.email && <span className="error">image url is required</span>}
                            <small class="form-text text-muted">please put a url after hosting the image in a third party image hosting site</small>
                        
                            <input type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddNew;
