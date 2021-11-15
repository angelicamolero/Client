import React, { useContext, useEffect} from 'react';
import Project from './Project';
import projectContext from '../../context/projects/projectContext';


const ListProjects = () => {

    const projectsContext  = useContext(projectContext);
    const { projects, obtainProjects } = projectsContext;

    useEffect(() => {
        
        obtainProjects();
    },[]);

    if(projects.length === 0) return <p>No projects, create one!</p>;

    return(
        <ul className="list-projects">
            {projects.map(project => (
                <Project
                key={project.id}
                project={project}
                />
            ))}
        </ul>
    )
}

export default ListProjects;