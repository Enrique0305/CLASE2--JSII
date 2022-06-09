import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import {Home} from '../pages/Home';
import Login from '../pages/Login';
import PasswordRecovery from '../pages/PasswordRecovery';
import SendEmail from '../pages/SendEmail';
import NewPassword from '../pages/NewPassword';
import MyAccount from '../pages/MyAccount';
import CreateAccount from '../pages/CreateAccount';
import Checkout from '../pages/Checkout';
import Orders from '../pages/Orders';
import NotFound from '../pages/NotFound';
import '../styles/global.scss';
import AppContext from 'Context/AppContext';
import useInitialState from 'Hooks/useInitialState';


const App = () => {
	const initialState = useInitialState();
	return (
		<AppContext.Provider value={initialState}>
			<BrowserRouter>
					<Routes>
						<Route path='/' exact element={<Layout />}>
							<Route index exact element={<Home/>} />
							<Route path="login" exact element={<Login/>} />
							<Route path="password-recovery" exact element={<PasswordRecovery/>} />
							<Route path="send-email" exact element={<SendEmail/>} />
							<Route path="new-password" exact element={<NewPassword/>} />
							<Route path="account" exact element={<MyAccount/>} />
							<Route path="signup" exact element={<CreateAccount/>} />
							<Route path="checkout" exact element={<Checkout/>} />
							<Route path="checkout" exact element={<Checkout/>} />
							<Route path="orders" exact element={<Orders/>} />
							<Route path="*" exact element={<NotFound/>} />
						</Route>
					</Routes>
			</BrowserRouter>
		</AppContext.Provider>
	);
}

export default App;
