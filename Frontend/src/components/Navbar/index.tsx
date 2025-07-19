import { useState } from "react";

import { Menu, House, ShoppingCart, Contact, X } from "lucide-react";


const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-gray-800 text-primary p-3 font-inter">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <span className="text-xl font-bold text-emerald-400">
          <a href="">TS-Commerce</a>
        </span>
        <ul className="hidden md:flex items-center gap-10 text-sm font-medium">
          <li><a className="text-primary hover:text-gray-300 transition" href=""><House />Home</a></li>
          <li><a className="text-primary hover:text-gray-300 transition" href=""><ShoppingCart />Produtos</a></li>
          <li><a className="text-primary hover:text-gray-300 transition" href=""> <Contact />Contato</a></li>
        </ul>

        <button onClick={() => setMenuOpen(true)}
          className="md:hidden">
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Menu lateral */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 shadow-lg transform transition-transform duration-300 z-50 ${menuOpen ? "translate-x-0" : "translate-y-full"
          }`}>

        {/* Botão para fechar */}
        <div className="flex justify-end p-4">
          <button onClick={() => setMenuOpen(false)}>
            <X className="w-6 h-6 text-primary" />
          </button>
        </div>

        {/* Itens do Menu */}
        <ul className="flex flex-col gap-10 p-6 text-primary text-sm font-bold">
          <li><a className="text-primary hover:text-emerald-400 transition" href=""><House/>Home</a></li>
          <li><a className="text-primary hover:text-emerald-400 transition" href=""><ShoppingCart/>Produtos</a></li>
          <li><a className="text-primary hover:text-emerald-400 transition" href=""><Contact/>Contatos</a></li>
        </ul>
      </div>

      {menuOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setMenuOpen(false)} />
      )}
    </nav>
  )
};

export default Navbar;
