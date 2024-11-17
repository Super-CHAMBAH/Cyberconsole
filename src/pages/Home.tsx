import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-32 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1538481199705-c710c4e965fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center pt-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                Donnez une seconde vie
              </span>
              <br />à vos consoles de jeux
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Expert en réparation de consoles de jeux toutes générations.
              Service professionnel, rapide et garanti.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
            >
              Demander un devis gratuit
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1588495077262-6eca136d2c91?auto=format&fit=crop&q=80&w=400"
                alt="Expertise"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Expertise Technique</h3>
              <p className="text-gray-400">Plus de 10 ans d'expérience dans la réparation de consoles</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&q=80&w=400"
                alt="Garantie"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Garantie 6 Mois</h3>
              <p className="text-gray-400">Toutes nos réparations sont garanties pour votre tranquillité</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1556565681-67b9cd907d20?auto=format&fit=crop&q=80&w=400"
                alt="Service rapide"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Service Rapide</h3>
              <p className="text-gray-400">Réparation en 24-48h pour la plupart des interventions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Découvrez nos services
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link
              to="/repairs"
              className="group relative overflow-hidden rounded-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&q=80&w=800"
                alt="Réparations"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Catalogue des réparations</h3>
                  <p className="text-gray-300">Découvrez nos services de réparation</p>
                </div>
              </div>
            </Link>
            <Link
              to="/parts"
              className="group relative overflow-hidden rounded-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&q=80&w=800"
                alt="Pièces détachées"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Pièces détachées</h3>
                  <p className="text-gray-300">Trouvez les pièces dont vous avez besoin</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}