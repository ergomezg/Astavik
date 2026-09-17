# Bitácora de Decisiones Arquitectónicas y Técnicas

## Registro de Decisiones

### [2026-09-16] Arquitectura Base E-Commerce & Taller Astāvik
- **Contexto:** Definición del MVP para Astāvik Performance Lab en el mercado colombiano (COP).
- **Decisión:** 
  1. Integración con pasarela Wompi para transacciones locales en COP.
  2. Implementación de *Guest Checkout* para minimizar la tasa de abandono.
  3. Sistema de agendamiento de taller ("Ingreso a Pits") con formulario en cliente y confirmación técnica en < 2h.
- **Razonamiento:** Optimizar la conversión inicial reduciendo fricción de registro y ofreciendo respaldo técnico local.

### [2026-09-16] Stack Visual y Prototipado Brutalista (code.html)
- **Contexto:** Definición del lenguaje de diseño en la web.
- **Decisión:** Interfaz oscura (*Void Black* `#0a0a0a`), tipografía masiva (Montserrat/Outfit) y grillas de alto contraste con Tailwind CSS.
- **Razonamiento:** Transmitir la estética militar/editorial de alta precisión técnica ("Elite o Nada").

### [2026-09-16] Sistema de Memoria Persistente y Optimización de Contexto
- **Contexto:** Prevenir la pérdida de información entre sesiones y reducir la sobrecarga del context window.
- **Decisión:** Implementar arquitectura de archivos con `AGENTS.md` (entrada central), `reglas.md` (líneas rojas), `decisions/`, `state/`, `gotchas/`, `logs/` y la skill `skills/actualizar-contexto.md`.
- **Razonamiento:** Mantener la memoria viva en el repositorio sin saturar los prompts en cada interacción.

### [2026-09-17] Sincronización del Historial del Navegador y Enrutamiento SPA
- **Contexto:** En el prototipo SPA, el usuario presionaba el botón "Atrás" del navegador y salía del sitio web en lugar de volver a la vista anterior, violando la Ley de Jakob y la Heurística H3 de Nielsen.
- **Decisión:** Integrar `history.pushState` y escuchar el evento `popstate` asociando el nombre de vista a `#hash` (`#bicicletas`, `#pdp`, `#taller`).
- **Razonamiento:** Garantiza el comportamiento natural del navegador sin introducir librerías de enrutamiento pesadas ni requerir configuración de servidor.

### [2026-09-17] Modelo Antropométrico Biomecánico en PDP
- **Contexto:** El calculador de tallas utilizaba únicamente la estatura ignorando la entrepierna (`inseam`), lo que violaba la Heurística H2 (Correspondencia con el mundo real) para ciclistas de alto rendimiento.
- **Decisión:** Calcular el ratio extremidad/estatura ($\text{entrepierna}/\text{estatura}$). Si es $> 0.48$, diagnosticar postura *Endurance / Gran Fondo* (tronco corto, extremidad larga); si es $\le 0.48$, diagnosticar postura *Aero / Agresiva*. Además, se incorporaron píldoras de anulación manual de talla.
- **Razonamiento:** Ofrece asesoría de precisión técnica acorde a la identidad de Astāvik Performance Lab, respetando a la vez el control del usuario.

### [2026-09-17] Resiliencia de Checkout y Erradicación de Alertas Nativas
- **Contexto:** El checkout simulado utilizaba llamadas a `alert()` de JavaScript, bloqueando el hilo de ejecución e interrumpiendo la experiencia brutalista; adicionalmente, vaciaba el carrito antes de recibir la confirmación de pago.
- **Decisión:** Sustituir los diálogos por un modal de 3 pasos integrado al sistema de diseño; el carrito se mantiene en `localStorage` y solo se elimina cuando la pasarela confirma el estado `APPROVED`. En estados `DECLINED` o `ERROR`, se muestra un desglose detallado preservando los artículos.
- **Razonamiento:** Maximiza la tasa de conversión, previene la pérdida accidental de selecciones del comprador y eleva el cumplimiento WCAG AA.

### [2026-09-17] Alineación Milimétrica con Mockups Desktop y Congelamiento de Contenido
- **Contexto:** Se contrastó `code.html` contra los 7 mockups de diseño desktop (`Astävik - Home.png`, `Bicicletas`, `Equipamiento`, `Indumentaria`, `Taller`, `Search Overlay`, `Login Modal`) y el PRD, identificando discrepancias de horario, solapamiento de textos en mockups y enriquecimiento del catálogo.
- **Decisión:**
  1. *Horario Taller:* Fijado según PRD (`Lunes a Viernes 08:00 - 18:00 | Sábados 08:00 - 14:00`) con validación de fechas pasadas y domingos.
  2. *Card 4 de Bicicletas:* Corregido el solapamiento del mockup a *Astāvik Aeter Chrono Carbon* ($22.480.000 COP).
  3. *Títulos de Indumentaria:* Catálogo extendido a los 9 artículos con nombres específicos (*Guantes Aero Pro*, *Pantalón Enduro Technical*, *Jersey Manga Larga Radikal Red*, etc.).
  4. *Subtítulo de El Núcleo en Bicicletas:* Sustituido por copy de ingeniería (*"Geometría de competición, máxima rigidez torsional y transferencia de potencia pura."*).
  5. *Modales Globales:* Search Overlay maquetado con estado por defecto (Trending + Categorías + 2 Cards visuales con badges `PRO SERIES` y `OFF-ROAD`) y estado activo de búsqueda instantánea con flechas de teclado; Login Modal maquetado con isotipo centrado de fuego, subtítulo *VELOCITY AND PRECISION*, inputs con iconos y toggle de visibilidad de contraseña.
- **Razonamiento:** Consistencia técnica, fidelidad visual absoluta y zero hallucination.

### [2026-09-17] Pipeline de Build Local y Suite de Testing para el MVP
- **Contexto:** El prototipo dependía exclusivamente de Tailwind Play CDN en el navegador (generando penalización de LCP y FOUC), carecía de `package.json`, `.gitignore`, linter y suite de tests.
- **Decisión:** 
  1. Inicializar `package.json` con Vite y Tailwind CLI v3 local + PostCSS + Autoprefixer.
  2. Compilar los estilos a `assets/css/style.css` (34KB minificado, 6.95KB gzipped), enlazándolo en `code.html`.
  3. Integrar Vitest con tests unitarios para la lógica biomecánica antropométrica.
  4. Blindar el repositorio con `.gitignore`.
- **Razonamiento:** Resuelve la deuda técnica de rendimiento y prepara el terreno para automatización y CI/CD sin comprometer la estabilidad visual del MVP.
