'use client';
import { useLang } from '../context/LangContext';

export default function BackToTop() {
  const { lang } = useLang();
  const label = lang === 'es' ? '\u2191 Inicio' : '\u2191 Top';

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
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
        cursor: 'pointer',
        backdropFilter: 'blur(8px)',
        transition: 'all 0.2s',
      }}
    >
      {label}
    </button>
  );
}
