'use client';
import { useState } from 'react';
import { ArrowRight, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { useLang } from '../context/LangContext';

const WEBHOOK_URL = 'https://patricioflorestorres.app.n8n.cloud/webhook/charterlink-req';

export default function RegistrarFlotaPage() {
  const { t } = useLang();

  const tiposAeronave = [t('aeronave.1'), t('aeronave.2'), t('aeronave.3'), t('aeronave.4'), t('aeronave.5'), t('aeronave.6'), t('aeronave.7'), t('aeronave.8')];
  const tiposServicio = [t('servmod.1'), t('servmod.2'), t('servmod.3'), t('servmod.4'), t('servmod.5')];

  const [form, setForm] = useState({
    nombre: '', empresa: '', email: '', telefono: '', web: '',
    aeronave: '', matricula: '', anio: '', capacidad: '',
    servicios: [] as string[], bases: '', disponibilidad: '', descripcion: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [msg, setMsg] = useState('');

  const set = (k: string, v: string) => setForm(p => ({ ...p, [k]: v }));
  const toggleServicio = (s: string) => setForm(p => ({
    ...p, servicios: p.servicios.includes(s) ? p.servicios.filter(x => x !== s) : [...p.servicios, s]
  }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, tipo_formulario: 'registro_flota', timestamp: new Date().toISOString() })
      });
      if (res.ok) { setStatus('success'); setMsg(t('reg.success_msg')); }
      else throw new Error();
    } catch {
      setStatus('error'); setMsg(t('reg.error_msg'));
    }
  };

  return (
    <div className="bg-navy min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="accent-line w-8" />
            <p className="font-mono text-xs tracking-widest uppercase text-gold/70">{t('reg.tag')}</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">{t('reg.title')}</h1>
          <p className="text-slate leading-relaxed max-w-xl">{t('reg.desc')}</p>
          <div className="flex flex-wrap gap-4 mt-4">
            {[t('reg.badge1'), t('reg.badge2'), t('reg.badge3')].map(b => (
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
            <h2 className="text-2xl font-bold text-white mb-2">{t('reg.success_title')}</h2>
            <p className="text-slate">{msg}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-navy-light border border-white/5 rounded-sm p-8 space-y-8">
            <div>
              <p className="font-mono text-xs tracking-widest uppercase text-gold/60 mb-5 pb-3 border-b border-white/5">{t('reg.sec1')}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><label className="block text-xs text-slate/70 mb-1.5 font-medium">{t('reg.nombre')}</label><input required className="form-input" placeholder="María González" value={form.nombre} onChange={e => set('nombre', e.target.value)} /></div>
                <div><label className="block text-xs text-slate/70 mb-1.5 font-medium">{t('reg.empresa')}</label><input required className="form-input" placeholder="Sky Cargo Airlines" value={form.empresa} onChange={e => set('empresa', e.target.value)} /></div>
                <div><label className="block text-xs text-slate/70 mb-1.5 font-medium">{t('reg.email')}</label><input required type="email" className="form-input" placeholder="ops@skyoperator.com" value={form.email} onChange={e => set('email', e.target.value)} /></div>
                <div><label className="block text-xs text-slate/70 mb-1.5 font-medium">{t('reg.telefono')}</label><input className="form-input" placeholder="+1 555 000 0000" value={form.telefono} onChange={e => set('telefono', e.target.value)} /></div>
                <div className="md:col-span-2"><label className="block text-xs text-slate/70 mb-1.5 font-medium">{t('reg.web')}</label><input type="text" className="form-input" placeholder="https://www.operador.com" value={form.web} onChange={e => set('web', e.target.value)} /></div>
              </div>
            </div>
            <div>
              <p className="font-mono text-xs tracking-widest uppercase text-gold/60 mb-5 pb-3 border-b border-white/5">{t('reg.sec2')}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><label className="block text-xs text-slate/70 mb-1.5 font-medium">{t('reg.aeronave')}</label><select required className="form-input" value={form.aeronave} onChange={e => set('aeronave', e.target.value)}><option value="">{t('reg.select')}</option>{tiposAeronave.map(t2 => <option key={t2} value={t2}>{t2}</option>)}</select></div>
                <div><label className="block text-xs text-slate/70 mb-1.5 font-medium">{t('reg.matricula')}</label><input className="form-input" placeholder="CC-XXX" value={form.matricula} onChange={e => set('matricula', e.target.value)} /></div>
                <div><label className="block text-xs text-slate/70 mb-1.5 font-medium">{t('reg.anio')}</label><input type="number" className="form-input" placeholder="2015" value={form.anio} onChange={e => set('anio', e.target.value)} /></div>
                <div><label className="block text-xs text-slate/70 mb-1.5 font-medium">{t('reg.capacidad')}</label><input className="form-input" placeholder="180 PAX / 40.000 kg" value={form.capacidad} onChange={e => set('capacidad', e.target.value)} /></div>
                <div><label className="block text-xs text-slate/70 mb-1.5 font-medium">{t('reg.bases')}</label><input className="form-input" placeholder="SCL, LIM, BOG" value={form.bases} onChange={e => set('bases', e.target.value)} /></div>
                <div><label className="block text-xs text-slate/70 mb-1.5 font-medium">{t('reg.disponibilidad')}</label><input className="form-input" placeholder="Disponible desde junio 2026" value={form.disponibilidad} onChange={e => set('disponibilidad', e.target.value)} /></div>
              </div>
            </div>
            <div>
              <p className="font-mono text-xs tracking-widest uppercase text-gold/60 mb-5 pb-3 border-b border-white/5">{t('reg.sec3')}</p>
              <div className="flex flex-wrap gap-2">
                {tiposServicio.map(s => (
                  <button key={s} type="button" onClick={() => toggleServicio(s)}
                    className={`px-4 py-2 text-xs font-medium rounded-sm border transition-colors ${form.servicios.includes(s) ? 'bg-gold/10 border-gold text-gold' : 'border-white/10 text-slate hover:border-gold/30 hover:text-white'}`}>
                    {s}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="font-mono text-xs tracking-widest uppercase text-gold/60 mb-5 pb-3 border-b border-white/5">{t('reg.sec4')}</p>
              <textarea className="form-input min-h-[120px] resize-none" placeholder={t('reg.desc_placeholder')} value={form.descripcion} onChange={e => set('descripcion', e.target.value)} />
            </div>
            {status === 'error' && (
              <div className="flex items-start gap-3 p-4 bg-crimson/10 border border-crimson/20 rounded-sm">
                <AlertCircle size={16} className="text-crimson flex-shrink-0 mt-0.5" />
                <p className="text-sm text-slate">{msg}</p>
              </div>
            )}
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <button type="submit" disabled={status === 'loading'} className="inline-flex items-center gap-2 px-8 py-3.5 border border-gold/40 text-gold font-semibold text-sm tracking-wide rounded-sm hover:border-gold hover:bg-gold/10 transition-colors disabled:opacity-60">
                {status === 'loading' ? <><Loader size={14} className="animate-spin" /> {t('reg.sending')}</> : <>{t('reg.submit')} <ArrowRight size={14} /></>}
              </button>
              <p className="text-slate/50 text-xs leading-relaxed max-w-xs">{t('reg.privacy')}</p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
