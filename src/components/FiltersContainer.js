import React, { useState } from 'react';

import Filters from './Filters';

const FiltersContainer = ({ stateofpoints, setstateofpoints }) => {
	const [page, setPage] = useState('page1');
	const [filter, setFilter] = useState('');

	return (
		<Filters
			stateofpoints={stateofpoints}
			setstateofpoints={setstateofpoints}
			page={page}
			changepage={setPage}
			filter={filter}
			changefilter={setFilter}
		/>
	);
};

export default FiltersContainer;
