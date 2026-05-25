'use client';
import { useState } from 'react';
import { ArrowRight, CheckCircle, AlertCircle, Loader, Plus, Trash2 } from 'lucide-react';
import { useLang } from '../context/LangContext';

const WEBHOOK_URL = 'https://patricioflorestorres.app.n8n.cloud/webhook/charterlink-req';

interface Tramo { origen: string; destino: string; fecha: string; }

export default function SolicitarVueloPage() {
  const { t, lang } = useLang();

  const tiposOp = [t('tipo.1'), t('tipo.2'), t('tipo.3'), t('tipo.4'), t('tipo.5'), t('tipo.6'), t('tipo.7'), t('tipo.8'), t('tipo.9')];
  const urgencias = [t('urg.1'), t('urg.2'), t('urg.3'), t('urg.4')];
  const acmiTipos = [t('acmi.1'), t('acmi.2'), t('acmi.3')];
  const acmiDuraciones = [t('dur.1'), t('dur.2'), t('dur.3'), t('dur.4'), t('dur.5')];

  const [form, setForm] = useState({
    nombre: '', empresa: '', email: '', telefono: '',
    origen: '', destino: '', trayecto: t('tray.ow'), fecha: '', fecha_regreso: '', pasajeros: '',
    carga: '', tipo: '', urgencia: '', descripcion: '',
    acmi_tipo: '', acmi_aircraft: '', acmi_bhr: '',
    acmi_duracion: '', acmi_aoc: '', acmi_base: ''
  });
  const [tramos, setTramos] = useState<Tramo[]>([{ origen: '', destino: '', fecha: '' }]);
  const [consent, setConsent] = useState(false);
  const [consentError, setConsentError] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [msg, setMsg] = useState('');

  const set = (k: string, v: string) => setForm(p => ({ ...p, [k]: v }));
  const isAcmi = form.tipo === t('tipo.2');
  const isRT = form.trayecto === t('tray.rt');
  const isMulti = form.trayecto === t('tray.multi');

  const setTramo = (i: number, k: keyof Tramo, v: string) =>
    setTramos(prev => prev.map((tr, idx) => idx === i ? { ...tr, [k]: v } : tr));
  const addTramo = () => { if (tramos.length < 4) setTramos(prev => [...prev, { origen: '', destino: '', fecha: '' }]); };
  const removeTramo = (i: number) => { if (tramos.length > 1) setTramos(prev => prev.filter((_, idx) => idx !== i)); };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) { setConsentError(true); return; }
    setConsentError(false);
    setStatus('loading');
    try {
      const payload = {
        ...form,
        ...(isMulti ? { tramos } : {}),
        lang,
        ia_consent: 'YES',
        tipo_formulario: 'solicitud_vuelo',
        timestamp: new Date().toISOString()
      };
      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (res.ok) { setStatus('success'); setMsg(t('form.success_msg')); }
      else { throw new Error(); }
    } catch {
      setStatus('error');
      setMsg(t('form.error_msg'));
    }
  };

  return (
    <div className="bg-navy min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="accent-line w-8" />
            <p className="font-mono text-xs tracking-widest uppercase text-gold/70">Demanda</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">{t('form.title')}</h1>
          <p className="text-slate leading-relaxed max-w-xl">{t('form.subtitle')}</p>
          <div className="flex flex-wrap gap-4 mt-4">
            {[t('form.badge1'), t('form.badge2'), t('form.badge3')].map(b => (
              <div key={b} className="flex items-center gap-1.5">
                <CheckCircle size={11} className="text-gold" />
                <span className="font-mono text-xs text-slate/60">{b}</span>
              </div>
            ))}
          </div>
        </div>

        {status === 'success' ? (
          <div className="bg-navy-light border border-gold/20 rounded-sm p-10 text-center">
            <CheckCircle size={40} className="text-gold mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">{t('form.success_title')}</h2>
            <p className="text-slate">{msg}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-navy-light border border-white/5 rounded-sm p-8 space-y-8">

            {/* 01 Contacto */}
            <div>
              <p className="font-mono text-xs tracking-widest uppercase text-gold/60 mb-5 pb-3 border-b border-white/5">{t('form.sec1')}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><label className="block text-xs text-slate/70 mb-1.5 font-medium">{t('form.nombre')}</label><input required className="form-input" placeholder="Juan Rodríguez" value={form.nombre} onChange={e => set('nombre', e.target.value)} /></div>
                <div><label className="block text-xs text-slate/70 mb-1.5 font-medium">{t('form.empresa')}</label><input className="form-input" placeholder="Acme Corp." value={form.empresa} onChange={e => set('empresa', e.target.value)} /></div>
                <div><label className="block text-xs text-slate/70 mb-1.5 font-medium">{t('form.email')}</label><input required type="email" className="form-input" placeholder="juan@empresa.com" value={form.email} onChange={e => set('email', e.target.value)} /></div>
                <div><label className="block text-xs text-slate/70 mb-1.5 font-medium">{t('form.telefono')}</label><input className="form-input" placeholder="+56 9 1234 5678" value={form.telefono} onChange={e => set('telefono', e.target.value)} /></div>
              </div>
            </div>

            {/* 02 Tipo */}
            <div>
              <p className="font-mono text-xs tracking-widest uppercase text-gold/60 mb-5 pb-3 border-b border-white/5">{t('form.sec2')}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><label className="block text-xs text-slate/70 mb-1.5 font-medium">{t('form.tipo')}</label><select required className="form-input" value={form.tipo} onChange={e => set('tipo', e.target.value)}><option value="">{t('form.select')}</option>{tiposOp.map(t2 => <option key={t2} value={t2}>{t2}</option>)}</select></div>
                <div><label className="block text-xs text-slate/70 mb-1.5 font-medium">{t('form.urgencia')}</label><select required className="form-input" value={form.urgencia} onChange={e => set('urgencia', e.target.value)}><option value="">{t('form.select')}</option>{urgencias.map(u => <option key={u} value={u}>{u}</option>)}</select></div>
              </div>
            </div>

            {/* 03 ACMI */}
            {isAcmi && (
              <div>
                <p className="font-mono text-xs tracking-widest uppercase text-gold/60 mb-5 pb-3 border-b border-white/5">{t('form.sec3.acmi')}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div><label className="block text-xs text-slate/70 mb-1.5 font-medium">{t('form.acmi_tipo')}</label><select required className="form-input" value={form.acmi_tipo} onChange={e => set('acmi_tipo', e.target.value)}><option value="">{t('form.select')}</option>{acmiTipos.map(a => <option key={a} value={a}>{a}</option>)}</select></div>
                  <div><label className="block text-xs text-slate/70 mb-1.5 font-medium">{t('form.acmi_aircraft')}</label><input className="form-input" placeholder="B737-800, A320, ATR72..." value={form.acmi_aircraft} onChange={e => set('acmi_aircraft', e.target.value)} /></div>
                  <div><label className="block text-xs text-slate/70 mb-1.5 font-medium">{t('form.acmi_bhr')}</label><input type="number" className="form-input" placeholder="300" value={form.acmi_bhr} onChange={e => set('acmi_bhr', e.target.value)} /></div>
                  <div><label className="block text-xs text-slate/70 mb-1.5 font-medium">{t('form.acmi_duracion')}</label><select className="form-input" value={form.acmi_duracion} onChange={e => set('acmi_duracion', e.target.value)}><option value="">{t('form.select')}</option>{acmiDuraciones.map(d => <option key={d} value={d}>{d}</option>)}</select></div>
                  <div><label className="block text-xs text-slate/70 mb-1.5 font-medium">{t('form.acmi_aoc')}</label><input className="form-input" placeholder="EASA, FAA, UK CAA, ANAC..." value={form.acmi_aoc} onChange={e => set('acmi_aoc', e.target.value)} /></div>
                  <div><label className="block text-xs text-slate/70 mb-1.5 font-medium">{t('form.acmi_base')}</label><input className="form-input" placeholder="SCEL, EGLL, LEMD..." value={form.acmi_base} onChange={e => set('acmi_base', e.target.value)} /></div>
                </div>
              </div>
            )}

            {/* 03 Vuelo */}
            {!isAcmi && (
              <div>
                <p className="font-mono text-xs tracking-widest uppercase text-gold/60 mb-5 pb-3 border-b border-white/5">{t('form.sec3.vuelo')}</p>
                <div className="mb-4">
                  <label className="block text-xs text-slate/70 mb-1.5 font-medium">{t('form.trayecto')}</label>
                  <select required className="form-input" value={form.trayecto} onChange={e => set('trayecto', e.target.value)}>
                    <option value={t('tray.ow')}>{t('tray.ow')}</option>
                    <option value={t('tray.rt')}>{t('tray.rt')}</option>
                    <option value={t('tray.multi')}>{t('tray.multi')}</option>
                  </select>
                </div>
                {!isMulti && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div><label className="block text-xs text-slate/70 mb-1.5 font-medium">{t('form.origen')}</label><input required className="form-input" placeholder="SCL — Santiago, Chile" value={form.origen} onChange={e => set('origen', e.target.value)} /></div>
                    <div><label className="block text-xs text-slate/70 mb-1.5 font-medium">{t('form.destino')}</label><input required className="form-input" placeholder="GRU — São Paulo, Brasil" value={form.destino} onChange={e => set('destino', e.target.value)} /></div>
                    <div><label className="block text-xs text-slate/70 mb-1.5 font-medium">{t('form.fecha')}</label><input required type="date" className="form-input" value={form.fecha} onChange={e => set('fecha', e.target.value)} /></div>
                    {isRT && <div><label className="block text-xs text-slate/70 mb-1.5 font-medium">{t('form.fecha_regreso')}</label><input required type="date" className="form-input" value={form.fecha_regreso} onChange={e => set('fecha_regreso', e.target.value)} /></div>}
                    <div><label className="block text-xs text-slate/70 mb-1.5 font-medium">{t('form.pax')}</label><input type="number" className="form-input" placeholder="120" value={form.pasajeros} onChange={e => set('pasajeros', e.target.value)} /></div>
                    <div><label className="block text-xs text-slate/70 mb-1.5 font-medium">{t('form.carga')}</label><input className="form-input" placeholder="Tonelaje, tipo de carga, temperatura, hazmat..." value={form.carga} onChange={e => set('carga', e.target.value)} /></div>
                  </div>
                )}
                {isMulti && (
                  <div className="space-y-4">
                    {tramos.map((tr, i) => (
                      <div key={i} className="border border-white/10 rounded-sm p-4 relative">
                        <p className="font-mono text-xs text-gold/50 mb-3 tracking-widest uppercase">{t('form.tramo')} {i + 1}</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div><label className="block text-xs text-slate/70 mb-1.5 font-medium">{t('form.origen')}</label><input required className="form-input" placeholder="SCL" value={tr.origen} onChange={e => setTramo(i, 'origen', e.target.value)} /></div>
                          <div><label className="block text-xs text-slate/70 mb-1.5 font-medium">{t('form.destino')}</label><input required className="form-input" placeholder="LIM" value={tr.destino} onChange={e => setTramo(i, 'destino', e.target.value)} /></div>
                          <div><label className="block text-xs text-slate/70 mb-1.5 font-medium">{t('form.fecha')}</label><input required type="date" className="form-input" value={tr.fecha} onChange={e => setTramo(i, 'fecha', e.target.value)} /></div>
                        </div>
                        {tramos.length > 1 && <button type="button" onClick={() => removeTramo(i)} className="absolute top-3 right-3 text-slate/40 hover:text-crimson transition-colors"><Trash2 size={14} /></button>}
                      </div>
                    ))}
                    {tramos.length < 4 && (
                      <button type="button" onClick={addTramo} className="flex items-center gap-2 text-xs text-gold/60 hover:text-gold transition-colors font-mono tracking-widest uppercase">
                        <Plus size={13} /> {t('form.agregar_tramo')}
                      </button>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                      <div><label className="block text-xs text-slate/70 mb-1.5 font-medium">{t('form.pax')}</label><input type="number" className="form-input" placeholder="120" value={form.pasajeros} onChange={e => set('pasajeros', e.target.value)} /></div>
                      <div><label className="block text-xs text-slate/70 mb-1.5 font-medium">{t('form.carga')}</label><input className="form-input" placeholder="Tonelaje, tipo de carga..." value={form.carga} onChange={e => set('carga', e.target.value)} /></div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* 04 Descripción */}
            <div>
              <p className="font-mono text-xs tracking-widest uppercase text-gold/60 mb-5 pb-3 border-b border-white/5">{t('form.sec4')}</p>
              <textarea className="form-input min-h-[120px] resize-none" placeholder={isAcmi ? t('form.desc_acmi') : t('form.desc_vuelo')} value={form.descripcion} onChange={e => set('descripcion', e.target.value)} />
            </div>

            {/* Consentimiento IA */}
            <div
              onClick={() => { setConsent(!consent); setConsentError(false); }}
              style={{
                display: 'flex', alignItems: 'flex-start', gap: '12px',
                padding: '16px', border: `1px solid ${consentError ? '#C41E3A' : 'rgba(255,255,255,0.1)'}`,
                borderRadius: '6px', cursor: 'pointer', background: consent ? 'rgba(201,168,76,0.05)' : 'transparent',
                transition: 'all 0.2s'
              }}
            >
              <div style={{
                width: '18px', height: '18px', border: `2px solid ${consent ? '#C9A84C' : 'rgba(255,255,255,0.3)'}`,
                borderRadius: '4px', flexShrink: 0, marginTop: '1px',
                background: consent ? '#C9A84C' : 'transparent',
                display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s'
              }}>
                {consent && <span style={{ color: '#0f1c2e', fontSize: '11px', fontWeight: 800 }}>✓</span>}
              </div>
              <div>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6 }}>
                  <strong>{t('form.consent')}</strong>{' '}
                  {t('form.consent_desc')}{' '}
                  <a href="mailto:patricio.flores@triplatam.com" style={{ color: '#C41E3A' }} onClick={e => e.stopPropagation()}>patricio.flores@triplatam.com</a>.
                </p>
                {consentError && <p style={{ fontSize: '12px', color: '#C41E3A', marginTop: '6px' }}>{t('form.consent_error')}</p>}
              </div>
            </div>

            {/* Aviso IA */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', padding: '14px 16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '6px' }}>
              <span style={{ fontSize: '16px', flexShrink: 0 }}>🤖</span>
              <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.65 }}>
                {t('form.ia_notice')}{' '}
                <a href="mailto:patricio.flores@triplatam.com" style={{ color: '#C41E3A' }}>patricio.flores@triplatam.com</a>.
              </p>
            </div>

            {status === 'error' && (
              <div className="flex items-start gap-3 p-4 bg-crimson/10 border border-crimson/20 rounded-sm">
                <AlertCircle size={16} className="text-crimson flex-shrink-0 mt-0.5" />
                <p className="text-sm text-slate">{msg}</p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <button type="submit" disabled={status === 'loading'} className="inline-flex items-center gap-2 px-8 py-3.5 bg-crimson text-white font-semibold text-sm tracking-wide rounded-sm hover:bg-crimson-light transition-colors disabled:opacity-60 disabled:cursor-not-allowed">
                {status === 'loading' ? <><Loader size={14} className="animate-spin" /> {t('form.sending')}</> : <>{t('form.submit')} <ArrowRight size={14} /></>}
              </button>
              <p className="text-slate/50 text-xs leading-relaxed max-w-xs">{t('form.privacy')}</p>
            </div>

            {/* Pie legal */}
            <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.2)', lineHeight: 1.6, borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '16px' }}>
              {t('form.legal')}{' '}
              <a href="mailto:patricio.flores@triplatam.com" style={{ color: '#C41E3A' }}>{t('form.legal_link')}</a>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
