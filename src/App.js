import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'


import NavBar from './components/Navbar'

function App() {
	return (
		<Router>
			<Route path="/">
				<NavBar />
			</Route>
		</Router>
	);
}

export default App;
