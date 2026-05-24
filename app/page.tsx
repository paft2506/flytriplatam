import Link from 'next/link';
import { ArrowRight, CheckCircle, ChevronRight } from 'lucide-react';

const stats = [
  { value: '500+', label: 'Operadores globales' },
  { value: '80+', label: 'Países cubiertos' },
  { value: '24/7', label: 'Respuesta operacional' },
  { value: '2h', label: 'Cotización urgente' },
];

const services = [
  { num: '01', title: 'ACMI / Wet Lease', desc: 'Capacidad con aeronave, tripulación, mantenimiento y seguros para cubrir picos de demanda o continuidad operativa.', tags: ['CAPACIDAD', 'COBERTURA DE FLOTA', 'WET LEASE'] },
  { num: '02', title: 'Full Charter', desc: 'Operaciones dedicadas para grupos, eventos, delegaciones y movimientos de alto valor con coordinación end to end.', tags: ['GRUPOS', 'VIP', 'EVENTOS'] },
  { num: '03', title: 'Carga y logística', desc: 'Carga general, urgente, farmacéutica, perecedera y de alto valor con foco en trazabilidad y tiempos críticos.', tags: ['FREIGHT', 'CADENA DE FRÍO', 'URGENTE'] },
  { num: '04', title: 'Ejecutivo y médico', desc: 'Jets ejecutivos, ambulancia aérea y traslados médicos con coordinación experta y revisión humana disponible.', tags: ['EJECUTIVO', 'MEDEVAC', 'AMBULANCIA AÉREA'] },
];

const trustItems = [
  { title: 'Registro y operación', desc: 'TripLatam Ltd · UK Co. No. 15627355' },
  { title: 'Protección de datos', desc: 'Tratamiento responsable de solicitudes y datos comerciales.' },
  { title: 'Trazabilidad', desc: 'Registro claro de solicitud, evaluación y propuesta.' },
  { title: 'Revisión humana', desc: 'Escalamiento disponible para operaciones críticas.' },
  { title: 'Calidad', desc: 'Procesos alineados con buenas prácticas de gestión.' },
  { title: 'IA responsable', desc: 'Hoja de ruta hacia ISO/IEC 42001.' },
];

export default function HomePage() {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>

      {/* HERO — fondo navy oscuro */}
      <section style={{ background: 'linear-gradient(135deg, rgba(15,28,46,0.85) 0%, rgba(22,34,54,0.85) 100%), url(https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80) center/cover no-repeat', minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(201,168,76,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.03) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '96px 24px 64px', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
          {/* Left */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '999px', padding: '6px 14px', marginBottom: '32px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C41E3A', display: 'inline-block' }} />
              <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)' }}>Charter · ACMI · Cargo · Operaciones especiales</span>
            </div>
            <h1 style={{ fontSize: 'clamp(48px, 6vw, 80px)', fontWeight: 800, color: 'white', lineHeight: 1.05, marginBottom: '24px' }}>
              Flota ociosa.<br />
              <span style={{ color: '#C9A84C' }}>Demanda real.</span>
            </h1>
            <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: '12px', maxWidth: '520px' }}>
              Conectamos demanda aérea con flota disponible en menos tiempo.
            </p>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, marginBottom: '40px', maxWidth: '480px' }}>
              Vuelos charter, ACMI/Wet Lease, carga y operaciones especiales coordinadas con trazabilidad, criterio operacional y revisión humana disponible.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '40px' }}>
              <Link href="/solicitar-vuelo" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', background: '#C41E3A', color: 'white', fontWeight: 600, fontSize: '14px', borderRadius: '6px', textDecoration: 'none', letterSpacing: '0.02em' }}>
                Solicitar vuelo <ArrowRight size={14} />
              </Link>
              <Link href="/registrar-flota" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', border: '1px solid rgba(255,255,255,0.25)', color: 'white', fontWeight: 600, fontSize: '14px', borderRadius: '6px', textDecoration: 'none', letterSpacing: '0.02em' }}>
                Registrar flota
              </Link>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {['RESPUESTA 24/7', 'COTIZACIÓN EN 2H', 'REVISIÓN HUMANA DISPONIBLE'].map(b => (
                <span key={b} style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.15)', padding: '6px 12px', borderRadius: '4px' }}>{b}</span>
              ))}
            </div>
          </div>

          {/* Right — Hub card */}
          <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '32px', backdropFilter: 'blur(10px)' }}>
            <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '12px' }}>Aviation Intelligence Hub</p>
            <h2 style={{ fontSize: '26px', fontWeight: 700, color: 'white', marginBottom: '16px' }}>Aviation Intelligence Hub</h2>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: '24px' }}>
              Centralizamos solicitudes de vuelo, disponibilidad de flota y evaluación operacional para conectar requerimientos reales con capacidad aérea compatible.
            </p>
            {[
              { title: 'Charter y ACMI', desc: 'Capacidad para operaciones dedicadas, wet lease y cobertura de demanda.' },
              { title: 'Carga y operaciones críticas', desc: 'Evaluación rápida para rutas, carga urgente, pasajeros o misiones especiales.' },
              { title: 'Trazabilidad y revisión humana', desc: 'Registro del requerimiento, criterios de evaluación y revisión experta cuando corresponde.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '14px 0', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <p style={{ fontWeight: 600, color: 'white', fontSize: '14px', marginBottom: '4px' }}>{item.title}</p>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
            <div style={{ paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.08)', fontSize: '12px', color: 'rgba(255,255,255,0.35)' }}>
              Respuesta operacional 24/7 con evaluación acelerada para solicitudes urgentes.
            </div>
          </div>
        </div>
      </section>

      {/* STATS — fondo navy medio */}
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

      {/* DEMANDA / OFERTA — fondo gris claro */}
      <section style={{ background: '#f0f2f5', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '32px', alignItems: 'center' }}>
          {/* Demanda — oscuro */}
          <div style={{ background: 'linear-gradient(135deg, #0f1c2e, #162236)', borderRadius: '16px', padding: '40px', color: 'white' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(201,168,76,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: '#C9A84C', fontSize: '16px' }}>✈</span>
              </div>
              <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>Demanda</p>
            </div>
            <h3 style={{ fontSize: '28px', fontWeight: 700, color: 'white', marginBottom: '16px' }}>¿Necesitas volar?</h3>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: '20px' }}>
              Para empresas, agencias, gobiernos, deportes, logística y misiones especiales que necesitan una aeronave adecuada sin perder tiempo.
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
              {['Charter corporativo y ejecutivo', 'Grupos y delegaciones', 'Carga urgente y especializada', 'Operaciones médicas o humanitarias'].map(i => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>
                  <CheckCircle size={14} color="rgba(201,168,76,0.7)" /> {i}
                </li>
              ))}
            </ul>
            <Link href="/solicitar-vuelo" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', background: '#C41E3A', color: 'white', fontWeight: 600, fontSize: '13px', borderRadius: '6px', textDecoration: 'none' }}>
              Solicitar vuelo <ArrowRight size={13} />
            </Link>
          </div>

          {/* Bridge */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', padding: '16px' }}>
            <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '9px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#8A9BBD', textAlign: 'center', maxWidth: '120px' }}>FLYTRIPLATAM</p>
            <p style={{ fontSize: '13px', color: '#8A9BBD', textAlign: 'center', maxWidth: '140px', lineHeight: 1.5 }}>FlyTriplatam conecta ambos lados con criterio operacional y trazabilidad.</p>
            <div style={{ width: '1px', height: '30px', background: '#C41E3A', opacity: 0.4 }} />
          </div>

          {/* Oferta — blanco */}
          <div style={{ background: 'white', borderRadius: '16px', padding: '40px', border: '1px solid #e5e7eb' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(196,30,58,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: '#C41E3A', fontSize: '16px' }}>🛡</span>
              </div>
              <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C41E3A' }}>Oferta</p>
            </div>
            <h3 style={{ fontSize: '28px', fontWeight: 700, color: '#0f1c2e', marginBottom: '16px' }}>¿Tienes flota disponible?</h3>
            <p style={{ fontSize: '14px', color: '#4B5563', lineHeight: 1.7, marginBottom: '20px' }}>
              Para lessors, operadores, charter providers y dueños de flota que buscan exposición a demanda real y capacidad ociosa.
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
              {['ACMI / Wet Lease', 'Full Charter', 'Cargo Charter', 'Capacidad ociosa / disponibilidad'].map(i => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#374151' }}>
                  <CheckCircle size={14} color="#C41E3A" /> {i}
                </li>
              ))}
            </ul>
            <Link href="/registrar-flota" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', border: '1px solid #0f1c2e', color: '#0f1c2e', fontWeight: 600, fontSize: '13px', borderRadius: '6px', textDecoration: 'none' }}>
              Registrar flota <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICIOS — fondo blanco */}
      <section style={{ background: 'white', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C41E3A', marginBottom: '12px' }}>Servicios</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '8px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 700, color: '#0f1c2e' }}>Soluciones de aviación charter</h2>
            <Link href="/servicios" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#C41E3A', fontSize: '14px', fontWeight: 600, textDecoration: 'none' }}>
              Ver servicios <ArrowRight size={13} />
            </Link>
          </div>
          <p style={{ fontSize: '15px', color: '#4B5563', marginBottom: '40px' }}>Operaciones charter, ACMI, carga y vuelos especializados para demanda crítica y coordinada.</p>
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
            <div style={{ padding: '20px 32px', background: '#f9fafb', display: 'flex', justifyContent: 'flex-start' }}>
              <Link href="/servicios" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#C41E3A', fontSize: '14px', fontWeight: 600, textDecoration: 'none' }}>
                Ver servicios <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* COORDINACIÓN OPERACIONAL — fondo navy */}
      <section style={{ background: '#f0f2f5', padding: '40px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #0f1c2e, #162236)', borderRadius: '16px', padding: '48px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'start' }}>
            <div>
              <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '16px' }}>Coordinación operacional</p>
              <h2 style={{ fontSize: '28px', fontWeight: 700, color: 'white', marginBottom: '16px', lineHeight: 1.3 }}>Cada solicitud se evalúa con criterio operativo</h2>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: '12px' }}>
                Cada solicitud se evalúa considerando ruta, urgencia, tipo de operación, disponibilidad y restricciones técnicas.
              </p>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>
                No conectamos formularios con bases de datos. Conectamos requerimientos reales con capacidad operacional compatible.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {[
                { title: 'Demanda validada', desc: 'La solicitud entra con señales básicas de fit operativo.' },
                { title: 'Capacidad compatible', desc: 'Se contrasta con capacidad disponible y tipo de aeronave.' },
                { title: 'Revisión humana disponible', desc: 'Se activa si el caso requiere criterio experto.' },
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

      {/* CÓMO FUNCIONA — fondo gris claro */}
      <section style={{ background: '#f0f2f5', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C41E3A', marginBottom: '12px' }}>Cómo funciona</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 700, color: '#0f1c2e', maxWidth: '500px', lineHeight: 1.2 }}>Convertimos una necesidad aérea en opciones trazables</h2>
            <Link href="/como-funciona" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#C41E3A', fontSize: '14px', fontWeight: 600, textDecoration: 'none', marginTop: '8px' }}>
              Ver proceso completo <ArrowRight size={13} />
            </Link>
          </div>
          <p style={{ fontSize: '15px', color: '#4B5563', marginBottom: '48px', maxWidth: '600px' }}>
            Capturamos información, evaluamos oferta y devolvemos opciones con supervisión humana disponible cuando el caso lo requiere.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {[
              { num: '01', title: 'Recibimos tu requerimiento', desc: 'Capturamos ruta, urgencia, tipo de operación, pasajeros/carga y restricciones.' },
              { num: '02', title: 'Buscamos aeronave disponible', desc: 'Evaluamos capacidad compatible dentro de una red global de operadores y proveedores.' },
              { num: '03', title: 'Entregamos opciones trazables', desc: 'Presentamos alternativas con revisión humana disponible para casos críticos.' },
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

      {/* CONFIANZA — fondo navy */}
      <section style={{ background: '#0f1c2e', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '16px' }}>Confianza operacional</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start' }}>
            <div>
              <h2 style={{ fontSize: '32px', fontWeight: 700, color: 'white', marginBottom: '16px', lineHeight: 1.3 }}>
                Procesos diseñados para trazabilidad, protección de datos, revisión humana y mejora continua.
              </h2>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: '12px' }}>
                La plataforma opera con controles visibles y un flujo documental pensado para entornos B2B sensibles.
              </p>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, marginBottom: '24px' }}>
                Diseñamos el flujo para que la operación mantenga control, trazabilidad y revisión humana cuando el caso lo justifica.
              </p>
              <Link href="/ia-responsable" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'rgba(255,255,255,0.6)', fontSize: '14px', textDecoration: 'none' }}>
                Ver IA responsable <ArrowRight size={13} />
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

      {/* CTA FINAL — navy card sobre fondo gris */}
      <section style={{ background: '#f0f2f5', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #0f1c2e, #162236)', borderRadius: '16px', padding: '64px 48px', textAlign: 'center' }}>
            <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '16px' }}>Siguiente paso</p>
            <h2 style={{ fontSize: '40px', fontWeight: 700, color: 'white', marginBottom: '12px', lineHeight: 1.2 }}>
              Solicita una operación o registra capacidad disponible.
            </h2>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', marginBottom: '36px' }}>
              Solicita una operación o registra capacidad disponible en la red FlyTriplatam.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '28px' }}>
              <Link href="/solicitar-vuelo" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 32px', background: '#C41E3A', color: 'white', fontWeight: 600, fontSize: '15px', borderRadius: '6px', textDecoration: 'none' }}>
                Solicitar vuelo <ArrowRight size={15} />
              </Link>
              <Link href="/registrar-flota" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 32px', border: '1px solid rgba(255,255,255,0.25)', color: 'white', fontWeight: 600, fontSize: '15px', borderRadius: '6px', textDecoration: 'none' }}>
                Registrar flota
              </Link>
            </div>
            <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.25)' }}>
              Respuesta operacional 24/7 · Revisión humana disponible · Trazabilidad y control
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
