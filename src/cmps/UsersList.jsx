import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { UsersFilter } from './UsersFilter';

export function UsersList({ users, setPageForward, setPageBackward, page, setToFilterBy, sortUsers }) {


	return (
		<div>
			<div className="filter-by">
				<UsersFilter setToFilterBy={setToFilterBy} />
			</div>
			<div className="pagination-container">
				<div className="page-arrow">
					<ChevronLeftIcon onClick={setPageBackward}>⬅</ChevronLeftIcon>
				</div>
				<span className="page-number">Page Number : {page}</span>
				<ChevronRightIcon className="page-arrow" onClick={setPageForward}>
					➡
				</ChevronRightIcon>
			</div>
			<TableContainer component={Paper}>
				<Table className='table-header-container' sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead >
						<TableRow>
							<TableCell>Avatar</TableCell>
							<TableCell className="table-header" onClick={() => sortUsers('name')} >Full-Name</TableCell>
							<TableCell className="table-header" onClick={() => sortUsers('age')}>Age</TableCell>
							<TableCell className="table-header" onClick={() => sortUsers('gender')}>Gender</TableCell>
							<TableCell>Email</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{users.map((user) => (
							<TableRow
								className="user-preview-container"
								key={user.name}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<TableCell component="th" scope="row">
									<Link
										to={{
											pathname: `/details/${user.name.first}`,
											state: {
												choosenUser: user
											}
										}}
									>
										<img className="user-avatar" src={user.picture.thumbnail} />
									</Link>
								</TableCell>
								<TableCell>
									{user.name.first.substring(0, 1)}
									{user.name.last.substring(0, 1)}
								</TableCell>
								<TableCell>{user.registered.age}</TableCell>
								<TableCell>{user.gender}</TableCell>
								<TableCell>
									<p>
										<a className="email" href={`mailto:${user.email}`}>
											📨
										</a>
									</p>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
}
