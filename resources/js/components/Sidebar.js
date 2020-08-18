import React, { useEffect, useState } from 'react';
import {
	BrowserRouter as Router,
	Link,
	useLocation
} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Sidebar({ name }) {
	const mobileSidebarStyle = 'mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition ease-in-out duration-150';
	const mobileSidebarStyleSelected = 'group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-white bg-gray-900 focus:outline-none focus:bg-gray-700 transition ease-in-out duration-150';
	const sidebarStyle = 'mt-1 group flex items-center px-2 py-2 text-sm leading-5 font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition ease-in-out duration-150';
	const sidebarStyleSelected = 'mt-1 group flex items-center px-2 py-2 text-sm leading-5 font-medium text-white rounded-md bg-gray-900 focus:outline-none focus:bg-gray-700 transition ease-in-out duration-150';

	let location = useLocation();
	useEffect(() => {
		console.log(location.pathname);
	}, [location]);

	return (
		<div className="h-screen flex overflow-hidden bg-gray-100">
			
				{/* <!-- Off-canvas menu for mobile --> */}
				<div className="md:hidden">
					<div className="fixed inset-0 flex z-40">
						<div className="fixed inset-0">
							<div className="absolute inset-0 bg-gray-600 opacity-75"></div>
						</div>
						<div className="relative flex-1 flex flex-col max-w-xs w-full bg-gray-800">
							<div className="absolute top-0 right-0 -mr-14 p-1">
								<button className="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600" aria-label="Close sidebar">
									<svg className="h-6 w-6 text-white" stroke="currentColor" fill="none" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
									</svg>
								</button>
							</div>
							<div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
								<div className="flex-shrink-0 flex items-center px-4">
									<img className="h-8 w-auto" src="/img/logos/workflow-logo-on-dark.svg" alt="Workflow" />
								</div>
								<nav className="mt-5 px-2">
									<Link to="/" className={location.pathname === '/' ? mobileSidebarStyleSelected : mobileSidebarStyle}>
										<FontAwesomeIcon icon="home" className="mr-4" size="lg" />
										Dashboard
									</Link>
									<Link to="/teams" className={location.pathname === '/teams' ? mobileSidebarStyleSelected : mobileSidebarStyle}>
										<FontAwesomeIcon icon="users" className="mr-4" size="lg" />
										Teams
									</Link>
									<Link to="/projects" className={location.pathname === '/projects' ? mobileSidebarStyleSelected : mobileSidebarStyle}>
										<FontAwesomeIcon icon="tasks" className="mr-4" size="lg" />
										Projects
									</Link>
									<Link to="/purchases" className={location.pathname === '/purchases' ? mobileSidebarStyleSelected : mobileSidebarStyle}>
										<FontAwesomeIcon icon="money-bill-alt" className="mr-4" size="lg" />
										Purchases
									</Link>
								</nav>
							</div>
							<div className="flex-shrink-0 flex bg-gray-700 p-4">
								<a href="#" className="flex-shrink-0 group block">
									<div className="flex items-center">
										<div>
											<img className="inline-block h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
										</div>
										<div className="ml-3">
											<p className="text-base leading-6 font-medium text-white">
												{name}
											</p>
											<p className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
												View profile
											</p>
										</div>
									</div>
								</a>
							</div>
						</div>
						<div className="flex-shrink-0 w-14">
							{/* <!-- Force sidebar to shrink to fit close icon --> */}
						</div>
					</div>
				</div>

				{/* <!-- Static sidebar for desktop --> */}
				<div className="hidden md:flex md:flex-shrink-0">
					<div className="flex flex-col w-64 bg-gray-800">
						<div className="h-0 flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
							<div className="flex items-center flex-shrink-0 px-4">
								<img className="h-8 w-auto" src="/img/logos/workflow-logo-on-dark.svg" alt="Workflow" />
							</div>
							{/* <!-- Sidebar component, swap this element with another sidebar if you like --> */}
							<nav className="mt-5 flex-1 px-2 bg-gray-800">
								<Link to="/" className={location.pathname === '/' ? sidebarStyleSelected : sidebarStyle}>
									<FontAwesomeIcon icon="home" className="mr-4" size="lg" />
									Dashboard
								</Link>
								{/* <Link to="/teams" className={location.pathname === '/teams' || location.pathname === '/add-team' ? sidebarStyleSelected : sidebarStyle}>
									<FontAwesomeIcon icon="users" className="mr-4" size="lg" />
									Teams
								</Link> */}
								<Link to="/projects" className={location.pathname === '/projects' ? sidebarStyleSelected : sidebarStyle}>
									<FontAwesomeIcon icon="tasks" className="mr-4" size="lg" />
									Projects
								</Link>
								<Link to="/purchases" className={location.pathname === '/purchases' ? sidebarStyleSelected : sidebarStyle}>
									<FontAwesomeIcon icon="shopping-cart" className="mr-4" size="lg" />
									Purchases
								</Link>
								<Link to="/Units" className={location.pathname === '/units' ? sidebarStyleSelected : sidebarStyle}>
									<FontAwesomeIcon icon="boxes" className="mr-4" size="lg" />
									Units
								</Link>
								<Link to="/Sales" className={location.pathname === '/sales' ? sidebarStyleSelected : sidebarStyle}>
									<FontAwesomeIcon icon="money-bill-alt" className="mr-4" size="lg" />
									Sales
								</Link>
							</nav>
						</div>
						<div className="flex-shrink-0 flex bg-gray-700 p-4">
							<a href="#" className="flex-shrink-0 group block">
								<div className="flex items-center">
									<div>
										<img className="inline-block h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
									</div>
									<div className="ml-3">
										<p className="text-base leading-6 font-medium text-white">
											{name}
										</p>
										<p className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
											View profile
										</p>
									</div>
								</div>
							</a>
						</div>
					</div>
				</div>
		</div>
	);
}
	
export default Sidebar;
