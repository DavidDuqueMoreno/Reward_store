import Coin from '../../assets/icons/coin.svg';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';
const GetCoins = (props) => {
	const [points, setPoints] = useState([]);
	const [addedPoints, setAddedPoints] = useState('');
	const [open, setOpen] = useState(false);

	const getPoints = (pointsToAdd) => {
		setAddedPoints(`You added ${pointsToAdd} points!`);
		const config = {
			headers: {
				'Content-type': 'application/json',
				Authorization:
					'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDAwZDllMzliNjk4OTAwMTlmNGI3NTMiLCJpYXQiOjE2MTA2Njg1MTV9.DJIRAx-_7ynGRqnK2GVur1VKCpj7i-kLB43IbuN-7g0',
			},
		};
		const data = {
			body: {
				amount: pointsToAdd,
			},
		};

		axios
			.post('https://coding-challenge-api.aerolab.co/user/points', data, config)
			.then((res) => {
				setPoints(res.data);
			})
			.catch((error) => {
				console.error(error);
			});
	};
	console.log(points);

	return (
		<Modal
			size="tiny"
			closeIcon
			onOpen={() => setAddedPoints('')}
			open={open}
			trigger={
				<div className="header_user_coins">
					{props.points}
					<div className="coin_icon">
						<img src={Coin} alt="coin icon" />
					</div>
				</div>
			}
			onClose={() => setOpen(false)}
			onOpen={() => setOpen(true)}
		>
			<Header icon="money" content="Add more points!" />
			<Modal.Content>
				<p>How many points do you want to add?</p>
			</Modal.Content>
			<Modal.Actions className="add_buttons">
				<Button onClick={() => getPoints(1000)} color="black">
					<Icon name="dollar sign" /> 1000
				</Button>
				<Button onClick={() => getPoints(5000)} color="black">
					<Icon name="dollar sign" /> 5000
				</Button>
				<Button onClick={() => getPoints(7500)} color="black">
					<Icon name="dollar sign" /> 7500
				</Button>
			</Modal.Actions>
			<Modal.Content>
				<p>{addedPoints}</p>
			</Modal.Content>
		</Modal>
	);
};

export default GetCoins;
