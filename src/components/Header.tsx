import { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-red">
      <div className="logo-container">
        <img src="/public/logo.avif" alt="Logo" className="logo" width={100} height={100} />
        <h1> ონლაინ მაღაზია-oniom</h1>
      </div>

      <header>
        <h2>გვერდითი მაღაზია</h2>

        {/* ☰ ბურგერ ღილაკი მობილურისთვის */}
        <button
          className="burger-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="მენიუ"
        >
          {isOpen ? '✕' : '☰'}
        </button>

        {/* ნავიგაცია — მობილურზე isOpen-ით იხსნება/იხურება */}
        <nav className={isOpen ? 'nav-open' : ''}>
          <NavLink to="/" onClick={() => setIsOpen(false)}>მთავარი</NavLink>
          <NavLink to="/products" onClick={() => setIsOpen(false)}>პროდუქცია</NavLink>
          <NavLink to="/cart" onClick={() => setIsOpen(false)}>კალათა</NavLink>
          <NavLink to="/login" onClick={() => setIsOpen(false)}>შესვლა</NavLink>
          <NavLink to="/regist" onClick={() => setIsOpen(false)}>რეგისტრაცია</NavLink>
        </nav>
      </header>
    </div>
  );
}

export default Header;