'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Lock } from 'lucide-react';

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
    <header style={{position:'fixed',top:0,left:0,right:0,zIndex:50,transition:'all 0.3s',background:scrolled?'rgba(15,28,46,0.97)':'rgba(15,28,46,0.85)',backdropFilter:'blur(12px)',borderBottom:'1px solid rgba(255,255,255,0.06)'}}>
      <div style={{maxWidth:'1280px',margin:'0 auto',padding:'0 24px',display:'flex',alignItems:'center',justifyContent:'space-between',height:'64px'}}>
        <Link href="/" style={{display:'flex',alignItems:'center',gap:'10px',textDecoration:'none'}}>
          <div style={{width:'32px',height:'32px',background:'#C41E3A',borderRadius:'6px',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <span style={{color:'white',fontSize:'16px'}}>✈</span>
          </div>
          <div>
            <div style={{color:'white',fontWeight:700,fontSize:'15px',letterSpacing:'-0.02em',lineHeight:1.1}}>FlyTriplatam</div>
            <div style={{color:'rgba(255,255,255,0.4)',fontSize:'9px',letterSpacing:'0.15em',textTransform:'uppercase'}}>Aviation Intelligence Hub</div>
          </div>
        </Link>

        <nav style={{display:'flex',alignItems:'center',gap:'2px'}}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} style={{padding:'6px 12px',fontSize:'13px',fontWeight:500,textDecoration:'none',borderRadius:'6px',color:pathname===link.href?'#C9A84C':'rgba(255,255,255,0.7)',background:pathname===link.href?'rgba(201,168,76,0.1)':'transparent'}}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div style={{display:'flex',alignItems:'center',gap:'8px'}}>
          <a href="https://triplatam.com/cotizador.html" target="_blank" rel="noopener noreferrer" title="Cotizador Interno" style={{display:'flex',alignItems:'center',justifyContent:'center',width:'36px',height:'36px',background:'rgba(255,255,255,0.06)',border:'1px solid rgba(255,255,255,0.12)',borderRadius:'8px',color:'rgba(255,255,255,0.6)',textDecoration:'none'}}>
            <Lock size={15} />
          </a>
          <Link href="/solicitar-vuelo" style={{display:'inline-flex',alignItems:'center',gap:'6px',padding:'8px 18px',background:'#C41E3A',color:'white',fontSize:'13px',fontWeight:600,borderRadius:'8px',textDecoration:'none'}}>
            Solicitar Vuelo
          </Link>
        </div>
      </div>
    </header>
  );
}
