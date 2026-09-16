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
