import React from "react";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/cart", label: "Cart" },
  { to: "/about", label: "About" },
];

const Navbar = () => (
  <nav className="bg-green-700 text-white px-6 py-4 shadow flex items-center justify-between">
    <Link to="/" className="text-2xl font-bold tracking-tight">Farmers Marketplace</Link>
    <div className="flex gap-6">
      {navLinks.map(link => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) =>
            `hover:underline transition ${isActive ? 'font-bold underline' : ''}`
          }
          end={link.to === "/"}
        >
          {link.label}
        </NavLink>
      ))}
    </div>
  </nav>
);

export default Navbar; 