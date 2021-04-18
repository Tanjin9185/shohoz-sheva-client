import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import BookingData from '../BookingData/BookingData';
import Sidebar from '../Sidebar/Sidebar';

const BookingList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)


    const [booking, setBooking] = useState([])

    useEffect(() => {
        fetch(`https://arcane-garden-75913.herokuapp.com/bookingList?data.email=+loggedInUser.email`)
            .then(res => res.json())
            .then(data => filteredOrder(data))
    }, [])
    // console.log("From Booking List:",loggedInUser.email)

    const filteredOrder = (booking) => {
        console.log("Booking Data", booking[0].data.email)
        const filterData = booking.filter((order) => order.data.email === loggedInUser.email)
        console.log("FilterData:", filterData)
        setBooking(filterData)
    }

    return (
        <div className="row">
            <div className="col-md-2 col-sm-6 col-12">
                <Sidebar />
            </div>
            <div className="col-md-10 col-sm-12 col-12 d-flex justify-content-center mt-5 pt-5 pb-5">
                <h1 className="text-center">Your Booking Area</h1>
                {
                    booking.map(book => <BookingData book={book}></BookingData>)
                }
            </div>
        </div>
    );
};

export default BookingList;