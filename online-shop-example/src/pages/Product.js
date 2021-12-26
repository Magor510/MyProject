import React, { useState, useEffect } from 'react';
import { 
	Link as RouterLink,
	useParams 
} from "react-router-dom"
import Grid from "@mui/material/Grid";
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
import ProductCard from '../components/Product/ProductCard/ProductCard'
import Menu from '../components/Menu/Menu'
import { getData } from '../utils/api.js'
import { host } from '../constants'
import "../components/Product/ProductCard/index.css";

const Product = () => {
	const { productId } = useParams();
	const [product, setProduct] = useState({})
	const [isLoading, setLoading] = useState(false)
	console.log(productId)

	useEffect(() => {
		if(!isLoading) {
			setLoading(true)
			getData(`${host}/products/${productId}`).then((json) => {
				console.log(json)
				setProduct(json)
				setLoading(false)
			})
		}
	}, [])

    return (
        <div>
			<Menu totalPrice={product.totalPrice} count={product.count} items={product.items} onDeteteFromCartHandler={product.onDeteteFromCartHandler} />
			<Grid item xs={12} sm={12} md={12} sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				height: '100%',
				paddingTop: '4vw',
			}}>
				<Card>
					<MaterialLink component={RouterLink} to={`/product/${product.id}`}>
						<CardMedia
							component="img"
							image={product.image}
							alt="Card image"
						/>
					</MaterialLink>
					<CardContent className='CardContent'>
						<Typography gutterBottom variant="h5" component="div" className='ProductTitle'>
							{product.title}
						</Typography>
						<Typography variant="body2" color="text.secondary" className="BookAuthor">
							<PersonOutlineIcon className='PersonIcon' /> {product.author}
						</Typography>
						<Typography variant="body2" color="text" className="Price">
							<SellIcon className='SellIcon' />{product.price} ₽
						</Typography>
						<CardActions className="CardActions">
							<Button size="big" onClick={() => product.addToCart(product.price, { id: product.id, title: product.title, image: product.image, price: product.price })}>
								<AddShoppingCartIcon /> Добавить в корзину {product.addedCount > 0 && `(${product.addedCount})`}
							</Button>
						</CardActions>
					</CardContent>
				</Card>
				{/* <ProductCard
					id={product.id}
					title={product.title} 
					author={product.author} 
					price={product.price} 
					image={product.image}/> */}
				</Grid>
        </div>
    )
}

export default Product;
