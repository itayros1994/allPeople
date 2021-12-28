import React, { useEffect, useState } from 'react';
import { UsersService } from '../services/UsersService';
import { UsersList } from '../cmps/UsersList';

export function AllUsersApp() {
	let [ page, setPage ] = useState('1');
  const [ users, setUsers ] = useState([]);
	const [ filterBy, setFilterBy ] = useState('');

  useEffect(
    () => {
      console.log('itay')
      UsersService.getUsers(page, filterBy).then((users) => setUsers(users.results));
    }, [ filterBy, page ]
  );

	const setPageForward = () => {
		if (page === 10) return;
    setPage(prevPage => page++)
	};

	const setPageBackward = () => {
		if (page === 1) return;
    setPage(prevPage => page--)
	};

	const setToFilterBy = (filterOption) => {
		setFilterBy(prevFilter => filterOption);
	};

	return (
		<div>
			<h1>All Users App !</h1>
			<div>
				<UsersList
					users={users}
					setPageForward={setPageForward}
					setPageBackward={setPageBackward}
					setToFilterBy={setToFilterBy}
					page={page}
				/>
			</div>
		</div>
	);
}
