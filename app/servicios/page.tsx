'use client';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useLang } from '../context/LangContext';

export default function ServiciosPage() {
  const { t } = useLang();

  const services = [
    { num: '01', title: t('srv.1t'), desc: t('srv.1d'), tags: ['Capacidad', 'Wet Lease', 'Damp Lease'], detalles: [t('srv.1i1'), t('srv.1i2'), t('srv.1i3'), t('srv.1i4')] },
    { num: '02', title: t('srv.2t'), desc: t('srv.2d'), tags: ['Grupos', 'VIP', 'Eventos'], detalles: [t('srv.2i1'), t('srv.2i2'), t('srv.2i3'), t('srv.2i4')] },
    { num: '03', title: t('srv.3t'), desc: t('srv.3d'), tags: ['Freight', 'Pharma', 'Hazmat'], detalles: [t('srv.3i1'), t('srv.3i2'), t('srv.3i3'), t('srv.3i4')] },
    { num: '04', title: t('srv.4t'), desc: t('srv.4d'), tags: ['MEDEVAC', 'Medical'], detalles: [t('srv.4i1'), t('srv.4i2'), t('srv.4i3'), t('srv.4i4')] },
  ];

  return (
    <div className="bg-navy min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="accent-line w-8" />
            <p className="font-mono text-xs tracking-widest uppercase text-gold/70">{t('srv.tag')}</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">{t('srv.title')}</h1>
          <p className="text-slate leading-relaxed max-w-2xl">{t('srv.desc')}</p>
        </div>
        <div className="flex flex-col gap-6 mb-20">
          {services.map((s) => (
            <div key={s.num} className="bg-navy-light border border-white/5 rounded-sm p-8 hover:border-gold/20 transition-colors group">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-3xl font-bold text-gold/20 group-hover:text-gold/40 transition-colors">{s.num}</span>
                    <h2 className="text-2xl font-bold text-white">{s.title}</h2>
                  </div>
                  <p className="text-slate leading-relaxed mb-6">{s.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map(tag => (
                      <span key={tag} className="font-mono text-[10px] tracking-wide text-gold/50 bg-gold/5 border border-gold/10 px-2.5 py-1 rounded-sm">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="border-l border-white/5 pl-8">
                  <p className="font-mono text-xs text-gold/50 tracking-widest uppercase mb-4">{t('srv.inc')}</p>
                  <ul className="flex flex-col gap-3">
                    {s.detalles.map(d => (
                      <li key={d} className="flex items-start gap-2 text-slate text-sm">
                        <span className="text-gold mt-1.5 flex-shrink-0">—</span>{d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-navy-light border border-white/5 rounded-sm p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">{t('srv.cta.title')}</h3>
              <p className="text-slate">{t('srv.cta.desc')}</p>
            </div>
            <div className="flex flex-wrap gap-4 justify-start md:justify-end">
              <Link href="/solicitar-vuelo" className="inline-flex items-center gap-2 px-6 py-3 bg-crimson text-white font-semibold text-sm tracking-wide rounded-sm hover:bg-crimson-light transition-colors">
                {t('srv.cta.btn1')} <ArrowRight size={14} />
              </Link>
              <Link href="/contacto" className="inline-flex items-center gap-2 px-6 py-3 border border-gold/40 text-gold font-semibold text-sm tracking-wide rounded-sm hover:border-gold hover:bg-gold/10 transition-colors">
                {t('srv.cta.btn2')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
