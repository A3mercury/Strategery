import React, { useEffect, useState } from 'react';
import { Route, Redirect, Link, useRouteMatch, useHistory, Switch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Project from './Project';
import AddProject from './AddProject';

import ProjecsService from '../../services/ProjectsService';

function Projects() {
    const [projects, setProjects] = useState([]);
    const match = useRouteMatch(); 
    const history = useHistory();


    useEffect(() => {
        ProjecsService._index()
            .then((projects) => {
                setProjects(projects);
            });
    }, []);

    const selectProject = (projectId) => {
        history.push(match.path + '/' + projectId);
    };

    return (
        <div className="container">
            <Switch>
                <Route exact path={match.path}>
                    <div className="-ml-4 -mt-4 py-6 flex justify-between items-center flex-wrap sm:flex-no-wrap">
                        <div className="ml-4 mt-4">
                            <h1 className="text-2xl font-semibold text-gray-900">
                                Your Projects
                            </h1>
                        </div>
                        <div className="ml-4 mt-4 flex-shrink-0">
                            <span className="inline-flex rounded-md shadow-sm">
                                <Link 
                                    to={`${match.path}/new-project`}
                                    type="button" 
                                    className="relative inline-flex items-center px-4 py-3 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700">
                                    <FontAwesomeIcon icon="plus" size="1x" />
                                </Link>
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="-my-2 pt-2 pb-10 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                            <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">

                                {projects.map((project) => {
                                    return (
                                        <div key={project.id} className="bg-white shadow overflow-hidden sm-rounded-md">
                                            <ul>
                                                <li>
                                                    <a 
                                                        onClick={() => selectProject(project.id)} 
                                                        className="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out hover:no-underline cursor-pointer">
                                                        <div className="px-4 py-4 sm:px-6">
                                                            <div className="flex items-center justify-between">
                                                                <div className="text-sm leading-5 font-medium text-indigo-600 hover:no-underline">
                                                                    {project.name}
                                                                </div>
                                                                <div className="ml-2 flex-shrink-0 flex">
                                                                    <span className="p-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-400 text-green-800">
                                                                        <FontAwesomeIcon icon="check" className="text-white" />
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="mt-2 sm:flex sm:justify-between">
                                                                <div className="sm:flex">
                                                                    <div className="mr-6 flex items-center text-sm leading-5 text-gray-500">
                                                                        {project.description}
                                                                    </div>
                                                                </div>
                                                                <div className="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mt-0">
                                                                    <FontAwesomeIcon icon="calendar-alt" size="lg" className="mr-2" />
                                                                    <span className="text-gray-400">Started:</span>&nbsp;{project.started}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </Route>
                <Route exact path={`${match.path}/new-project`}>
                    <AddProject />
                </Route>
                <Route path={`${match.path}/:projectId`}>
                    <Project />
                </Route>
            </Switch>
        </div>
    );
}

export default Projects;
