import React, { Fragment, useContext } from 'react'
import Task from './Task';
import projectContext from '../../context/projects/projectContext';

const ListTask = (params) => {

        // Obtain state of projects
    const projectsContext  = useContext(projectContext);
    const { project, deleteProject } = projectsContext;

    // if theres no selected project
    if(!project) return <h2> Select a Project</h2>

    // Array destructuring to get current project
    const [currentProject] = project

    const tasks = [
            { name: 'Choose a Name', state: true },
            { name: 'Choose a Color', state: false },
            { name: 'Choose a Payment Method', state: false },
            { name: 'Choose a Host', state: true }
            ];
    
    const onClickDelete = () => {
        deleteProject(currentProject.id)
    }

    return(
        <Fragment>
            <h2>Project: {currentProject.name}</h2>
            <ul className="list-task">
                { tasks.length === 0
                ? (<li className="task"><p>There are no tasks</p></li>)
                : tasks.map(task => (
                    <Task
                    task={task}
                    />
                ))
                }
            </ul>
            <button
                type="button"
                className="btn btn-eliminate"
                onClick= {onClickDelete}>
                Eliminate Project &times;
            </button>
        </Fragment>
    )
}

export default ListTask;
