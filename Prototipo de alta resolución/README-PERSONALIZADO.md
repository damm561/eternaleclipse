# Doña Isabela - Pastelería Artesanal
## Guía de Personalización 🎂

¡Tu página web está lista! Aquí tienes las instrucciones para personalizarla fácilmente.

## 🎨 Cómo Cambiar el Logo

### Opción 1: Logo con Imagen (Recomendado)

1. **Guarda tu logo** en la misma carpeta que `index.html` con el nombre `logo.png` (o `.jpg`, `.svg`)

2. **Edita el archivo `index.html`:**
   - Busca la línea que dice `<!-- Logo actual con iniciales (puedes cambiarlo) -->`
   - **Comenta** las líneas del logo actual:
   ```html
   <!-- Logo actual - COMENTADO para usar imagen
   <div class="bg-gradient-to-r from-pink-300 to-purple-300 p-2 rounded-full">
       <span class="text-white font-semibold text-lg">DI</span>
   </div>
   <span class="ml-3 text-xl font-semibold text-gray-800">Doña Isabela</span>
   -->
   ```
   
   - **Descomenta y ajusta** estas líneas:
   ```html
   <!-- ACTIVA ESTA LÍNEA para logo con imagen -->
   <img src="tu-logo.png" alt="Doña Isabela Logo" class="h-10 w-auto mr-3">
   <span class="text-xl font-semibold text-gray-800">Doña Isabela</span>
   ```

3. **Reemplaza** `tu-logo.png` con el nombre real de tu archivo

4. **Repite el proceso en el footer** (busca la sección similar en footer)

### Opción 2: Solo Imagen (Sin Texto)

Si quieres usar solo la imagen del logo sin texto:
```html
<img src="tu-logo.png" alt="Doña Isabela Logo" class="h-12 w-auto">
```

### Opción 3: Logo desde Internet

Si tu logo está en internet:
```html
<img src="https://tu-sitio.com/logo.png" alt="Doña Isabela Logo" class="h-10 w-auto mr-3">
```

## 💰 Precios ya Configurados

Los precios están en formato colombiano realista:
- **Pasteles base:** desde $42.000,00 hasta $65.500,00
- **Ingredientes adicionales:** $5.500,00 cada uno
- **Premio del sorteo:** $125.000,00
- **Formato:** Usa comas para decimales (ej: $45.500,00)

### Para cambiar precios:
Edita el archivo `script.js` y busca:
```javascript
const pasteles = [
    {
        precio: 65500,  // Cambia este número
        // ...
    }
];
```

## 📱 Iconos de Redes Sociales

Ya incluidos con iconos SVG reales:
- **Instagram** 📸 (icono real de Instagram)
- **Facebook** 👥 (icono real de Facebook)  
- **WhatsApp** 💬 (icono real de WhatsApp)

### Para cambiar enlaces:
En `index.html`, busca estas líneas y cambia las URLs:
```html
<!-- Instagram -->
onclick="window.open('https://instagram.com/TU_USUARIO', '_blank')"

<!-- Facebook -->
onclick="window.open('https://facebook.com/TU_PAGINA', '_blank')"

<!-- WhatsApp -->
onclick="window.open('https://wa.me/TU_NUMERO', '_blank')"
```

## 📞 Información de Contacto

Para cambiar números de teléfono, direcciones, etc:

1. **WhatsApp:** Busca `+57 300 123 4567` en `index.html` y `script.js`
2. **Dirección:** Busca `Calle 123 #45-67, Medellín`
3. **Horarios:** Busca la sección "Horarios de Atención"

## 🎂 Productos

Para agregar/modificar pasteles, edita `script.js`:
```javascript
const pasteles = [
    {
        id: 7, // Nuevo ID único
        nombre: "Mi Nuevo Pastel",
        precio: 58000, // Sin puntos, solo números
        imagen: "https://images.unsplash.com/...", // URL de imagen
        ingredientes: ["Ingrediente 1", "Ingrediente 2"],
        categoria: "Nueva-Categoria"
    }
];
```

## 🏪 Información de la Empresa

Para cambiar nombre, descripción, etc:

1. **Nombre:** Busca "Doña Isabela" en `index.html`
2. **Descripción:** Busca "Creando momentos dulces"
3. **Año de fundación:** Busca "desde 2010"

## 🚀 Instalación

1. **Descarga** todos los archivos a una carpeta
2. **Abre** `index.html` en cualquier navegador
3. ¡**Listo**! Tu página web funciona

## 📁 Archivos Importantes

```
📂 Tu carpeta/
├── index.html          # Página principal (aquí cambias logo, textos, contacto)
├── script.js           # Lógica (aquí cambias precios, productos)
├── styles.css          # Estilos (normalmente no necesitas tocarlo)
├── logo.png            # Tu logo (agrégalo aquí)
└── README-PERSONALIZADO.md # Esta guía
```

## 🎨 Colores del Sitio

Los colores principales están en `styles.css`:
```css
:root {
    --primary-pink: #ec4899;      /* Rosa principal */
    --primary-purple: #a855f7;    /* Morado principal */
    --pink-50: #fdf2f8;          /* Rosa muy suave */
    --purple-50: #faf5ff;        /* Morado muy suave */
}
```

## ✅ Lista de Personalización Rápida

- [ ] Cambiar logo en navegación
- [ ] Cambiar logo en footer  
- [ ] Actualizar enlaces de redes sociales
- [ ] Cambiar número de WhatsApp
- [ ] Actualizar dirección física
- [ ] Modificar horarios de atención
- [ ] Revisar precios de productos
- [ ] Ajustar información de la empresa

## 🆘 Solución de Problemas

**Mi logo no aparece:**
- Verifica que el archivo esté en la misma carpeta que `index.html`
- Verifica que el nombre del archivo coincida exactamente
- Verifica que descomentaste las líneas correctas

**Los precios no cambian:**
- Asegúrate de editar `script.js`, no `index.html`
- Usa solo números, sin puntos ni comas en el código
- Guarda el archivo y actualiza el navegador

**Los enlaces no funcionan:**
- Verifica que las URLs estén completas (con https://)
- Para WhatsApp, usa el formato: `https://wa.me/573001234567`

## 📞 Formato de WhatsApp

Para el enlace de WhatsApp:
- **Colombia:** `https://wa.me/573001234567`
- **México:** `https://wa.me/525512345678` 
- **Argentina:** `https://wa.me/541112345678`

---

**¡Tu página web está lista!** 🎂✨

*¿Necesitas ayuda? Revisa los comentarios en el código HTML, están marcados con `<!-- INSTRUCCIONES -->`*