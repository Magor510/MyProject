import React, { useState } from 'react';
import { 
	Link as RouterLink,
	useNavigate,
} from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import MaterialLink from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { postData, getData } from '../utils/api';
import { host } from '../constants'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <MaterialLink color="inherit" href="https://mui.com/">
        Your Website
      </MaterialLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Register() {
	const navigate = useNavigate();

	const checkAvailableEmail = async (formDataEmail) => {
		return getData(`${host}/users`).then((data) => {
			const user = data.find(item => item.email === formDataEmail)
			return user === undefined || data.length === 0 ? true : false 
		});
	}

  	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		checkAvailableEmail(formData.get('email')).then((isAvailableEmail) => {
			if(isAvailableEmail) {
				postData(`${host}/users`, "POST", 
					{
						email: formData.get('email'),
						password: formData.get('password'),
						username: formData.get('username'),
					}
				).then((data) => {
					console.log(data);
					// localStorage.setItem("userId", data.id)
					// localStorage.setItem("username", data.username)
					console.log(localStorage.getItem("userId"));
					navigate('/login')
				})
			} else {
				console.log(`${formData.get('email')} уже занят`)
			}
		})
  	};

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
			<TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
            />
			<TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item>
			  		<MaterialLink component={RouterLink} to={"/login"}>
						{"Already have an account? Sign In"}
					</MaterialLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}