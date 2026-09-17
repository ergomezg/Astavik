# Estado Actual del Proyecto Astāvik Performance Lab

**Última actualización:** 2026-09-17  
**Fase:** MVP — Auditoría Experta de Usabilidad & Remediación de Heurísticas Completada

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
- [x] **Persistencia y Resiliencia en Cliente:** Formulario de Pits con autoguardado en `localStorage`, validaciones biomecánicas, carrito persistente y Guest Checkout sin `alert()`.
- [x] **Pipeline de Dependencias & Build Local:** Inicialización de `package.json`, blindaje con `.gitignore`, integración de Vite, compilación local de Tailwind CSS minificado (`assets/css/style.css` de 34KB) eliminando FOUC, iconografía Lucide y tests unitarios biomecánicos con Vitest.
- [x] **Verificación Empírica:** Comprobación de balance de etiquetas HTML (0 diff), validación sintáctica JS, tests unitarios superados (5/5 en Vitest), build de producción funcional y formateo COP unificado en el 100% de los precios.

---

## 2. Pendientes Inmediatos (To-Do)
- [ ] **Fase 3: Integración de Assets Locales Optimizados:** Colocación de los archivos de imagen procesados en `assets/images/{brand,hero,bikes,equipment,apparel,taller,pdp,search,auth,athletes}/` y sustitución de URLs remotas fijando ratios anti-CLS.
- [ ] **Fase 4: Verificación Final de Accesibilidad (WCAG AA):** Auditoría de contraste, foco y tests de regresión visual responsive (1440px / 1280px / 768px / 390px).
- [ ] **Conexión a Backend / API Wompi Real:** Configuración de llaves de producción y webhook de confirmación.

---

## 3. Blockers y Riesgos Activos
- **Ninguno actualmente.** La aplicación es 100% navegable, accesible, resiliente ante fallos de red o errores de pago y fiel a la identidad de marca.
