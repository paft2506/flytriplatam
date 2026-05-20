import Link from 'next/link';
import { Mail, MessageCircle, ExternalLink } from 'lucide-react';

const contacts = [
  {
    icon: Mail,
    title: 'Solicitud de vuelo',
    desc: 'Para vuelos charter, ACMI, carga y operaciones especiales.',
    href: 'mailto:charter@triplatam.com?subject=Solicitud de vuelo - FlyTriplatam&body=Hola FlyTriplatam, necesito información sobre vuelos charter.',
    label: 'charter@triplatam.com',
    cta: 'Enviar email'
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp operativo',
    desc: 'Canal directo para solicitudes urgentes y consultas operacionales.',
    href: 'https://wa.me/56976711418?text=Hola FlyTriplatam, necesito información sobre vuelos charter.',
    label: '+56 9 7671 1418',
    cta: 'Abrir WhatsApp'
  },
  {
    icon: Mail,
    title: 'Alianzas y operadores',
    desc: 'Para lessors, operadores y charter providers que buscan asociarse.',
    href: 'mailto:partnership@triplatam.com?subject=Alianza operacional - FlyTriplatam&body=Hola FlyTriplatam, quisiera conversar sobre una alianza operacional.',
    label: 'partnership@triplatam.com',
    cta: 'Enviar email'
  },
];

export default function ContactoPage() {
  return (
    <div className="bg-navy min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="accent-line w-8" />
            <p className="font-mono text-xs tracking-widest uppercase text-gold/70">Contacto</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Contacto</h1>
          <p className="text-slate leading-relaxed max-w-xl">
            Respondemos por los canales oficiales del sitio. Para solicitudes de vuelo, usa el formulario estructurado para una respuesta más rápida.
          </p>
        </div>

        {/* Contact channels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {contacts.map((c) => (
            <div key={c.title} className="bg-navy-light border border-white/5 rounded-sm p-6 hover:border-gold/20 transition-colors group">
              <div className="w-10 h-10 bg-crimson/10 rounded-sm flex items-center justify-center mb-4 group-hover:bg-crimson/20 transition-colors">
                <c.icon size={18} className="text-crimson" />
              </div>
              <h3 className="text-white font-semibold mb-2">{c.title}</h3>
              <p className="text-slate text-sm leading-relaxed mb-4">{c.desc}</p>
              <p className="font-mono text-xs text-gold/60 mb-4">{c.label}</p>
              <a
                href={c.href}
                target={c.href.startsWith('https') ? '_blank' : undefined}
                rel={c.href.startsWith('https') ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold hover:text-gold-light transition-colors"
              >
                {c.cta} <ExternalLink size={10} />
              </a>
            </div>
          ))}
        </div>

        {/* Form CTA */}
        <div className="bg-navy-muted border border-white/5 rounded-sm p-8 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="font-mono text-xs tracking-widest uppercase text-gold/60 mb-3">Vía formulario</p>
              <h3 className="text-xl font-bold text-white mb-2">Solicitud estructurada</h3>
              <p className="text-slate text-sm leading-relaxed">
                Para operaciones charter, ACMI o carga, el formulario estructurado nos permite evaluar tu requerimiento con más detalle y responder en menos de 2 horas.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link href="/solicitar-vuelo" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-crimson text-white font-semibold text-sm tracking-wide rounded-sm hover:bg-crimson-light transition-colors">
                Formulario de solicitud de vuelo
              </Link>
              <Link href="/registrar-flota" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gold/40 text-gold font-semibold text-sm tracking-wide rounded-sm hover:border-gold hover:bg-gold/10 transition-colors">
                Registrar flota disponible
              </Link>
            </div>
          </div>
        </div>

        {/* Legal */}
        <div className="border-t border-white/5 pt-8">
          <p className="font-mono text-xs text-slate/40 tracking-wide">
            TripLatam Ltd · UK Co. No. 15627355 · London / Santiago · charter@triplatam.com
          </p>
        </div>
      </div>
    </div>
  );
}
