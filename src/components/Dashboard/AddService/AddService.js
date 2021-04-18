import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import axios from 'axios';

const AddService = () => {

    const [services, setServices] = useState({});
    console.log(services)
    const [image, setImage] = useState(null);
    console.log(image)

    const handleBlur = (e) => {
        const newService = { ...services };
        newService[e.target.name] = e.target.value;
        setServices(newService);
    };

    const handleImage = (e) => {
        const newImage = e.target.files[0];
        setImage(newImage);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', image);
        formData.append('name', services.name);
        formData.append('price', services.price);
        formData.append('desc', services.description);
        fetch('http://localhost:5000/addService', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: formData,
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    console.log(data);
                    alert("Service added successfully")
                }
            }).catch(err => {
                console.log(err);
            })
    }

    return (
        <div className="row">
            <div className="col-md-2 col-sm-6 col-12">
                <Sidebar />
            </div>
            <div className="col-md-10 col-sm-12 col-12 d-flex justify-content-center mt-5 pt-5 pb-5">
                <div class="login-box">
                    <form onSubmit={handleSubmit}>
                        <h1 className="text-secondary mb-5">Add Service</h1>
                        <div class="user-box">
                            <input onBlur={handleBlur} type="text" name="name" required="" />
                            <label>Service Name</label>
                        </div>
                        <div class="user-box">
                            <input onBlur={handleBlur} type="text" name="description" required="" />
                            <label>Description</label>
                        </div>
                        <div class="user-box">
                            <input onBlur={handleBlur} type="text" name="price" required="" />
                            <label>Price</label>
                        </div>
                        <div class="user-box">
                            <input onChange={handleImage} type="file" name="" required="" />
                            <label>Service Name</label>
                        </div>
                        <input class="buttonStyle" type="submit" value="Submit"/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;