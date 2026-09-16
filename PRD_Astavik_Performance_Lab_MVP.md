# ASTĀVIK PERFORMANCE LAB — PRODUCT REQUIREMENT DOCUMENT (PRD)

**Documento:** Product Requirement Document (PRD) — MVP  
**Proyecto:** Astāvik Performance Lab Web Platform & E-Commerce  
**Versión:** 1.0.0  
**Fecha:** Septiembre 2026  
**Mercado / Región:** Colombia (Moneda: COP)  
**Audiencia Target:** Ciclistas de 25 a 35 años, nivel socioeconómico medio-alto/alto, perfil técnico, con criterio estético riguroso y alta sensibilidad a especificaciones de ingeniería.

---

## 1. Visión del Producto y Objetivos Estratégicos

### 1.1 Declaración de Visión
Construir la plataforma digital insignia para **Astāvik**, fabricante de bicicletas de alto rendimiento (carbono de alto módulo y aleaciones de grado aeroespacial), indumentaria técnica, equipamiento con telemetría y un centro de servicio técnico especializado (*Laboratorio de Precisión*).

La experiencia digital materializa la filosofía **"Velocity and Precision"**: una interfaz oscura de alto contraste (*Void Black*), tipografía masiva de corte editorial, ritmo visual agresivo y funcionalidad sin fricciones, orientada a ciclistas que no aceptan compromisos.

### 1.2 Objetivos de Negocio
- **D2C de Alta Gama:** Habilitar un canal de venta directa al consumidor para bicicletas, componentes e indumentaria en Colombia con integración transaccional nativa en moneda local (COP) a través de Wompi.
- **Digitalización de Servicio en Taller:** Automatizar el flujo de agendamiento y reserva de cupos del taller físico en Bogotá ("Ingreso a Pits"), optimizando la capacidad operativa y ofreciendo confirmación técnica en menos de 2 horas.
- **Conversión y Retención:** Reducir la fricción mediante *Guest Checkout*, persistencia de datos local ante desconexiones accidentales y un recomendador interactivo de tallas basado en antropometría.

### 1.3 Indicadores Clave de Desempeño (KPIs)
- **Tasa de Conversión E-Commerce:** $\ge 1.8\%$ en sesiones cualificadas.
- **Asistencia Efectiva a Pits:** $\ge 85\%$ de asistencia sobre reservas confirmadas.
- **Rendimiento Web (Core Web Vitals):** LCP $\le 1.8\text{ s}$, CLS $\le 0.05$, INP $\le 100\text{ ms}$.
- **Tasa de Abandono en Formulario de Taller:** $\le 15\%$ gracias a la persistencia en almacenamiento local.

---

## 2. Arquitectura de Información y Mapa del Sitio

```
[Header / Barra Global]
 ├── / (Home: "Elite o Nada")
 ├── /bicicletas (PLP Bicicletas de Alto Rendimiento)
 │    └── /bicicletas/:slug (PDP con Selector Antropométrico Interactivo)
 ├── /equipamiento (PLP Equipamiento de Precisión & Telemetría)
 │    └── /equipamiento/:slug (PDP Equipamiento)
 ├── /indumentaria (PLP Indumentaria Técnica)
 │    └── /indumentaria/:slug (PDP Indumentaria)
 ├── /taller (Laboratorio de Precisión & Formulario de Ingreso a Pits)
 ├── [Overlay: Búsqueda Instantánea en Cliente]
 ├── [Overlay: Modal de Autenticación / Registro]
 ├── [Drawer Lateral: Carrito de Compras]
 └── /checkout (Flujo de Pago Wompi + Confirmación de Orden)
```

---

## 3. Especificaciones Funcionales por Módulo

### 3.1 Home ("Elite o Nada")
- **Hero Cinemático:** Fotografía a sangre con ciclista en acción técnica. Titular masivo (`"ELITE O NADA."`), subtítulo técnico (*"Sin concesiones. Sin excusas. Máquinas de alto rendimiento."*) y CTA primario (`"DOMINA AHORA"`).
- **Selector de Disciplinas:** Bloques tácticos con numeración editorial:
  - `01 RUTA`: Máquinas que desafían la gravedad, optimizadas para velocidad pura y máxima transferencia de potencia.
  - `02 GRAVEL`: Versatilidad sin límites para conquistar terrenos mixtos con velocidad y control absoluto.
  - `03 MONTAÑA`: Ingeniería de precisión para dominar los senderos más técnicos y exigentes del planeta.
- **Sección "El Arsenal":** Grilla 2x2 de productos destacados con switch o enlace a catálogo:
  - *Astāvik Carbon Pro* — $18.500.000 COP (Badge: Cuadro Carbono Aero)
  - *Astāvik Gravel X* — $15.600.000 COP
  - *Astāvik XC Elite* — $11.900.000 COP
  - *Astāvik Enduro Pro* — $15.600.000 COP
- **Métricas de Impacto / Social Proof:**
  - `250+` Ciclistas Rodando
  - `178+` Bicicletas Certificadas Vendidas
  - `100%` Satisfacción en Reparaciones
- **Banner Manifiesto:** Fondo sólido Vibrant Orange (`#FF4D00`) con tipografía negra: *"IMPLACABLE. RÁPIDA. EXIGE TODO LO QUE TIENES."* y cita de atleta/fundador.

### 3.2 Catálogo y Páginas de Listado (PLP)

#### A. Bicicletas de Alto Rendimiento
- **Hero descriptivo:** *"Desbloquea tu potencial. Cuadros de carbono de Alto Módulo y aleaciones de aluminio de grado aeroespacial..."*
- **Subcategorías:** `RUTA` | `GRAVEL` | `MONTAÑA`.
- **Barra de control:** Filtros por Precio, Marca, Talla y selector de ordenamiento (conteo de artículos visible: *24 artículos*).
- **Cards de producto:**
  - *Astāvik Aeter Carbon Aero* ($16.450.000 COP) — Badges `AERO` `PRO`, botón `"COMPRAR"`, toggle de favoritos.
  - *Astāvik Aeter Carbon PRP* ($15.520.000 COP).
  - *Astāvik Aeter AL2* ($6.480.000 COP).
  - *Astāvik Aeter Chrono Carbon* ($22.480.000 COP) — Badges `CHRONO` `PRO`.

#### B. Indumentaria Técnica
- **Hero descriptivo:** *"La fusión definitiva de aerodinámica, compresión graduada e ingeniería textil. Diseñada para romper el viento y dominar el asfalto."*
- **Categorías / Capas:** `EL NÚCLEO` (Aero-fit y compresión graduada), `CAPAS BASE`, `PROTECCIÓN`, `EQUIPAMIENTO`, `ESTILO DE VIDA`.
- **Cards de producto:**
  - *Aero Pro Jersey V3* ($450.000 COP) — Badges `AERO` `PRO`.
  - *Bib-Short Endurance Carbon* ($520.000 COP).
  - *Aero Long Sleeve V2* ($480.000 COP) — Colores: Naranja, Rojo Radikal, Negro.

#### C. Equipamiento de Precisión
- **Hero descriptivo:** *"La perfección técnica reside en los detalles... Componentes de alto rendimiento para ciclistas que demandan resultados absolutos."*
- **Tabs:** `ELECTRÓNICA Y TELEMETRÍA`, `COMPONENTES Y MEJORAS`, `TALLER Y MANTENIMIENTO`, `TRANSPORTE`, `HIDRATACIÓN`, `EQUIPAMIENTO PERSONALES`.
- **Cards de producto:**
  - *Astāvik Core GPS Edge Pro* ($2.850.000 COP) — Badge `AERO`.
  - *Potenciómetro Dual Axis Carbon* ($4.100.000 COP) — Precisión de +/- 1%.
  - *Banda Cardíaca Biometric Sync* ($420.000 COP) — Badge `ESSENTIAL`, dual ANT+/BLE.

### 3.3 Vista de Detalle de Producto (PDP) y Selector Antropométrico
- **Visualizador Cinemático:** Galería de alta resolución con vista lateral técnica, detalle de pedalier, cockpit integrado y tirantes de carbono.
- **Selector Antropométrico Interactivo:**
  - **Entradas:**
    - Estatura del ciclista (cm) — Slider / Input numérico.
    - Longitud de entrepierna / *Inseam* (cm) — Guía interactiva de medición.
  - **Cálculo de Geometría:** Cruce de medidas con valores de *Stack* y *Reach* de la plataforma Astāvik.
  - **Sugerencia de Talla:** Talla recomendada (XS, S, M, L, XL) junto con advertencia de comportamiento anatómico:
    - *Postura Aero / Agresiva:* Preferencia por cuadro más compacto con potencia extendida.
    - *Postura Endurance / Confort:* Preferencia por cuadro con mayor stack para distancias prolongadas.
- **Acción Transaccional:** Botón `"AGREGAR AL ARSENAL"` / `"COMPRAR"`, validando selección obligatoria de talla.

### 3.4 Carrito de Compras y Checkout Transaccional (Wompi)
- **Drawer de Carrito:**
  - Despliegue lateral sin recargar la página.
  - Desglose de ítems, selector de cantidad, visualización de talla seleccionada y subtotal en COP.
  - Aviso de costo de flete estimado a ciudades principales de Colombia.
- **Modalidad Guest Checkout:**
  - El usuario puede pagar indicando nombre, correo, teléfono, documento de identidad (requerido por pasarela en Colombia) y dirección de entrega.
  - Opción de crear cuenta con un clic al finalizar la compra mediante contraseña opcional.
- **Integración con Wompi:**
  - Widget / Redirect Checkout seguro de Wompi.
  - Soporte de medios de pago locales: PSE (todos los bancos colombianos), Tarjetas de Crédito/Débito y Corresponsales (Bancolombia, Efecty).
  - Manejo de Webhooks para confirmación inmediata de estados (`APPROVED`, `DECLINED`, `ERROR`).
  - Pantalla de éxito con resumen de pedido, desglose tributario y número de orden.

### 3.5 Módulo de Taller: "Laboratorio de Precisión & Ingreso a Pits"
- **Propuesta de Valor:** *"Donde la ingeniería se encuentra con la obsesión. Nuestro equipo de mecánicos certificados utiliza telemetría avanzada y herramientas de precisión nanométrica para optimizar el rendimiento de tu máquina."*
- **Protocolos de Servicio:**
  1. **Mantenimiento Pro ($250.000 COP):** Desensamble completo, inspección de rodamientos, limpieza ultrasónica de transmisión, lubricación con cerámica y torque digital.
  2. **Ajuste de Telemetría ($180.000 COP):** Sincronización de grupos electrónicos (Di2, AXS, EPS), actualización de firmware, microajuste de desviadores y purga de frenos.
  3. **Limpieza Ultrasónica ($90.000 COP):** Restauración profunda a nivel molecular para cassettes, cadenas y platos (elimina el 99.8% de contaminantes).
- **Formulario "Ingreso a Pits":**
  - *Datos del Ciclista:* Nombre, Apellidos, Teléfono, Correo Electrónico.
  - *Especificaciones de la Máquina:* Marca (e.g., Pinarello, Specialized, Trek, Astāvik), Modelo & Año, Grupo / Componentes Principales (e.g., Shimano Dura-Ace Di2 12s, SRAM Red eTap AXS).
  - *Detalles del Servicio:* Selección de protocolo deseado y caja de texto para síntomas mecánicos.
- **Selector de Slot de Taller (Solo Reserva de Cupo):**
  - No requiere pago anticipado. El servicio se liquida en el taller físico al retirar la bicicleta.
  - Horario de operación: Lunes a Viernes 08:00 - 18:00 | Sábados 08:00 - 14:00. Sede: `HQ ASTĀVIK BOGOTÁ (Cra 15 # 93-60, Local 102)`.
  - Promesa de confirmación y revisión técnica en menos de 2 horas hábiles.
- **Integración de Calendario:**
  - Envío automático de correo con adjunto `.ics` universal.
  - Botones directos en pantalla y en el correo para sincronización en un clic con:
    - *Google Calendar*
    - *Apple Calendar*
    - *Microsoft Outlook*

### 3.6 Modal de Búsqueda Instantánea (Search Overlay)
- **Disparador:** Botón en el Navbar global y atajo de teclado (`Cmd + K` / `Ctrl + K`).
- **Motor de Búsqueda Local:** Índice estático cargado en memoria en el cliente (Fuse.js o MiniSearch) para respuesta de latencia sub-10ms.
- **Componentes:**
  - Input con placeholder: `"Search bikes, parts, or guides..."`.
  - *Trending Searches:* Tags clicables (`Carbon Pro Endurance`, `Gravel X Frameset`, `Aero Cockpit Setup`, `12-Speed Cassette`).
  - *Filtros Rápidos:* Chips de categoría (`AERO`, `ENDURANCE`, `GRAVEL`, `TRACK`).
  - *Resultados Visuales:* Cards con foto y descripción resumida (e.g., *Carbon Pro R*, *Gravel X Unbound*).

### 3.7 Persistencia de Datos y Resiliencia
- Almacenamiento local mediante `localStorage`:
  - Carrito de compras y variantes seleccionadas.
  - Datos en progreso del formulario de taller ("Ingreso a Pits") para evitar pérdidas por recarga accidental o desconexión.
  - Medidas antropométricas del ciclista (estatura y entrepierna) para recordar su talla a lo largo del sitio.

---

## 4. Lineamientos del Sistema de Diseño (Design Tokens & UI)

### 4.1 Paleta de Color
- **Void Black / Base:** `#0A0A0A` (Background principal) / `#141313` (Surface dim).
- **Surface Neutrals:**
  - Low Surface: `#1C1B1B` / `#1A1A1A`
  - Container: `#201F1F` / `#262626`
  - High Surface: `#2B2A2A` / `#353434`
  - Borde Técnico: `1px solid #262626` o `#404040`
- **Acentos Funcionales:**
  - **Vibrant Orange (`#FF4D00`):** CTAs primarios, estados activos, precio destacado. Hover: `#E64500`.
  - **Saturated Magenta (`#E91E63`):** Acentos de telemetría y métricas secundarias.
  - **Textos:** `#FFFFFF` (On-Primary/Titulares), `#E5E2E1` (On-Surface), `#8E9192` (Secondary/Labels).
- **WhatsApp Widget:** `#25D366` integrado con borde técnico de 1px y radio de 4px, ubicado a 24px de la esquina inferior derecha.

### 4.2 Tipografía
- **Display / Titulares:** **Montserrat**
  - Display Hero: 80px, Weight 900, Line-height 88px, Letter-spacing -0.04em.
  - Headline Lg: 48px (Mobile 36px), Weight 800, Line-height 56px, Letter-spacing -0.02em.
  - Headline Md: 24px, Weight 700, Line-height 32px.
  - Data Display: 32px, Weight 900, Line-height 32px.
- **Cuerpo y UI:** **Inter**
  - Body Lg: 18px, Weight 400, Line-height 28px.
  - Body Md: 16px, Weight 400, Line-height 24px.
  - Label Caps: 12px, Weight 700, Line-height 16px, Letter-spacing 0.1em (Uppercase).

### 4.3 Formas y Espaciado
- **Border Radius:** `4px` para botones, inputs y chips; `8px` para contenedores de tarjetas principales.
- **Sistema de Grilla:** 12 columnas en desktop (ancho máximo 1440px), márgenes laterales de 24px a 64px, espaciado vertical entre secciones de 80px a 120px.

---

## 5. Stack Tecnológico Sugerido

```
Frontend:
  - Framework: Next.js (App Router, TypeScript)
  - Estilos: Tailwind CSS (Configurado con tokens de DESIGN.md)
  - Primitivas UI: Radix UI / Headless UI (Modales accesibles de Auth, Search y Drawer de Carrito)
  - Iconos: Lucide Icons (stroke fino, minimalista)

Gestión de Estado y Datos:
  - Estado Global: Zustand con middleware de persistencia (LocalStorage)
  - Motor de Búsqueda Local: Fuse.js o MiniSearch (catálogo estático pre-indexado)

Servicios y Backend:
  - Pasarela Transaccional: Wompi API (Checkout Widget & Webhook de confirmación)
  - Transaccional Email & Calendarios: Resend / SendGrid con generación dinámica de archivos .ics (biblioteca ics)
  - Almacenamiento de Leads / Citas: Base de datos relacional (PostgreSQL / Supabase)
```

---

## 6. Plan de Sprints y Fases de Entrega (MVP)

| Sprint | Duración | Foco y Entregables |
| :--- | :--- | :--- |
| **Sprint 1** | Semanas 1-2 | **Cimientos y Design System:** Configuración de tokens en Tailwind, fuentes Montserrat/Inter, layout global (Header, Footer, WhatsApp widget), y Search Overlay con indexación en memoria. |
| **Sprint 2** | Semanas 3-4 | **Catálogo (PLP) y PDP Antropométrica:** Maquetación de PLPs de Bicicletas, Indumentaria y Equipamiento; PDP con recomendador de tallas por entrepierna/estatura y persistencia en LocalStorage. |
| **Sprint 3** | Semanas 5-6 | **E-Commerce y Checkout Wompi:** Drawer de carrito, flujo de Guest Checkout, integración de API/Widget de Wompi y webhook de confirmación. |
| **Sprint 4** | Semanas 7-8 | **Laboratorio de Precisión (Taller):** Formulario "Ingreso a Pits", selector de turnos, generación de citas `.ics` y despacho de correos con enlaces a Google/Apple/Outlook. |
| **Sprint 5** | Semana 9 | **QA, Pruebas de Carga y Lanzamiento:** Testing de webhooks Wompi en Sandbox, validación WCAG AA en modo oscuro, auditoría Core Web Vitals y salida a producción. |

---

*Documento técnico compilado y listo para desarrollo según requerimientos de producto.*
