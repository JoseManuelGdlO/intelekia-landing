
# Renovación web Intelekia — con identidad de marca aplicada

Rediseño completo aplicando el **logo oficial** y la **paleta de Intelekia** (verde marca + azul marino oscuro sobre fondo claro) en estilo minimalista vibrante.

## Identidad visual aplicada

**Paleta extraída de los logos:**
- Verde Intelekia (primario): `#22B573` aprox. — usado en logo, CTAs, acentos, gradientes
- Verde claro vibrante (secundario): `#3FD17C` — para gradientes y hover
- Azul marino oscuro (texto/contraste): `#0E2A3B` — titulares, navbar
- Fondo: blanco / gris muy claro `#F8FAFB`
- Tagline oficial: **"Software inteligente, decisiones brillantes"**

**Logos a integrar:**
- `INTELEKIA-02.png` (versión horizontal) → navbar y footer
- `INTELEKIA-03.png` (isotipo cerebro) → favicon, hero decorativo, loaders
- `INTELEKIA-01.png` (versión vertical) → posibles usos secundarios

Los archivos se copiarán a `src/assets/` y se importarán como módulos ES6.

## Estructura de la landing (single page)

### 1. Navbar fijo translúcido
- Logo horizontal Intelekia a la izquierda
- Enlaces ancla: Servicios · Clientes · Casos · Nosotros · Contacto
- CTA "Agenda consultoría" en verde marca

### 2. Hero
- Titular: "Software inteligente, **decisiones brillantes**" (tagline oficial como protagonista, palabras clave en verde)
- Subtítulo: transformación digital con IA, automatización y analítica
- Doble CTA: "Habla con un experto" (verde sólido) + "Ver casos de éxito" (outline)
- Decoración: isotipo cerebro grande con gradiente verde + blobs suaves de fondo, animación sutil de circuitos
- Mini-stats inferiores: años, proyectos, clientes

### 3. Servicios — grid de 6 tarjetas
Iconos en verde marca, fondo blanco con borde sutil, hover con glow verde:
- Agentes de IA personalizados
- Automatización inteligente (RPA + IA)
- Analítica de datos & BI
- Integración de LLMs
- Consultoría estratégica en IA
- Capacitación y change management

### 4. **Nuestros Clientes** ⭐ (sección nueva)
- Título: "Empresas que confían en Intelekia"
- **Carrusel infinito tipo marquee** con doble fila en direcciones opuestas
- Logos placeholder en gris, se colorean al hover, pausa al pasar el mouse
- Banda de métricas debajo con números grandes en verde marca: "+50 clientes · +120 proyectos · 8 países · 98% satisfacción"

### 5. Casos de éxito — 3 tarjetas
Industria · Reto · Solución IA · Resultado medible (ej. "−40% tiempo de respuesta"). Resultado destacado en verde grande.

### 6. Nosotros / Equipo
- Bloque misión + 3 pilares (Innovación, Resultados, Cercanía) con iconos verdes
- Mini-grid del equipo (4-6 placeholders con foto, nombre, rol)

### 7. Proceso de trabajo
Timeline horizontal de 4 pasos con isotipo cerebro como marcador: Diagnóstico → Estrategia → Implementación → Acompañamiento

### 8. CTA final + Contacto
- Banda con gradiente verde marca: "¿Listo para transformar tu negocio con IA?"
- Formulario simple (nombre, empresa, email, mensaje) + botón WhatsApp
- Datos de contacto y redes sociales

### 9. Footer
Logo Intelekia, enlaces rápidos, redes, copyright, tagline.

## Sistema de diseño técnico
- `index.css` actualizado con tokens HSL de la marca (verde primario, marino, neutros)
- `tailwind.config.ts` extendido con la paleta semántica
- Tipografía: Inter (cuerpo) + Space Grotesk o similar para titulares display
- Bordes redondeados generosos (xl/2xl), sombras suaves verdes en hover
- Animaciones de entrada al scroll (fade-up), marquee infinito, blob flotante en hero
- Favicon reemplazado con isotipo cerebro
- 100% responsive (móvil, tablet, desktop)
- Title y meta tags SEO actualizados con marca y tagline

## Notas
- Logos de clientes, fotos del equipo y textos de casos serán placeholders editables (los reemplazas luego con tus assets reales).
- Si más adelante quieres formulario funcional con envío de emails, lo conectamos con Lovable Cloud.
