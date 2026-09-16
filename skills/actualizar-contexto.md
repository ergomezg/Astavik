# Skill: Actualizar Contexto (`skills/actualizar-contexto.md`)

## Propósito
Esta skill consolida la memoria persistente del proyecto Astāvik al cerrar una sesión o hito relevante, manteniendo el consumo de context window al mínimo.

## Cuándo Ejecutarla
- **Al finalizar una sesión de trabajo importante** (ej. implementación de un nuevo componente, refactorización de estado o solución de un bug).
- **Al alcanzar un hito del PRD.**
- **NO se ejecuta en cada mensaje individual**, únicamente al cerrar el bloque de trabajo o cambiar de contexto principal.

## Protocolo de Ejecución Paso a Paso

1. **Revisar y actualizar `state/estado-actual.md`:**
   - Mover elementos completados de "Pendiente" a "Completado".
   - Registrar nuevos requerimientos o descubrimientos en "Pendientes Próximos".
   - Actualizar los "Blockers Activos" si existen.

2. **Registrar decisiones significativas en `decisions/decisiones.md`:**
   - Si se tomó una decisión arquitectónica, de UI o de integración durante la sesión, agregarla con la fecha (YYYY-MM-DD), contexto y justificación técnica.

3. **Registrar gotchas descubiertos en `gotchas/problemas-conocidos.md`:**
   - Si se solucionó una falla sutil o incompatibilidad (ej. Tailwind CDN, fuentes, pasarelas), documentar el síntoma y la solución rápida.

4. **Comprimir el log de la sesión en `logs/sesiones-resumen.md`:**
   - Añadir una entrada sintética de 3-5 viñetas resumen de la sesión (Fecha, Tareas realizadas, Archivos modificados).
   - Eliminar o comprimir registros obsoletos.

5. **Auditar `reglas.md` y `AGENTS.md`:**
   - Si se descubrió una nueva línea roja indiscutible, añadirla a `reglas.md`.
   - Verificar que `AGENTS.md` **NO supere las 300 líneas**. Si supera este límite, podar y condensar.

## Reglas de Mantenimiento Eficiente
- **Prohibido copiar historial conversacional al prompt o a los archivos.**
- **Purga continua:** Borrar tareas completadas antiguas de `state/` si ya están consolidadas en `logs/`.
- **Resultado final exigido:** Al ejecutar esta skill, el contexto del proyecto debe quedar actualizado, ordenado y **más corto/compacto** que al iniciar la sesión.
