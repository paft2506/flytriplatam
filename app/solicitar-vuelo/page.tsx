'use client';
import { useState } from 'react';
import { ArrowRight, CheckCircle, AlertCircle, Loader, Plus, Trash2 } from 'lucide-react';

const WEBHOOK_URL = 'https://patricioflorestorres.app.n8n.cloud/webhook/charterlink-req';

const tiposOp = ['Charter Pasajeros', 'ACMI / Wet Lease', 'Carga General', 'Carga Urgente', 'Médico / MEDEVAC', 'Humanitario', 'Gobierno / Militar', 'Deportivo', 'Otro'];
const urgencias = ['Urgente (< 24h)', 'Alta (1-3 días)', 'Normal (3-7 días)', 'Planificado (> 7 días)'];
const acmiTipos = ['Wet Lease (ACMI completo)', 'Dry Lease (solo aeronave)', 'Damp Lease (aeronave + tripulación)'];
const acmiDuraciones = ['1 a 3 meses', '3 a 6 meses', '6 a 12 meses', 'Más de 12 meses', 'Operación ad-hoc'];

interface Tramo { origen: string; destino: string; fecha: string; }

export default function SolicitarVueloPage() {
  const [form, setForm] = useState({
    nombre: '', empresa: '', email: '', telefono: '',
    origen: '', destino: '', trayecto: 'One Way (OW)', fecha: '', fecha_regreso: '', pasajeros: '',
    carga: '', tipo: '', urgencia: '', descripcion: '',
    acmi_tipo: '', acmi_aircraft: '', acmi_bhr: '',
    acmi_duracion: '', acmi_aoc: '', acmi_base: ''
  });
  const [tramos, setTramos] = useState<Tramo[]>([{ origen: '', destino: '', fecha: '' }]);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [msg, setMsg] = useState('');

  const set = (k: string, v: string) => setForm(p => ({ ...p, [k]: v }));
  const isAcmi = form.tipo === 'ACMI / Wet Lease';
  const isRT = form.trayecto === 'Round Trip (RT)';
  const isMulti = form.trayecto === 'Multi-leg';

  const setTramo = (i: number, k: keyof Tramo, v: string) => {
    setTramos(prev => prev.map((t, idx) => idx === i ? { ...t, [k]: v } : t));
  };
  const addTramo = () => { if (tramos.length < 4) setTramos(prev => [...prev, { origen: '', destino: '', fecha: '' }]); };
  const removeTramo = (i: number) => { if (tramos.length > 1) setTramos(prev => prev.filter((_, idx) => idx !== i)); };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const payload = {
        ...form,
        ...(isMulti ? { tramos } : {}),
        tipo_formulario: 'solicitud_vuelo',
        timestamp: new Date().toISOString()
      };
      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (res.ok) { setStatus('success'); setMsg('Tu solicitud fue enviada correctamente. Te contactaremos en menos de 2 horas.'); }
      else { throw new Error('Error del servidor'); }
    } catch {
      setStatus('error');
      setMsg('Hubo un error al enviar. Escríbenos directamente a charter@triplatam.com');
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
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Solicitar vuelo</h1>
          <p className="text-slate leading-relaxed max-w-xl">Completa el formulario con los detalles de tu operación. Evaluamos tu requerimiento y respondemos con opciones trazables en menos de 2 horas.</p>
          <div className="flex flex-wrap gap-4 mt-4">
            {['Respuesta en 2h', 'Revisión humana disponible', 'Sin compromiso'].map(b => (
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
            <h2 className="text-2xl font-bold text-white mb-2">Solicitud enviada</h2>
            <p className="text-slate">{msg}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-navy-light border border-white/5 rounded-sm p-8 space-y-8">

            {/* 01 Contacto */}
            <div>
              <p className="font-mono text-xs tracking-widest uppercase text-gold/60 mb-5 pb-3 border-b border-white/5">01 — Datos de contacto</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><label className="block text-xs text-slate/70 mb-1.5 font-medium">Nombre completo *</label><input required className="form-input" placeholder="Juan Rodríguez" value={form.nombre} onChange={e => set('nombre', e.target.value)} /></div>
                <div><label className="block text-xs text-slate/70 mb-1.5 font-medium">Empresa / Organización</label><input className="form-input" placeholder="Acme Corp." value={form.empresa} onChange={e => set('empresa', e.target.value)} /></div>
                <div><label className="block text-xs text-slate/70 mb-1.5 font-medium">Email *</label><input required type="email" className="form-input" placeholder="juan@empresa.com" value={form.email} onChange={e => set('email', e.target.value)} /></div>
                <div><label className="block text-xs text-slate/70 mb-1.5 font-medium">Teléfono / WhatsApp</label><input className="form-input" placeholder="+56 9 1234 5678" value={form.telefono} onChange={e => set('telefono', e.target.value)} /></div>
              </div>
            </div>

            {/* 02 Tipo */}
            <div>
              <p className="font-mono text-xs tracking-widest uppercase text-gold/60 mb-5 pb-3 border-b border-white/5">02 — Tipo de operación</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><label className="block text-xs text-slate/70 mb-1.5 font-medium">Tipo de operación *</label><select required className="form-input" value={form.tipo} onChange={e => set('tipo', e.target.value)}><option value="">Seleccionar...</option>{tiposOp.map(t => <option key={t} value={t}>{t}</option>)}</select></div>
                <div><label className="block text-xs text-slate/70 mb-1.5 font-medium">Urgencia *</label><select required className="form-input" value={form.urgencia} onChange={e => set('urgencia', e.target.value)}><option value="">Seleccionar...</option>{urgencias.map(u => <option key={u} value={u}>{u}</option>)}</select></div>
              </div>
            </div>

            {/* 03 ACMI */}
            {isAcmi && (
              <div>
                <p className="font-mono text-xs tracking-widest uppercase text-gold/60 mb-5 pb-3 border-b border-white/5">03 — Especificaciones ACMI / Lease</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div><label className="block text-xs text-slate/70 mb-1.5 font-medium">Tipo de contrato *</label><select required className="form-input" value={form.acmi_tipo} onChange={e => set('acmi_tipo', e.target.value)}><option value="">Seleccionar...</option>{acmiTipos.map(t => <option key={t} value={t}>{t}</option>)}</select></div>
                  <div><label className="block text-xs text-slate/70 mb-1.5 font-medium">Aeronave requerida</label><input className="form-input" placeholder="B737-800, A320, ATR72..." value={form.acmi_aircraft} onChange={e => set('acmi_aircraft', e.target.value)} /></div>
                  <div><label className="block text-xs text-slate/70 mb-1.5 font-medium">Horas bloque estimadas / mes</label><input type="number" className="form-input" placeholder="300" value={form.acmi_bhr} onChange={e => set('acmi_bhr', e.target.value)} /></div>
                  <div><label className="block text-xs text-slate/70 mb-1.5 font-medium">Duración del contrato</label><select className="form-input" value={form.acmi_duracion} onChange={e => set('acmi_duracion', e.target.value)}><option value="">Seleccionar...</option>{acmiDuraciones.map(d => <option key={d} value={d}>{d}</option>)}</select></div>
                  <div><label className="block text-xs text-slate/70 mb-1.5 font-medium">AOC del Lessee</label><input className="form-input" placeholder="EASA, FAA, UK CAA, ANAC..." value={form.acmi_aoc} onChange={e => set('acmi_aoc', e.target.value)} /></div>
                  <div><label className="block text-xs text-slate/70 mb-1.5 font-medium">Base operativa principal</label><input className="form-input" placeholder="SCEL, EGLL, LEMD..." value={form.acmi_base} onChange={e => set('acmi_base', e.target.value)} /></div>
                </div>
              </div>
            )}

            {/* 03 Detalles vuelo (no ACMI) */}
            {!isAcmi && (
              <div>
                <p className="font-mono text-xs tracking-widest uppercase text-gold/60 mb-5 pb-3 border-b border-white/5">03 — Detalles de la operación</p>

                {/* Trayecto selector */}
                <div className="mb-4">
                  <label className="block text-xs text-slate/70 mb-1.5 font-medium">Trayecto *</label>
                  <select required className="form-input" value={form.trayecto} onChange={e => set('trayecto', e.target.value)}>
                    <option value="One Way (OW)">One Way (OW)</option>
                    <option value="Round Trip (RT)">Round Trip (RT)</option>
                    <option value="Multi-leg">Multi-leg</option>
                  </select>
                </div>

                {/* OW y RT — campos normales */}
                {!isMulti && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div><label className="block text-xs text-slate/70 mb-1.5 font-medium">Origen *</label><input required className="form-input" placeholder="SCL — Santiago, Chile" value={form.origen} onChange={e => set('origen', e.target.value)} /></div>
                    <div><label className="block text-xs text-slate/70 mb-1.5 font-medium">Destino *</label><input required className="form-input" placeholder="GRU — São Paulo, Brasil" value={form.destino} onChange={e => set('destino', e.target.value)} /></div>
                    <div><label className="block text-xs text-slate/70 mb-1.5 font-medium">Fecha de salida *</label><input required type="date" className="form-input" value={form.fecha} onChange={e => set('fecha', e.target.value)} /></div>
                    {isRT && (
                      <div><label className="block text-xs text-slate/70 mb-1.5 font-medium">Fecha de regreso *</label><input required type="date" className="form-input" value={form.fecha_regreso} onChange={e => set('fecha_regreso', e.target.value)} /></div>
                    )}
                    <div><label className="block text-xs text-slate/70 mb-1.5 font-medium">Pasajeros / PAX</label><input type="number" className="form-input" placeholder="120" value={form.pasajeros} onChange={e => set('pasajeros', e.target.value)} /></div>
                    <div><label className="block text-xs text-slate/70 mb-1.5 font-medium">Carga / restricciones especiales</label><input className="form-input" placeholder="Tonelaje, tipo de carga, temperatura, hazmat..." value={form.carga} onChange={e => set('carga', e.target.value)} /></div>
                  </div>
                )}

                {/* Multi-leg */}
                {isMulti && (
                  <div className="space-y-4">
                    {tramos.map((t, i) => (
                      <div key={i} className="border border-white/10 rounded-sm p-4 relative">
                        <p className="font-mono text-xs text-gold/50 mb-3 tracking-widest uppercase">Tramo {i + 1}</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div><label className="block text-xs text-slate/70 mb-1.5 font-medium">Origen *</label><input required className="form-input" placeholder="SCL — Santiago" value={t.origen} onChange={e => setTramo(i, 'origen', e.target.value)} /></div>
                          <div><label className="block text-xs text-slate/70 mb-1.5 font-medium">Destino *</label><input required className="form-input" placeholder="LIM — Lima" value={t.destino} onChange={e => setTramo(i, 'destino', e.target.value)} /></div>
                          <div><label className="block text-xs text-slate/70 mb-1.5 font-medium">Fecha *</label><input required type="date" className="form-input" value={t.fecha} onChange={e => setTramo(i, 'fecha', e.target.value)} /></div>
                        </div>
                        {tramos.length > 1 && (
                          <button type="button" onClick={() => removeTramo(i)} className="absolute top-3 right-3 text-slate/40 hover:text-crimson transition-colors">
                            <Trash2 size={14} />
                          </button>
                        )}
                      </div>
                    ))}
                    {tramos.length < 4 && (
                      <button type="button" onClick={addTramo} className="flex items-center gap-2 text-xs text-gold/60 hover:text-gold transition-colors font-mono tracking-widest uppercase">
                        <Plus size={13} /> Agregar tramo
                      </button>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                      <div><label className="block text-xs text-slate/70 mb-1.5 font-medium">Pasajeros / PAX</label><input type="number" className="form-input" placeholder="120" value={form.pasajeros} onChange={e => set('pasajeros', e.target.value)} /></div>
                      <div><label className="block text-xs text-slate/70 mb-1.5 font-medium">Carga / restricciones especiales</label><input className="form-input" placeholder="Tonelaje, tipo de carga..." value={form.carga} onChange={e => set('carga', e.target.value)} /></div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* 04 Descripción */}
            <div>
              <p className="font-mono text-xs tracking-widest uppercase text-gold/60 mb-5 pb-3 border-b border-white/5">04 — Descripción adicional</p>
              <textarea className="form-input min-h-[120px] resize-none" placeholder={isAcmi ? "Describe el requerimiento ACMI: rutas previstas, condiciones del contrato, certificaciones requeridas..." : "Describe tu operación con el mayor detalle posible: tipo de aeronave preferida, itinerario, condiciones especiales, etc."} value={form.descripcion} onChange={e => set('descripcion', e.target.value)} />
            </div>

            {status === 'error' && (
              <div className="flex items-start gap-3 p-4 bg-crimson/10 border border-crimson/20 rounded-sm">
                <AlertCircle size={16} className="text-crimson flex-shrink-0 mt-0.5" />
                <p className="text-sm text-slate">{msg}</p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <button type="submit" disabled={status === 'loading'} className="inline-flex items-center gap-2 px-8 py-3.5 bg-crimson text-white font-semibold text-sm tracking-wide rounded-sm hover:bg-crimson-light transition-colors disabled:opacity-60 disabled:cursor-not-allowed">
                {status === 'loading' ? <><Loader size={14} className="animate-spin" /> Enviando...</> : <>Enviar solicitud <ArrowRight size={14} /></>}
              </button>
              <p className="text-slate/50 text-xs leading-relaxed max-w-xs">Al enviar, aceptas que procesemos tus datos para evaluar tu solicitud operacional. Ver política de privacidad.</p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
