import { useState } from "react";

const useInitialState = () => {
    const [state, setState] = useState({cart: []});

    const addToCart = (payload) => {
        setState({
            cart: [...state.cart, payload]
        })
    }
    return {
        state,
        addToCart
    }
}

export default useInitialState;