import React from 'react';

const ProjectDetails = ({ project }) => {
    return (
        <div className='col-md-4 text-center'>
            <div className="mt-5">
                <img src={project.image} alt="" />
                <h4 className="mt-4 mb-4">{project.season}</h4>
                <h3 className="text-secondary">{project.couple}</h3>
            </div>
        </div>
    );
};

export default ProjectDetails;