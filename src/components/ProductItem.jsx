import React, { useState } from 'react';
import '../styles/ProductItem.scss';
import addToCart from 'Icons/bt_add_to_cart.svg'

const ProductItem = ({ product }) => {
	const [cart, setCart] = useState(null);

	const addToCartHandler = () => {
		setCart('Hola Mundo');
	}
	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>
						{new Intl.NumberFormat('en-US',
							{
								style: 'currency',
								currency: 'USD'
							}
						).format(product.price)}
					</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={addToCartHandler}>
					<img src={addToCart} alt="" />
				</figure>
				{cart}
			</div>
		</div>
	);
}

export default ProductItem;
