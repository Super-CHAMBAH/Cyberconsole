import React from 'react';
import { useCart } from '../context/CartContext';
import { CreditCard, Loader } from 'lucide-react';

interface CheckoutFormProps {
  onClose: () => void;
}

export default function CheckoutForm({ onClose }: CheckoutFormProps) {
  const { state, dispatch } = useCart();
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simuler un délai de traitement
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsLoading(false);
    setIsSuccess(true);
    dispatch({ type: 'CLEAR_CART' });

    // Fermer après affichage du succès
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">Commande confirmée !</h3>
        <p className="text-gray-400">Merci pour votre confiance.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Informations personnelles</label>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Nom complet"
            required
            className="w-full rounded-md bg-white/5 border border-white/10 focus:border-cyan-500 focus:ring focus:ring-cyan-500/20 text-white"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full rounded-md bg-white/5 border border-white/10 focus:border-cyan-500 focus:ring focus:ring-cyan-500/20 text-white"
          />
          <input
            type="tel"
            placeholder="Téléphone"
            required
            className="w-full rounded-md bg-white/5 border border-white/10 focus:border-cyan-500 focus:ring focus:ring-cyan-500/20 text-white"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Adresse de livraison</label>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Adresse"
            required
            className="w-full rounded-md bg-white/5 border border-white/10 focus:border-cyan-500 focus:ring focus:ring-cyan-500/20 text-white"
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Code postal"
              required
              className="w-full rounded-md bg-white/5 border border-white/10 focus:border-cyan-500 focus:ring focus:ring-cyan-500/20 text-white"
            />
            <input
              type="text"
              placeholder="Ville"
              required
              className="w-full rounded-md bg-white/5 border border-white/10 focus:border-cyan-500 focus:ring focus:ring-cyan-500/20 text-white"
            />
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Paiement</label>
        <div className="space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Numéro de carte"
              required
              pattern="[0-9]{16}"
              className="w-full rounded-md bg-white/5 border border-white/10 focus:border-cyan-500 focus:ring focus:ring-cyan-500/20 text-white pl-12"
            />
            <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="MM/AA"
              required
              pattern="(0[1-9]|1[0-2])\/([0-9]{2})"
              className="w-full rounded-md bg-white/5 border border-white/10 focus:border-cyan-500 focus:ring focus:ring-cyan-500/20 text-white"
            />
            <input
              type="text"
              placeholder="CVC"
              required
              pattern="[0-9]{3}"
              className="w-full rounded-md bg-white/5 border border-white/10 focus:border-cyan-500 focus:ring focus:ring-cyan-500/20 text-white"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 pt-4">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-medium text-white">Total à payer</span>
          <span className="text-lg font-bold text-cyan-500">{state.total}€</span>
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 rounded-lg hover:from-cyan-600 hover:to-blue-600 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <Loader className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
              Traitement en cours...
            </>
          ) : (
            'Confirmer la commande'
          )}
        </button>
      </div>
    </form>
  );
}