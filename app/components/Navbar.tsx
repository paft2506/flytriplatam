'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Plane } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/solicitar-vuelo', label: 'Solicitar Vuelo' },
  { href: '/registrar-flota', label: 'Registrar Flota' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/como-funciona', label: 'Cómo Funciona' },
  { href: '/ia-responsable', label: 'IA Responsable' },
  { href: '/empresa', label: 'Empresa' },
  { href: '/contacto', label: 'Contacto' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-navy/95 backdrop-blur-md border-b border-white/5' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-7 h-7 bg-crimson flex items-center justify-center rounded-sm">
            <Plane size={14} className="text-white rotate-45" />
          </div>
          <div>
            <span className="text-white font-bold text-sm tracking-tight">FlyTriplatam</span>
            <p className="font-mono text-[9px] text-gold/60 tracking-widest uppercase leading-none -mt-0.5">Aviation Intelligence Hub</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-1.5 text-xs font-medium tracking-wide transition-colors rounded-sm ${
                pathname === link.href
                  ? 'text-gold bg-gold/10'
                  : 'text-slate hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + Burger */}
        <div className="flex items-center gap-3">
          <Link
            href="/solicitar-vuelo"
            className="hidden lg:inline-flex items-center gap-1.5 px-4 py-2 bg-crimson text-white text-xs font-semibold tracking-wide rounded-sm hover:bg-crimson-light transition-colors"
          >
            Solicitar Vuelo
          </Link>
          <button onClick={() => setOpen(!open)} className="lg:hidden text-slate hover:text-white">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="lg:hidden bg-navy-light border-t border-white/5">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`px-3 py-2.5 text-sm font-medium transition-colors rounded-sm ${
                  pathname === link.href ? 'text-gold' : 'text-slate hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
