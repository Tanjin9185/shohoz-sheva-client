import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { UserContext } from "../../../App";
import PaymentProcess from "../PaymentProcess/PaymentProcess";
import Sidebar from "../Sidebar/Sidebar";
import './Booking.css';

const Booking = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { id } = useParams()
    console.log(id)
    const [serviceData, setServiceData] = useState({})

    useEffect(() => {
        fetch(`https://evening-badlands-03191.herokuapp.com/serviceBook/${id}`)
            .then(res => res.json())
            .then(data => {
                setServiceData(data);
            })
    }, [])
    console.log(serviceData)
    const { name, price } = serviceData

    const [serviceInfo, setServiceInfo] = useState({})
    console.log(serviceInfo, loggedInUser)

    const newService = { name, price, ...loggedInUser };
    console.log("Name Service:", newService)
    const handleBlur = (e) => {
        newService[e.target.name] = e.target.value;
        setServiceInfo(newService);
    };
    return (
        <div className="row">
            <div className="col-md-2 col-sm-6 col-12">
                <Sidebar />
            </div>
            <div className="col-md-10 col-sm-12 col-12 d-flex justify-content-center mt-5 pt-5 pb-5">
                <div class="login-box">
                    <form>
                        <h1 className="text-secondary mb-5">Booking Item</h1>
                        <div class="user-box">
                            <input value={loggedInUser.userName} onBlur={handleBlur} type="text" required="" />
                            <label>Username</label>
                        </div>
                        <div class="user-box">
                            <input value={serviceData.price} type="text" name="price" required="" />
                            <label>Price</label>
                        </div>
                        <div class="user-box">
                            <input type="text" name="service" required="" value={serviceData.name} />
                            <label>Service</label>
                        </div>
                    </form>
                    <PaymentProcess newService={newService} />
                </div>
            </div>
        </div>
    );
};

export default Booking;
