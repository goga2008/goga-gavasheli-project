import { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src="/public/logo.avif" alt="Logo" className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border border-gray-200" />
          <h1 className="text-lg md:text-xl font-bold text-gray-800">ონლაინ მაღაზია-oniom</h1>
        </div>

        
        <nav className="hidden md:flex gap-6 items-center font-medium text-gray-600">
          <NavLink to="/" className={({isActive}) => isActive ? "text-primary font-bold" : "hover:text-primary transition-colors duration-300"}>მთავარი</NavLink>
          <NavLink to="/products" className={({isActive}) => isActive ? "text-primary font-bold" : "hover:text-primary transition-colors duration-300"}>პროდუქცია</NavLink>
          <NavLink to="/cart" className={({isActive}) => isActive ? "text-primary font-bold" : "hover:text-primary transition-colors duration-300"}>კალათა</NavLink>
          <NavLink to="/login" className={({isActive}) => isActive ? "text-primary font-bold" : "hover:text-primary transition-colors duration-300"}>შესვლა</NavLink>
          <NavLink to="/regist" className={({isActive}) => isActive ? "text-primary font-bold" : "hover:text-primary transition-colors duration-300"}>რეგისტრაცია</NavLink>
        </nav>

        
        <button
          className="md:hidden text-gray-600 hover:text-primary focus:outline-none p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="მენიუ"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      
      {isOpen && (
        <nav className="md:hidden bg-gray-50 border-t border-gray-100 flex flex-col px-4 py-4 gap-4 font-medium text-gray-700 shadow-inner">
          <NavLink to="/" onClick={() => setIsOpen(false)} className={({isActive}) => isActive ? "text-primary font-bold" : "hover:text-primary transition-colors duration-300"}>მთავარი</NavLink>
          <NavLink to="/products" onClick={() => setIsOpen(false)} className={({isActive}) => isActive ? "text-primary font-bold" : "hover:text-primary transition-colors duration-300"}>პროდუქცია</NavLink>
          <NavLink to="/cart" onClick={() => setIsOpen(false)} className={({isActive}) => isActive ? "text-primary font-bold" : "hover:text-primary transition-colors duration-300"}>კალათა</NavLink>
          <NavLink to="/login" onClick={() => setIsOpen(false)} className={({isActive}) => isActive ? "text-primary font-bold" : "hover:text-primary transition-colors duration-300"}>შესვლა</NavLink>
          <NavLink to="/regist" onClick={() => setIsOpen(false)} className={({isActive}) => isActive ? "text-primary font-bold" : "hover:text-primary transition-colors duration-300"}>რეგისტრაცია</NavLink>
        </nav>
      )}
    </header>
  );
}

export default Header;