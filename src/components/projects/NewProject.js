import React, { Fragment, useContext, useState } from 'react'
import projectContext from '../../context/projects/projectContext';

const NewProject = () => {

    // Obtain state of form
    const projectsContext  = useContext(projectContext);
    const { form, showForm } = projectsContext;


    const [ project, saveProject ] = useState({
        name: ''
    });

    const { name } = project;

    const onChangeProject = e => {
        saveProject({
            ...project,
            [e.target.name] : e.target.value
        })
    }

    const onSubmitProject = e => {
        e.preventDefault();

        //validate project

        //add to state

        //restart form
    }

    return(
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primary"
                onClick={() => showForm()}>
                New Project
            </button>

            {
                form ? (
                <form 
                    className="form-new-project"
                    onSubmit={onSubmitProject}>
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Project's Name"
                        name="name"
                        value={name}
                        onChange={onChangeProject}
                        />
                    <input 
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="Add Project"   
                    />
                </form>
                )
                : null 
            }
        </Fragment>
    )
}

export default NewProject;