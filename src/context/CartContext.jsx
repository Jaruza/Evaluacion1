import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const exists = prevCart.find((i) => i.id === item.id);
      if (exists) {
        console.warn('El ítem ya está en el carrito');
        return prevCart;
      }
      return [...prevCart, item];
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  // Regla de Oro: Si hay suscripción, los cursos sueltos son gratis
  const hasSubscription = cart.some((item) => item.interval);

  const cartTotal = cart.reduce((total, item) => {
    if (hasSubscription) {
      // Si hay suscripción, solo sumamos los ítems que sean suscripciones (los que tienen interval)
      if (item.interval) {
        return total + item.price;
      }
      // Los cursos sueltos no suman al total
      return total;
    } else {
      // Si no hay suscripción, sumamos el precio de cada curso individual
      return total + item.price;
    }
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        addToCart,
        removeFromCart,
        toggleCart,
        cartTotal,
        hasSubscription
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
