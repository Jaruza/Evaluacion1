import React, { createContext, useState, useContext, useEffect } from 'react';
import { simulatePost, simulateDelete } from '../services/apiMock';

// Crea el contexto global. No tocar al menos que vayamos a migrar a Zustand o Redux.
const CartContext = createContext();

// Hook personalizado para consumir el carrito fácilmente importando useCart() en cualquier componente.
export const useCart = () => useContext(CartContext);

// Proveedor global que inyecta la lógica a toda la app en main.jsx/App.jsx.
export const CartProvider = ({ children }) => {
  // Inicializa el carrito chequeando primero el disco duro (LocalStorage). Modificar 'uat_cart' si cambiamos el nombre de la variable en el navegador.
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('uat_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  // Controla si el menú lateral (Drawer) del carrito se despliega o se esconde.
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Cada vez que mutemos el array 'cart', esto lo guarda directo al LocalStorage para sobrevivir si el usuario aprieta F5.
  useEffect(() => {
    localStorage.setItem('uat_cart', JSON.stringify(cart));
  }, [cart]);

  // Función principal para meter items al array. 
  const addToCart = async (item) => {
    // Regla 1: Duplicados. Bloquea si la ID ya existe. Modificar el alert por un Toast visual si queremos mejor experiencia.
    if (cart.some((i) => i.id === item.id)) {
      alert('Este ítem ya está en tu carrito');
      return;
    }

    if (item.interval) {
      // Regla 2 y 3: Es Suscripción pero el carrito ya tiene cosas sueltas adentro.
      if (cart.length > 0) {
        alert('Añadiendo suscripción: Los cursos individuales serán removidos ya que la suscripción incluye todo');
        await simulatePost('/api/cart/add', { item });
        // Pisa el carrito completo y deja la suscripción sola. Eliminar esta línea si no queremos el reemplazo destructivo.
        setCart([item]);
        return;
      }
    } else {
      // Regla 4: Es Curso Suelto, pero el tipo ya tiene el plan VIP o similar cargado.
      if (cart.some((i) => i.interval)) {
        alert('No puedes añadir cursos sueltos porque tu suscripción actual ya los incluye todos');
        return;
      }
    }

    // Le pega al falso backend y luego le suma el ítem al final del array local.
    await simulatePost('/api/cart/add', { item });
    setCart([...cart, item]);
  };

  // Saca un ítem filtrando todo el array excepto esa ID específica.
  const removeFromCart = async (id) => {
    await simulateDelete('/api/cart/remove', { id });
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Borrón y cuenta nueva. Útil para un botón de "Vaciar carrito" completo.
  const clearCart = () => {
    setCart([]);
  };

  // Dispara la transacción final y vacía el arreglo.
  const checkout = async () => {
    await simulatePost('/api/checkout', { cart });
    setCart([]);
  };

  // Abre/Cierra la barra lateral del carrito invirtiendo el booleano actual.
  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  // Calcula el total iterando la suma del precio. Cambiar 'item.price' si la estructura del db.js pasa a ser 'item.costo' o algo similar.
  const cartTotal = cart.reduce((total, item) => total + item.price, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        addToCart,
        removeFromCart,
        clearCart,
        checkout,
        toggleCart,
        cartTotal
      }}
    >
      {/* Expone estas variables y mutadores a los componentes hijos que usen useCart */}
      {children}
    </CartContext.Provider>
  );
};
