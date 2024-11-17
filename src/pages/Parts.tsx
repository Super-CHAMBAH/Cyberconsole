import React from 'react';
import CatalogItem from '../components/CatalogItem';
import { spareParts } from '../data/catalog';

export default function Parts() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&q=80&w=1950')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h1 className="text-4xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Pièces Détachées
            </span>
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-12">
            Trouvez toutes les pièces de rechange pour vos consoles.
            Des composants de qualité, testés et garantis.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: 'Nintendo Switch',
                image: 'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?auto=format&fit=crop&q=80&w=400',
              },
              {
                title: 'PlayStation',
                image: 'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?auto=format&fit=crop&q=80&w=400',
              },
              {
                title: 'Xbox',
                image: 'https://images.unsplash.com/photo-1621259182978-fbf389b38f37?auto=format&fit=crop&q=80&w=400',
              },
            ].map((category) => (
              <div key={category.title} className="relative group overflow-hidden rounded-xl">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catalogue */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {spareParts.map((part) => (
              <CatalogItem key={part.id} item={part} type="part" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}