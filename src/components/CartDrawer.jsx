import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { X, Trash2, ShoppingCart, Loader2 } from 'lucide-react';

// Componente del menú lateral deslizante del carrito.
const CartDrawer = () => {
  // Estados y acciones globales importadas del CartContext.
  const { cart, isCartOpen, toggleCart, removeFromCart, checkout, cartTotal } = useCart();
  // Validación de usuario: requiere estar logueado para comprar.
  const { user, toggleLogin } = useAuth();
  // Estado local para mostrar un spinner de carga en el botón de pagar.
  const [isCheckoutProcessing, setIsCheckoutProcessing] = useState(false);
  // Estado local para mostrar un spinner en el botón del basurero específico que se clickeó.
  const [removingId, setRemovingId] = useState(null);

  // Función asíncrona para proceder al pago.
  const handleCheckout = async () => {
    // Regla de negocio: No hacer nada si está vacío.
    if (cart.length === 0) return;
    
    // Regla de negocio: Forzar el login si el usuario es "null" (visitante).
    if (!user) {
      alert('¡Ups! Debes iniciar sesión primero para poder finalizar tu compra.');
      toggleCart();
      toggleLogin();
      return;
    }

    setIsCheckoutProcessing(true);
    await checkout();
    alert('¡Compra realizada con éxito! Serás redirigido a la plataforma.');
    setIsCheckoutProcessing(false);
    toggleCart();
  };

  // Función asíncrona para eliminar ítem individual y bloquear botón mientras carga.
  const handleRemove = async (id) => {
    setRemovingId(id);
    await removeFromCart(id);
    setRemovingId(null);
  };

  return (
    <>
      {/* Capa negra de fondo oscuro. Tocar 'bg-black/40' para hacer la sombra más clara u oscura. */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
        onClick={toggleCart}
      ></div>
      
      {/* Panel blanco/oscuro del carrito en sí. Cambiar 'sm:w-[400px]' por 'w-[500px]' para hacerlo más ancho. */}
      <div className={`fixed right-0 top-0 h-full w-full sm:w-[400px] bg-zinc-950/95 border-l border-zinc-800 z-50 p-6 flex flex-col transition-transform duration-300 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Cabecera del carrito. Modificar 'mb-8' para darle más espacio hacia abajo. */}
        <div className="flex justify-between items-center mb-8 border-b border-zinc-800 pb-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <ShoppingCart className="w-6 h-6 text-purple-400"/>
            Tu Carrito
          </h2>
          <button onClick={toggleCart} className="text-gray-400 hover:text-white transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Zona scrolleable de los productos. */}
        <div className="flex-grow overflow-y-auto flex flex-col gap-4 pr-2">
          {cart.length === 0 ? (
            // Mensaje de carrito vacío. Modificar el texto si se requiere algo más amigable.
            <p className="text-gray-400 text-center mt-10">Tu carrito está vacío.</p>
          ) : (
            // Iteración de elementos del carrito. Renderiza una mini tarjeta por ítem.
            cart.map(item => (
              <div key={item.id} className="flex justify-between items-center bg-zinc-900/50 p-4 rounded-xl border border-zinc-800/50">
                <div className="flex flex-col">
                  {/* Nombre y Precio del producto. Modificar text-green-400 si se quiere otro color. */}
                  <span className="text-white font-medium">{item.title}</span>
                  <span className="text-green-400 text-sm font-semibold">${item.price.toLocaleString('es-CL')}</span>
                  {/* Etiqueta extra si el ítem es un plan. */}
                  {item.interval && <span className="text-xs text-purple-400 mt-1">Suscripción</span>}
                </div>
                {/* Botón de eliminar con spinner condicional de Loader2 de lucide-react. */}
                <button 
                  onClick={() => handleRemove(item.id)} 
                  disabled={removingId === item.id || isCheckoutProcessing}
                  className="text-zinc-500 hover:text-red-400 transition-colors disabled:opacity-50 disabled:cursor-wait"
                >
                  {removingId === item.id ? <Loader2 className="w-5 h-5 animate-spin" /> : <Trash2 className="w-5 h-5" />}
                </button>
              </div>
            ))
          )}
        </div>

        {/* Zona inferior del carrito (Total y Pagar). */}
        <div className="mt-6 border-t border-zinc-800 pt-6">
          <div className="flex justify-between items-center mb-6">
            <span className="text-gray-300 text-lg">Total</span>
            <span className="text-white font-bold text-2xl">${cartTotal.toLocaleString('es-CL')}</span>
          </div>
          {/* Botón de Checkout. Lógica condicional (ternario) para cambiar estilos si el carrito está vacío. Modificar 'bg-purple-600' para el color del botón activo. */}
          <button 
            onClick={handleCheckout} 
            disabled={cart.length === 0 || isCheckoutProcessing}
            className={`w-full py-4 rounded-xl font-bold text-white transition-all shadow-lg flex items-center justify-center gap-2 disabled:cursor-wait ${
              cart.length > 0 && !isCheckoutProcessing 
                ? 'bg-purple-600 hover:bg-purple-500 shadow-purple-500/20' 
                : 'bg-zinc-800 text-zinc-500'
            }`}
          >
            {isCheckoutProcessing && <Loader2 className="w-5 h-5 animate-spin" />}
            {isCheckoutProcessing ? 'Procesando...' : 'Finalizar Compra'}
          </button>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
