import React,  {useReducer} from 'react'
import projectContext from './projectContext'
import projectReducer from './projectReducer'
import { FORM_PROJECT} from '../../types'

const ProjectState = props => {
    const initialState = {
        projects : [
            { id: 1, name: 'Online Store'},
            {id: 2, name: 'Intranet'},
            {id:3, name: 'Website Design'}
        ],
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

    return(
        <projectContext.Provider
        value={{
            projects: state.projects,
            form: state.form,
            showForm
        }}
        >
           
            {props.children}
        </projectContext.Provider>
    )
}

export default ProjectState;