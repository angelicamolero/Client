import React from 'react';
import Project from './Project';

const ListProjects = () => {

    const projects = [
        {name: 'Online Store'},
        {name: 'Intranet'},
        {name: 'Website Design'}
    ]

    return(
        <ul className="list-projects">
            {projects.map(project => (
                <Project
                    project={project}
                />
            ))}
        </ul>
    )
}

export default ListProjects;