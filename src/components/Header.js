import Kite from '../assets/aerolab-logo.svg';
import Hero from '../assets/header-x1.png';
import GetCoins from './Modals/GetCoinsModal';
import History from './Modals/HistoryModal';
import FiltersContainer from './FiltersContainer';
import React, { useState, useEffect } from 'react';

const Header = () => {
	const [stateOfPoints, setStateOfPoints] = useState(false);

	console.log(stateOfPoints);
	return (
		<>
			<div className="header">
				<div className="header_info_container">
					<img src={Kite} alt="aerolab-logo" />
					<GetCoins
						stateofpoints={stateOfPoints}
						setstateofpoints={setStateOfPoints}
					/>
					<History />
				</div>
				<div className="header_hero_container">
					<img className="header_hero_img" src={Hero} alt="hero img" />
					<div className="header_hero_text">Electronics</div>
				</div>
			</div>
			<FiltersContainer
				stateofpoints={stateOfPoints}
				setstateofpoints={setStateOfPoints}
			/>
		</>
	);
};

export default Header;
