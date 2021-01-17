import React from 'react';
import '../index.css';

import { BrowserRouter, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import Header from './Header';
import Main from './Main';

const App = () => (
	<BrowserRouter>
		<div>
			<Route exact path="/" component={Header} />
			<Route exact path="/2" component={Header} />
			<Route exact path="/" component={Main} />
			<Route exact path="/2" component={Main} />
		</div>
	</BrowserRouter>
);

export default App;
