import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'
import { darkTheme } from './Theme';


import EditAccounts from './Pages/EditAccounts'
import { GlobalStyles } from './GlobalStyles';

function App() {
	return (
		<ThemeProvider theme={darkTheme}>
			<GlobalStyles />
			<Router>
				<Route path="/">
					<EditAccounts />
				</Route>
			</Router>
		</ThemeProvider>
	);
}

export default App;
