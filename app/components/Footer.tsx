'use client';
import Link from 'next/link';
import { Mail, MessageCircle } from 'lucide-react';
import { useLang } from '../context/LangContext';

export default function Footer() {
  const { t } = useLang();

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
    <footer className="bg-navy-muted border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <img
                src="/triplatam-logo.png"
                alt="FlyTriplatam"
                style={{ height: '52px', width: 'auto', objectFit: 'contain' }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </Link>
            <p className="text-slate text-sm leading-relaxed max-w-sm">
              {t('emp.desc')}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {['UK Registered', 'UK GDPR', 'ISO 9001 alignment', 'ISO/IEC 42001 roadmap'].map(badge => (
                <span key={badge} className="font-mono text-[9px] tracking-widest text-gold/50 border border-gold/20 px-2 py-1 rounded-sm">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-mono text-xs tracking-widest uppercase text-gold/60 mb-4">
              {t('nav.servicios') === 'Services' ? 'Navigation' : 'Navegación'}
            </p>
            <nav className="flex flex-col gap-2">
              {navLinks.map(link => (
                <Link key={link.href} href={link.href} className="text-slate text-sm hover:text-white transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contacto */}
          <div>
            <p className="font-mono text-xs tracking-widest uppercase text-gold/60 mb-4">
              {t('cont.tag')}
            </p>
            <div className="flex flex-col gap-3">
              <a href="mailto:charter@triplatam.com?subject=Solicitud de vuelo - FlyTriplatam"
                className="flex items-center gap-2 text-slate text-sm hover:text-white transition-colors">
                <Mail size={13} className="text-gold/60" />
                {t('cont.c1t')}
              </a>
              <a href="https://wa.me/56976711418?text=Hola FlyTriplatam" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate text-sm hover:text-white transition-colors">
                <MessageCircle size={13} className="text-gold/60" />
                {t('cont.c2t')}
              </a>
              <a href="mailto:partnership@triplatam.com?subject=Alianza operacional - FlyTriplatam"
                className="flex items-center gap-2 text-slate text-sm hover:text-white transition-colors">
                <Mail size={13} className="text-gold/60" />
                {t('cont.c3t')}
              </a>
              <p className="text-slate/50 text-xs mt-1">{t('cont.desc')}</p>
            </div>
          </div>
        </div>

        <div className="accent-line mb-8" />

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <p className="text-slate/60 text-xs">TripLatam Ltd · UK Co. No. 15627355 · London / Santiago</p>
            <p className="text-slate/40 text-xs mt-0.5">© 2026 FlyTriplatam · Aviation Intelligence Hub.</p>
          </div>
          <p className="font-mono text-[10px] text-slate/40 tracking-wider">
            Charter · ACMI · Cargo · Executive · Medical · Humanitarian
          </p>
        </div>
      </div>
    </footer>
  );
}
