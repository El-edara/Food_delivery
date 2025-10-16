import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { saveCartToStorage } from "../../utils/localStorage";

export interface CartItem {
  id: string;
  name: string;
  image: string;
  rating?: number;
  cuisine?: string;
  deliveryTime?: number;
  description?: string;
  price?: number;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Load cart from localStorage (new action)
    loadCart: (state, action: PayloadAction<CartItem[]>) => {
      state.items = action.payload;
    },

    addItem: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += action.payload.quantity || 1;
      } else {
        state.items.push({
          ...action.payload,
          quantity: action.payload.quantity || 1,
        });
      }

      // save to localStorage after adding item
      saveCartToStorage(state.items);
    },

    removeItem: (state, action: PayloadAction<{ id: string | number }>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);

      // save to localStorage after adding item
      saveCartToStorage(state.items);
    },

    incrementQuantity: (
      state,
      action: PayloadAction<{ id: string | number }>
    ) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      }

      // save to localStorage after adding item
      saveCartToStorage(state.items);
    },

    decrementQuantity: (
      state,
      action: PayloadAction<{ id: string | number }>
    ) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.items = state.items.filter(
            (item) => item.id !== action.payload.id
          );
        }
      }

      // save to localStorage after adding item
      saveCartToStorage(state.items);
    },

    clearCart: (state) => {
      state.items = [];

      // save to localStorage after adding item
      saveCartToStorage(state.items);
    },

    updateQuantity: (
      state,
      action: PayloadAction<{ id: string | number; quantity: number }>
    ) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }

      // save to localStorage after adding item
      saveCartToStorage(state.items);
    },
  },
});

export const {
  loadCart,
  addItem,
  removeItem,
  incrementQuantity,
  decrementQuantity,
  clearCart,
  updateQuantity,
} = cartSlice.actions;

// Selectors
export const selectCartItems = (state: { cart: CartState }) => state.cart.items;
export const selectCartTotal = (state: { cart: CartState }) =>
  state.cart.items.reduce(
    (total, item) => total + (item.price ?? 0) * item.quantity,
    0
  );
export const selectCartItemCount = (state: { cart: CartState }) =>
  state.cart.items.reduce((count, item) => count + item.quantity, 0);

export default cartSlice.reducer;
