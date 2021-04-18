import React, { useContext, useEffect, useState } from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserShield, faShoppingCart, faList, faStarHalfAlt, faSort, faTasks } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const Sidebar = () => {

const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() =>{
        const url = 'http://localhost:5000/isAdmin'
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({email:loggedInUser.email})
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    },[])
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                <div>
                    
                    {/* { */}
                        // isAdmin ? 

                        <div>
                            <li>
                        <Link to="/orderList" className="text-white" >
                            <FontAwesomeIcon icon={faSort} /> <span>Order List</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addService" className="text-white" >
                            <FontAwesomeIcon icon={faAddressCard} /> <span>Add Service</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/makeAdmin" className="text-white" >
                            <FontAwesomeIcon icon={faUserShield} /> <span>Make Admin</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/manageService" className="text-white" >
                            <FontAwesomeIcon icon={faTasks} /> <span>Manage Service</span>
                        </Link>
                    </li>
                        </div> 
                        //   : 
                        <div>
                            <li>
                        <Link to="/service/:id" className="text-white">
                            <FontAwesomeIcon icon={faShoppingCart} /> <span>Book</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/bookingList" className="text-white">
                            <FontAwesomeIcon icon={faList} /> <span>Booking List</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addReview" className="text-white">
                            <FontAwesomeIcon icon={faStarHalfAlt} /> <span>Review</span>
                        </Link>
                    </li>
                        </div>
                    {/* } */}
                </div>
            </ul>
        </div>
    );
};

export default Sidebar;