import React,{useState, useEffect} from 'react';
import ProductItem from '../components/ProductItem';
import useGetProductos from '../hooks/useGetProducts';
import '../styles/ProductList.scss';

const API ='https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
	const products = useGetProductos(API);

	return (
		<section className="main-container">
			<div className="ProductList">
				{products.map(product=>(
					<ProductItem product={product} key={product.id}/>
				))}				
			</div>
		</section>
	);
}

export default ProductList;
