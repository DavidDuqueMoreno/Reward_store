import React from 'react';
import ArrowRight from '../assets/icons/arrow-right.svg';
import BuyIcon from '../assets/icons/buy-blue.svg';
import Dell from '../assets/product-pics/Dell-x1.png';

const Main = () => {
	const mainFilters = () => (
		<div>
			<div className="filters_container">
				<div className="filters_products">16 of 32 products</div>
				<div className="separator_products"></div>
				<div className="filters_sort">Sort by:</div>
				<div className="filters_sort_recent">Most recent</div>
				<div className="filters_sort_lowest">Lowest price</div>
				<div className="filters_sort_highest">Highest price</div>
				<div className="arrow">
					<img src={ArrowRight} alt="" />
				</div>
			</div>
			<hr className="separator_filter" />
		</div>
	);

	const mainItem = () => (
		<div className="item_container">
			<div className="item_button">
				<img src={BuyIcon} alt="" />
			</div>
			<div className="item_img_container">
				<img className="item_img" src={Dell} alt="imagen del producto" />
			</div>
			<hr className="separator_item" />
			<div className="item_info">
				<div className="item_category">Phones</div>
				<div className="item_name">iPhone 8</div>
			</div>
		</div>
	);
	return (
		<div className="main_container">
			<div>{mainFilters()}</div>
			<div>{mainItem()}</div>
		</div>
	);
};

export default Main;
