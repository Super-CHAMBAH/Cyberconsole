import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { Wrench, Zap, Shield, Cpu, Gamepad, Timer } from 'lucide-react';

export default function Services() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&q=80&w=1950')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h1 className="text-4xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Nos Services
            </span>
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-12">
            Découvrez notre gamme complète de services de réparation et maintenance pour vos consoles de jeux.
            Une expertise technique pointue au service de votre passion.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              Icon={Wrench}
              title="Réparation Hardware"
              description="Réparation de composants électroniques, remplacement de pièces défectueuses et résolution des problèmes matériels."
            />
            <ServiceCard
              Icon={Shield}
              title="Maintenance Préventive"
              description="Nettoyage complet, mise à jour système et optimisation des performances de votre console."
            />
            <ServiceCard
              Icon={Zap}
              title="Diagnostic Rapide"
              description="Analyse complète de votre console et devis détaillé sous 24h pour une transparence totale."
            />
            <ServiceCard
              Icon={Cpu}
              title="Mise à Niveau"
              description="Amélioration des performances avec des composants de dernière génération."
            />
            <ServiceCard
              Icon={Gamepad}
              title="Réparation Manettes"
              description="Résolution des problèmes de drift, boutons et connexion sans fil."
            />
            <ServiceCard
              Icon={Timer}
              title="Service Express"
              description="Réparation prioritaire en 24h pour les cas urgents (supplément applicable)."
            />
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Notre Processus
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Diagnostic',
                description: 'Analyse complète de votre console',
              },
              {
                step: '02',
                title: 'Devis',
                description: 'Proposition détaillée et transparente',
              },
              {
                step: '03',
                title: 'Réparation',
                description: 'Intervention par nos experts',
              },
              {
                step: '04',
                title: 'Tests',
                description: 'Vérification approfondie',
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}