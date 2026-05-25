'use client';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useLang } from '../context/LangContext';

export default function EmpresaPage() {
  const { t } = useLang();

  return (
    <div className="bg-navy min-h-screen pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="accent-line w-8" />
            <p className="font-mono text-xs tracking-widest uppercase text-gold/70">{t('emp.tag')}</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">{t('emp.title')}</h1>
          <p className="text-slate leading-relaxed max-w-2xl text-lg">{t('emp.desc')}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <p className="font-mono text-xs tracking-widest uppercase text-gold/60 mb-4">{t('emp.mis.tag')}</p>
            <h2 className="text-2xl font-bold text-white mb-4">{t('emp.mis.title')}</h2>
            <p className="text-slate leading-relaxed mb-4">{t('emp.mis.p1')}</p>
            <p className="text-slate leading-relaxed">{t('emp.mis.p2')}</p>
          </div>
          <div>
            <p className="font-mono text-xs tracking-widest uppercase text-gold/60 mb-4">{t('emp.dif.tag')}</p>
            <div className="flex flex-col gap-3">
              {[t('emp.dif.1'), t('emp.dif.2'), t('emp.dif.3'), t('emp.dif.4'), t('emp.dif.5')].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-navy-light border border-white/5 rounded-sm">
                  <span className="font-mono text-xs text-crimson font-bold mt-0.5 flex-shrink-0">0{i+1}</span>
                  <p className="text-slate text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-navy-muted border border-white/5 rounded-sm p-8 mb-10">
          <p className="font-mono text-xs tracking-widest uppercase text-gold/60 mb-6">{t('emp.legal.tag')}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-white font-semibold mb-3">{t('emp.legal.reg')}</p>
              <div className="flex flex-col gap-1.5">
                <p className="font-mono text-xs text-slate/60">UK Co. No. 15627355</p>
                <p className="font-mono text-xs text-slate/60">Registered in England & Wales</p>
                <p className="font-mono text-xs text-slate/60">London, United Kingdom</p>
              </div>
            </div>
            <div>
              <p className="text-white font-semibold mb-3">{t('emp.legal.ops')}</p>
              <div className="flex flex-col gap-1.5">
                <p className="font-mono text-xs text-slate/60">London · Santiago</p>
                <p className="font-mono text-xs text-slate/60">charter@triplatam.com</p>
                <p className="font-mono text-xs text-slate/60">+56 9 7671 1418</p>
              </div>
            </div>
            <div>
              <p className="text-white font-semibold mb-3">{t('emp.legal.comp')}</p>
              <div className="flex flex-wrap gap-2">
                {['UK GDPR', 'ISO 9001 alignment', 'ISO/IEC 42001 roadmap'].map(s => (
                  <span key={s} className="font-mono text-[10px] tracking-wide text-gold/50 border border-gold/20 px-2 py-1 rounded-sm">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/contacto" className="inline-flex items-center gap-2 px-7 py-3.5 bg-crimson text-white font-semibold text-sm tracking-wide rounded-sm hover:bg-crimson-light transition-colors">
            {t('emp.btn1')} <ArrowRight size={14} />
          </Link>
          <Link href="/ia-responsable" className="inline-flex items-center gap-2 px-7 py-3.5 border border-gold/40 text-gold font-semibold text-sm tracking-wide rounded-sm hover:border-gold hover:bg-gold/10 transition-colors">
            {t('emp.btn2')}
          </Link>
        </div>
      </div>
    </div>
  );
}
