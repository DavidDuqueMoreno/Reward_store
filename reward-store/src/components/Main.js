import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ArrowRight from '../assets/icons/arrow-right.svg';
import ArrowLeft from '../assets/icons/arrow-left.svg';
import Coin from '../assets/icons/coin.svg';

import { Link } from 'react-router-dom';

const Main = () => {
	const config = {
		headers: {
			'Content-type': 'application/json',
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDAwZDllMzliNjk4OTAwMTlmNGI3NTMiLCJpYXQiOjE2MTA2Njg1MTV9.DJIRAx-_7ynGRqnK2GVur1VKCpj7i-kLB43IbuN-7g0',
		},
	};
	const [products, setProducts] = useState([]);
	const [user, setUser] = useState([]);

	useEffect(() => {
		axios
			.get('https://coding-challenge-api.aerolab.co/products', config)
			.then((res) => {
				setProducts(res.data);
			})
			.catch((error) => {
				console.error(error);
			});
		axios
			.get('https://coding-challenge-api.aerolab.co/user/me', config)
			.then((res) => {
				setUser(res.data);
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
			setProducts(products.slice(16, 32));
		}
	}
	const Arrow = () => {
		if (window.location.pathname === '/') {
			return (
				<Link to="/2">
					<img src={ArrowRight} alt="" />
				</Link>
			);
		}
		if (window.location.pathname === '/2') {
			return (
				<Link to="/">
					<img src={ArrowLeft} alt="" />
				</Link>
			);
		}
	};

	const SortByCategory = () => {
		const order = {
			Audio: 1,
			Cameras: 2,
			Drones: 3,
			Gaming: 4,
			Laptops: 5,
			'Monitors & TV': 6,
			'PC Accesories': 7,
			'PC Accessories': 8,
			'Phone Accessories': 9,
			Phones: 10,
			'Smart Home': 11,
			'Tablets & E-readers': 12,
		};
		setProducts(products.sort((a, b) => order[a.category] - order[b.category]));
	};

	const SortByLowestPrice = () => {
		setProducts(products.sort((a, b) => a.cost - b.cost));
	};

	const SortByHighestPrice = () => {
		setProducts(products.sort((a, b) => b.cost - a.cost));
	};

	const mainFilters = () => (
		<div>
			<div className="filters_container">
				<div className="filters_products">
					{window.location.pathname === '/'
						? '16 of 32 products'
						: '32 of 32 products'}
				</div>
				<div className="separator_products"></div>
				<div className="filters_sort">Sort by:</div>
				<Link to={window.location.pathname}>
					<button
						className="filters_sort_category"
						onClick={() => SortByCategory()}
					>
						Category
					</button>
				</Link>
				<Link to={window.location.pathname}>
					<button
						className="filters_sort_lowest"
						onClick={() => SortByLowestPrice()}
					>
						Lowest price
					</button>
				</Link>
				<Link to={window.location.pathname}>
					<button
						className="filters_sort_highest"
						onClick={() => SortByHighestPrice()}
					>
						Highest price
					</button>
				</Link>

				<div className="arrow">
					<Arrow />
				</div>
			</div>
			<hr className="separator_filter" />
		</div>
	);

	const BuyIcon = () => (
		<div className="item_button">
			<img className="buy_img" alt="" />
		</div>
	);

	const MissingMoney = (props) => (
		<div className="item_missing_money">
			You need {props.cost - user.points}
			<div className="coin_icon">
				<img src={Coin} alt="coin icon" />
			</div>
		</div>
	);

	const mainItem = () =>
		products.map((prod) => (
			<div key={prod._id} className="item_container">
				{user.points < prod.cost ? (
					<MissingMoney cost={prod.cost} />
				) : (
					<BuyIcon />
				)}
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
