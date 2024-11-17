import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Home from './pages/Home';
import Services from './pages/Services';
import Repairs from './pages/Repairs';
import Parts from './pages/Parts';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0a0a0a] text-white">
        <Navbar />
        <Cart />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/repairs" element={<Repairs />} />
          <Route path="/parts" element={<Parts />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-black/90 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-gray-400">
              <p>© 2024 CyberConsole. Tous droits réservés.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;