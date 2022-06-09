import { useState } from "react";

const useInitialState = () => {
    const [state, setState] = useState({cart: []});

    const addToCart = (payload) => {
        setState({
            cart: [...state.cart, payload]
        })
    }
    const removeFromCart = (payload) => {
        setState({// minificado
            cart: state.cart.filter(item => item.id !== payload.id),
        })
    }
    return {
        state,
        addToCart,
        removeFromCart,
    }
}

export default useInitialState;