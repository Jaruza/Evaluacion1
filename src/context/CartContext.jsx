import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (item) => {
    // Regla 1: Duplicados
    if (cart.some((i) => i.id === item.id)) {
      alert('Este ítem ya está en tu carrito');
      return;
    }

    if (item.interval) {
      // Regla 2 y 3: Es Suscripción y el carrito tiene cosas
      if (cart.length > 0) {
        alert('Añadiendo suscripción: Los cursos individuales serán removidos ya que la suscripción incluye todo');
        setCart([item]);
        return;
      }
    } else {
      // Regla 4: Es Curso Individual, verificar si hay suscripción
      if (cart.some((i) => i.interval)) {
        alert('No puedes añadir cursos sueltos porque tu suscripción actual ya los incluye todos');
        return;
      }
    }

    setCart([...cart, item]);
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  const cartTotal = cart.reduce((total, item) => total + item.price, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        addToCart,
        removeFromCart,
        clearCart,
        toggleCart,
        cartTotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
