import React, { Fragment, useContext } from 'react'
import Task from './Task';
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';
import { CSSTransition, TransitionGroup} from 'react-transition-group'

const ListTask = (params) => {

        // Obtain state of projects
    const projectsContext  = useContext(projectContext);
    const { project, deleteProject } = projectsContext;

    //tasks context
    const tasksContext = useContext(taskContext)
    const { tasksproject } = tasksContext;

    // if theres no selected project
    if(!project) return <h2> Select a Project</h2>

    // Array destructuring to get current project
    const [currentProject] = project
    
    const onClickDelete = () => {
        deleteProject(currentProject.id)
    }

    return(
        <Fragment> 
            <h2>Project: {currentProject.name}</h2>
            <ul className="list-task">
                { tasksproject.length === 0
                ? (<li className="task"><p>There are no tasks</p></li>)
                : <TransitionGroup>
                    {tasksproject.map(task => (
                    <CSSTransition 
                    key={task.id}
                    timeout={200}
                    className="task">
                        <Task
                        task={task}
                        />
                    </CSSTransition>
                ))}
                </TransitionGroup>
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
