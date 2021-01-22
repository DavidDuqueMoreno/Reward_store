import React from 'react';
import '../index.css';

import 'semantic-ui-css/semantic.min.css';
import Header from './Header';
import FiltersContainer from './FiltersContainer';

const App = () => (
	<div>
		<Header />
		<FiltersContainer />
	</div>
);

export default App;
