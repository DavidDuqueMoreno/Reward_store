import React from 'react';
import Dell from '../assets/product-pics/Dell-x1.png';
import BuyIcon from '../assets/icons/buy-blue.svg';

const Main = () => {
	return (
		<div className="item_container">
			<div className="item_img">
				<img src={Dell} alt="" />
			</div>
			<div className="item_button">
				<img src={BuyIcon} alt="" />
			</div>
			<div className="item_category">Phones</div>
			<div className="item_name">iPhone 8</div>
		</div>
	);
};

export default Main;
