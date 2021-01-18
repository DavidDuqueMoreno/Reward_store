import { Header, Modal } from 'semantic-ui-react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RedeemProduct = (props) => {
	const [open, setOpen] = useState(false);
	const [response, setResponse] = useState('');

	useEffect(() => {}, [open]);

	const Redeem = (id) => {
		const config = {
			headers: {
				'Content-type': 'application/json',
				Authorization:
					'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDAwZDllMzliNjk4OTAwMTlmNGI3NTMiLCJpYXQiOjE2MTA2Njg1MTV9.DJIRAx-_7ynGRqnK2GVur1VKCpj7i-kLB43IbuN-7g0',
			},
		};
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
			onUnmount={() => window.location.reload()}
			size="mini"
			closeIcon
			open={open}
			trigger={
				<div className="item_button">
					<img className="buy_img" alt="" />
				</div>
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
