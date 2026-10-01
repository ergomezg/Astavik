# Estado Actual del Proyecto Astāvik Performance Lab

**Última actualización:** 2026-09-30  
**Fase:** MVP — Preparación y Blindaje de Producción para Vercel (SPA Routing & Vite Entry) Completada

---

## 1. Completado (Done)
- [x] **PRD del MVP:** Definido en [PRD_Astavik_Performance_Lab_MVP.md](file:///d:/DOCUMENTOS/BIKE%20WEB_APP/astavik/PRD_Astavik_Performance_Lab_MVP.md).
- [x] **Sistema de Diseño (Design Tokens):** Documentado en [DESIGN.md](file:///d:/DOCUMENTOS/BIKE%20WEB_APP/astavik/DESIGN.md) y [decisions/design.md](file:///d:/DOCUMENTOS/BIKE%20WEB_APP/astavik/decisions/design.md).
- [x] **Arquitectura de Tokens & Global Layout (Fase 1):** Configuración de paleta Tailwind (`#0A0A0A` Void Black, `#FF4D00` Vibrant Orange), tipografías Montserrat e Inter, header sticky con glassmorphism, footer técnico y widget flotante de WhatsApp.
- [x] **Catálogo (PLPs) & Selector Antropométrico (PDP - Fase 2):** Vistas para Bicicletas (Ruta, Gravel, Montaña con *XC Elite* y *Enduro Pro*), Equipamiento de Precisión e Indumentaria Técnica (con chips de talla y targets $\ge 44\text{ px}$). PDP dinámico con ratio antropométrico real ($\text{entrepierna}/\text{estatura}$) y anulación manual de talla.
- [x] **Alineación Milimétrica con Mockups Desktop (Fases 1 y 2):**
  - *Bicicletas:* Copys oficiales, 24 artículos, subtítulo de ingeniería de cuadros en "El Núcleo", card 4 renombrada a *Astāvik Aeter Chrono Carbon* ($22.480.000 COP).
  - *Equipamiento:* Tabs completas (Electrónica, Componentes, Taller, Transporte, Hidratación, Equipamiento Personal) y cabecera de telemetría.
  - *Indumentaria:* 5 tabs completas, cabecera de capas y catálogo expandido a 9 prendas con nombres específicos (*Guantes Aero Pro*, *Pantalón Enduro Technical*, *Jersey Manga Larga Radikal Red*, etc.) en COP.
  - *Taller ("Ingreso a Pits"):* Hero brutalista, 3 protocolos con precios ($250k, $180k, $90k COP), layout 2 columnas con horario estricto del PRD (`Lun-Vie: 08:00 - 18:00 | Sáb: 08:00 - 14:00`), radio buttons sincronizados, generador `.ics` y GCal.
  - *Search Overlay:* Reestructurado a pantalla completa según mockup desktop (Trending searches con flecha, categorías chips, 2 cards visuales destacadas `PRO SERIES` y `OFF-ROAD`, y búsqueda reactiva con navegación por flechas).
  - *Login Modal:* Reestructurado según mockup desktop (isotipo central, *VELOCITY AND PRECISION*, inputs con icono de correo/candado, toggle de visibilidad de contraseña y alternador Login/Registro).
  - *Sincronización JS:* `searchIndex` y `bikesDatabase` sincronizados con los 24 ítems y servicios.
- [x] **Fase 3: Integración de Assets Locales Optimizados:** 100% de eliminación de URLs remotas (0 Unsplash). Sustitución por 36 imágenes locales en `assets/images/` con dimensiones intrínsecas explícitas (`width`/`height`), clases `aspect-[...]` para blindaje anti-CLS ($\text{CLS} \le 0.05$), `loading="eager"` + `fetchpriority="high"` en Hero LCP y `loading="lazy"` + `decoding="async"` en todo el catálogo.
- [x] **Fase 4: Verificación Final de Accesibilidad (WCAG AA) & Marca:** 0 botones sin nombre accesible (135/135 validados), balance perfecto de etiquetas HTML (360 divs, 12 secciones, 135 botones), validación sintáctica JS (49.3KB comprobados con Node.js v24 sin errores), e integración de la iconografía oficial de marca `assets/images/brand/astavik-symbol.svg` en Header, Auth Modal y Footer.
- [x] **Persistencia y Resiliencia en Cliente:** Formulario de Pits con autoguardado en `localStorage`, validaciones biomecánicas, carrito persistente y Guest Checkout sin `alert()`.
- [x] **Pipeline de Dependencias & Build Local:** Inicialización de `package.json`, blindaje con `.gitignore`, integración de Vite, compilación local de Tailwind CSS minificado (`assets/css/style.css` de 34KB) eliminando FOUC, iconografía Lucide y tests unitarios biomecánicos con Vitest.
- [x] **Ajustes Visuales y Cohesión de Marca ASTÄVIK (2026-09-28):** Unificación 100% del naming a `ASTÄVIK`, reducción de gap en logotipo (`gap-2`), eliminación de padding `p-4` (`p-0`) en los 22 contenedores de cards de producto sobre base `#141313`, remoción del atajo de teclado en header, Hero con "NADA" en blanco (`#FFFFFF`) y overlay con opacidad reducida en un 15%, y Footer actualizado con manifiesto estricto y sin icono de X/Twitter.
- [x] **Estandarización Canónica de Cards de Producto y Assets (2026-09-29):** Estandarización de las 22 cards de producto a `relative w-full aspect-[3/2] bg-surface-dim rounded-tech overflow-hidden mb-4 p-4 flex items-center justify-center` con `width="1200" height="800"` y `object-contain object-center`; re-procesamiento Lanczos con Python PIL de los 18 archivos WebP de catálogo en disco a exactamente 1200x800 px (3:2) centrados sobre `#141313`, eliminando desalineaciones y saltos visuales en el grid.
- [x] **Adaptación Responsive Mobile-First Integral (2026-09-30):**
  - *Layout Global & Anti-Overflow:* `overflow-x: hidden` a nivel de `html` y `body`, touch targets mínimos de $\ge 44\times 44\text{ px}$ en el 100% de elementos interactivos (145/145 botones validados con nombres accesibles).
  - *Navegación Móvil Inmersiva:* Overlay editorial a pantalla completa (`#mobile-nav`) en `#0A0A0A`/98 con desenfoque `backdrop-blur-2xl`, enlaces de tipografía masiva (`[ 01 // INICIO ]` a `[ 05 // TALLER (PITS) ]`), botón destacado de acceso a cuenta y metadatos de sede central; header adaptativo que oculta texto de sesión y conserva búsqueda, carrito y disparador táctil.
  - *Hero Header & Tipografía Fluida:* Escala tipográfica fluida (`text-5xl sm:text-7xl md:text-8xl lg:text-[11vw]`) sin saltos antiestéticos, proporción de contenedor y overlay balanceados, y CTA de ancho completo en móvil.
  - *Catálogos Responsive (PLPs):* Grids adaptativos (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6`) para Bicicletas, Equipamiento e Indumentaria, conservando estrictamente el ratio 3:2 (`aspect-[3/2]`) y contenedor `#141313`.
  - *Bottom Sheet de Filtros (Móvil):* Componente `#filter-bottom-sheet` colapsable con indicador drag, selección táctil de disciplina, selector de precio y orden sincronizados bi-direccionalmente con la barra desktop.
  - *PDP, Taller y Footer:* Selector antropométrico y sliders con ergonomía táctil en móvil; formulario de taller con inputs `min-h-[44px]` y tipografía $\ge 16\text{ px}$ para prevenir auto-zoom en iOS Safari; footer reorganizado en grid `grid-cols-1 sm:grid-cols-2 md:grid-cols-4`.
  - *Sincronización Multi-Entry:* Paridad absoluta entre `index.html` y `code.html`, compilación exitosa de Tailwind minificado (`assets/css/style.css` de 35KB) y build Vite en 790ms.
- [x] **Calibración Focal Responsiva del Hero Header (2026-10-01):** Configuración de escala de punto focal fluido (`object-[70%_center] sm:object-[65%_center] lg:object-center`) en `index.html` y `code.html` para centrar al ciclista en resoluciones móviles/verticales sin recortes indeseados, conservando la legibilidad del titular brutalista y el ratio de contraste WCAG AA.
- [x] **Página de Detalle de Producto (PDP) Dinámica para Bicicletas (2026-10-01):**
  - Implementación en Next.js 16 (App Router, React 19, TypeScript) bajo la ruta dinámica `app/bicicletas/[slug]/page.tsx` con generación estática `generateStaticParams`.
  - Galería dual con Desktop Viewer v3.4 (overlay 4K, telemetría de peso/grupo, 360° spin, inspección 120 puntos y 4 selectores técnicos) y carrusel móvil táctil con peek del 15% de la siguiente foto sin paginación invasiva.
  - Visor modal a pantalla completa con soporte multitáctil nativo para gestos de *pinch-to-zoom* hasta 3.5x y paneo de alta precisión.
  - Buy box completo: serie 014/100, precio oficial `$18.500.000 COP`, selector reactivo de tallas con estado `EN STOCK`, recomendación antropométrica y botones de compra (Wompi) y carrito persistente (Zustand + `localStorage`).
  - Sección *"ARQUITECTURA DE CUADRO & GEOMETRÍA"* con Blueprint 2D vectorial interactivo y tabla CAD de medidas reactiva a la talla seleccionada.
  - Sección *"MATRIZ DE COMPONENTES"* con 6 fichas técnicas de fábrica y peso verificado de 6.82 KG.
  - Paridad y sincronización total en `code.html` e `index.html`.
  - Verificación empírica completa: 9/9 tests en Vitest superados, `npm run build` en 967ms y `npm run next:build` en 1.6s con respuesta 200 OK en ruta SSR/SSG.
- [x] **Verificación Empírica General:** Comprobación de dimensiones físicas de assets (100% en 1200x800), suite de tests unitarios superada (9/9 en Vitest), build de producción Vite exitoso en 967ms, build Next.js App Router exitoso en 1.6s y formateo COP unificado en el 100% de los precios.


---

## 2. Pendientes Inmediatos (To-Do)
- [ ] **Conexión a Backend / API Wompi Real:** Configuración de llaves de producción y webhook de confirmación.
- [ ] **Pruebas E2E de Flujo Completo (Playwright / Cypress):** Automatización de orden completa de compra y agendamiento de taller.

---

## 3. Blockers y Riesgos Activos
- **Ninguno actualmente.** La aplicación es 100% autónoma en assets locales, navegable, accesible, resiliente ante fallos de red o errores de pago y fiel a la identidad de marca.
