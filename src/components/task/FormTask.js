import React, {useContext}  from 'react'
import projectContext from '../../context/projects/projectContext';

const FormTask = () => {

    // Obtain state of projects
    const projectsContext  = useContext(projectContext);
    const { project } = projectsContext;

    // if theres no selected project
    if(!project) return null

    // Array destructuring to get current project
    const [currentProject] = project
    
    return(
        <div className="form">
            <form>
                <div className="container-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder=" Task's Name"
                        name="name"
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
        </div>
    )
}

export default FormTask;