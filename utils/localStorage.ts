import { CartItem } from "@/redux/cartSlice";

export const loadCartFromStorage = (): CartItem[] => {
  if (typeof window === "undefined") return [];

  try {
    const serializedCart = localStorage.getItem("cart");
    return serializedCart ? JSON.parse(serializedCart) : [];
  } catch (error) {
    console.error("Error loading cart from localStorage:", error);
    return [];
  }
};

export const saveCartToStorage = (cartItems: CartItem[]): void => {
  if (typeof window === "undefined") return;

  try {
    const serializedCart = JSON.stringify(cartItems);
    localStorage.setItem("cart", serializedCart);
  } catch (error) {
    console.error("Error saving cart to localStorage:", error);
  }
};
