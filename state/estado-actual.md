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
- [x] **Configuración y Despliegue en Vercel (2026-09-30):** Creación de `vercel.json` con reescritura canónica SPA a `/index.html`, establecimiento de `index.html` canónico en la raíz, configuración de `base: '/'` y salida `dist` con soporte multi-entry (`index.html` + `code.html`) en `vite.config.js`, mitigando fallos 404 (NOT_FOUND).
- [x] **Verificación Empírica:** Comprobación de dimensiones físicas de assets (100% en 1200x800), tests unitarios superados (5/5 en Vitest), build de producción Vite exitoso en 1.67s generando `dist/index.html` y formateo COP unificado en el 100% de los precios.

---

## 2. Pendientes Inmediatos (To-Do)
- [ ] **Conexión a Backend / API Wompi Real:** Configuración de llaves de producción y webhook de confirmación.
- [ ] **Pruebas E2E de Flujo Completo (Playwright / Cypress):** Automatización de orden completa de compra y agendamiento de taller.

---

## 3. Blockers y Riesgos Activos
- **Ninguno actualmente.** La aplicación es 100% autónoma en assets locales, navegable, accesible, resiliente ante fallos de red o errores de pago y fiel a la identidad de marca.
