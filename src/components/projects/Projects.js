import  React from 'react';
import Sidebar from '../layout/Sidebar';
import Bar from '../layout/Bar';
import FormTask from '../task/FormTask';
import ListTask from '../task/ListTask';

const Projects = () => {
    return (
        <div className="container-app">
            <Sidebar/>
            <div className="section-primary">
                <Bar/>
                <main>
                    <FormTask/>
                    <div className="container-tasks">
                    <ListTask/>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Projects;