import React, { useState } from 'react';
import '../styles/Header.scss';
import Menu from 'Components/Menu';

import menu from 'Icons/icon_menu.svg';
import logo from '/src/assets/logos/logo_yard_sale.svg';
import shoppingCart from 'Icons/icon_shopping_cart.svg';

const Header = () => {
	const [toogle, setToogle]= useState(false);
	const handleToogle =()=>{
		setToogle(!toogle);
	}

	return (
		<nav>
			<img src={menu} alt="menu" className="menu" />
			<div className="navbar-left">
				<img src={logo} alt="logo" className="nav-logo" />
				<ul>
					<li>
						<a href="/">All</a>
					</li>
					<li>
						<a href="/">Clothes</a>
					</li>
					<li>
						<a href="/">Electronics</a>
					</li>
					<li>
						<a href="/">Furnitures</a>
					</li>
					<li>
						<a href="/">Toys</a>
					</li>
					<li>
						<a href="/">Others</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li className="navbar-email" onClick={handleToogle}>
						enrique@example.com
					</li>
					<li className="navbar-shopping-cart">
						<img src={shoppingCart} alt="shopping cart" />
						<div>2</div>
					</li>
				</ul>
			</div>
			{toogle ? <Menu /> : null}			
		</nav>
	);
}

export default Header;