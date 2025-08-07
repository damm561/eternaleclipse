# Doña Isabela - Pastelería Artesanal
## Versión HTML/CSS/JavaScript Vanilla

¡Página web completa para la pastelería artesanal "Doña Isabela"! Esta versión está hecha 100% con HTML, CSS y JavaScript vanilla, sin frameworks ni dependencias.

## 🎂 Características

- **Página de inicio** con presentación atractiva y llamadas a la acción
- **Galería de productos** con filtros por categoría
- **Personalizador de pasteles** con proceso de 3 pasos completo
- **Página de sorteos** mensuales con participación simulada
- **Sección "Detrás del pastel"** con video embebido (placeholder)
- **Página de contacto** con formulario funcional
- **Diseño responsivo** optimizado para móvil y desktop
- **Navegación fluida** entre páginas con animaciones suaves
- **Colores pasteles** y diseño moderno

## 🚀 Instalación (Super Fácil)

### Opción 1: Descarga directa
1. **Descarga** todos los archivos a una carpeta
2. **Abre** el archivo `index.html` en cualquier navegador web
3. ¡**Listo**! Tu página web está funcionando

### Opción 2: Servidor local (recomendado)
Si quieres probarlo en un servidor local:

```bash
# Si tienes Python instalado:
python -m http.server 8000

# Si tienes Node.js instalado:
npx serve .

# Si tienes PHP instalado:
php -S localhost:8000
```

Luego abre tu navegador en `http://localhost:8000`

## 📁 Estructura de archivos

```
├── index.html          # Página principal con toda la estructura
├── styles.css          # Estilos CSS personalizados
├── script.js           # JavaScript con toda la lógica
└── README-HTML.md      # Este archivo
```

¡Solo 3 archivos! Súper simple.

## 🎨 Personalización

### Cambiar colores
Edita las variables CSS en `styles.css`:
```css
:root {
    --primary-pink: #ec4899;      /* Color rosa principal */
    --primary-purple: #a855f7;    /* Color morado principal */
    --soft-pink: #fdf2f8;         /* Rosa suave */
    --soft-purple: #faf5ff;       /* Morado suave */
}
```

### Cambiar contenido
- **Textos**: Edita directamente en el archivo `index.html`
- **Imágenes**: Reemplaza las URLs de Unsplash con tus propias imágenes
- **Información de contacto**: Busca y reemplaza los datos en `index.html`
- **Productos**: Modifica el array `pasteles` en `script.js`
- **Precios**: Actualiza los precios en el array de productos

### Cambiar funcionalidades
Todo el comportamiento está en `script.js`:
- **Navegación**: Función `navigateTo()`
- **Galería**: Función `loadGallery()` y `filterCategory()`
- **Personalizador**: Funciones `nextStep()`, `previousStep()`, etc.
- **Formularios**: Función `handleContactSubmit()`

## 📱 Características técnicas

- **100% Responsivo**: Se adapta a cualquier pantalla
- **Navegación SPA**: Una sola página con múltiples vistas
- **Animaciones CSS**: Transiciones y efectos suaves
- **Tailwind CSS**: Via CDN para estilos rápidos
- **JavaScript Vanilla**: Sin dependencias externas
- **Imágenes optimizadas**: Carga rápida desde Unsplash
- **SEO Friendly**: Meta tags y estructura semántica

## 🛠️ Funcionalidades incluidas

### ✅ Navegación
- [x] Menú de navegación responsivo
- [x] Navegación móvil con hamburger menu
- [x] Scroll suave entre secciones
- [x] Estados activos en navegación

### ✅ Página de Inicio
- [x] Hero section con llamadas a la acción
- [x] Imagen destacada con overlay
- [x] Sección de características con iconos
- [x] Diseño atractivo y profesional

### ✅ Galería
- [x] Grid responsivo de productos
- [x] Filtros por categoría funcionales
- [x] Tarjetas de producto con hover effects
- [x] Información detallada de cada pastel

### ✅ Personalizador
- [x] Proceso de 3 pasos completamente funcional
- [x] Selección de pastel base
- [x] Personalización de ingredientes
- [x] Mensaje personalizado
- [x] Resumen de pedido con precios
- [x] Validación de formularios

### ✅ Sorteos
- [x] Información del sorteo actual
- [x] Instrucciones paso a paso
- [x] Participación simulada
- [x] Galería de ganadores anteriores

### ✅ Detrás del Pastel
- [x] Video embebido (placeholder)
- [x] Galería del proceso
- [x] Información detallada del proceso
- [x] Llamadas a la acción

### ✅ Contacto
- [x] Formulario de contacto funcional
- [x] Información de la empresa
- [x] Horarios de atención
- [x] Enlaces a redes sociales
- [x] WhatsApp directo
- [x] Sección de preguntas frecuentes

### ✅ Footer
- [x] Información completa de la empresa
- [x] Enlaces de navegación
- [x] Redes sociales
- [x] Copyright

## 🎯 Ventajas de esta versión

1. **Súper fácil de modificar**: Solo editas HTML, CSS y JS
2. **Sin instalaciones**: No necesitas Node.js, npm, ni nada
3. **Carga rápida**: Sin frameworks pesados
4. **Compatible**: Funciona en cualquier navegador
5. **Hosting simple**: Súbelo a cualquier servidor web
6. **Sin dependencias**: Todo está incluido
7. **Código limpio**: Fácil de entender y modificar

## 📞 Soporte

Si tienes algún problema:

1. **Verifica** que todos los archivos estén en la misma carpeta
2. **Abre** el archivo `index.html` directamente en el navegador
3. **Revisa** la consola del navegador (F12) por errores
4. **Asegúrate** de tener conexión a internet (para Tailwind CSS y las imágenes)

## 🔧 Modificaciones comunes

### Cambiar el número de WhatsApp
Busca en `index.html` y `script.js` por `+57 300 123 4567` y reemplázalo.

### Agregar más productos
Edita el array `pasteles` en `script.js`:
```javascript
const pasteles = [
    {
        id: 7, // Nuevo ID
        nombre: "Mi Nuevo Pastel",
        precio: 50000,
        imagen: "URL_DE_TU_IMAGEN",
        ingredientes: ["Ingrediente 1", "Ingrediente 2"],
        categoria: "nueva-categoria"
    }
    // ... más productos
];
```

### Cambiar información de la empresa
Busca en `index.html` los textos que quieras cambiar:
- Nombre de la empresa
- Dirección
- Teléfonos
- Horarios
- Descripción

## 📄 Licencia

Este proyecto está desarrollado para la pastelería Doña Isabela. Puedes usarlo y modificarlo libremente para tu propio negocio.

---

**Desarrollado con ❤️ para Doña Isabela Pastelería Artesanal**

¡Disfruta de tu nueva página web! 🎂✨