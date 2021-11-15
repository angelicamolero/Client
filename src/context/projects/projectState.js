import React,  {useReducer} from 'react'
import projectContext from './projectContext'
import projectReducer from './projectReducer'
import { FORM_PROJECT, OBTAIN_PROJECTS, ADD_PROJECT, VALIDATE_FORM, CURRENT_PROJECT } from '../../types';
import {v4 as uuid} from 'uuid';


const ProjectState = props => {
    const projects = [
        { id: 1, name: 'Online Store'},
        {id: 2, name: 'Intranet'},
        {id: 3, name: 'Website Design'}
    ]

    const initialState = {
        projects : [],
        form : false,
        errorForm: false,
        project: null
    }
    // Dispatch to run actions
    const [state, dispatch] = useReducer(projectReducer, initialState);

    // Functions for CRUD
    const showForm = () => {
        dispatch({
            type: FORM_PROJECT
        })
    }

    // Obtain projects 
    const obtainProjects = () => {
        dispatch({
            type: OBTAIN_PROJECTS,
            payload: projects
        })
    }

    const uuid = require('uuid').v4
    // Add new project
    const addProject = project => {
        project.id = uuid();

        dispatch({
            type: ADD_PROJECT,
            payload: project
        })
    }

    // VALIDATE FORM AND SHOW ERROR

    const showError = () => {
        dispatch ({
            type: VALIDATE_FORM
        })
    }

    // select the project the users clicked
    const currentProject = projectId => {
        dispatch({
            type: CURRENT_PROJECT,
            payload: projectId
        })
    }


    return(
        <projectContext.Provider
        value={{
            projects: state.projects,
            form: state.form,
            errorForm: state.errorForm,
            project: state.project,
            showForm,
            obtainProjects,
            addProject,
            showError,
            currentProject
        }}
        >
           
            {props.children}
        </projectContext.Provider>
    )
}

export default ProjectState;