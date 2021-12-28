import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UserPreview } from '../cmps/UserPreview';
import SimpleMap from '../cmps/SimpleMap';

export function UserDetalils() {
	const location = useLocation();

	if (location.state === undefined)
		return (
			<div>
				No User Choosen!
				<Link to="/">
					<button>click here for Home Page</button>
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
