import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './GlobalStyles';
import { darkTheme, lightTheme } from './Theme';


import EditAccounts from './Pages/EditAccounts'
import InsertCredentions from './Pages/InsertCredentions'
import Menu from './Pages/Menu'
import Main from './Pages/Main'
import Configs from './Pages/Configs'

function App() {
	return (
		<ThemeProvider theme={darkTheme}>
			<GlobalStyles />
			<Router>
				<Route exact path="/">
					<Menu />
				</Route>
				<Route exact path="/edit_accounts">
					<EditAccounts />
				</Route>

				<Route path="/get_profiles">
					<InsertCredentions />
				</Route>
				<Route path="/main">
					<Main />
				</Route>
				<Route path="/configs">
					<Configs />
				</Route>
			</Router>
		</ThemeProvider>
	);
}

export default App;
