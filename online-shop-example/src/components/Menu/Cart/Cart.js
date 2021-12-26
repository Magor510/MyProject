import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const CartComponent = ({ items, onDeteteFromCartHandler }) => {
	console.log(items)
	return(
		<List>
			{items.length !== 0 && items.map((item) =>
				<ListItem
					secondaryAction={
						<IconButton 
							edge="end"
							aria-label="delete"
							onClick={() => {
								console.log(item.id)
								onDeteteFromCartHandler(item.id)
							}}
						>
							<DeleteIcon />
						</IconButton>
					}
				>
					<ListItemAvatar>
						<Avatar
							alt="Book image"
							src={item.image}
							sx={{ width: 24, height: 24 }}
						/>
					</ListItemAvatar>
					<ListItemText primary={item.title} />
				</ListItem>
			)}
	  	</List>
	);
}


export default CartComponent