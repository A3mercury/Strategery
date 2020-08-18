import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ProjecsService from '../../services/ProjectsService';

function Projects() {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		ProjecsService._index()
			.then((projects) => {
				setProjects(projects);
			});
	}, []);

	return (
		<div className="container">
			<div className="-ml-4 -mt-4 py-6 flex justify-between items-center flex-wrap sm:flex-no-wrap">
				<div className="ml-4 mt-4">
					<h1 className="text-2xl font-semibold text-gray-900">
						Your Projects
					</h1>
				</div>
				<div className="ml-4 mt-4 flex-shrink-0">
					<span className="inline-flex rounded-md shadow-sm">
						<Link to="/add-project" type="button" className="relative inline-flex items-center px-4 py-3 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700">
							<FontAwesomeIcon icon="plus" size="1x" />
						</Link>
					</span>
				</div>
			</div>
			<div className="flex flex-col">
				<div className="-my-2 pt-2 pb-10 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
					<div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
						<table className="min-w-full">
							<thead>
								<tr>
									<th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
										Name
									</th>
									<th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
										Team
									</th>
									<th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
										Start Date
									</th>
									<th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
										End Date
									</th>
									<th className="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
								</tr>
							</thead>
							<tbody className="bg-white">
								{projects.map((project) => {
									return (
										<tr key={project.id} onClick={() => console.log("clicked")} style={{cursor: 'pointer'}}>
											<td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
												<div className="flex items-center">
													<div className="flex-shrink-0 h-10 w-10">
														<img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
													</div>
													<div className="ml-4">
														<div className="text-sm leading-5 font-medium text-gray-900">{project.name}</div>
														<div className="text-sm leading-5 text-gray-500">{project.description}</div>
													</div>
												</div>
											</td>
											<td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
												<div className="text-sm leading-5 text-gray-900">Team One</div>
												<div className="text-sm leading-5 text-gray-500">{project.user.name}</div>
											</td>
											<td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
												<time dateTime="2020-01-07">{project.started}</time>
											</td>
											<td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
												<time dateTime="2020-01-07">--</time>
											</td>
											<td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
												<a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Projects;
