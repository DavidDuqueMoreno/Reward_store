import React, { useState, useEffect } from 'react';
import Kite from '../assets/aerolab-logo.svg';
import Hero from '../assets/header-x1.png';
import axios from 'axios';
import GetCoins from './Modals/GetCoinsModal';

const Header = () => {
	const config = {
		headers: {
			'Content-type': 'application/json',
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDAwZDllMzliNjk4OTAwMTlmNGI3NTMiLCJpYXQiOjE2MTA2Njg1MTV9.DJIRAx-_7ynGRqnK2GVur1VKCpj7i-kLB43IbuN-7g0',
		},
	};
	const [user, setUser] = useState([]);

	useEffect(() => {
		axios
			.get('https://coding-challenge-api.aerolab.co/user/me', config)
			.then((res) => {
				setUser(res.data);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	return (
		<div className="header">
			<div className="header_info_container">
				<img src={Kite} alt="aerolab-logo" />
				<div className="header_user_container">
					<div className="header_user_name">{user.name}</div>
					<GetCoins points={user.points} />
				</div>
			</div>
			<div className="header_hero_container">
				<img className="header_hero_img" src={Hero} alt="hero img" />
				<div className="header_hero_text">Electronics</div>
			</div>
		</div>
	);
};

export default Header;
