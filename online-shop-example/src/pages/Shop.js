import React, { useState, useEffect } from 'react';
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import Menu from '../components/Menu/Menu'
import Filter from '../components/Product/Filter/Filter';
import ProductCard from '../components/Product/ProductCard/ProductCard'
import { getData } from '../utils/api.js'
import { searchBooks } from '../utils/productsHelper'
import { host } from '../constants'

const useStyles = makeStyles({
	gridContainer: {
	  paddingLeft: "10vw",
	  paddingRight: "10vw"
	}
  });

const Shop = (props) => {
	const classes = useStyles();
	
	const [totalPrice, setTotalPrice] = useState(0)
	const [count, setCount] = useState(0)
	const [filterBy, setFilter] = useState("all")
	const [searchQuery, setSearchQuery] = useState('')
	const [items, setItems] = useState([])

	console.log(filterBy)
	console.log(searchQuery)

	const [books, setBooks] = useState([])
	const [isLoading, setLoading] = useState(false)

	useEffect(() => {
		if(!isLoading) {
			setLoading(true)
			getData(`${host}/products`).then((json) => {
				setBooks(json)
				setLoading(false)
			})
		}
	}, [])
	
	const onAddToCartHandler = (price, item) => {
		// item - { "id" (product): "...", image: "...", title: "..." }
		console.log(item)
		setCount(count + 1)
		setTotalPrice(totalPrice + price)
		setItems([...items, item])
	}

	const onDeteteFromCartHandler = (price, itemId) => {
		console.log(itemId)
		items.forEach((item, index) => {
			if (item.id === itemId) {
				setTotalPrice(totalPrice - item.price)				
			}
		})
		setCount(count - 1)
		setItems(items.filter((value) => value.id === itemId))
	}

	const handleChangeFilter = (event, newFilter) => {
		setFilter(newFilter);
	};

    return (
		<>
			<Menu totalPrice={totalPrice} count={count} items={items} onDeteteFromCartHandler={onDeteteFromCartHandler} />
			<Filter setFilter={handleChangeFilter} filterBy={filterBy} searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
			<Grid
				container
				spacing={8}
				className={classes.gridContainer}
				justify="center"
				alignItems="center"
			>
				{ isLoading
					? <Grid item 
							xs={12}
							sm={12} 
							md={12} 
							sx={{marginTop: 10}}
						>
							{'Загрузка...'}
						</Grid>
					: searchBooks(books, filterBy, searchQuery).map((book, i) => 
						<Grid item xs={12} sm={6} md={4}>
							<ProductCard key={i}
								id={book.id} 
								title={book.title} 
								author={book.author} 
								price={book.price} 
								image={book.image}
								addToCart={onAddToCartHandler}/>
						</Grid>
					)
				}
			</Grid>
			{/* <ScrollTop {...props}>
				<Fab color="secondary" size="small" aria-label="scroll back to top">
				<KeyboardArrowUpIcon />
				</Fab>
      		</ScrollTop> */}
		</>
    )
}

export default Shop;
