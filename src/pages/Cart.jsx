import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../stores/slices/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id}>
              <h3>{item.productName}</h3>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => dispatch(removeFromCart(item.productId))}>
                Remove
              </button>
            </div>
          ))}
          <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
