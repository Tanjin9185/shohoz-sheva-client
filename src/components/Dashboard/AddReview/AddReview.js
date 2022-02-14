import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddReview = () => {

    const { register, handleSubmit, errors } = useForm();

    const [imageURL, setImageURL] = useState(null);


    const onSubmit = data => {
        const reviewData = {
            name: data.name,
            description: data.description,
            rating: data.rating,
            imageURL: imageURL
        };
        console.log("maria", reviewData);
        const url = 'https://evening-badlands-03191.herokuapp.com/addReview'
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => console.log('server side response', res))
    };

    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', 'cc901483d5af9e4fe34505b75ad00754');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    return (
        <div className="row">
            <div className="col-md-3 col-sm-6 col-12">
                <Sidebar />
            </div>
            <div className="col-md-8 addservice mt-5 pt-5" style={{ backgroundColor: '#E6DDC4' }}>
                <div clasName="mt-5">
                    <h1 className="text-secondary mb-5">Add Review</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>


                        <input className="form-control" placeholder="name" name="name"{...register("name")} />
                        <br />

                        <input className="form-control" placeholder="description" name="description"{...register("description")} />
                        <br />

                        <input className="form-control" placeholder="rating" name="rating"{...register("rating")} />
                        <br />

                        <input className="form-control" onChange={handleImageUpload} type="file" name="image" />
                        <br /><br />
                        <input className="form-control" type="submit" value="Submit" />
                        <br /> </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;