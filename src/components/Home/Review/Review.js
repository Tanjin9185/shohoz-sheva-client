import React, { useEffect, useState } from 'react';
import ReviewDetails from '../ReviewDetails/ReviewDetails';


const Review = () => {
    const [reviewData, setReviewData] = useState([])
    useEffect(() => {
        fetch('https://evening-badlands-03191.herokuapp.com/reviewList')
            .then(res => res.json())
            .then(data => setReviewData(data))
    }, [])
    return (
        <section className="shadow-lg py-5">
            <div className="container">
                <div className="text-center mt-5">
                    <h1 className="text-success">Our Most Valuable Review</h1>
                    <div className="d-flex justify-content-center">
                        <div className="row w-75">
                            {
                                reviewData?.map(review => <ReviewDetails review={review}></ReviewDetails>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Review;