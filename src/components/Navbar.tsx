import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Gamepad2, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Accueil' },
    { path: '/services', label: 'Services' },
    { path: '/repairs', label: 'Réparations' },
    { path: '/parts', label: 'Pièces' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-black/95 text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <Gamepad2 className="h-8 w-8 text-cyan-500" />
            <span className="ml-2 text-xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              CyberConsole
            </span>
          </Link>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(path)
                      ? 'bg-cyan-500 text-white'
                      : 'hover:text-cyan-500'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-cyan-500 hover:text-white hover:bg-cyan-500"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(path)
                    ? 'bg-cyan-500 text-white'
                    : 'hover:bg-cyan-500'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}