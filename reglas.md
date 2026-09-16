# reglas.md — Reglas Invariantes y Líneas Rojas

Este archivo especifica únicamente acciones prohibidas que pueden ser detectadas e inspeccionadas explícitamente en el código o en las interacciones.

## Líneas Rojas (Lo que el agente NUNCA debe hacer)

1. **NO cargar archivos completos indiscriminadamente**
   - *Violación:* Ejecutar `view_file` sin indicar rangos de líneas o cargar todo el PRD / `code.html` cuando la tarea solo requiere modificar una función o un bloque visual.

2. **NO modificar AGENTS.md aumentando su longitud por encima de 300 líneas**
   - *Violación:* Añadir texto extenso de logs o explicaciones en `AGENTS.md` acumulando más de 300 líneas totales.

3. **NO declarar victorias o tareas completadas sin verificación ejecutable**
   - *Violación:* Indicar "Formulario de agendamiento creado correctamente" o "Estilos corregidos" sin haber inspeccionado/probado el archivo afectado.

4. **NO hardcodear precios o valores de moneda en string llano sin formato COP**
   - *Violación:* Escribir `$18500000` o `18.5M` en el código de la UI en lugar de utilizar la notación oficial especificada en el PRD (`$18.500.000 COP`).

5. **NO reemplazar ni eliminar la tipografía y paleta base de DESIGN.md**
   - *Violación:* Alterar las variables Tailwind o fuentes (Montserrat / Inter / Outfit) o el fondo oscuro `#0a0a0a` / `#141313` por estilos genéricos o blancos sin justificación en `decisions/`.

6. **NO silenciar errores ni retornar fallbacks vacíos**
   - *Violación:* Envolver llamadas en `try { ... } catch (e) {}` ignorando el fallo sin loguear ni reportar el error en la interfaz.

7. **NO acumular historial borrador en prompts o archivos de control**
   - *Violación:* Pegar bloques largos de conversaciones anteriores en `AGENTS.md` o en los archivos de la memoria en lugar de comprimirlos en `logs/sesiones-resumen.md`.

8. **NO crear archivos sueltos fuera de la estructura estandarizada de memoria**
   - *Violación:* Crear notas temporales como `notes.txt`, `todo.md` o `temp.md` en la raíz en lugar de usar `state/`, `decisions/`, `gotchas/` o la carpeta `scratch/`.
