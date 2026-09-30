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

### 4. Vaciado Prematuro del Carrito en Pasarelas Asíncronas
- **Síntoma:** El carrito se vaciaba antes de recibir la confirmación de la pasarela de pago; si el usuario era rechazado o la transacción fallaba, sus productos se perdían forzándolo a reconstruir el pedido.
- **Solución:** Vaciar el carrito única y exclusivamente tras el evento de éxito `APPROVED`. En estados `DECLINED` o `ERROR`, mantener la orden viva en memoria y `localStorage`.

### 5. Botón Atrás del Navegador Expulsa de la Aplicación en SPAs
- **Síntoma:** Al cambiar de pestañas en una SPA basada en `display: none / flex`, el historial del navegador no registra los cambios. Al pulsar "Atrás", el navegador salía completamente del sitio.
- **Solución:** Disparar `history.pushState({ view }, '', '#' + view)` en cada transición y escuchar `popstate` para restaurar la vista correspondiente sin recargar la página.

### 6. Error ENOENT al consultar o instalar paquetes globales en Windows
- **Síntoma:** `npm error enoent ENOENT: no such file or directory, lstat 'C:\Users\...\AppData\Roaming\npm'` al ejecutar comandos de npm.
- **Causa:** El directorio prefix de npm no se crea automáticamente en ciertas instalaciones limpias de Node.js en Windows.
- **Solución:** Crear manualmente la carpeta `AppData\Roaming\npm` en el perfil del usuario antes de ejecutar operaciones de npm.

### 7. Error de Codificación Unicode (cp1252) con el Carácter 'ā' en Consola Windows
- **Síntoma:** `UnicodeEncodeError: 'charmap' codec can't encode character '\u0101'` al imprimir cadenas que contienen `Astāvik` en scripts de Python ejecutados desde PowerShell.
- **Causa:** La consola estándar de Windows usa CP1252 por defecto, la cual no puede mapear el carácter latino extendido `ā` (U+0101).
- **Solución:** Reconfigurar la salida estándar al inicio de scripts de testing con `sys.stdout.reconfigure(encoding='utf-8')` o escribir los reportes directamente a disco en UTF-8.

### 8. Error 404 (NOT_FOUND) en Despliegues de Vercel por Ausencia de index.html y Reglas SPA
- **Síntoma:** Al desplegar en Vercel, ingresar a la URL raíz o a cualquier ruta devuelve HTTP 404 NOT_FOUND.
- **Causa:** El proyecto utilizaba `code.html` como punto de entrada de Vite, por lo que el build generaba únicamente `dist/code.html` y no `dist/index.html`. Vercel busca por defecto `index.html` en el directorio de salida (`dist`) y requiere reescritura para SPAs.
- **Solución:** 
  1. Mantener `index.html` canónico en la raíz del proyecto.
  2. Configurar `base: '/'` y salida a `dist` en `vite.config.js` con `rollupOptions.input` apuntando a `index.html`.
  3. Crear `vercel.json` con la regla canónica de reescritura: `{"rewrites": [{"source": "/(.*)", "destination": "/index.html"}]}`.

### 9. Auto-Zoom Involuntario en iOS Safari al Enfocar Campos de Texto
- **Síntoma:** En iPhone/iPad, tocar un input en formularios de Taller o Checkout produce un zoom automático de la pantalla que rompe el layout y requiere pellizcar para alejar.
- **Causa:** Safari en iOS fuerza zoom automático en cualquier `<input>` o `<select>` cuya propiedad `font-size` calculada sea inferior a 16px.
- **Solución:** Declarar `text-base md:text-sm` en todos los inputs y selects para garantizar 16px exactos en dispositivos móviles y 14px en pantallas de escritorio.

### 10. Regresión de Touch Targets en Selectores Dinámicos de Talla por Sobrescritura de Clases
- **Síntoma:** Las píldoras de talla cumplían los 44px al cargar, pero al hacer clic o cambiar el slider biomecánico su altura se reducía a ~24px violando WCAG AA.
- **Causa:** Las funciones JavaScript `updateSizePillsUI()` y `selectApparelSize()` asignaban cadenas fijas a `btn.className` omitiendo las clases utilitarias de ergonomía táctil.
- **Solución:** Incluir obligatoriamente `min-w-[44px] min-h-[44px] flex items-center justify-center` en las cadenas de asignación de `className` en JavaScript.

