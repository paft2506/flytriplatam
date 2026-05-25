'use client';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useLang } from './context/LangContext';

export default function HomePage() {
  const { t } = useLang();

  const stats = [
    { value: '500+', label: t('home.stat1') },
    { value: '80+', label: t('home.stat2') },
    { value: '24/7', label: t('home.stat3') },
    { value: '2h', label: t('home.stat4') },
  ];

  const services = [
    { num: '01', title: t('home.srv.1t'), desc: t('home.srv.1d'), tags: ['CAPACIDAD', 'WET LEASE'] },
    { num: '02', title: t('home.srv.2t'), desc: t('home.srv.2d'), tags: ['GRUPOS', 'VIP', 'EVENTOS'] },
    { num: '03', title: t('home.srv.3t'), desc: t('home.srv.3d'), tags: ['FREIGHT', 'URGENTE'] },
    { num: '04', title: t('home.srv.4t'), desc: t('home.srv.4d'), tags: ['EJECUTIVO', 'MEDEVAC'] },
  ];

  const trustItems = [
    { title: t('home.trust.i1t'), desc: t('home.trust.i1d') },
    { title: t('home.trust.i2t'), desc: t('home.trust.i2d') },
    { title: t('home.trust.i3t'), desc: t('home.trust.i3d') },
    { title: t('home.trust.i4t'), desc: t('home.trust.i4d') },
    { title: t('home.trust.i5t'), desc: t('home.trust.i5d') },
    { title: t('home.trust.i6t'), desc: t('home.trust.i6d') },
  ];

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>

      {/* HERO */}
      <section style={{ background: 'linear-gradient(135deg, rgba(15,28,46,0.85) 0%, rgba(22,34,54,0.85) 100%), url(https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80) center/cover no-repeat', minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(201,168,76,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.03) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '96px 24px 64px', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center', position: 'relative', zIndex: 1 }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '999px', padding: '6px 14px', marginBottom: '32px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C41E3A', display: 'inline-block' }} />
              <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)' }}>{t('home.tag')}</span>
            </div>
            <h1 style={{ fontSize: 'clamp(48px, 6vw, 80px)', fontWeight: 800, color: 'white', lineHeight: 1.05, marginBottom: '24px' }}>
              {t('home.h1a')}<br />
              <span style={{ color: '#C9A84C' }}>{t('home.h1b')}</span>
            </h1>
            <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: '12px', maxWidth: '520px' }}>{t('home.sub1')}</p>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, marginBottom: '40px', maxWidth: '480px' }}>{t('home.sub2')}</p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '40px' }}>
              <Link href="/solicitar-vuelo" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', background: '#C41E3A', color: 'white', fontWeight: 600, fontSize: '14px', borderRadius: '6px', textDecoration: 'none', letterSpacing: '0.02em' }}>
                {t('home.btn1')} <ArrowRight size={14} />
              </Link>
              <Link href="/registrar-flota" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', border: '1px solid rgba(255,255,255,0.25)', color: 'white', fontWeight: 600, fontSize: '14px', borderRadius: '6px', textDecoration: 'none', letterSpacing: '0.02em' }}>
                {t('home.btn2')}
              </Link>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {[t('home.badge1'), t('home.badge2'), t('home.badge3')].map(b => (
                <span key={b} style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.15)', padding: '6px 12px', borderRadius: '4px' }}>{b}</span>
              ))}
            </div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '32px', backdropFilter: 'blur(10px)' }}>
            <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '12px' }}>{t('home.hub.tag')}</p>
            <h2 style={{ fontSize: '26px', fontWeight: 700, color: 'white', marginBottom: '16px' }}>{t('home.hub.title')}</h2>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: '24px' }}>{t('home.hub.desc')}</p>
            {[
              { title: t('home.hub.i1t'), desc: t('home.hub.i1d') },
              { title: t('home.hub.i2t'), desc: t('home.hub.i2d') },
              { title: t('home.hub.i3t'), desc: t('home.hub.i3d') },
            ].map((item, i) => (
              <div key={i} style={{ padding: '14px 0', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <p style={{ fontWeight: 600, color: 'white', fontSize: '14px', marginBottom: '4px' }}>{item.title}</p>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
            <div style={{ paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.08)', fontSize: '12px', color: 'rgba(255,255,255,0.35)' }}>{t('home.hub.footer')}</div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: '#0f1c2e', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {stats.map((s, i) => (
            <div key={s.label} style={{ padding: '28px 24px', textAlign: 'center', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
              <p style={{ fontSize: '36px', fontWeight: 800, color: 'white', marginBottom: '4px' }}>{s.value}</p>
              <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DEMANDA / OFERTA */}
      <section style={{ background: '#f0f2f5', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '32px', alignItems: 'center' }}>
          <div style={{ background: 'linear-gradient(135deg, #0f1c2e, #162236)', borderRadius: '16px', padding: '40px', color: 'white' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(201,168,76,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: '#C9A84C', fontSize: '16px' }}>✈</span>
              </div>
              <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>{t('home.demand.tag')}</p>
            </div>
            <h3 style={{ fontSize: '28px', fontWeight: 700, color: 'white', marginBottom: '16px' }}>{t('home.demand.title')}</h3>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: '20px' }}>{t('home.demand.desc')}</p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
              {[t('home.demand.i1'), t('home.demand.i2'), t('home.demand.i3'), t('home.demand.i4')].map(i => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>
                  <CheckCircle size={14} color="rgba(201,168,76,0.7)" /> {i}
                </li>
              ))}
            </ul>
            <Link href="/solicitar-vuelo" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', background: '#C41E3A', color: 'white', fontWeight: 600, fontSize: '13px', borderRadius: '6px', textDecoration: 'none' }}>
              {t('home.demand.btn')} <ArrowRight size={13} />
            </Link>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', padding: '16px' }}>
            <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '9px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#8A9BBD', textAlign: 'center', maxWidth: '120px' }}>FLYTRIPLATAM</p>
            <p style={{ fontSize: '13px', color: '#8A9BBD', textAlign: 'center', maxWidth: '140px', lineHeight: 1.5 }}>{t('home.bridge')}</p>
            <div style={{ width: '1px', height: '30px', background: '#C41E3A', opacity: 0.4 }} />
          </div>
          <div style={{ background: 'white', borderRadius: '16px', padding: '40px', border: '1px solid #e5e7eb' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(196,30,58,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: '#C41E3A', fontSize: '16px' }}>🛡</span>
              </div>
              <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C41E3A' }}>{t('home.offer.tag')}</p>
            </div>
            <h3 style={{ fontSize: '28px', fontWeight: 700, color: '#0f1c2e', marginBottom: '16px' }}>{t('home.offer.title')}</h3>
            <p style={{ fontSize: '14px', color: '#4B5563', lineHeight: 1.7, marginBottom: '20px' }}>{t('home.offer.desc')}</p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
              {[t('home.offer.i1'), t('home.offer.i2'), t('home.offer.i3'), t('home.offer.i4')].map(i => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#374151' }}>
                  <CheckCircle size={14} color="#C41E3A" /> {i}
                </li>
              ))}
            </ul>
            <Link href="/registrar-flota" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', border: '1px solid #0f1c2e', color: '#0f1c2e', fontWeight: 600, fontSize: '13px', borderRadius: '6px', textDecoration: 'none' }}>
              {t('home.offer.btn')} <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section style={{ background: 'white', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C41E3A', marginBottom: '12px' }}>{t('home.srv.tag')}</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '8px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 700, color: '#0f1c2e' }}>{t('home.srv.title')}</h2>
            <Link href="/servicios" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#C41E3A', fontSize: '14px', fontWeight: 600, textDecoration: 'none' }}>
              {t('home.srv.link')} <ArrowRight size={13} />
            </Link>
          </div>
          <p style={{ fontSize: '15px', color: '#4B5563', marginBottom: '40px' }}>{t('home.srv.desc')}</p>
          <div style={{ border: '1px solid #e5e7eb', borderRadius: '12px', overflow: 'hidden' }}>
            {services.map((s, i) => (
              <div key={s.num} style={{ padding: '32px', borderBottom: i < services.length - 1 ? '1px solid #e5e7eb' : 'none', display: 'grid', gridTemplateColumns: '80px 1fr', gap: '24px', alignItems: 'start' }}>
                <div>
                  <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '32px', fontWeight: 700, color: '#0f1c2e', lineHeight: 1 }}>{s.num}</p>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(196,30,58,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '12px' }}>
                    <span style={{ color: '#C41E3A', fontSize: '14px' }}>✈</span>
                  </div>
                </div>
                <div>
                  <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0f1c2e', marginBottom: '8px' }}>{s.title}</h3>
                  <p style={{ fontSize: '14px', color: '#4B5563', lineHeight: 1.7, marginBottom: '16px' }}>{s.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {s.tags.map(tag => (
                      <span key={tag} style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', letterSpacing: '0.1em', color: '#374151', border: '1px solid #d1d5db', padding: '4px 10px', borderRadius: '4px' }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <div style={{ padding: '20px 32px', background: '#f9fafb' }}>
              <Link href="/servicios" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#C41E3A', fontSize: '14px', fontWeight: 600, textDecoration: 'none' }}>
                {t('home.srv.link')} <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* COORDINACIÓN */}
      <section style={{ background: '#f0f2f5', padding: '40px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #0f1c2e, #162236)', borderRadius: '16px', padding: '48px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'start' }}>
            <div>
              <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '16px' }}>{t('home.coord.tag')}</p>
              <h2 style={{ fontSize: '28px', fontWeight: 700, color: 'white', marginBottom: '16px', lineHeight: 1.3 }}>{t('home.coord.title')}</h2>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: '12px' }}>{t('home.coord.desc1')}</p>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>{t('home.coord.desc2')}</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {[
                { title: t('home.coord.i1t'), desc: t('home.coord.i1d') },
                { title: t('home.coord.i2t'), desc: t('home.coord.i2d') },
                { title: t('home.coord.i3t'), desc: t('home.coord.i3d') },
              ].map((item, i) => (
                <div key={i} style={{ padding: '20px 0', borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.08)' : 'none', display: 'flex', gap: '16px', alignItems: 'start' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ color: '#C9A84C', fontSize: '12px' }}>✓</span>
                  </div>
                  <div>
                    <p style={{ fontWeight: 600, color: 'white', fontSize: '14px', marginBottom: '4px' }}>{item.title}</p>
                    <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section style={{ background: '#f0f2f5', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C41E3A', marginBottom: '12px' }}>{t('home.how.tag')}</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 700, color: '#0f1c2e', maxWidth: '500px', lineHeight: 1.2 }}>{t('home.how.title')}</h2>
            <Link href="/como-funciona" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#C41E3A', fontSize: '14px', fontWeight: 600, textDecoration: 'none', marginTop: '8px' }}>
              {t('home.how.link')} <ArrowRight size={13} />
            </Link>
          </div>
          <p style={{ fontSize: '15px', color: '#4B5563', marginBottom: '48px', maxWidth: '600px' }}>{t('home.how.desc')}</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {[
              { num: '01', title: t('home.how.1t'), desc: t('home.how.1d') },
              { num: '02', title: t('home.how.2t'), desc: t('home.how.2d') },
              { num: '03', title: t('home.how.3t'), desc: t('home.how.3d') },
            ].map((step) => (
              <div key={step.num}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'white', border: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '13px', fontWeight: 700, color: '#0f1c2e' }}>{step.num}</span>
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0f1c2e', marginBottom: '10px' }}>{step.title}</h3>
                <p style={{ fontSize: '14px', color: '#4B5563', lineHeight: 1.7 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONFIANZA */}
      <section style={{ background: '#0f1c2e', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '16px' }}>{t('home.trust.tag')}</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start' }}>
            <div>
              <h2 style={{ fontSize: '32px', fontWeight: 700, color: 'white', marginBottom: '16px', lineHeight: 1.3 }}>{t('home.trust.title')}</h2>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: '12px' }}>{t('home.trust.desc1')}</p>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, marginBottom: '24px' }}>{t('home.trust.desc2')}</p>
              <Link href="/ia-responsable" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'rgba(255,255,255,0.6)', fontSize: '14px', textDecoration: 'none' }}>
                {t('home.trust.link')} <ArrowRight size={13} />
              </Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {trustItems.map((item, i) => (
                <div key={item.title} style={{ padding: '18px 0', borderBottom: i < trustItems.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none', display: 'flex', gap: '14px', alignItems: 'start' }}>
                  <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ color: '#C9A84C', fontSize: '11px' }}>✓</span>
                  </div>
                  <div>
                    <p style={{ fontWeight: 600, color: 'white', fontSize: '14px', marginBottom: '2px' }}>{item.title}</p>
                    <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ background: '#f0f2f5', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #0f1c2e, #162236)', borderRadius: '16px', padding: '64px 48px', textAlign: 'center' }}>
            <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '16px' }}>{t('home.cta.tag')}</p>
            <h2 style={{ fontSize: '40px', fontWeight: 700, color: 'white', marginBottom: '12px', lineHeight: 1.2 }}>{t('home.cta.title')}</h2>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', marginBottom: '36px' }}>{t('home.cta.desc')}</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '28px' }}>
              <Link href="/solicitar-vuelo" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 32px', background: '#C41E3A', color: 'white', fontWeight: 600, fontSize: '15px', borderRadius: '6px', textDecoration: 'none' }}>
                {t('home.cta.btn1')} <ArrowRight size={15} />
              </Link>
              <Link href="/registrar-flota" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 32px', border: '1px solid rgba(255,255,255,0.25)', color: 'white', fontWeight: 600, fontSize: '15px', borderRadius: '6px', textDecoration: 'none' }}>
                {t('home.cta.btn2')}
              </Link>
            </div>
            <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.25)' }}>{t('home.cta.footer')}</p>
          </div>
        </div>
      </section>

    </div>
  );
}
