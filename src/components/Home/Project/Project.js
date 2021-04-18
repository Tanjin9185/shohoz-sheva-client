import React from 'react';
import project1 from '../../Image/project1.jpg';
import project2 from '../../Image/project2.jpg';
import project3 from '../../Image/project3.jpg';
import ProjectDetails from '../ProjectDetails/ProjectDetails';


const projectData = [
    {
        image: project1,
        season: 'Electronics Service',
        couple: 'Dhaka'
    },
    {
        image: project2,
        season: 'Tourist Service',
        couple: 'Bandarban Resort'
    },
    {
        image: project3,
        season: 'Tax Service',
        couple: 'Chittagong '
    }
]


const Project = () => {
    return (
        <section className="service-container">
            <div className="text-center mt-5">
                <h5>Service</h5>
                <h1 className="text-danger">Browse Our Recent Service</h1>
                <div className="d-flex justify-content-center">
                    <div className="row w-75">
                        {
                            projectData.map(project => <ProjectDetails project={project}></ProjectDetails>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Project;