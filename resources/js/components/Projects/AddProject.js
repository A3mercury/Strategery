import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import moment from 'moment';
import ProjectsService from '../../services/ProjectsService';

function AddProject(props) {
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [started, setStarted] = useState('');
	const [ended, setEnded] = useState('');

	function saveNewProject() {
		ProjectsService._store({
			name: name,
			description: description,
			started: moment(started).format('YYYY-MM-DD'),
			ended: ended
		})
			.then((response) => {
				props.history.push('/projects');
			});
	}

	return (
		<div className="container">
			<div className="-ml-4 -mt-4 py-6 flex justify-between items-center flex-wrap sm:flex-no-wrap">
				<div className="ml-4 mt-4">
					<h1 className="text-2xl font-semibold text-gray-900">
						Add a new Project
					</h1>
				</div>
				<div className="ml-4 mt-4 flex-shrink-0">
					<span className="inline-flex rounded-md shadow-sm">
						<button to="/add-team" type="button" className="relative inline-flex items-center px-4 py-3 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700">
							<FontAwesomeIcon icon="plus" size="1x" />
						</button>
					</span>
				</div>
			</div>
			<div className="mmd:mt-0 md:col-span-2">
				<div className="shadow overflow-hidden sm:rounded-md">
					<div className="px-4 py-5 bg-white sm:p-6">
						<div className="grid grid-cols-6 gap-6">
							<div className="col-span-6 sm:col-span-3">
								<label htmlFor="name" className="block text-sm font-medium leading-5 text-gray-700">Name</label>
								<input
									onChange={(e) => setName(e.target.value)}
									id="name"
									className="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
									placeholder="Give your project a name."
									value={name}
								/>
							</div>
							<div className="col-span-6">
								<label htmlFor="email_address" className="block text-sm font-medium leading-5 text-gray-700">Description</label>
								<div className="rounded-md shadow-sm">
									<textarea 
										onChange={(e) => setDescription(e.target.value)}
										id="about" 
										rows="3" 
										className="form-textarea mt-1 block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" 
										placeholder="Tell us about your project."
										value={description}>
									</textarea>
								</div>
							</div>
							<div className="col-span-6">
								<div className="mb-5 w-64">
									<label htmlFor="started" className="block text-sm font-medium leading-5 text-gray-700">Start Date</label>
									<input
										onChange={(e) => setStarted(e.target.value)}
										id="started"
										className="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
										placeholder="mm/dd/yyyy"
										value={started}
									/>
								</div>
							</div>
							<div className="col-span-6">
								<label htmlFor="ended" className="block text-sm font-medium leading-5 text-gray-700">End Date</label>
								<input 
									onChange={(e) => setEnded(e.target.value)}
									id="ended"
									className="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
									placeholder="mm/dd/yyyy"
									value={ended}
								/>
							</div>
						</div>
					</div>
					<div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
						<button onClick={saveNewProject} className="py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-500 focus:outline-none focus:shadow-outline-blue active:bg-indigo-600 transition duration-150 ease-in-out">
							Save
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default withRouter(AddProject);
