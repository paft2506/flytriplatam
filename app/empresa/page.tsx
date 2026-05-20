import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function EmpresaPage() {
  return (
    <div className="bg-navy min-h-screen pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="accent-line w-8" />
            <p className="font-mono text-xs tracking-widest uppercase text-gold/70">Empresa</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">FlyTriplatam</h1>
          <p className="text-slate leading-relaxed max-w-2xl text-lg">
            Aviation Intelligence Hub operado por TripLatam Ltd. Conectamos demanda aérea global con capacidad disponible de forma ágil, trazable y responsable.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <p className="font-mono text-xs tracking-widest uppercase text-gold/60 mb-4">Nuestra misión</p>
            <h2 className="text-2xl font-bold text-white mb-4">Reducir la fricción entre demanda aérea real y capacidad disponible.</h2>
            <p className="text-slate leading-relaxed mb-4">
              El mercado de aviación charter opera con ineficiencias estructurales: flota ociosa que no encuentra demanda, y operaciones que no encuentran aeronaves adecuadas en tiempo.
            </p>
            <p className="text-slate leading-relaxed">
              FlyTriplatam existe para resolver esa brecha con criterio operacional, trazabilidad y revisión humana disponible cuando el caso lo requiere.
            </p>
          </div>
          <div>
            <p className="font-mono text-xs tracking-widest uppercase text-gold/60 mb-4">Qué nos diferencia</p>
            <div className="flex flex-col gap-3">
              {[
                'No somos un marketplace sin criterio: evaluamos cada solicitud operacionalmente.',
                'Revisión humana disponible para casos complejos o críticos.',
                'Trazabilidad completa del proceso: el solicitante sabe cómo se evaluó su operación.',
                'Red global de operadores con presencia en más de 80 países.',
                'Respuesta en menos de 2 horas para solicitudes urgentes.',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-navy-light border border-white/5 rounded-sm">
                  <span className="font-mono text-xs text-crimson font-bold mt-0.5 flex-shrink-0">0{i+1}</span>
                  <p className="text-slate text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Legal info */}
        <div className="bg-navy-muted border border-white/5 rounded-sm p-8 mb-10">
          <p className="font-mono text-xs tracking-widest uppercase text-gold/60 mb-6">Registro legal</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-white font-semibold mb-3">TripLatam Ltd</p>
              <div className="flex flex-col gap-1.5">
                <p className="font-mono text-xs text-slate/60">UK Co. No. 15627355</p>
                <p className="font-mono text-xs text-slate/60">Registered in England & Wales</p>
                <p className="font-mono text-xs text-slate/60">London, United Kingdom</p>
              </div>
            </div>
            <div>
              <p className="text-white font-semibold mb-3">Operaciones</p>
              <div className="flex flex-col gap-1.5">
                <p className="font-mono text-xs text-slate/60">London · Santiago</p>
                <p className="font-mono text-xs text-slate/60">charter@triplatam.com</p>
                <p className="font-mono text-xs text-slate/60">+56 9 7671 1418</p>
              </div>
            </div>
            <div>
              <p className="text-white font-semibold mb-3">Cumplimiento</p>
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
            Contactar <ArrowRight size={14} />
          </Link>
          <Link href="/ia-responsable" className="inline-flex items-center gap-2 px-7 py-3.5 border border-gold/40 text-gold font-semibold text-sm tracking-wide rounded-sm hover:border-gold hover:bg-gold/10 transition-colors">
            IA Responsable
          </Link>
        </div>
      </div>
    </div>
  );
}
