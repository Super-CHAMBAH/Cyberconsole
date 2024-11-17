import React from 'react';
import { Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { RepairService, SparePart } from '../types';

interface CatalogItemProps {
  item: RepairService | SparePart;
  type: 'repair' | 'part';
}

export default function CatalogItem({ item, type }: CatalogItemProps) {
  const { dispatch } = useCart();

  const addToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: item.id,
        type,
        quantity: 1,
        price: item.price,
        name: item.name,
      },
    });
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/10 hover:border-cyan-500 transition-all duration-300">
      {'imageUrl' in item && (
        <img
          src={item.imageUrl}
          alt={item.name}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
      )}
      <h3 className="text-xl font-semibold mb-2 text-white">{item.name}</h3>
      <p className="text-gray-300 mb-4">{item.description}</p>
      {'compatibility' in item && (
        <div className="mb-4">
          <p className="text-sm text-gray-400">Compatible avec:</p>
          <div className="flex flex-wrap gap-2 mt-1">
            {item.compatibility.map((console, index) => (
              <span
                key={index}
                className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded"
              >
                {console}
              </span>
            ))}
          </div>
        </div>
      )}
      {'duration' in item && (
        <p className="text-sm text-gray-400 mb-4">
          Durée estimée: {item.duration}
        </p>
      )}
      <div className="flex justify-between items-center mt-auto">
        <span className="text-xl font-bold text-cyan-500">{item.price}€</span>
        <button
          onClick={addToCart}
          className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-blue-600"
        >
          <Plus className="h-5 w-5" />
          Ajouter
        </button>
      </div>
    </div>
  );
}