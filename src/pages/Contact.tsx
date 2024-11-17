import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556565681-67b9cd907d20?auto=format&fit=crop&q=80&w=1950')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h1 className="text-4xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Contactez-nous
            </span>
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-12">
            Une question ? Un devis ? Notre équipe est à votre disposition pour vous accompagner.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: MapPin,
                title: 'Adresse',
                content: '123 Rue des Consoles\n75001 Paris, France',
              },
              {
                icon: Phone,
                title: 'Téléphone',
                content: '+33 1 23 45 67 89',
              },
              {
                icon: Mail,
                title: 'Email',
                content: 'contact@cyberconsole.fr',
              },
              {
                icon: Clock,
                title: 'Horaires',
                content: 'Lun-Ven: 9h-18h\nSam: 10h-16h',
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <item.icon className="h-8 w-8 text-cyan-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 whitespace-pre-line">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                  Envoyez-nous un message
                </span>
              </h2>
              <p className="text-gray-400 mb-8">
                Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
                Pour un devis, n'oubliez pas de préciser le modèle de votre console et le problème rencontré.
              </p>
              <img
                src="https://images.unsplash.com/photo-1556565681-67b9cd907d20?auto=format&fit=crop&q=80&w=800"
                alt="Support"
                className="rounded-xl"
              />
            </div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Nom complet</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="mt-1 block w-full rounded-md bg-white/5 border border-white/10 focus:border-cyan-500 focus:ring focus:ring-cyan-500/20 text-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  className="mt-1 block w-full rounded-md bg-white/5 border border-white/10 focus:border-cyan-500 focus:ring focus:ring-cyan-500/20 text-white"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300">Téléphone</label>
                <input
                  type="tel"
                  id="phone"
                  className="mt-1 block w-full rounded-md bg-white/5 border border-white/10 focus:border-cyan-500 focus:ring focus:ring-cyan-500/20 text-white"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300">Sujet</label>
                <select
                  id="subject"
                  required
                  className="mt-1 block w-full rounded-md bg-white/5 border border-white/10 focus:border-cyan-500 focus:ring focus:ring-cyan-500/20 text-white"
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="repair">Demande de réparation</option>
                  <option value="quote">Demande de devis</option>
                  <option value="parts">Pièces détachées</option>
                  <option value="other">Autre demande</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                <textarea
                  id="message"
                  rows={6}
                  required
                  className="mt-1 block w-full rounded-md bg-white/5 border border-white/10 focus:border-cyan-500 focus:ring focus:ring-cyan-500/20 text-white"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
              >
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
