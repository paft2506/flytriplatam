'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Lock } from 'lucide-react';
import { useLang } from '../context/LangContext';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { lang, setLang, t } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '/', label: t('nav.inicio') },
    { href: '/solicitar-vuelo', label: t('nav.solicitar') },
    { href: '/registrar-flota', label: t('nav.registrar') },
    { href: '/servicios', label: t('nav.servicios') },
    { href: '/como-funciona', label: t('nav.como') },
    { href: '/ia-responsable', label: t('nav.ia') },
    { href: '/empresa', label: t('nav.empresa') },
    { href: '/contacto', label: t('nav.contacto') },
  ];

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      transition: 'all 0.3s',
      background: scrolled ? 'rgba(15,28,46,0.97)' : 'rgba(15,28,46,0.85)',
      backdropFilter: 'blur(12px)',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(255,255,255,0.03)',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>

        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <img
            src="/triplatam-logo-full.png"
            alt="FlyTriplatam"
            style={{ height: '48px', width: 'auto', objectFit: 'contain', background: 'white', borderRadius: '6px', padding: '4px 8px' }}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
            }}
          />
          <div style={{ display: 'none', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '32px', height: '32px', background: '#C41E3A', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: 'white', fontSize: '16px' }}>✈</span>
            </div>
            <div>
              <div style={{ color: 'white', fontWeight: 700, fontSize: '15px', letterSpacing: '-0.02em', lineHeight: 1.1 }}>FlyTriplatam</div>
              <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '9px', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Aviation Intelligence Hub</div>
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2px' }} className="hidden-mobile">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} style={{
              padding: '6px 12px', fontSize: '13px', fontWeight: 500, textDecoration: 'none',
              borderRadius: '6px', transition: 'all 0.2s',
              color: pathname === link.href ? '#C9A84C' : 'rgba(255,255,255,0.7)',
              background: pathname === link.href ? 'rgba(201,168,76,0.1)' : 'transparent',
            }}>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>

          {/* Lang switch */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginRight: '4px' }}>
            <button
              onClick={() => setLang('es')}
              title="Español"
              style={{
                background: 'none', border: 'none', cursor: 'pointer', padding: '2px',
                fontSize: '18px', lineHeight: 1, opacity: lang === 'es' ? 1 : 0.35,
                transition: 'opacity 0.2s', borderRadius: '3px',
              }}
            >🇪🇸</button>
            <button
              onClick={() => setLang('en')}
              title="English"
              style={{
                background: 'none', border: 'none', cursor: 'pointer', padding: '2px',
                fontSize: '18px', lineHeight: 1, opacity: lang === 'en' ? 1 : 0.35,
                transition: 'opacity 0.2s', borderRadius: '3px',
              }}
            >🇬🇧</button>
          </div>

          {/* Candado — Cotizador interno */}
          <a href="https://herramientas.triplatam.com/cotizador.html" target="_blank" rel="noopener noreferrer" title="Cotizador Interno"
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: '36px', height: '48px', background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.12)', borderRadius: '8px',
              color: 'rgba(255,255,255,0.6)', transition: 'all 0.2s', textDecoration: 'none',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = 'rgba(201,168,76,0.15)';
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.4)';
              (e.currentTarget as HTMLElement).style.color = '#C9A84C';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)';
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.12)';
              (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.6)';
            }}
          >
            <Lock size={15} />
          </a>

          {/* Solicitar Vuelo CTA */}
          <Link href="/solicitar-vuelo" style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            padding: '8px 18px', background: '#C41E3A', color: 'white',
            fontSize: '13px', fontWeight: 600, borderRadius: '8px',
            textDecoration: 'none', letterSpacing: '0.02em', transition: 'background 0.2s',
          }} className="hidden-mobile">
            {t('nav.cta')}
          </Link>

          {/* Burger mobile */}
          <button onClick={() => setOpen(!open)}
            style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)', cursor: 'pointer', padding: '4px', display: 'none' }}
            className="show-mobile">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div style={{ background: '#0f1c2e', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <nav style={{ display: 'flex', flexDirection: 'column', padding: '12px 24px 20px' }}>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)}
                style={{
                  padding: '10px 12px', fontSize: '14px', fontWeight: 500,
                  textDecoration: 'none', borderRadius: '6px',
                  color: pathname === link.href ? '#C9A84C' : 'rgba(255,255,255,0.7)',
                }}>
                {link.label}
              </Link>
            ))}
            <a href="https://herramientas.triplatam.com/cotizador.html" target="_blank" rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 12px', fontSize: '14px', color: '#C9A84C', textDecoration: 'none', marginTop: '8px' }}>
              <Lock size={14} /> Cotizador Interno
            </a>
          </nav>
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 1025px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </header>
  );
}
