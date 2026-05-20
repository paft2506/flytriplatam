import Link from 'next/link';
import { ArrowRight, Shield, Eye, Users, FileCheck } from 'lucide-react';

const principles = [
  { icon: Eye, title: 'Transparencia operativa', desc: 'Los procesos de evaluación son visibles y trazables. El solicitante puede entender cómo se evaluó su requerimiento y qué criterios se aplicaron.' },
  { icon: Users, title: 'Revisión humana disponible', desc: 'Para operaciones críticas, complejas o sensibles, un experto humano revisa y valida el proceso antes de presentar opciones.' },
  { icon: Shield, title: 'Protección de datos', desc: 'Los datos comerciales y operacionales se tratan con responsabilidad, bajo UK GDPR, con acceso limitado y flujos documentados.' },
  { icon: FileCheck, title: 'Audit logs y trazabilidad', desc: 'Registro claro de solicitud, evaluación y propuesta. Cada operación deja una huella documental verificable.' },
];

const roadmap = [
  { status: 'activo', label: 'Revisión humana disponible', desc: 'Escalamiento manual activo para operaciones críticas.' },
  { status: 'activo', label: 'Audit logs básicos', desc: 'Registro de solicitudes y respuestas en cada operación.' },
  { status: 'activo', label: 'UK GDPR compliance', desc: 'Tratamiento de datos conforme a la normativa británica.' },
  { status: 'proceso', label: 'ISO 9001 alignment', desc: 'Procesos de calidad alineados con la norma internacional.' },
  { status: 'roadmap', label: 'ISO/IEC 42001 certification', desc: 'Hoja de ruta hacia la certificación de sistemas de IA.' },
  { status: 'roadmap', label: 'Explainability reports', desc: 'Reportes de explicabilidad para cada evaluación automática.' },
];

export default function IAResponsablePage() {
  return (
    <div className="bg-navy min-h-screen pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="accent-line w-8" />
            <p className="font-mono text-xs tracking-widest uppercase text-gold/70">IA Responsable</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">IA Responsable</h1>
          <p className="text-slate leading-relaxed max-w-2xl">
            Procesos diseñados para trazabilidad, protección de datos, revisión humana y mejora continua. La plataforma opera con controles visibles y un flujo documental pensado para entornos B2B sensibles.
          </p>
        </div>

        {/* Principles */}
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

        {/* Design statement */}
        <div className="bg-navy-muted border border-white/5 rounded-sm p-8 mb-16">
          <p className="font-mono text-xs tracking-widest uppercase text-gold/60 mb-4">Principio de diseño</p>
          <blockquote className="text-xl text-white font-medium leading-relaxed border-l-2 border-crimson pl-6">
            &ldquo;Diseñamos el flujo para que la operación mantenga control, trazabilidad y revisión humana cuando el caso lo justifica.&rdquo;
          </blockquote>
        </div>

        {/* Roadmap */}
        <div className="mb-16">
          <p className="font-mono text-xs tracking-widest uppercase text-gold/60 mb-6">Estado y hoja de ruta</p>
          <div className="flex flex-col gap-3">
            {roadmap.map((item) => (
              <div key={item.label} className="flex items-center gap-4 p-4 bg-navy-light border border-white/5 rounded-sm">
                <div className={`w-2 h-2 rounded-full flex-shrink-0 ${
                  item.status === 'activo' ? 'bg-green-400' :
                  item.status === 'proceso' ? 'bg-gold' : 'bg-slate/30'
                }`} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 flex-wrap">
                    <p className="text-white font-semibold text-sm">{item.label}</p>
                    <span className={`font-mono text-[10px] tracking-widest px-2 py-0.5 rounded-sm ${
                      item.status === 'activo' ? 'text-green-400 bg-green-400/10 border border-green-400/20' :
                      item.status === 'proceso' ? 'text-gold bg-gold/10 border border-gold/20' :
                      'text-slate/50 bg-white/5 border border-white/5'
                    }`}>
                      {item.status === 'activo' ? 'Activo' : item.status === 'proceso' ? 'En proceso' : 'Roadmap'}
                    </span>
                  </div>
                  <p className="text-slate text-xs mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance */}
        <div className="bg-navy-light border border-white/5 rounded-sm p-8 mb-10">
          <p className="font-mono text-xs tracking-widest uppercase text-gold/60 mb-6">Registro y cumplimiento</p>
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
              <p className="text-white font-semibold mb-3">Estándares</p>
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
            Ver proceso completo <ArrowRight size={14} />
          </Link>
          <Link href="/contacto" className="inline-flex items-center gap-2 px-7 py-3.5 text-slate text-sm hover:text-white transition-colors">
            Contactar para más información
          </Link>
        </div>
      </div>
    </div>
  );
}
