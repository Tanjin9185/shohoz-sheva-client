import React, { useEffect, useState } from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';


const Service = () => {

    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
            })
    }, [])


    return (
        <section className="service-container  my-5 py-5" style={{ backgroundColor: '#678983' }}>
            <div className="text-center mt-5">
                <h1>Our Service</h1>
                <div className="d-flex justify-content-center">
                    <div className="row w-75">
                        {
                            services.map(service => <ServiceDetails service={service}></ServiceDetails>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;