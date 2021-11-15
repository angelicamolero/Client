import React, { useReducer } from 'react'
import TaskContext from './taskContext'
import TaskReducer from './taskReducer'
import { TASKS_PROJECT, ADD_TASK } from '../../types/index'

const TaskState = props => {
    const initialState = {
        tasks: [
            { name: 'Choose a Name', state: true, projectId: 1 },
            { name: 'Choose a Color', state: false, projectId: 2 },
            { name: 'Choose a Payment Method', state: false, projectId: 3 },
            { name: 'Choose a Host', state: true, projectId: 4 },
            { name: 'Choose a Name', state: true, projectId: 3 },
            { name: 'Choose a Color', state: false, projectId: 2 },
            { name: 'Choose a Payment Method', state: false, projectId: 4 },
            { name: 'Choose a Host', state: true, projectId: 1 },
            { name: 'Choose a Name', state: true, projectId: 4 },
            { name: 'Choose a Color', state: false, projectId: 3 },
            { name: 'Choose a Payment Method', state: false, projectId: 1 },
            { name: 'Choose a Host', state: true, projectId: 2 }
        ],
        tasksproject: null
    }

    const [state, dispatch] = useReducer(TaskReducer, initialState);

    // create fucntions

    // obtain tasks from a project
    const obtainTasks = projectId => {
        dispatch({
            type: TASKS_PROJECT,
            payload: projectId
        })
    }

    const addTasks = task => {
        dispatch ({
            type: ADD_TASK,
            payload: task
        })
    }

    return(
        <TaskContext.Provider
            value={{
                tasks: state.tasks,
                tasksproject: state.tasksproject,
                obtainTasks,
                addTasks
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}
export default TaskState;