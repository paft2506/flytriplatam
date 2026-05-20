import Link from 'next/link';
import { Plane, Mail, MessageCircle } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/solicitar-vuelo', label: 'Solicitar Vuelo' },
  { href: '/registrar-flota', label: 'Registrar Flota' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/como-funciona', label: 'Cómo Funciona' },
  { href: '/ia-responsable', label: 'IA Responsable' },
  { href: '/empresa', label: 'Empresa' },
  { href: '/contacto', label: 'Contacto' },
];

export default function Footer() {
  return (
    <footer className="bg-navy-muted border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-crimson flex items-center justify-center rounded-sm">
                <Plane size={15} className="text-white rotate-45" />
              </div>
              <div>
                <span className="text-white font-bold tracking-tight">FlyTriplatam</span>
                <p className="font-mono text-[9px] text-gold/60 tracking-widest uppercase leading-none">Aviation Intelligence Hub</p>
              </div>
            </Link>
            <p className="text-slate text-sm leading-relaxed max-w-sm">
              Aviation Intelligence Hub operado por TripLatam Ltd. Conectamos demanda aérea global con capacidad disponible de forma ágil, trazable y responsable.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {['UK Registered', 'UK GDPR', 'ISO 9001 alignment', 'ISO/IEC 42001 roadmap'].map(badge => (
                <span key={badge} className="font-mono text-[9px] tracking-widest text-gold/50 border border-gold/20 px-2 py-1 rounded-sm">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-mono text-xs tracking-widest uppercase text-gold/60 mb-4">Navegación</p>
            <nav className="flex flex-col gap-2">
              {navLinks.map(link => (
                <Link key={link.href} href={link.href} className="text-slate text-sm hover:text-white transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contacto */}
          <div>
            <p className="font-mono text-xs tracking-widest uppercase text-gold/60 mb-4">Contacto</p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:charter@triplatam.com?subject=Solicitud de vuelo - FlyTriplatam"
                className="flex items-center gap-2 text-slate text-sm hover:text-white transition-colors"
              >
                <Mail size={13} className="text-gold/60" />
                Solicitud de vuelo
              </a>
              <a
                href={`https://wa.me/56976711418?text=Hola FlyTriplatam, necesito información sobre vuelos charter.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate text-sm hover:text-white transition-colors"
              >
                <MessageCircle size={13} className="text-gold/60" />
                WhatsApp operativo
              </a>
              <a
                href="mailto:partnership@triplatam.com?subject=Alianza operacional - FlyTriplatam"
                className="flex items-center gap-2 text-slate text-sm hover:text-white transition-colors"
              >
                <Mail size={13} className="text-gold/60" />
                Alianzas operacionales
              </a>
              <p className="text-slate/50 text-xs mt-1">Respondemos por los canales oficiales del sitio.</p>
            </div>
          </div>
        </div>

        <div className="accent-line mb-8" />

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <p className="text-slate/60 text-xs">TripLatam Ltd · UK Co. No. 15627355 · London / Santiago</p>
            <p className="text-slate/40 text-xs mt-0.5">© 2026 FlyTriplatam · Aviation Intelligence Hub.</p>
          </div>
          <p className="font-mono text-[10px] text-slate/40 tracking-wider">
            Charter · ACMI · Cargo · Executive · Medical · Humanitarian
          </p>
        </div>
      </div>
    </footer>
  );
}
