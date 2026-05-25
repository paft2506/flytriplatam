'use client';
import Link from 'next/link';
import { Mail, MessageCircle, ExternalLink } from 'lucide-react';
import { useLang } from '../context/LangContext';

export default function ContactoPage() {
  const { t } = useLang();

  const contacts = [
    { icon: Mail, title: t('cont.c1t'), desc: t('cont.c1d'), href: 'mailto:charter@triplatam.com?subject=Solicitud de vuelo - FlyTriplatam', label: 'charter@triplatam.com', cta: t('cont.c1cta') },
    { icon: MessageCircle, title: t('cont.c2t'), desc: t('cont.c2d'), href: 'https://wa.me/56976711418?text=Hola FlyTriplatam', label: '+56 9 7671 1418', cta: t('cont.c2cta') },
    { icon: Mail, title: t('cont.c3t'), desc: t('cont.c3d'), href: 'mailto:partnership@triplatam.com?subject=Alianza operacional - FlyTriplatam', label: 'partnership@triplatam.com', cta: t('cont.c3cta') },
  ];

  return (
    <div className="bg-navy min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="accent-line w-8" />
            <p className="font-mono text-xs tracking-widest uppercase text-gold/70">{t('cont.tag')}</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">{t('cont.title')}</h1>
          <p className="text-slate leading-relaxed max-w-xl">{t('cont.desc')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {contacts.map((c) => (
            <div key={c.title} className="bg-navy-light border border-white/5 rounded-sm p-6 hover:border-gold/20 transition-colors group">
              <div className="w-10 h-10 bg-crimson/10 rounded-sm flex items-center justify-center mb-4 group-hover:bg-crimson/20 transition-colors">
                <c.icon size={18} className="text-crimson" />
              </div>
              <h3 className="text-white font-semibold mb-2">{c.title}</h3>
              <p className="text-slate text-sm leading-relaxed mb-4">{c.desc}</p>
              <p className="font-mono text-xs text-gold/60 mb-4">{c.label}</p>
              <a href={c.href} target={c.href.startsWith('https') ? '_blank' : undefined} rel={c.href.startsWith('https') ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold hover:text-gold-light transition-colors">
                {c.cta} <ExternalLink size={10} />
              </a>
            </div>
          ))}
        </div>
        <div className="bg-navy-muted border border-white/5 rounded-sm p-8 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="font-mono text-xs tracking-widest uppercase text-gold/60 mb-3">{t('cont.form.tag')}</p>
              <h3 className="text-xl font-bold text-white mb-2">{t('cont.form.title')}</h3>
              <p className="text-slate text-sm leading-relaxed">{t('cont.form.desc')}</p>
            </div>
            <div className="flex flex-col gap-3">
              <Link href="/solicitar-vuelo" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-crimson text-white font-semibold text-sm tracking-wide rounded-sm hover:bg-crimson-light transition-colors">
                {t('cont.form.btn1')}
              </Link>
              <Link href="/registrar-flota" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gold/40 text-gold font-semibold text-sm tracking-wide rounded-sm hover:border-gold hover:bg-gold/10 transition-colors">
                {t('cont.form.btn2')}
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8">
          <p className="font-mono text-xs text-slate/40 tracking-wide">TripLatam Ltd · UK Co. No. 15627355 · London / Santiago · charter@triplatam.com</p>
        </div>
      </div>
    </div>
  );
}
