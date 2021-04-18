import React, { useEffect, useState } from 'react';
import ReviewDetails from '../ReviewDetails/ReviewDetails';


const Review = () => {
    const [reviewData, setReviewData] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviewList')
        .then (res => res.json())
        .then(data=> setReviewData(data))
    },[])
    return (
        <section className="container">
            <div className="text-center mt-5">
                <h5>REVIEW</h5>
                <h1 className="text-success">Our Most Valuable Review</h1>
                <div className="d-flex justify-content-center">
                    <div className="row w-75">
                        {
                            reviewData.map(review => <ReviewDetails review={review}></ReviewDetails>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Review;