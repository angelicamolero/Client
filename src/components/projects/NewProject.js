import React, { Fragment, useState } from 'react'

const NewProject = () => {

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
                className="btn btn-block btn-primary">
                New Project</button>

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
        </Fragment>
    )
}

export default NewProject;