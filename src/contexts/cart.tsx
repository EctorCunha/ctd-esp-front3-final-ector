import React, { createContext, useContext, useState } from "react";

interface CartProviderProps {
  children: React.ReactNode;
}

interface CartProps {
  title: string;
  thumbnail: string;
  prices: number;
  stock: number;
  description: string;
}

interface CartContext {
  cart: CartProps | null;
  setCart: React.Dispatch<React.SetStateAction<CartProps | null>>;
}
const CartContext = createContext<CartContext>({} as CartContext);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<CartProps | null>(null);

  return (
    <CartContext.Provider
      value={{
        setCart,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export function useCartContext() {
  const context = useContext(CartContext);
  return context;
}
