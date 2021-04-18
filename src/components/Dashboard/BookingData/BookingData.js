import React from 'react';
import { Card } from 'react-bootstrap';

const BookingData = ({ book }) => {
    return (
        <div className="mt-5 mt-5 mt-5">
            <div className="mt-5 mt-5 mt-5">
            <Card style={{ width: '25rem' }}>
                <Card.Body>
                    <Card.Title>Your Booking Service: <br/> <strong>{book.data.userName}</strong></Card.Title>
                    <Card.Title>Service Price: {book.data.price}</Card.Title>
                </Card.Body>
            </Card>
            </div>
        </div>
    );
};

export default BookingData;