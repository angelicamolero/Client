import React, {useContext, useState}  from 'react'
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';

const FormTask = () => {

    // Obtain state of projects
    const projectsContext  = useContext(projectContext);
    const { project } = projectsContext;

    const tasksContext = useContext(taskContext)
    const {errortask, addTasks, validateTask, obtainTasks } = tasksContext;

    //Form state
    const [task, saveTask ] = useState({
        name: ''
    })

    const { name } = task;

    // if theres no selected project
    if(!project) return null

    // Array destructuring to get current project
    const [currentProject] = project

    const handleChange = e => {
        saveTask({
            ...task,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();
        //validate
        if(name.trim() === '') {
            validateTask();
            return;
        }
        //pass validation

        //add new task
        task.projectId = currentProject.id;
        task.state = false;
        addTasks(task)

        //obtain and filter the tasks
        obtainTasks(currentProject.id)

        //restart form
        saveTask({
            name: ''
        })
    }
    
    return(
        <div className="form">
            <form onSubmit={onSubmit}>
                <div className="container-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder=" Task's Name"
                        name="name"
                        value={name}
                        onChange={handleChange}
                    />
                </div>
                <div className="container-input">
                    <input
                      type="submit"
                      className="btn btn-primary btn-subtmit btn-block"
                      value="Add Task"
                    />
                </div>
            </form>
            {errortask ? <p className="message error"> A name is needed</p> : null }
        </div>
    )
}

export default FormTask;