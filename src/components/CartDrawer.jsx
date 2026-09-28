import React from 'react';
import { useCart } from '../context/CartContext';
import { X, Trash2, ShoppingCart } from 'lucide-react';

const CartDrawer = () => {
  const { cart, isCartOpen, toggleCart, removeFromCart, clearCart, cartTotal } = useCart();

  const handleCheckout = () => {
    if (cart.length === 0) return;
    alert('¡Compra realizada con éxito! Serás redirigido a la plataforma.');
    clearCart();
    toggleCart();
  };

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
        onClick={toggleCart}
      ></div>
      
      <div className={`fixed right-0 top-0 h-full w-full sm:w-[400px] bg-zinc-950/95 border-l border-zinc-800 z-50 p-6 flex flex-col transition-transform duration-300 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center mb-8 border-b border-zinc-800 pb-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <ShoppingCart className="w-6 h-6 text-purple-400"/>
            Tu Carrito
          </h2>
          <button onClick={toggleCart} className="text-gray-400 hover:text-white transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-grow overflow-y-auto flex flex-col gap-4 pr-2">
          {cart.length === 0 ? (
            <p className="text-gray-400 text-center mt-10">Tu carrito está vacío.</p>
          ) : (
            cart.map(item => (
              <div key={item.id} className="flex justify-between items-center bg-zinc-900/50 p-4 rounded-xl border border-zinc-800/50">
                <div className="flex flex-col">
                  <span className="text-white font-medium">{item.title}</span>
                  <span className="text-green-400 text-sm font-semibold">${item.price.toLocaleString('es-CL')}</span>
                  {item.interval && <span className="text-xs text-purple-400 mt-1">Suscripción</span>}
                </div>
                <button onClick={() => removeFromCart(item.id)} className="text-zinc-500 hover:text-red-400 transition-colors">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))
          )}
        </div>

        <div className="mt-6 border-t border-zinc-800 pt-6">
          <div className="flex justify-between items-center mb-6">
            <span className="text-gray-300 text-lg">Total</span>
            <span className="text-white font-bold text-2xl">${cartTotal.toLocaleString('es-CL')}</span>
          </div>
          <button 
            onClick={handleCheckout} 
            disabled={cart.length === 0}
            className={`w-full py-4 rounded-xl font-bold text-white transition-all shadow-lg ${cart.length > 0 ? 'bg-purple-600 hover:bg-purple-500 shadow-purple-500/20' : 'bg-zinc-800 text-zinc-500 cursor-not-allowed'}`}
          >
            Finalizar Compra
          </button>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
