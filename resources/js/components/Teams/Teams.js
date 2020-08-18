import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import TeamsService from '../../services/TeamsService';

function Teams() {
	const [teams, setTeams] = useState([]);

	useEffect(() => {
		TeamsService._index()
			.then((response) => {
				console.log(response);
				setTeams(response);
			});
	}, []);

	return (
		<div className="container">
			<div className="-ml-4 -mt-4 py-6 flex justify-between items-center flex-wrap sm:flex-no-wrap">
				<div className="ml-4 mt-4">
					<h1 className="text-2xl font-semibold text-gray-900">
						Your Teams
					</h1>
				</div>
				<div className="ml-4 mt-4 flex-shrink-0">
					<span className="inline-flex rounded-md shadow-sm">
						<Link to="/add-team" type="button" className="relative inline-flex items-center px-4 py-3 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700">
							<FontAwesomeIcon icon="plus" size="1x" />
						</Link>
					</span>
				</div>
			</div>
			<div className="bg-white shadow overflow-hidden sm:rounded-md">
				<ul>
					{teams.length > 0 && teams.map((team) => {
						return (
							<li key={team.id} className="border-b">
								<a href="#" className="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out">
									<div className="flex items-center px-4 py-4 sm:px-6">
										<div className="min-w-0 flex-1 flex items-center">
											<div className="flex-shrink-0">
												<img className="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
											</div>
											<div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
												<div>
													<div className="text-sm leading-5 font-medium text-indigo-600 truncate">{team.name}</div>
													<div className="mt-2 flex items-center text-sm leading-5 text-gray-500">
														<FontAwesomeIcon icon="users" className="mr-2" />
														<span>Members {team.member_count}/{team.max_member_count}</span>
													</div>
												</div>
												<div className="hidden md:block">
													<div>
														<div className="text-sm leading-5 text-gray-900">
															Created on&nbsp;
															<time dateTime="2020-01-07">{team.created}</time>
														</div>
														<div className="mt-2 flex items-center text-sm leading-5 text-gray-500">
															<svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
																<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
															</svg>
															Verified
														</div>
													</div>
												</div>
											</div>
										</div>
										<div>
											<svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
												<path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
											</svg>
										</div>
									</div>
								</a>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}

export default Teams;
