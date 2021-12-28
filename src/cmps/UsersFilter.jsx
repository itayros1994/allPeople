import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export function UsersFilter({setToFilterBy}) {
  const [filter, setFilterBy] = React.useState('all-genders');

  const handleChange = (event) => {
    setFilterBy(event.target.value);
    setToFilterBy(event.target.value)
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
          <MenuItem value={'all-genders'}>All Genders</MenuItem>        
          <MenuItem value={'female'}>Female</MenuItem>        
          <MenuItem value={'male'}>Male</MenuItem>
        </Select>

      </FormControl>
    </Box>
          </div>
  );
}