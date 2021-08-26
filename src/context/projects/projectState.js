import React,  {useReducer} from 'react'
import projectContext from './projectContext'
import projectReducer from './projectReducer'
import { FORM_PROJECT, OBTAIN_PROJECTS} from '../../types'



const ProjectState = props => {
    const projects = [
        { id: 1, name: 'Online Store'},
        {id: 2, name: 'Intranet'},
        {id:3, name: 'Website Design'}
    ]

    const initialState = {
        projects : [],
        form : false
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

    return(
        <projectContext.Provider
        value={{
            projects: state.projects,
            form: state.form,
            showForm,
            obtainProjects
        }}
        >
           
            {props.children}
        </projectContext.Provider>
    )
}

export default ProjectState;