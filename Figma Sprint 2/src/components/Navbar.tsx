import { Link, useLocation } from 'react-router';
import { useState } from 'react';

const navLinks = [
  { label: 'Início', to: '/', icon: '⌂' },
  { label: 'Trilhas', to: '/trilhas/mecanismos-defesa', icon: '⊞' },
  { label: 'Quiz', to: '/quiz', icon: '◎' },
  { label: 'Ajuda', to: '#ajuda', icon: '?' },
];

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E2E0DC]">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-semibold text-[#0F1B2D] text-sm tracking-tight">
          <span className="w-6 h-6 rounded border border-[#0F1B2D] flex items-center justify-center text-xs">⛨</span>
          Segurança em Mensagens
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              className={`text-sm transition-colors ${
                location.pathname === to
                  ? 'text-[#E85D04] font-medium'
                  : 'text-[#4B5563] hover:text-[#0F1B2D]'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <Link
          to="/quiz/desafio"
          className="hidden md:inline-flex items-center gap-1.5 text-sm font-medium text-[#E85D04] hover:text-[#C44D00] transition-colors"
        >
          Denunciar Golpe
        </Link>

        <button className="md:hidden p-1" onClick={() => setOpen(!open)}>
          <div className="w-5 h-0.5 bg-[#0F1B2D] mb-1" />
          <div className="w-5 h-0.5 bg-[#0F1B2D] mb-1" />
          <div className="w-5 h-0.5 bg-[#0F1B2D]" />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[#E2E0DC] bg-white px-6 py-4 flex flex-col gap-4">
          {navLinks.map(({ label, to }) => (
            <Link key={label} to={to} onClick={() => setOpen(false)} className="text-sm text-[#4B5563]">
              {label}
            </Link>
          ))}
          <Link to="/quiz/desafio" onClick={() => setOpen(false)} className="text-sm font-medium text-[#E85D04]">
            Denunciar Golpe
          </Link>
        </div>
      )}
    </header>
  );
}
