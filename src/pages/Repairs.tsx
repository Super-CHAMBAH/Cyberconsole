import React from 'react';
import CatalogItem from '../components/CatalogItem';
import { repairServices } from '../data/catalog';

export default function Repairs() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&q=80&w=1950')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h1 className="text-4xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Catalogue des Réparations
            </span>
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-12">
            Découvrez nos services de réparation professionnels pour toutes les consoles de jeux.
            Des solutions adaptées à chaque problème, avec une garantie de 6 mois.
          </p>
        </div>
      </section>

      {/* Catalogue */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {repairServices.map((service) => (
              <CatalogItem key={service.id} item={service} type="repair" />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Questions Fréquentes
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: 'Quelle est la durée moyenne d\'une réparation ?',
                answer: 'La plupart des réparations sont effectuées en 24-48h après acceptation du devis.',
              },
              {
                question: 'Proposez-vous une garantie ?',
                answer: 'Oui, toutes nos réparations sont garanties 6 mois pièces et main d\'œuvre.',
              },
              {
                question: 'Comment fonctionne le diagnostic ?',
                answer: 'Nous effectuons un diagnostic complet de votre console et vous envoyons un devis détaillé sous 24h.',
              },
              {
                question: 'Quels sont les modes de paiement acceptés ?',
                answer: 'Nous acceptons les cartes bancaires, PayPal et les virements bancaires.',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white/5 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
                <p className="text-gray-400">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}