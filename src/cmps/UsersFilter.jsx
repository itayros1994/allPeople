import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export function UsersFilter({setToFilterBy}) {
  const [filter, setFilterBy] = React.useState('');

  const handleChange = (event) => {
    setFilterBy(event.target.value);
    setToFilterBy(filter)
  };

  return (
    <div className='filter-by-container'>
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Filter By</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filter}
          label="FilterBy"
          onChange={handleChange}
          >
          <MenuItem value={''}>All Genders</MenuItem>        
          <MenuItem value={'female'}>Male</MenuItem>        
          <MenuItem value={'male'}>Female</MenuItem>
        </Select>
      </FormControl>
    </Box>
          </div>
  );
}