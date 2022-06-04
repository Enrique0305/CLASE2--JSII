import {useState, useEffect} from 'react';
import axios from 'axios';

const useGetProductos = (API)=>{
    const [products,setProducts]=useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const response = await axios(API);
            setProducts(response.data);
        };
        getProducts();
    }, []);

    return products;
}

export default useGetProductos;
