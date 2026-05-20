import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    num: '01', title: 'ACMI / Wet Lease',
    desc: 'Capacidad con aeronave, tripulación, mantenimiento y seguros para cubrir picos de demanda o continuidad operativa. Ideal para aerolíneas en crecimiento, operaciones estacionales o sustitución de flota.',
    tags: ['Capacidad', 'Cobertura de flota', 'Wet Lease', 'Damp Lease'],
    detalles: ['Aeronave + tripulación + mantenimiento + seguros', 'Rutas definidas por el arrendatario', 'Contratos flexibles por temporada o corto plazo', 'Ideal para cubrir picos de demanda o ETOPS']
  },
  {
    num: '02', title: 'Full Charter',
    desc: 'Operaciones dedicadas para grupos, eventos, delegaciones y movimientos de alto valor con coordinación end to end. Vuelo exclusivo para tu operación.',
    tags: ['Grupos', 'VIP', 'Eventos', 'Deportivo', 'Gobierno'],
    detalles: ['Aeronave exclusiva para tu operación', 'Itinerario personalizado', 'Coordinación completa desde origen', 'Manejo de PRM, VIP y protocolos especiales']
  },
  {
    num: '03', title: 'Carga y logística',
    desc: 'Carga general, urgente, farmacéutica, perecedera y de alto valor con foco en trazabilidad y tiempos críticos. Cadena de frío y manejo de mercancías peligrosas.',
    tags: ['Freight', 'Cadena de frío', 'Urgente', 'Pharma', 'Hazmat'],
    detalles: ['Carga general y urgente', 'Productos farmacéuticos (temperatura controlada)', 'Mercancías peligrosas según IATA DGR', 'Alta trazabilidad y documentación']
  },
  {
    num: '04', title: 'Ejecutivo y médico',
    desc: 'Jets ejecutivos, ambulancia aérea y traslados médicos con coordinación experta y revisión humana disponible.',
    tags: ['Ejecutivo', 'MEDEVAC', 'Ambulancia aérea', 'Medical'],
    detalles: ['Jets ejecutivos y VIP', 'Ambulancia aérea (MEDEVAC)', 'Repatriación de pacientes', 'Coordinación con equipos médicos a bordo']
  },
];

export default function ServiciosPage() {
  return (
    <div className="bg-navy min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="accent-line w-8" />
            <p className="font-mono text-xs tracking-widest uppercase text-gold/70">Servicios</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Soluciones de aviación charter</h1>
          <p className="text-slate leading-relaxed max-w-2xl">
            Operaciones charter, ACMI, carga y vuelos especializados para demanda crítica y coordinada. Cada operación evaluada con criterio experto.
          </p>
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
                  <p className="font-mono text-xs text-gold/50 tracking-widest uppercase mb-4">Incluye</p>
                  <ul className="flex flex-col gap-3">
                    {s.detalles.map(d => (
                      <li key={d} className="flex items-start gap-2 text-slate text-sm">
                        <span className="text-gold mt-1.5 flex-shrink-0">—</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-navy-light border border-white/5 rounded-sm p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">¿Necesitas una de estas soluciones?</h3>
              <p className="text-slate">Envía tu requerimiento y evaluamos la operación con criterio experto. Respuesta en menos de 2 horas.</p>
            </div>
            <div className="flex flex-wrap gap-4 justify-start md:justify-end">
              <Link href="/solicitar-vuelo" className="inline-flex items-center gap-2 px-6 py-3 bg-crimson text-white font-semibold text-sm tracking-wide rounded-sm hover:bg-crimson-light transition-colors">
                Solicitar vuelo <ArrowRight size={14} />
              </Link>
              <Link href="/contacto" className="inline-flex items-center gap-2 px-6 py-3 border border-gold/40 text-gold font-semibold text-sm tracking-wide rounded-sm hover:border-gold hover:bg-gold/10 transition-colors">
                Contactar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
