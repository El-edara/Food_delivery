"use client";
import { ReactNode, useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import { store } from "./store";
import { loadCart } from "./cartSlice";

function CartLoader({ children }: { children: ReactNode }) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        dispatch(loadCart(JSON.parse(savedCart)));
      }
    }
  }, [dispatch]);

  return <>{children}</>;
}

const ReduxProvider = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <CartLoader>{children}</CartLoader>
    </Provider>
  );
};

export default ReduxProvider;
