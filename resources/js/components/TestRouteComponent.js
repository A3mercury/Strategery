import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Link,
	Route,
	Switch
} from 'react-router-dom';

function TestRouteComponent() {
	return (
		<Router>
			<div>
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/test">Test</Link>
						</li>
						<li>
							<Link to="/third-page">Third Page`</Link>
						</li>
					</ul>
				</nav>

				<Switch>
					<Route path="/test">
						<Test />
					</Route>
					<Route path="/third-page">
						<ThirdPage />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

function Test() {
	return (
		<h1>Test</h1>
	);
}

function ThirdPage() {
	return (
		<h1>3rd Page</h1>
	);
}

function Home() {
	return (
		<h1>Home</h1>
	);
}

if (document.getElementById('reactApp')) {
	console.log('found it');
	ReactDOM.render(<TestRouteComponent />, document.getElementById('reactApp'));
}
