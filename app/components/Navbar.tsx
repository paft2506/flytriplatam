'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Lock } from 'lucide-react';

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
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header style={{
      position:'fixed',top:0,left:0,right:0,zIndex:50,
      transition:'all 0.3s',
      background: scrolled ? 'rgba(255,255,255,0.98)' : 'rgba(255,255,255,0.95)',
      backdropFilter:'blur(12px)',
      borderBottom:'1px solid rgba(0,0,0,0.08)',
      boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none',
    }}>
      <div style={{maxWidth:'1280px',margin:'0 auto',padding:'0 24px',display:'flex',alignItems:'center',justifyContent:'space-between',height:'68px'}}>
        
        {/* Logo completo */}
        <Link href="/" style={{display:'flex',alignItems:'center',textDecoration:'none'}}>
          <img 
            src="/triplatam-logo-full.png" 
            alt="TripLatam" 
            style={{height:'44px',width:'auto',objectFit:'contain'}} 
          />
        </Link>

        {/* Nav links */}
        <nav style={{display:'flex',alignItems:'center',gap:'2px'}}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} style={{
              padding:'6px 11px',
              fontSize:'13px',
              fontWeight:500,
              textDecoration:'none',
              borderRadius:'6px',
              color: pathname===link.href ? '#d22630' : '#374151',
              background: pathname===link.href ? 'rgba(210,38,48,0.06)' : 'transparent',
              transition:'all 0.2s',
            }}>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Candado + CTA */}
        <div style={{display:'flex',alignItems:'center',gap:'8px'}}>
          <a 
            href="http://tools.triplatam.com/cotizador.html" 
            target="_blank" 
            rel="noopener noreferrer" 
            title="Cotizador Interno"
            style={{
              display:'flex',alignItems:'center',justifyContent:'center',
              width:'36px',height:'36px',
              background:'rgba(0,0,0,0.04)',
              border:'1px solid rgba(0,0,0,0.1)',
              borderRadius:'8px',
              color:'#374151',
              textDecoration:'none',
              transition:'all 0.2s',
            }}
          >
            <Lock size={15} />
          </a>
          <Link href="/solicitar-vuelo" style={{
            display:'inline-flex',alignItems:'center',gap:'6px',
            padding:'8px 18px',
            background:'#d22630',
            color:'white',
            fontSize:'13px',
            fontWeight:600,
            borderRadius:'8px',
            textDecoration:'none',
            transition:'background 0.2s',
          }}>
            Solicitar Vuelo
          </Link>
        </div>
      </div>
    </header>
  );
}
