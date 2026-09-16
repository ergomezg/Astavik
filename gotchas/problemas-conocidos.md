# Gotchas y Problemas Conocidos

Este archivo recopila comportamientos inesperados, fallos sutiles y soluciones probadas en el proyecto Astāvik.

## Gotchas Identificados

### 1. Incompatibilidad de Fuentes en CDN Tailwind (`code.html`)
- **Síntoma:** En `code.html`, se importó Google Fonts con `Outfit` y `Montserrat`, pero la configuración en `<script id="tailwind-config">` asignaba `sans`, `serif` y `mono` a `Outfit`, dejando `montserrat` separado.
- **Causa:** Conflicto de fallback de fuentes en Tailwind.
- **Solución:** Usar la clase explícita `font-montserrat` para titulares masivos y `font-sans` para cuerpos de texto según el sistema de diseño.

### 2. Formateo de Precios en Moneda Local (COP)
- **Síntoma:** Error en búsquedas o renderizado cuando se mezclan cadenas `$18.500.000` con enteros numéricos.
- **Solución:** Mantener siempre el valor como entero `18500000` en el estado/data y usar un formateador `Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' })` en la vista.

### 3. Pérdida de Datos en Formulario de Taller por Cierre Accidental
- **Síntoma:** Abandono del formulario de agendamiento de taller al cambiar de pestaña o sufrir microcortes de red.
- **Solución:** Guardar borrador en `localStorage` en cada evento `change`/`input` y restaurar al recargar la página.
