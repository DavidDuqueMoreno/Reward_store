// import React from 'react';
import React, { useState, useEffect } from 'react';

const GetCoins = () => {
	const [u, setU] = useState([]);

	const config = {
		headers: {
			'Content-type': 'application/json',
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDAwZDllMzliNjk4OTAwMTlmNGI3NTMiLCJpYXQiOjE2MTA2Njg1MTV9.DJIRAx-_7ynGRqnK2GVur1VKCpj7i-kLB43IbuN-7g0',
		},
		body: {
			amount: 1000,
		},
	};

	axios
		.post('https://coding-challenge-api.aerolab.co/user/points', config)
		.then((res) => {
			setU(res.data);
		})
		.catch((error) => {
			console.error(error);
		});
	console.log(u);
};
