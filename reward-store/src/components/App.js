import React from 'react';
import '../index.css';

import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Main from './Main';

const App = () => (
	<BrowserRouter>
		<Header />
		<div>
			<Main />
			{/* <Route exact path="/1" component={Main} /> */}
			{/* <Route exact path="/2" component={Main} /> */}
		</div>
	</BrowserRouter>
);

export default App;
