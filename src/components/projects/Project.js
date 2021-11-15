import React, { useContext } from 'react';
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';


const Project = ({project}) => {
    // Obtain state of projects
    const projectsContext  = useContext(projectContext);
    const { currentProject } = projectsContext;

    const tasksContext = useContext(taskContext)
    const {obtainTasks} = tasksContext;

    // function to add the current project
    const selectProject = id => {
        currentProject(id); //set current project
        obtainTasks(id) //filters the tasks
    }

    return(
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={() => selectProject(project.id)}>
                {project.name}
                </button>
        </li>
    )
}

export default Project;