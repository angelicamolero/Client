import React, { Fragment } from 'react'
import Task from './Task';

const ListTask = (params) => {

const tasks = [
        { name: 'Choose a Name', state: true },
        { name: 'Choose a Color', state: false },
        { name: 'Choose a Payment Method', state: false },
        { name: 'Choose a Host', state: true }
        ];

    return(
        <Fragment>
            <h2>Project: Online Store</h2>
            <ul className="list-task">
                { tasks.length === 0
                ? (<li className="task"><p>There are no tasks</p></li>)
                : tasks.map(task => (
                    <Task
                    task={task}
                    />
                ))
                }
            </ul>
            <button
                type="button"
                className="btn btn-eliminate">
                Eliminate Project &times;
            </button>
        </Fragment>
    )
}

export default ListTask;
