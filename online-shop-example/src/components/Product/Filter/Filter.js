import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search'
import InputBase from '@mui/material/InputBase';
import { Box, ToggleButton, ToggleButtonGroup, Toolbar } from '@mui/material';
import './index.css'

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	'&:hover': {
	  backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
	  marginLeft: theme.spacing(1),
	  width: 'auto',
	},
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 1.5),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
	  padding: theme.spacing(1, 1, 1, 0),
	  // vertical padding + font size from searchIcon
	  paddingLeft: `calc(1em + ${theme.spacing(3)})`,
	  transition: theme.transitions.create('width'),
	  width: '100%',
	  border: "1px solid grey",
	  borderRadius: "6px",
	  [theme.breakpoints.up('sm')]: {
		width: '15ch',
		'&:focus': {
		  width: '30ch',
		},
	  },
	},
  }));

const Filter = ({ setFilter, filterBy, searchQuery, setSearchQuery }) => (
	<Box sx={{ flexGrow: 1 }}>
		<Toolbar>
			<ToggleButtonGroup
				color="primary"
				value={filterBy}
				size="small"
				exclusive
				onChange={setFilter}
			>
				<ToggleButton value="all" className="FilterBtn" sx={{ color: '#ffffff'}}>Все</ToggleButton>
				<ToggleButton value="price_high" className="FilterBtn" >Цена (дорогие)</ToggleButton>
				<ToggleButton value="price_low" className="FilterBtn" >Цена (дешевые)</ToggleButton>
				<ToggleButton value="author" className="FilterBtn" >Автор</ToggleButton>
			</ToggleButtonGroup>
			<Search>
				<SearchIconWrapper>
					<SearchIcon sx={{ color: '#ffffff'}}/>
				</SearchIconWrapper>
				<StyledInputBase
					placeholder="Введите запрос..."
					inputProps={{ 'aria-label': 'search' }}
					onChange={e => setSearchQuery(e.target.value)}
					value={searchQuery}
					className='SearchInput'
				/>
			</Search>
		</Toolbar>
	</Box>
);

export default Filter;
