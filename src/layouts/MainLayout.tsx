import React from 'react';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      
      <header className="bg-white shadow-md p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">MyStore</div>
          <ul className="flex gap-6">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/catalog">Catalog</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow container mx-auto p-6">
        {children}
      </main>

      <footer className="bg-gray-800 text-white p-8 mt-auto">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <h3 className="font-bold mb-2">About Us</h3>
            <p className="text-sm text-gray-400"></p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Quick Links</h3>
            <ul className="text-sm text-gray-400">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">სოციალური გვერდები</h3>
            <p className="text-sm text-gray-400">ელ-ფოსტა: info@mystore.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;