import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import ArrowRight from '../assets/icons/arrow-right.svg';
import ArrowLeft from '../assets/icons/arrow-left.svg';
import Coin from '../assets/icons/coin.svg';

import RedeemModal from './Modals/RedeemModal';

const Main = () => {
	const config = {
		headers: {
			'Content-type': 'application/json',
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDAwZDllMzliNjk4OTAwMTlmNGI3NTMiLCJpYXQiOjE2MTA2Njg1MTV9.DJIRAx-_7ynGRqnK2GVur1VKCpj7i-kLB43IbuN-7g0',
		},
	};
	const [page, setPage] = useState(true);
	const [products, setProducts] = useState([]);
	const [user, setUser] = useState([]);
	const [loading, setLoading] = useState(false);

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
				setLoading(true);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	useEffect(() => {
		if (page) {
			setProducts(products.slice(0, 16));
		}
		if (!page) {
			setProducts(products.slice(16, 32));
		}
	}, [page]);

	const Arrow = () => {
		if (page) {
			return <img onClick={setPage(false)} src={ArrowRight} alt="" />;
		}
		if (!page) {
			return <img onClick={setPage(true)} src={ArrowLeft} alt="" />;
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
					{page ? '16 of 32 products' : '32 of 32 products'}
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

	const MissingMoney = (cost) => {
		var subtraction = '';
		if (loading === true) {
			subtraction = cost - user.points;
		}

		return (
			<div className="item_missing_money">
				You need {subtraction}
				<div className="coin_icon">
					<img src={Coin} alt="coin icon" />
				</div>
			</div>
		);
	};

	const mainItem = () =>
		products.map((prod) => (
			<div key={prod._id} className="item_container">
				{user.points > prod.cost ? (
					<RedeemModal id={prod._id} cost={prod.cost} img={prod.img.url} />
				) : (
					MissingMoney(prod.cost)
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
