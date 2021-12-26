import React from 'react';
import { 
	Link as RouterLink,
} from 'react-router-dom';
import MaterialLink from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SellIcon from '@mui/icons-material/Sell';
import "../../../App.css";
import "./index.css";

const ProductCard = ({ id, title, author, price, image, addToCart, addedCount }) => {
  return (
	<Card className='ProductCard'>
		<MaterialLink component={RouterLink} to={`/product/${id}`}>
			<CardMedia
				component="img"
				className='CardImage'
				image={image}
				alt="Card image"
			/>
		</MaterialLink>
		<CardContent className='CardContent'>
			<Typography gutterBottom variant="h5" component="div" className='ProductTitle'>
				{title}
			</Typography>
			<Typography variant="body2" color="text.secondary" className="BookAuthor">
				<PersonOutlineIcon className='PersonIcon' /> {author}
			</Typography>
			<Typography variant="body2" color="text" className="Price">
				<SellIcon className='SellIcon' />{price} ₽
			</Typography>
			<CardActions className="CardActions">
				<Button size="big" onClick={() => addToCart(price, { id: id, title: title, image: image, price: price })}>
					<AddShoppingCartIcon /> Добавить в корзину {addedCount > 0 && `(${addedCount})`}
				</Button>
			</CardActions>
		</CardContent>
  	</Card>
  );
};

export default ProductCard;
