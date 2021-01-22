import Product from './Product';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductsContainer = ({ page }) => {
	const config = {
		headers: {
			'Content-type': 'application/json',
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDAwZDllMzliNjk4OTAwMTlmNGI3NTMiLCJpYXQiOjE2MTA2Njg1MTV9.DJIRAx-_7ynGRqnK2GVur1VKCpj7i-kLB43IbuN-7g0',
		},
	};

	const [products, setProducts] = useState([]);
	const [points, setPoints] = useState(0);

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
				setPoints(res.data.points);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	// const SortByCategory = () => {
	// 	const order = {
	// 		Audio: 1,
	// 		Cameras: 2,
	// 		Drones: 3,
	// 		Gaming: 4,
	// 		Laptops: 5,
	// 		'Monitors & TV': 6,
	// 		'PC Accesories': 7,
	// 		'PC Accessories': 8,
	// 		'Phone Accessories': 9,
	// 		Phones: 10,
	// 		'Smart Home': 11,
	// 		'Tablets & E-readers': 12,
	// 	};
	// 	const list = products.sort((a, b) => order[a.category] - order[b.category]);
	// 	return list;
	// };

	// const SortByLowestPrice = () => {
	// 	const list = products.sort((a, b) => a.cost - b.cost);
	// 	return list;
	// };

	// const SortByHighestPrice = () => {
	// 	const list = products.sort((a, b) => b.cost - a.cost);
	// 	return list;
	// };

	console.log(products);
	console.log(points);

	var productsPage = products
		? page === 'page1'
			? products.slice(0, 16)
			: products.slice(16, 32)
		: [];

	var listProducts = productsPage.map((prod) => (
		<Product
			id={prod._id}
			points={points}
			cost={prod.cost}
			img={prod.img.url}
			category={prod.category}
			name={prod.name}
		/>
	));

	return <div className="items_container">{listProducts}</div>;
};

export default ProductsContainer;
