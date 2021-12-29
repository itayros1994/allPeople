import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

export function Header() {

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" noWrap component="div" sx={{ display: { xs: 'none', sm: 'block' } }}>
						All Users<span className='green-point'>.</span>
					</Typography>
					<Box sx={{ flexGrow: 1 }} />
					<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
						<IconButton>
							<Link to="/">
								<div className="link">
									<HomeIcon />
								</div>
							</Link>
						</IconButton>
					</Box>
					<Box sx={{ display: { xs: 'flex', md: 'none' } }}>
					<IconButton>
							<Link to="/">
								<div className="link">
									<HomeIcon />
								</div>
							</Link>
						</IconButton>
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
