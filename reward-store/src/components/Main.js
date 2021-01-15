import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ArrowRight from '../assets/icons/arrow-right.svg';
import BuyIcon from '../assets/icons/buy-blue.svg';

const Main = () => {
	const config = {
		headers: {
			'Content-type': 'application/json',
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDAwZDllMzliNjk4OTAwMTlmNGI3NTMiLCJpYXQiOjE2MTA2Njg1MTV9.DJIRAx-_7ynGRqnK2GVur1VKCpj7i-kLB43IbuN-7g0',
		},
	};
	const [products, setProducts] = useState([]);

	useEffect(() => {
		axios
			.get('https://coding-challenge-api.aerolab.co/products', config)
			.then((res) => {
				setProducts(res.data);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	if (products.length > 16) {
		if (window.location.pathname === '/') {
			setProducts(products.slice(0, 16));
		}
		if (window.location.pathname === '/2') {
			setProducts(products.slice(17, 32));
		}
	}
	console.log(products);

	const mainFilters = () => (
		<div>
			<div className="filters_container">
				<div className="filters_products">16 of 32 products</div>
				<div className="separator_products"></div>
				<div className="filters_sort">Sort by:</div>
				<div className="filters_sort_recent">Most recent</div>
				<div className="filters_sort_lowest">Lowest price</div>
				<div onClick={() => msg()} className="filters_sort_highest">
					Highest price
				</div>
				<div className="arrow">
					<img onClick={msg} src={ArrowRight} alt="" />
				</div>
			</div>
			<hr className="separator_filter" />
		</div>
	);

	const msg = () => {
		alert('oelo');
	};

	const mainItem = () =>
		products.map((prod) => (
			<div key={prod._id} className="item_container">
				<div className="item_button">
					<img onClick={msg} src={BuyIcon} alt="" />
				</div>
				<div className="item_img_container">
					<img
						className="item_img"
						src={prod.img.url}
						alt="imagen del producto"
					/>
				</div>
				<hr className="separator_item" />
				<div className="item_info">
					<div className="item_category">{prod.category}</div>
					<div className="item_name">{prod.name}</div>
				</div>
			</div>
		));
	return (
		<div className="main_container">
			<div>{mainFilters()}</div>
			<div className="items_container">{mainItem()}</div>
		</div>
	);
};

export default Main;
