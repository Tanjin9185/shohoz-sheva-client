import React, { useState } from 'react';
import axios from 'axios';
import './AddService.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashRestoreAlt } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
// import './AddServices.css'
import Sidebar from '../Sidebar/Sidebar';

const AddService = () => {

    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
        let eventData = {
            serviceName: data.serviceName,
            price: data.price,
            description: data.description,
            imageURL: imageURL
        }
        console.log(eventData);
        const url = `https://evening-badlands-03191.herokuapp.com/addServices`


        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(eventData)

        })
            .then(res => {

                alert("product added successfully");
            }
            )
    };

    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData()
        imageData.set('key', 'cc901483d5af9e4fe34505b75ad00754')
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
        <div className="row w-100">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-8 addservice mt-5 pt-5" style={{ backgroundColor: '#E6DDC4' }}>
                <div className="mt-5">
                    <h3 className="mb-3">Add Service</h3>
                    <form className="mb-5" onSubmit={handleSubmit(onSubmit)}>
                        <input className="form-control" name="serviceName" placeholder="Service Name" {...register("serviceName")} />
                        <br />
                        <input className="form-control" name="price" placeholder="Price" {...register("price")} /> <br />
                        <input className="form-control" name="description" placeholder="Description" {...register("description")} /> <br />
                        <input className="form-control" name="image" type="file" onChange={handleImageUpload} /> <br /><br />
                        <input type="submit" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddService;