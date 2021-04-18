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
        const url = 'https://arcane-garden-75913.herokuapp.com/addReview'
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
        .then(function (response){
            setImageURL(response.data.data.display_url);
        })
        .catch(function (error) {
            console.log(error);
        });

    }
    return (
        <div className="row">
            <div className="col-md-2 col-sm-6 col-12">
                <Sidebar />
            </div>
            <div className="col-md-10 col-sm-12 col-12 d-flex justify-content-center mt-5 pt-5 pb-5">
                <div class="login-box">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h1 className="text-secondary mb-5">Add Review</h1>
                        <div class="user-box">
                            <input placeholder="name" name="name"{...register("name")} />
                        </div>
                        <div class="user-box">
                            <input placeholder="description" name="description"{...register("description")} />
                        </div>
                        <div class="user-box">
                            <input placeholder="rating" name="rating"{...register("rating")} />
                        </div>
                        <div class="user-box">
                            <input onChange={handleImageUpload} type="file" name="image" />
                        </div>
                        <input class="buttonStyle" type="submit" value="Submit"/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;