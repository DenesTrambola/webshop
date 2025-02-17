import { createSlice } from "@reduxjs/toolkit";

const loadCart = () => {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : [];
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: loadCart(),
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.cartItems.find((item) => item.productId === product.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push(
          { productId: product.id, productName: product.name, quantity: 1 }
        );
      }

      saveCart(state.cartItems);
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.productId !== productId);
      saveCart(state.cartItems);
    },
    clearCart: (state) => {
      state.cartItems = [];
      saveCart([]);
    },
    setCartFromDB: (state, action) => {
      console.log(state.cartItems);
      state.cartItems = [...action.payload];
      console.log(state.cartItems);
      saveCart(action.payload);
      console.log(state.cartItems);
    },
  },
});

export const { addToCart, removeFromCart, clearCart, setCartFromDB } = cartSlice.actions;
export default cartSlice.reducer;

const saveCart = (cartItems) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user) {
    fetch(`http://localhost:5001/users/${user.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cart: cartItems }),
    });
  }

  localStorage.setItem("cart", JSON.stringify(cartItems));
};
