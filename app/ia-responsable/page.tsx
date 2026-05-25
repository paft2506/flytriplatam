'use client';
import Link from 'next/link';
import { ArrowRight, Shield, Eye, Users, FileCheck } from 'lucide-react';
import { useLang } from '../context/LangContext';

export default function IAResponsablePage() {
  const { t } = useLang();

  const principles = [
    { icon: Eye, title: t('ia.p1t'), desc: t('ia.p1d') },
    { icon: Users, title: t('ia.p2t'), desc: t('ia.p2d') },
    { icon: Shield, title: t('ia.p3t'), desc: t('ia.p3d') },
    { icon: FileCheck, title: t('ia.p4t'), desc: t('ia.p4d') },
  ];

  const roadmap = [
    { status: 'activo', label: t('ia.r1l'), desc: t('ia.r1d') },
    { status: 'activo', label: t('ia.r2l'), desc: t('ia.r2d') },
    { status: 'activo', label: t('ia.r3l'), desc: t('ia.r3d') },
    { status: 'proceso', label: t('ia.r4l'), desc: t('ia.r4d') },
    { status: 'roadmap', label: t('ia.r5l'), desc: t('ia.r5d') },
    { status: 'roadmap', label: t('ia.r6l'), desc: t('ia.r6d') },
  ];

  return (
    <div className="bg-navy min-h-screen pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="accent-line w-8" />
            <p className="font-mono text-xs tracking-widest uppercase text-gold/70">{t('ia.tag')}</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">{t('ia.title')}</h1>
          <p className="text-slate leading-relaxed max-w-2xl">{t('ia.desc')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {principles.map((p) => (
            <div key={p.title} className="bg-navy-light border border-white/5 rounded-sm p-6 hover:border-gold/20 transition-colors group">
              <div className="w-10 h-10 bg-crimson/10 rounded-sm flex items-center justify-center mb-4 group-hover:bg-crimson/20 transition-colors">
                <p.icon size={18} className="text-crimson" />
              </div>
              <h3 className="text-white font-semibold mb-2">{p.title}</h3>
              <p className="text-slate text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-navy-muted border border-white/5 rounded-sm p-8 mb-16">
          <p className="font-mono text-xs tracking-widest uppercase text-gold/60 mb-4">{t('ia.design.tag')}</p>
          <blockquote className="text-xl text-white font-medium leading-relaxed border-l-2 border-crimson pl-6">
            &ldquo;{t('ia.design.quote')}&rdquo;
          </blockquote>
        </div>
        <div className="mb-16">
          <p className="font-mono text-xs tracking-widest uppercase text-gold/60 mb-6">{t('ia.road.tag')}</p>
          <div className="flex flex-col gap-3">
            {roadmap.map((item) => (
              <div key={item.label} className="flex items-center gap-4 p-4 bg-navy-light border border-white/5 rounded-sm">
                <div className={`w-2 h-2 rounded-full flex-shrink-0 ${item.status === 'activo' ? 'bg-green-400' : item.status === 'proceso' ? 'bg-gold' : 'bg-slate/30'}`} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 flex-wrap">
                    <p className="text-white font-semibold text-sm">{item.label}</p>
                    <span className={`font-mono text-[10px] tracking-widest px-2 py-0.5 rounded-sm ${item.status === 'activo' ? 'text-green-400 bg-green-400/10 border border-green-400/20' : item.status === 'proceso' ? 'text-gold bg-gold/10 border border-gold/20' : 'text-slate/50 bg-white/5 border border-white/5'}`}>
                      {item.status === 'activo' ? t('ia.status.active') : item.status === 'proceso' ? t('ia.status.process') : t('ia.status.roadmap')}
                    </span>
                  </div>
                  <p className="text-slate text-xs mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-navy-light border border-white/5 rounded-sm p-8 mb-10">
          <p className="font-mono text-xs tracking-widest uppercase text-gold/60 mb-6">{t('ia.comp.tag')}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-white font-semibold mb-3">TripLatam Ltd</p>
              <div className="flex flex-col gap-2">
                {['UK Co. No. 15627355', 'Registered in England & Wales', 'London / Santiago'].map(d => (
                  <p key={d} className="font-mono text-xs text-slate/60">{d}</p>
                ))}
              </div>
            </div>
            <div>
              <p className="text-white font-semibold mb-3">{t('ia.comp.std')}</p>
              <div className="flex flex-wrap gap-2">
                {['UK GDPR', 'ISO 9001 alignment', 'ISO/IEC 42001 roadmap', 'Audit logs', 'HITL disponible'].map(s => (
                  <span key={s} className="font-mono text-[10px] tracking-wide text-gold/50 border border-gold/20 px-2 py-1 rounded-sm">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/como-funciona" className="inline-flex items-center gap-2 px-7 py-3.5 border border-gold/40 text-gold font-semibold text-sm tracking-wide rounded-sm hover:border-gold hover:bg-gold/10 transition-colors">
            {t('ia.btn1')} <ArrowRight size={14} />
          </Link>
          <Link href="/contacto" className="inline-flex items-center gap-2 px-7 py-3.5 text-slate text-sm hover:text-white transition-colors">
            {t('ia.btn2')}
          </Link>
        </div>
      </div>
    </div>
  );
}
