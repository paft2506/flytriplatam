import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

const steps = [
  {
    num: '01', title: 'Recibimos tu requerimiento',
    desc: 'Capturamos ruta, urgencia, tipo de operación, pasajeros o carga, y restricciones técnicas o regulatorias.',
    sub: ['Formulario de solicitud estructurado', 'Señales básicas de fit operativo', 'Clasificación automática por urgencia', 'Verificación inicial del requerimiento']
  },
  {
    num: '02', title: 'Buscamos aeronave disponible',
    desc: 'Evaluamos capacidad compatible dentro de una red global de operadores, lessors y charter providers.',
    sub: ['Contraste con flota disponible registrada', 'Evaluación de ruta y restricciones', 'Identificación de operadores compatibles', 'Análisis de tiempos de respuesta']
  },
  {
    num: '03', title: 'Evaluación operacional',
    desc: 'Cada solicitud se evalúa considerando ruta, urgencia, tipo de operación, disponibilidad y restricciones técnicas.',
    sub: ['Criterio operativo experto', 'Validación de fit aeronave-ruta', 'Revisión humana para casos críticos', 'Escalamiento para operaciones complejas']
  },
  {
    num: '04', title: 'Entregamos opciones trazables',
    desc: 'Presentamos alternativas con revisión humana disponible para casos críticos, con trazabilidad completa del proceso.',
    sub: ['Propuesta con opciones comparables', 'Registro de evaluación visible', 'Supervisión humana en casos críticos', 'Documentación del proceso completo']
  },
];

export default function ComoFuncionaPage() {
  return (
    <div className="bg-navy min-h-screen pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="accent-line w-8" />
            <p className="font-mono text-xs tracking-widest uppercase text-gold/70">Cómo funciona</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Convertimos una necesidad aérea en opciones trazables
          </h1>
          <p className="text-slate leading-relaxed max-w-2xl">
            Capturamos información, evaluamos oferta y devolvemos opciones con supervisión humana disponible cuando el caso lo requiere.
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-6 mb-20">
          {steps.map((step, i) => (
            <div key={step.num} className="relative">
              {i < steps.length - 1 && (
                <div className="absolute left-8 top-full w-px h-6 bg-gradient-to-b from-gold/20 to-transparent z-10" />
              )}
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
                          <CheckCircle size={12} className="text-gold/60 flex-shrink-0 mt-0.5" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Evaluation box */}
        <div className="bg-navy-muted border border-white/5 rounded-sm p-8 mb-10">
          <p className="font-mono text-xs tracking-widest uppercase text-gold/60 mb-4">Coordinación operacional</p>
          <h3 className="text-2xl font-bold text-white mb-4">Cada solicitud se evalúa con criterio operativo</h3>
          <p className="text-slate leading-relaxed mb-6">
            No conectamos formularios con bases de datos. Conectamos requerimientos reales con capacidad operacional compatible.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: 'Demanda validada', desc: 'La solicitud entra con señales básicas de fit operativo.' },
              { title: 'Capacidad compatible', desc: 'Se contrasta con capacidad disponible y tipo de aeronave.' },
              { title: 'Revisión humana disponible', desc: 'Se activa si el caso requiere criterio experto.' },
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
            Solicitar vuelo <ArrowRight size={14} />
          </Link>
          <Link href="/ia-responsable" className="inline-flex items-center gap-2 px-7 py-3.5 border border-gold/40 text-gold font-semibold text-sm tracking-wide rounded-sm hover:border-gold hover:bg-gold/10 transition-colors">
            Ver IA responsable
          </Link>
        </div>
      </div>
    </div>
  );
}
