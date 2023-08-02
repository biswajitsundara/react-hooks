import { useReducer } from "react";
import { CartReducer } from "./CartReducer";

const ShoppingCart = () => {

  const [cartState, dispatch] = useReducer(CartReducer, {cartItems: []});

  const addToCart = (item) => {
    dispatch({type: 'ADD_TO_CART', payload: item})
  }

  const removeFromCart = (itemId) => {
    dispatch({type: 'REMOVE_FROM_CART', payload: itemId})
  }

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <>
      <h2>Shopping Cart</h2>
      <ul>
        {cartState.cartItems.map((item) => (
          <li key={item.id}>
            {`${item.name} - ${item.price}`}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={clearCart}>Clear Cart</button>

      <h2>Available Items</h2>
      <ul>
        <li>
          Amul - $10{" "}
          <button
            onClick={() => addToCart({ id: 1, name: "Amul", price: "10$" })}
          >
            Add to Cart
          </button>
        </li>
        <li>
          iPhone - $20{" "}
          <button
            onClick={() => addToCart({ id: 2, name: "iPhone", price: "20$" })}
          >
            Add to Cart
          </button>
        </li>
      </ul>
    </>
  );
};

export default ShoppingCart;
