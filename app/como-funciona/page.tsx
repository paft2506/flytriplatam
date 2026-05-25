'use client';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useLang } from '../context/LangContext';

export default function ComoFuncionaPage() {
  const { t } = useLang();

  const steps = [
    { num: '01', title: t('how.1t'), desc: t('how.1d'), sub: [t('how.1i1'), t('how.1i2'), t('how.1i3'), t('how.1i4')] },
    { num: '02', title: t('how.2t'), desc: t('how.2d'), sub: [t('how.2i1'), t('how.2i2'), t('how.2i3'), t('how.2i4')] },
    { num: '03', title: t('how.3t'), desc: t('how.3d'), sub: [t('how.3i1'), t('how.3i2'), t('how.3i3'), t('how.3i4')] },
    { num: '04', title: t('how.4t'), desc: t('how.4d'), sub: [t('how.4i1'), t('how.4i2'), t('how.4i3'), t('how.4i4')] },
  ];

  return (
    <div className="bg-navy min-h-screen pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="accent-line w-8" />
            <p className="font-mono text-xs tracking-widest uppercase text-gold/70">{t('how.tag')}</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">{t('how.title')}</h1>
          <p className="text-slate leading-relaxed max-w-2xl">{t('how.desc')}</p>
        </div>
        <div className="flex flex-col gap-6 mb-20">
          {steps.map((step, i) => (
            <div key={step.num} className="relative">
              {i < steps.length - 1 && <div className="absolute left-8 top-full w-px h-6 bg-gradient-to-b from-gold/20 to-transparent z-10" />}
              <div className="bg-navy-light border border-white/5 rounded-sm p-8 hover:border-gold/20 transition-colors group">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-mono text-4xl font-bold text-crimson/40 group-hover:text-crimson/60 transition-colors">{step.num}</span>
                      <h2 className="text-xl font-bold text-white">{step.title}</h2>
                    </div>
                    <p className="text-slate leading-relaxed">{step.desc}</p>
                  </div>
                  <div>
                    <ul className="flex flex-col gap-2.5">
                      {step.sub.map(s => (
                        <li key={s} className="flex items-start gap-2 text-sm text-slate">
                          <CheckCircle size={12} className="text-gold/60 flex-shrink-0 mt-0.5" />{s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-navy-muted border border-white/5 rounded-sm p-8 mb-10">
          <p className="font-mono text-xs tracking-widest uppercase text-gold/60 mb-4">{t('how.coord.tag')}</p>
          <h3 className="text-2xl font-bold text-white mb-4">{t('how.coord.title')}</h3>
          <p className="text-slate leading-relaxed mb-6">{t('how.coord.desc')}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: t('how.coord.i1t'), desc: t('how.coord.i1d') },
              { title: t('how.coord.i2t'), desc: t('how.coord.i2d') },
              { title: t('how.coord.i3t'), desc: t('how.coord.i3d') },
            ].map(item => (
              <div key={item.title} className="bg-navy border border-white/5 rounded-sm p-4">
                <p className="text-white font-semibold text-sm mb-2">{item.title}</p>
                <p className="text-slate text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/solicitar-vuelo" className="inline-flex items-center gap-2 px-7 py-3.5 bg-crimson text-white font-semibold text-sm tracking-wide rounded-sm hover:bg-crimson-light transition-colors">
            {t('how.btn1')} <ArrowRight size={14} />
          </Link>
          <Link href="/ia-responsable" className="inline-flex items-center gap-2 px-7 py-3.5 border border-gold/40 text-gold font-semibold text-sm tracking-wide rounded-sm hover:border-gold hover:bg-gold/10 transition-colors">
            {t('how.btn2')}
          </Link>
        </div>
      </div>
    </div>
  );
}
