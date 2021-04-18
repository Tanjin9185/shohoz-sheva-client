import React from 'react';
import { Link } from 'react-router-dom';
// import { Spring } from 'react-spring';

const ServiceDetails = ({ service }) => {
    return (
        <Link style={{ textDecoration: 'none' }} to={`/service/${service._id}`} className='col-md-4 text-center'>
            <div className="mt-5">
                <h3 className="mt-4 mb-4">{service.name}</h3>
                <img
                    style={{ height: "100px" }}
                    className="img-fluid"
                    src={`data:image/png;base64,${service.image.img}`}
                    alt=""
                />
                <p className="text-secondary mt-3 mb-3">{service.desc}</p>
                <h6>Service Price: {service.price}</h6>
            </div>
        </Link>
    );
};

export default ServiceDetails;