# FlyTriplatam — Aviation Intelligence Hub

Next.js 15 project for FlyTriplatam / triplatam.com

## Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Typography**: Plus Jakarta Sans + DM Mono
- **Palette**: Navy `#0B1629` · Crimson `#C41E3A` · Gold `#C9A84C`
- **Icons**: Lucide React

## Pages
| Route | Description |
|-------|-------------|
| `/` | Home — Hero, stats, servicios, cómo funciona |
| `/solicitar-vuelo` | Formulario de solicitud → webhook n8n |
| `/registrar-flota` | Formulario de registro de flota → webhook n8n |
| `/servicios` | ACMI, Full Charter, Carga, Ejecutivo/Médico |
| `/como-funciona` | Proceso de 4 pasos |
| `/ia-responsable` | IA responsable, roadmap ISO 42001 |
| `/empresa` | Info corporativa TripLatam Ltd |
| `/contacto` | Canales de contacto |

## Webhook n8n
Formularios envían POST a:
```
https://patricioflorestorres.app.n8n.cloud/webhook/charterlink-req
```

Payload incluye `tipo_formulario: "solicitud_vuelo" | "registro_flota"` + timestamp.

## Deploy en Vercel

```bash
# 1. Push a GitHub
git init
git add .
git commit -m "feat: FlyTriplatam v1.0 - Next.js completo"
git branch -M main
git remote add origin https://github.com/paft2506/flytriplatam.git
git push -u origin main

# 2. Conectar en vercel.com → Import desde GitHub
# 3. Dominio: triplatam.com → Settings → Domains
```

## Development
```bash
npm install
npm run dev
# → http://localhost:3000
```
