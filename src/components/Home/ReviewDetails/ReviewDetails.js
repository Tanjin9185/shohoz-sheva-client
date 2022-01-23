import React from 'react';

const ReviewDetails = ({ review }) => {
    return (
        <div className='col-md-4 text-center'>
            <div className="mt-5 border shadow-sm" style={{ height: '350px' }}>
                <div>
                    <img src={review.imageURL} alt="" className="img-responsive img-fluid w-100" />
                </div>
                <h4 className="mt-4 mb-4">{review.name}</h4>
                <small className="text-secondary mx-2">{review.description}</small>
                <p>{review.rating}</p>
            </div>
        </div>
    );
};

export default ReviewDetails;