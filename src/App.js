import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './GlobalStyles';
import { darkTheme, lightTheme } from './Theme';


import EditAccounts from './Pages/EditAccounts'
import InsertCredentions from './Pages/InsertCredentions'

function App() {
	return (
		<ThemeProvider theme={darkTheme}>
			<GlobalStyles />
			<Router>
				<Route exact path="/">
					<InsertCredentions />
				</Route>

				<Route path="/edit">
					<EditAccounts />
				</Route>
			</Router>
		</ThemeProvider>
	);
}

export default App;
