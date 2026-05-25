'use client';
import { useLang } from '../context/LangContext';

export default function BackToTop() {
  const { lang } = useLang();
  const label = lang === 'es' ? '↑ Inicio' : '↑ Top';

  return (
    
      href="#"
      onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
      style={{
        position: 'fixed', bottom: '24px', left: '24px', zIndex: 40,
        display: 'inline-flex', alignItems: 'center', gap: '6px',
        padding: '8px 14px',
        background: 'rgba(15,28,46,0.92)',
        border: '1px solid rgba(255,255,255,0.15)',
        borderRadius: '8px',
        color: 'rgba(255,255,255,0.7)',
        fontSize: '12px',
        fontFamily: 'DM Mono, monospace',
        letterSpacing: '0.08em',
        textDecoration: 'none',
        backdropFilter: 'blur(8px)',
        transition: 'all 0.2s',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.4)';
        (e.currentTarget as HTMLElement).style.color = '#C9A84C';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.15)';
        (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.7)';
      }}
    >
      {label}
    </a>
  );
}
