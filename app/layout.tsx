import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsApp from "./components/WhatsApp";
import BackToTop from "./components/BackToTop";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "FlyTriplatam — Aviation Intelligence Hub",
  description: "Conectamos demanda aérea global con flota disponible mediante inteligencia operacional e IA responsable.",
  keywords: "charter aéreo, ACMI, wet lease, carga aérea, vuelos ejecutivos, FlyTriplatam",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=DM+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <WhatsApp />
          <BackToTop />
        </Providers>
      </body>
    </html>
  );
}
