import React, {useContext} from 'react'
import taskContext from '../../context/tasks/taskContext';
import projectContext from '../../context/projects/projectContext';

const Task = ({task}) => {

    // Obtain state of projects
    const projectsContext  = useContext(projectContext);
    const { project } = projectsContext;

    const tasksContext = useContext(taskContext)
    const { deleteTask, obtainTasks, changeStateTask, saveActualTask } = tasksContext;

    //extract project
    const [ currentProject ] = project

    //function when user click delete task

    const taskDelete = id => {
        deleteTask(id);
        obtainTasks(currentProject.id);
    }

    //function that modifies the state of tasks

    const changeState = task => {
        if(task.state) {
            task.state = false;
        } else {
            task.state = true;
        }
        changeStateTask(task);
    }

    //add actual task when user needs to edit it
    const selectTask = task => {
        saveActualTask(task)
    }

    return(
        <li className="task shadow">
            <p>{task.name}</p>

            <div className="state">
                { task.state 
                ? (
                    <button
                        type="button"
                        className="completed"
                        onClick= {() => changeState(task)}>
                        Completed
                    </button>
                )
                : (
                    <button
                        type="button"
                        className="incompleted"
                        onClick= {() => changeState(task)}>
                        Incompleted
                    </button>
                ) 
            }
            </div>

            <div className="actions"> 
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => saveActualTask(task)}>
                    Edit
                </button>

                <button
                type="button"
                className="btn btn-secondary"
                onClick={() => taskDelete(task.id)}>
                    Delete
                </button>
            </div>
        </li>
        )
}

export default Task;
