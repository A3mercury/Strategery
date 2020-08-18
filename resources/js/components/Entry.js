import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';
import '../../css/tailwind.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas, tasks } from '@fortawesome/pro-solid-svg-icons';
library.add(fas);

import Sidebar from './Sidebar';
import Teams from './Teams/Teams';
import AddTeam from './Teams/AddTeam';
import Projects from './Projects/Projects';
import AddProject from './Projects/AddProject';
import Purchases from './Purchases';
import Sales from './Sales';
import Units from './Units';
import UnitItems from './UnitItems';

import _ from 'lodash';

function Entry() {
	const [user, setUser] = useState({ name: '- -' });
	console.log(user);

	useEffect(() => {
		// UserService._get().then(user => setUser(user));
		// setUser({name: 'Bananas'});
	}, []);

	return (
		<div className="h-screen flex overflow-hidden bg-gray-100">
			<Router>
				<Sidebar name={user.name} />

				<Switch>
					<Route path="/teams">
						<Teams />
					</Route>
					<Route path="/add-team">
						<AddTeam />
					</Route>
					<Route path="/projects">
						<Projects />
					</Route>
					<Route path="/add-project">
						<AddProject />
					</Route>
					<Route path="/purchases">
						<Purchases />
					</Route>
					<Route path="/sales">
						<Sales />
					</Route>
					<Route path="/units">
						<Units />
					</Route>
					<Route path="/unit-items">
						<UnitItems />
					</Route>
					<Route path="/">
						<h1>Dashboard</h1>
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default Entry;

if (document.getElementById('reactApp')) {
	console.log('found it');
	ReactDOM.render(<Entry />, document.getElementById('reactApp'));
}
