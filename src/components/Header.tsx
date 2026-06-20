import { Link, useLocation } from "react-router-dom";
import { DollarSign, BookOpen, Menu, X, Info } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogoClick = () => {
    window.dispatchEvent(new Event("resetCalculator"));
  };

  const isActive = (path: string) =>
    location.pathname === path
      ? "text-emerald-400 border-b-2 border-emerald-400"
      : "text-slate-300 hover:text-white";

  return (
    <header className="bg-slate-900/95 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group" onClick={handleLogoClick}>
            <div className="w-9 h-9 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/40 transition-shadow">
              <DollarSign className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">
              Tu<span className="text-emerald-400">Sueldo</span>
            </span>
          </Link>

          <button
            className="sm:hidden text-slate-300 hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <nav className={`sm:flex items-center gap-1 ${menuOpen ? "flex flex-col absolute top-16 left-0 right-0 bg-slate-900 border-b border-slate-800 p-4" : "hidden"}`}>
            <Link
              to="/"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isActive("/")}`}
              onClick={() => setMenuOpen(false)}
            >
              <DollarSign className="w-4 h-4 inline mr-1.5 -mt-0.5" />
              Calculadora
            </Link>
            <Link
              to="/noticias"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isActive("/noticias")}`}
              onClick={() => setMenuOpen(false)}
            >
              <BookOpen className="w-4 h-4 inline mr-1.5 -mt-0.5" />
              Noticias
            </Link>
            <Link
              to="/sobre-nosotros"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isActive("/sobre-nosotros")}`}
              onClick={() => setMenuOpen(false)}
            >
              <Info className="w-4 h-4 inline mr-1.5 -mt-0.5" />
              Sobre Nosotros
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
