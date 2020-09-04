import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ProjectDetails({ project }) {

    return (
        <div>
            <h1 className="text-2xl font-semibold text-gray-900 py-6">
                Project Details
			</h1>
            <div className="bg-white overflow-hidden rounded-lg">
                <ul>
                    <li>
                        <div className="block focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out hover:no-underline">
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
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ProjectDetails;
