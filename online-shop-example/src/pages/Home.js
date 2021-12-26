import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Menu from '../components/Menu/Menu'



const Home = () => {
    return (
		<>
			<Menu />
			<Typography sx={{ color: '#ffffff', paddingTop: '10vh'}}>
				Магазин книг с лучшими ценами и подробным описанием товаров!
			</Typography>
		</>
    )
}

export default Home;
