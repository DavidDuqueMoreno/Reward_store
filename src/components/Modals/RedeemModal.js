import { Header, Modal } from 'semantic-ui-react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Coin from '../../assets/icons/coin.svg';

const RedeemProduct = (props) => {
	const [open, setOpen] = useState(false);
	const [response, setResponse] = useState('');
	const [user, setUser] = useState([]);

	const config = {
		headers: {
			'Content-type': 'application/json',
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDAwZDllMzliNjk4OTAwMTlmNGI3NTMiLCJpYXQiOjE2MTA2Njg1MTV9.DJIRAx-_7ynGRqnK2GVur1VKCpj7i-kLB43IbuN-7g0',
		},
	};
	useEffect(() => {
		axios
			.get('https://coding-challenge-api.aerolab.co/user/me', config)
			.then((res) => {
				setUser(res.data.points);
			})
			.catch((error) => {
				console.error(error);
			});
	}, [user]);

	const Redeem = (id) => {
		const body = {
			productId: id,
		};

		axios
			.post('https://coding-challenge-api.aerolab.co/redeem', body, config)
			.then((res) => {
				setResponse(res.data);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	return (
		<Modal
			onMount={() => Redeem(props.id)}
			// onUnmount={() => window.location.reload()}
			size="mini"
			closeIcon
			open={open}
			trigger={
				props.cost < props.points ? (
					<div className="item_button">
						<img className="buy_img" alt="" />
					</div>
				) : (
					<div className="item_missing_money">
						You need {props.cost - props.points}
						<div className="coin_icon">
							<img src={Coin} alt="coin icon" />
						</div>
					</div>
				)
			}
			onClose={() => setOpen(false)}
			onOpen={() => setOpen(true)}
		>
			<Header icon="check" content="Congratulations!" />
			<Modal.Content className="redeem">
				<p>You successfully redeemed {props.cost} points and got:</p>
			</Modal.Content>
			<Modal.Content className="redeem">
				<img src={props.img} alt="item redeemed img" />
			</Modal.Content>
		</Modal>
	);
};

export default RedeemProduct;
