# AGENTS.md — Archivo Central de Control & Memoria de Astāvik

## 1. Identidad y Propósito del Proyecto
**Astāvik Performance Lab** es una plataforma web e-commerce D2C de alta gama e integración de taller técnico ("Ingreso a Pits") para bicicletas de alto rendimiento (carbono de alto módulo y aleaciones aeroespaciales), indumentaria y telemetría en Colombia (moneda COP, pasarela Wompi). Estética: *Void Black*, brutalismo técnico, tipografía masiva editorial y máxima velocidad.

## 2. Reglas Fijas de Comportamiento del Contexto
1. **Contexto costoso y volátil:** La memoria persistente REAL vive únicamente en los archivos del repositorio (`AGENTS.md`, `reglas.md`, `state/`, `decisions/`, `gotchas/`, `logs/`).
2. **Carga selectiva:** NUNCA cargar todo el historial ni todos los archivos del proyecto. Cargar estrictamente los fragmentos y archivos requeridos para la tarea puntual.
3. **Referencias sobre duplicación:** Preferir vincular y referenciar rutas de archivos (`file:///...`) antes que copiar contenido extenso al prompt.
4. **Skills reutilizables:** Convertir procedimientos repetitivos o estandarizados en skills dentro de `skills/`.
5. **Cierre de sesión activa:** Al finalizar cualquier sesión o hito importante, ejecutar la skill `skills/actualizar-contexto.md` para actualizar el estado, registrar decisiones y condensar logs.
6. **Densidad informativa:** Mantener `AGENTS.md` conciso, directo y con un límite máximo de 250-300 líneas.
7. **Verificación empírica:** Toda modificación debe ser validada mediante comandos o inspección directa antes de declarar la tarea como finalizada.

## 3. Orden de Lectura Preferido para los Agentes
Cuando se inicie una nueva sesión o tarea, el agente debe leer los archivos en este orden estricto:
1. [AGENTS.md](file:///d:/DOCUMENTOS/BIKE%20WEB_APP/astavik/AGENTS.md) (Propósito, mapa y reglas de comportamiento).
2. [reglas.md](file:///d:/DOCUMENTOS/BIKE%20WEB_APP/astavik/reglas.md) (Líneas rojas y restricciones técnicas).
3. [state/estado-actual.md](file:///d:/DOCUMENTOS/BIKE%20WEB_APP/astavik/state/estado-actual.md) (Qué está hecho, qué está pendiente y blockers activos).
4. *(Opcional según tarea)* [gotchas/problemas-conocidos.md](file:///d:/DOCUMENTOS/BIKE%20WEB_APP/astavik/gotchas/problemas-conocidos.md) o [decisions/decisiones.md](file:///d:/DOCUMENTOS/BIKE%20WEB_APP/astavik/decisions/decisiones.md).

## 4. Matriz de Skills por Tipo de Tarea
| Tipo de Tarea | Skill / Archivo a Usar |
| :--- | :--- |
| Cierre de sesión / actualización de memoria | [skills/actualizar-contexto.md](file:///d:/DOCUMENTOS/BIKE%20WEB_APP/astavik/skills/actualizar-contexto.md) |
| Maquetación / UI / CSS Tailwind | [DESIGN.md](file:///d:/DOCUMENTOS/BIKE%20WEB_APP/astavik/DESIGN.md) + `modern-web-guidance` |
| Requisitos y modelo de datos MVP | [PRD_Astavik_Performance_Lab_MVP.md](file:///d:/DOCUMENTOS/BIKE%20WEB_APP/astavik/PRD_Astavik_Performance_Lab_MVP.md) |
| Consulta de errores recurrentes | [gotchas/problemas-conocidos.md](file:///d:/DOCUMENTOS/BIKE%20WEB_APP/astavik/gotchas/problemas-conocidos.md) |

## 5. Definition of Done (DoD)
Una tarea o historia de usuario está COMPLETADA solo cuando:
- [ ] El código implementado cumple exactamente las especificaciones del PRD y sistema de diseño.
- [ ] No introduce regresiones visuales ni funcionales en `code.html` o los componentes activos.
- [ ] Ha sido verificado en ejecuciones/renders reales (sin asumir que funciona).
- [ ] Las decisiones o gotchas descubiertos fueron registrados en `decisions/` o `gotchas/`.
- [ ] Si fue una sesión importante, se corrió `skills/actualizar-contexto.md` dejando el estado actualizado.

## 6. Punteros a la Estructura de Memoria Persistente
- **Reglas del Sistema:** [reglas.md](file:///d:/DOCUMENTOS/BIKE%20WEB_APP/astavik/reglas.md)
- **Registro de Decisiones:** [decisions/decisiones.md](file:///d:/DOCUMENTOS/BIKE%20WEB_APP/astavik/decisions/decisiones.md)
- **Especificación de Diseño:** [decisions/design.md](file:///d:/DOCUMENTOS/BIKE%20WEB_APP/astavik/decisions/design.md)
- **Estado Actual & Pendientes:** [state/estado-actual.md](file:///d:/DOCUMENTOS/BIKE%20WEB_APP/astavik/state/estado-actual.md)
- **Skill de Mantenimiento:** [skills/actualizar-contexto.md](file:///d:/DOCUMENTOS/BIKE%20WEB_APP/astavik/skills/actualizar-contexto.md)
- **Gotchas y Lecciones:** [gotchas/problemas-conocidos.md](file:///d:/DOCUMENTOS/BIKE%20WEB_APP/astavik/gotchas/problemas-conocidos.md)
- **Logs de Sesión Comprimidos:** [logs/sesiones-resumen.md](file:///d:/DOCUMENTOS/BIKE%20WEB_APP/astavik/logs/sesiones-resumen.md)
