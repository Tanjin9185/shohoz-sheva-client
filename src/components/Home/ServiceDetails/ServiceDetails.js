import React from "react";
import { Link } from "react-router-dom";
import "./ServiceDetails.css";
// import { Spring } from 'react-spring';

const ServiceDetails = ({ service }) => {
  return (
    <Link
      style={{ textDecoration: "none" }}
      to={`/service/${service._id}`}
      className="col-md-4 text-center pb-5 mb-5"
    >
      <div className="mt-5 shadow h-100 service-details">
        <h3 className="mt-4 mb-4">{service.serviceName}</h3>
        <div className="service-detail">
          <img

            className="img-fluid border-top service-img"
            src={service.imageURL}
            alt=""
          />
          <div class="overlay">
            <div class="text">Book Now</div>
          </div>
        </div>

        <p className="text-justify px-2 mt-5" style={{ color: '#181D31' }}>
          {service.description}
        </p>
        <small className="mt-3 mb-0 fs-1">Service Price: ${service.price}</small>
      </div>
    </Link>
  );
};

export default ServiceDetails;
