import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UserPreview } from '../cmps/UserPreview';
import SimpleMap from '../cmps/SimpleMap';
import Loader from 'react-loader-spinner';
import { Button } from '@mui/material';


export function UserDetalils() {
	const location = useLocation();

	if (location.state === undefined)
		return (
			<div className='center-div'>
				<Loader 
					type="Puff"
					color="#00BFFF"
					height={100}
					width={100}
				/>
				<div>User Not Selcted</div>
				<Link to="/">
					<Button variant='contained' color='primary'>Click Here Ror Home Page</Button>
				</Link>
			</div>
		);

	const { choosenUser } = location.state;

	return (
		<div className="user-details-container">
			<UserPreview user={choosenUser} detailsMode={true} />
			<SimpleMap userLocation={choosenUser.location.coordinates} />
		</div>
	);
}
