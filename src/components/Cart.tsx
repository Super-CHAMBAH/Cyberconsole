import React from 'react';
import { ShoppingCart, X, Minus, Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CheckoutForm from './CheckoutForm';

export default function Cart() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isCheckout, setIsCheckout] = React.useState(false);
  const { state, dispatch } = useCart();

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return;
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsCheckout(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-cyan-500 p-4 rounded-full shadow-lg hover:bg-cyan-600 transition-colors z-50"
      >
        <ShoppingCart className="h-6 w-6 text-white" />
        {state.items.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
            {state.items.length}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50">
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-[#0a0a0a] shadow-xl p-6 overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-white">
                {isCheckout ? 'Finaliser la commande' : 'Panier'}
              </h2>
              <button
                onClick={handleClose}
                className="text-gray-400 hover:text-white"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {!isCheckout && (
              <>
                {state.items.length === 0 ? (
                  <p className="text-gray-400 text-center py-8">Votre panier est vide</p>
                ) : (
                  <>
                    <div className="space-y-4 mb-6">
                      {state.items.map((item) => (
                        <div key={item.id} className="bg-white/5 p-4 rounded-lg">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h3 className="font-medium text-white">{item.name}</h3>
                              <p className="text-sm text-gray-400">{item.price}€</p>
                            </div>
                            <button
                              onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}
                              className="text-red-500 hover:text-red-600"
                            >
                              <X className="h-5 w-5" />
                            </button>
                          </div>
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1 rounded-md bg-gray-800 hover:bg-gray-700"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 rounded-md bg-gray-800 hover:bg-gray-700"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-white/10 pt-4">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-lg font-medium text-white">Total</span>
                        <span className="text-lg font-bold text-cyan-500">{state.total}€</span>
                      </div>
                      <button
                        onClick={() => setIsCheckout(true)}
                        className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 rounded-lg hover:from-cyan-600 hover:to-blue-600"
                      >
                        Commander
                      </button>
                    </div>
                  </>
                )}
              </>
            )}

            {isCheckout && <CheckoutForm onClose={handleClose} />}
          </div>
        </div>
      )}
    </>
  );
}