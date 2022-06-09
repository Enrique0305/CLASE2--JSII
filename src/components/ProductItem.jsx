import React, { useContext } from 'react';
import AppContext from 'Context/AppContext';
import '../styles/ProductItem.scss';
import addToCartImage from 'Icons/bt_add_to_cart.svg'

const ProductItem = ({ product }) => {
	const { addToCart } = useContext(AppContext);

	const handleClick  = item => {
		addToCart(item);
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
				<figure onClick={()=>handleClick(product)}>
					<img src={addToCartImage} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
