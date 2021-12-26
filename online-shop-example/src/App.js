import React from "react";
import { 
	BrowserRouter, 
	Route, 
	Routes, 	
	Navigate
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import { Shop, Home, Product, Login, Register } from './pages'
import './App.css';
// import 'semantic-ui-css/semantic.min.css'

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
const PrivateRoute = ({ children, ...rest }) => 
	localStorage.getItem('userId') 
		? children
	 	: <Navigate
			to="/login"
		/>

// const authContext = createContext();
// 
// function ProvideAuth({ children }) {
// 	const auth = useProvideAuth();
// 	return (
// 	  <authContext.Provider value={auth}>
// 		{children}
// 	  </authContext.Provider>
// 	);
// }

const App = () => {
  return (
	<BrowserRouter>
		<Routes>
			<Route path={'login'} element={<Login/>} />
			<Route path={'register'} element={<Register/>}/>
			<Route path={'/'} element={<MainLayout/>}>
				<Route index element={<Home/>}/>
				<Route 
					path={'catalog'} 
					element={
						<PrivateRoute>
							<Shop/>
						</PrivateRoute>
					}
				/>
			</Route>
			<Route path={'product'} element={<MainLayout/>}>
				{/* <Route index element = {<Products>}/> */}
				<Route 
					path={':productId'} 
					element={
						<PrivateRoute>
							<Product/>
						</PrivateRoute>
					}
				/>
			</Route>
		</Routes>
	</BrowserRouter>
  );
}

export default App;
