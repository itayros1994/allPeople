import React from 'react';
import { Link } from 'react-router-dom';

export function UserPreview({ user, detailsMode }) {
	return (
		<div className="link">
			<div className="user-preview-container link">
				<img className="user-avatar-preview" src={user.picture.thumbnail} alt="" />
				<div className="user-names-container">
					<div className="user-name-first">
						{user.name.first} {user.name.last}
					</div>
					<div className="user-name-last">Age : {user.registered.age}</div>
					<div className="user-name-last">Gender : {user.gender}</div>
					<div className="user-name-last">City : {user.location.city}</div>
					{
						<p>
							<a className="email" href={`mailto:${user.email}`}>
								Send Me Email 📨
							</a>
						</p>
					}
					<Link
						to={{
							pathname: `/details/${user.name.first}`,
							state: {
								choosenUser: user
							}
						}}
					/>
				</div>
			</div>
		</div>
	);
}
