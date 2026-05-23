import Link from 'next/link';
import { ArrowRight, Clock, Users, Globe, Zap, Shield, CheckCircle, ChevronRight } from 'lucide-react';

const stats = [
  { value: '500+', label: 'Operadores globales' },
  { value: '80+', label: 'Países cubiertos' },
  { value: '24/7', label: 'Respuesta operacional' },
  { value: '2h', label: 'Cotización urgente' },
];

const services = [
  { num: '01', title: 'ACMI / Wet Lease', desc: 'Capacidad con aeronave, tripulación, mantenimiento y seguros para cubrir picos de demanda o continuidad operativa.', tags: ['Capacidad', 'Cobertura de flota', 'Wet Lease'] },
  { num: '02', title: 'Full Charter', desc: 'Operaciones dedicadas para grupos, eventos, delegaciones y movimientos de alto valor con coordinación end to end.', tags: ['Grupos', 'VIP', 'Eventos'] },
  { num: '03', title: 'Carga y logística', desc: 'Carga general, urgente, farmacéutica, perecedera y de alto valor con foco en trazabilidad y tiempos críticos.', tags: ['Freight', 'Cadena de frío', 'Urgente'] },
  { num: '04', title: 'Ejecutivo y médico', desc: 'Jets ejecutivos, ambulancia aérea y traslados médicos con coordinación experta y revisión humana disponible.', tags: ['Ejecutivo', 'MEDEVAC', 'Ambulancia aérea'] },
];

const steps = [
  { num: '01', title: 'Recibimos tu requerimiento', desc: 'Capturamos ruta, urgencia, tipo de operación, pasajeros/carga y restricciones.' },
  { num: '02', title: 'Buscamos aeronave disponible', desc: 'Evaluamos capacidad compatible dentro de una red global de operadores y proveedores.' },
  { num: '03', title: 'Entregamos opciones trazables', desc: 'Presentamos alternativas con revisión humana disponible para casos críticos.' },
];

export default function HomePage() {
  return (
    <div className="bg-navy">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center grid-texture overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-muted to-navy-light opacity-80" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-crimson/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px]" />
        <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="accent-line w-8" />
              <p className="font-mono text-xs tracking-widest uppercase text-gold/70">Charter · ACMI · Cargo · Operaciones especiales</p>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.05] mb-6">
              Flota ociosa.<br /><span className="text-gold">Demanda real.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate leading-relaxed max-w-2xl mb-4">Conectamos demanda aérea con flota disponible en menos tiempo.</p>
            <p className="text-slate/70 leading-relaxed max-w-xl mb-10">Vuelos charter, ACMI/Wet Lease, carga y operaciones especiales coordinadas con trazabilidad, criterio operacional y revisión humana disponible.</p>
            <div className="flex flex-wrap gap-4 mb-12">
              <Link href="/solicitar-vuelo" className="inline-flex items-center gap-2 px-7 py-3.5 bg-crimson text-white font-semibold text-sm tracking-wide rounded-sm hover:bg-crimson-light transition-colors">
                Solicitar vuelo <ArrowRight size={14} />
              </Link>
              <Link href="/registrar-flota" className="inline-flex items-center gap-2 px-7 py-3.5 border border-gold/40 text-gold font-semibold text-sm tracking-wide rounded-sm hover:border-gold hover:bg-gold/10 transition-colors">
                Registrar flota
              </Link>
            </div>
            <div className="flex flex-wrap gap-6">
              {['Respuesta 24/7', 'Cotización en 2h', 'Revisión humana disponible'].map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <CheckCircle size={13} className="text-gold" />
                  <span className="font-mono text-xs text-slate/70 tracking-wide">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy-muted border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-extrabold text-white mb-1">{s.value}</p>
              <p className="font-mono text-xs text-slate/60 tracking-widest uppercase">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Hub section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-mono text-xs tracking-widest uppercase text-gold/70 mb-4">Aviation Intelligence Hub</p>
            <h2 className="text-4xl font-bold text-white mb-6 leading-tight">Aviation Intelligence Hub</h2>
            <p className="text-slate leading-relaxed mb-8">Centralizamos solicitudes de vuelo, disponibilidad de flota y evaluación operacional para conectar requerimientos reales con capacidad aérea compatible.</p>
            <div className="flex items-center gap-2 text-slate/60 text-sm">
              <Clock size={13} className="text-gold" />
              <span>Respuesta operacional 24/7 con evaluación acelerada para solicitudes urgentes.</span>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {[
              { icon: Users, title: 'Charter y ACMI', desc: 'Capacidad para operaciones dedicadas, wet lease y cobertura de demanda.' },
              { icon: Globe, title: 'Carga y operaciones críticas', desc: 'Evaluación rápida para rutas, carga urgente, pasajeros o misiones especiales.' },
              { icon: Shield, title: 'Trazabilidad y revisión humana', desc: 'Registro del requerimiento, criterios de evaluación y revisión experta cuando corresponde.' },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 p-5 bg-navy-light border border-white/5 rounded-sm hover:border-gold/20 transition-colors group">
                <div className="w-9 h-9 bg-gold/10 rounded-sm flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                  <item.icon size={16} className="text-gold" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm mb-1">{item.title}</p>
                  <p className="text-slate text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demand / Supply */}
      <section className="max-w-7xl mx-auto px-6 py-12 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Demanda - oscuro */}
          <div className="bg-navy-light border border-white/5 rounded-lg p-8">
            <p className="font-mono text-xs tracking-widest uppercase text-gold/60 mb-4">Demanda</p>
            <h3 className="text-2xl font-bold text-white mb-4">¿Necesitas volar?</h3>
            <p className="text-slate text-sm leading-relaxed mb-6">Para empresas, agencias, gobiernos, deportes, logística y misiones especiales que necesitan una aeronave adecuada sin perder tiempo.</p>
            <ul className="flex flex-col gap-2 mb-8">
              {['Charter corporativo y ejecutivo', 'Grupos y delegaciones', 'Carga urgente y especializada', 'Operaciones médicas o humanitarias'].map(i => (
                <li key={i} className="flex items-center gap-2 text-slate text-sm"><CheckCircle size={12} className="text-gold flex-shrink-0" />{i}</li>
              ))}
            </ul>
            <Link href="/solicitar-vuelo" className="inline-flex items-center gap-2 px-5 py-2.5 bg-crimson text-white font-semibold text-xs tracking-wide rounded-sm hover:bg-crimson-light transition-colors">
              Solicitar vuelo <ArrowRight size={12} />
            </Link>
          </div>

          {/* Bridge */}
          <div className="flex flex-col items-center gap-4 py-8">
            <div className="w-12 h-12 bg-gold/10 border border-gold/20 rounded-full flex items-center justify-center">
              <Zap size={20} className="text-gold" />
            </div>
            <p className="font-mono text-xs text-slate/60 tracking-widest text-center uppercase">FlyTriplatam conecta ambos lados con criterio operacional y trazabilidad.</p>
          </div>

          {/* Oferta - blanco */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <p className="font-mono text-xs tracking-widest uppercase text-crimson/70 mb-4">Oferta</p>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Tienes flota disponible?</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">Para lessors, operadores, charter providers y dueños de flota que buscan exposición a demanda real y capacidad ociosa.</p>
            <ul className="flex flex-col gap-2 mb-8">
              {['ACMI / Wet Lease', 'Full Charter', 'Cargo Charter', 'Capacidad ociosa / disponibilidad'].map(i => (
                <li key={i} className="flex items-center gap-2 text-gray-600 text-sm"><CheckCircle size={12} className="text-crimson flex-shrink-0" />{i}</li>
              ))}
            </ul>
            <Link href="/registrar-flota" className="inline-flex items-center gap-2 px-5 py-2.5 border border-crimson text-crimson font-semibold text-xs tracking-wide rounded-sm hover:bg-crimson hover:text-white transition-colors">
              Registrar flota <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-navy-muted border-y border-white/5 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="font-mono text-xs tracking-widest uppercase text-gold/70 mb-3">Servicios</p>
              <h2 className="text-3xl font-bold text-white">Soluciones de aviación charter</h2>
            </div>
            <Link href="/servicios" className="hidden md:inline-flex items-center gap-2 text-gold text-sm hover:text-gold-light transition-colors">Ver servicios <ArrowRight size={14} /></Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s) => (
              <div key={s.num} className="bg-navy border border-white/5 rounded-sm p-6 hover:border-gold/20 transition-colors group">
                <p className="font-mono text-2xl font-bold text-gold/20 mb-4 group-hover:text-gold/40 transition-colors">{s.num}</p>
                <h3 className="text-white font-semibold mb-3">{s.title}</h3>
                <p className="text-slate text-sm leading-relaxed mb-4">{s.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {s.tags.map(tag => <span key={tag} className="font-mono text-[10px] tracking-wide text-gold/50 bg-gold/5 border border-gold/10 px-2 py-0.5 rounded-sm">{tag}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <p className="font-mono text-xs tracking-widest uppercase text-gold/70 mb-3">Cómo funciona</p>
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-12">
          <h2 className="text-3xl font-bold text-white max-w-md">Convertimos una necesidad aérea en opciones trazables</h2>
          <Link href="/como-funciona" className="inline-flex items-center gap-2 text-gold text-sm hover:text-gold-light transition-colors">Ver proceso completo <ArrowRight size={14} /></Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div key={step.num} className="bg-navy-light border border-white/5 rounded-sm p-6 hover:border-gold/20 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xl font-bold text-gold">{step.num}</span>
                <div className="h-px flex-1 bg-white/5" />
              </div>
              <h3 className="text-white font-semibold mb-2">{step.title}</h3>
              <p className="text-slate text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trust */}
      <section className="bg-navy-muted border-y border-white/5 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="font-mono text-xs tracking-widest uppercase text-gold/70 mb-3">Confianza operacional</p>
              <h2 className="text-3xl font-bold text-white mb-4 leading-tight">Procesos diseñados para trazabilidad, protección de datos, revisión humana y mejora continua.</h2>
              <p className="text-slate leading-relaxed mb-6">La plataforma opera con controles visibles y un flujo documental pensado para entornos B2B sensibles.</p>
              <Link href="/ia-responsable" className="inline-flex items-center gap-2 text-gold text-sm hover:text-gold-light transition-colors">Ver IA responsable <ArrowRight size={14} /></Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: 'Registro y operación', desc: 'TripLatam Ltd · UK Co. No. 15627355' },
                { title: 'Protección de datos', desc: 'Tratamiento responsable de solicitudes y datos comerciales.' },
                { title: 'Trazabilidad', desc: 'Registro claro de solicitud, evaluación y propuesta.' },
                { title: 'Revisión humana', desc: 'Escalamiento disponible para operaciones críticas.' },
                { title: 'Calidad', desc: 'Procesos alineados con buenas prácticas de gestión.' },
                { title: 'IA responsable', desc: 'Hoja de ruta hacia ISO/IEC 42001.' },
              ].map(item => (
                <div key={item.title} className="bg-navy border border-white/5 rounded-sm p-4 hover:border-gold/20 transition-colors">
                  <p className="text-white font-semibold text-sm mb-1.5">{item.title}</p>
                  <p className="text-slate text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <p className="font-mono text-xs tracking-widest uppercase text-gold/70 mb-4">Siguiente paso</p>
        <h2 className="text-4xl font-bold text-white mb-4">Solicita una operación o registra capacidad disponible.</h2>
        <p className="text-slate mb-10">Solicita una operación o registra capacidad disponible en la red FlyTriplatam.</p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Link href="/solicitar-vuelo" className="inline-flex items-center gap-2 px-8 py-4 bg-crimson text-white font-semibold tracking-wide rounded-sm hover:bg-crimson-light transition-colors">
            Solicitar vuelo <ArrowRight size={15} />
          </Link>
          <Link href="/registrar-flota" className="inline-flex items-center gap-2 px-8 py-4 border border-gold/40 text-gold font-semibold tracking-wide rounded-sm hover:border-gold hover:bg-gold/10 transition-colors">
            Registrar flota
          </Link>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {['Respuesta operacional 24/7', 'Revisión humana disponible', 'Trazabilidad y control'].map(badge => (
            <div key={badge} className="flex items-center gap-2">
              <CheckCircle size={12} className="text-gold" />
              <span className="font-mono text-xs text-slate/60">{badge}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
