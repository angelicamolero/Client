import React, { useContext} from 'react';
import Project from './Project';
import projectContext from '../../context/projects/projectContext';

const ListProjects = () => {

    const projectsContext  = useContext(projectContext);
    const { projects } = projectsContext;
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