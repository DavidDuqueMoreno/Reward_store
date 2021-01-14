import React from 'react';
import Kite from '../assets/aerolab-logo.svg';
import Coin from '../assets/icons/coin.svg';
import Hero from '../assets/header-x1.png';

const Header = () => {
	return (
		<div className="header">
			<div className="header_info_container">
				<img src={Kite} alt="aerolab-logo" />
				<div className="header_user_container">
					<div className="header_user_name">David Duque</div>
					<div className="header_user_coins">
						6000
						<div className="coin_icon">
							<img src={Coin} alt="coin icon" />
						</div>
					</div>
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
