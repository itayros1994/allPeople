import React, { useEffect, useState } from 'react';
import { UsersService } from '../services/UsersService';
import { UsersList } from '../cmps/UsersList';

export function AllUsersApp() {
	let [ page, setPage ] = useState('1');
	const [ users, setUsers ] = useState([]);
	const [ filterBy, setFilterBy ] = useState('');

	useEffect(
		() => {
			UsersService.getUsers(page, filterBy).then((users) => setUsers(users.results));
		},
		[ filterBy, page ]
	);

	const setPageForward = () => {
		if (page === 10) return;
		setPage((prevPage) => page++);
	};

	const setPageBackward = () => {
		if (page === 0) return;
		setPage((prevPage) => page--);
	};

	const setToFilterBy = (filterOption) => {
		setFilterBy((prevFilter) => filterOption);
	};

	const sortUsers = (sortBy) => {
		if (sortBy === 'age') {
			const sortedUsers = users.sort((a, b) => b.registered.age - a.registered.age);
			console.log(sortedUsers);
			setUsers([ ...sortedUsers ]);
		}

		if (sortBy === 'name') {
			const sortedUsers = users.sort((a, b) => b.name.first.localeCompare(a.name.first));
			setUsers([ ...sortedUsers ]);
		}

		if (sortBy === 'gender') {
			const sortedUsers = users.sort((a, b) => b.gender.localeCompare(a.gender));
			setUsers([ ...sortedUsers ]);
		}
	};

	return (
		<div>
			<h1>
				All Users App<span className="green-point">.</span>
			</h1>
			<div>
				<UsersList
					users={users}
					sortUsers={sortUsers}
					setPageForward={setPageForward}
					setPageBackward={setPageBackward}
					setToFilterBy={setToFilterBy}
					page={page}
				/>
			</div>
		</div>
	);
}
