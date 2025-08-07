// Estado global de la aplicación
let appState = {
    currentPage: 'inicio',
    customizer: {
        currentStep: 1,
        selectedCake: null,
        removedIngredients: [],
        addedIngredients: [],
        customerName: '',
        customMessage: '',
        selectedBox: null // NUEVO: para la selección de caja
    },
    gallery: {
        selectedCategory: 'Todos'
    },
    participated: false,
    showVideo: false // NUEVO: para controlar la visualización del video
};

// Función para formatear precios en formato colombiano
function formatPrice(amount) {
    // Convertir a string con 2 decimales usando coma
    return '$' + amount.toLocaleString('es-CO', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).replace('.', ',');
}

// Datos exactos con precios realistas colombianos
const pasteles = [
    {
        id: 1,
        nombre: "Pastel de Chocolate Supremo",
        precio: 65,
        imagen: "imagen1.jpg",
        ingredientes: ["Chocolate belga", "Crema de mantequilla", "Fresas frescas", "Almendras"],
        categoria: "Chocolate"
    },
    {
        id: 2,
        nombre: "Torta Red Velvet Clásica",
        precio: 58,
        imagen: "imagen2.avif",
        ingredientes: ["Masa red velvet", "Queso crema", "Vainilla", "Decoración vintage"],
        categoria: "Especial"
    },
    {
        id: 3,
        nombre: "Cheesecake de Frutos Rojos",
        precio: 52,
        imagen: "imagen3.jpg",
        ingredientes: ["Queso philadelphia", "Frutos rojos", "Base de galleta", "Coulis de frutas"],
        categoria: "Cheesecake"
    },
    {
        id: 4,
        nombre: "Tres Leches Tradicional",
        precio: 45,
        imagen: "imagen4.avif",
        ingredientes: ["Bizcocho esponjoso", "Tres leches", "Crema chantilly", "Canela"],
        categoria: "Tradicional"
    },
    {
        id: 5,
        nombre: "Pastel de Zanahoria Gourmet",
        precio: 49,
        imagen: "imagen5.jpg",
        ingredientes: ["Zanahoria fresca", "Nueces", "Queso crema", "Especias"],
        categoria: "Saludable"
    },
    {
        id: 6,
        nombre: "Torta de Limón Merengue",
        precio: 56,
        imagen: "imagen6.avif",
        ingredientes: ["Crema de limón", "Merengue tostado", "Base crocante", "Ralladura de limón"],
        categoria: "Cítrico"
    }
];

// Opciones base con precios realistas colombianos
const baseOptions = [
    {
        id: "chocolate",
        nombre: "Chocolate",
        precio: 48,
        imagen: "imagen1.jpg",
        ingredientes: ["Masa de chocolate", "Crema de chocolate", "Decoración básica"]
    },
    {
        id: "vainilla",
        nombre: "Vainilla",
        precio: 42,
        imagen: "vainilla.jpg",
        ingredientes: ["Masa de vainilla", "Crema de mantequilla", "Decoración básica"]
    },
    {
        id: "red-velvet",
        nombre: "Red Velvet",
        precio: 55,
        imagen: "imagen2.avif",
        ingredientes: ["Masa red velvet", "Queso crema", "Decoración vintage"]
    }
];

// Opciones de cajas
const boxOptions = [
    {
        id: "basica",
        nombre: "Caja Básica",
        precio: 0,
        descripcion: "Caja de cartón resistente con diseño elegante. Perfecta para transportar tu pastel de forma segura."
    },
    {
        id: "regalo",
        nombre: "Caja de regalo",
        precio: 3.5,
        descripcion: "Caja decorativa con lazo y tarjeta personalizada. Ideal para ocasiones especiales y como regalo sorpresa."
    },
    {
        id: "premium",
        nombre: "Caja Premium",
        precio: 4.5,
        descripcion: "Caja de lujo con ventana transparente y acabados especiales. Incluye soporte interno para mayor protección."
    }
];

// Ingredientes disponibles exactos del componente React
const availableIngredients = [
    "Fresas frescas", "Arándanos", "Frambuesas", "Chocolate blanco", 
    "Almendras", "Nueces", "Mermelada de frutas", "Crema chantilly",
    "Fondant", "Flores comestibles", "Caramelo", "Coco rallado"
];

// Precio por ingrediente adicional
const INGREDIENT_PRICE = 1.5;

// Inicialización de la aplicación
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎂 Doña Isabela - Iniciando aplicación...');
    initializeApp();
    loadGallery();
    loadCustomizer();
    setupEventListeners();
    setupAnimations();
    console.log('🎂 Doña Isabela - Aplicación iniciada correctamente');
});

function initializeApp() {
    // Configurar navegación inicial
    updateNavigation();
    
    // Cargar página inicial
    showPage(appState.currentPage);
}

// NAVEGACIÓN - Exacta como en React
function navigateTo(page) {
    console.log(`Navegando a: ${page}`);
    appState.currentPage = page;
    showPage(page);
    updateNavigation();
    
    // Scroll suave al inicio - igual que en React
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Cerrar menú móvil si está abierto
    closeMobileMenu();
}

function showPage(page) {
    // Ocultar todas las páginas
    document.querySelectorAll('.page').forEach(p => {
        p.classList.remove('active');
    });
    
    // Mostrar página seleccionada
    const targetPage = document.getElementById(`page-${page}`);
    if (targetPage) {
        targetPage.classList.add('active');
    }
}

function updateNavigation() {
    // Actualizar navegación desktop
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.page === appState.currentPage) {
            btn.classList.add('active');
        }
    });
    
    // Actualizar navegación móvil
    document.querySelectorAll('.nav-btn-mobile').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.page === appState.currentPage) {
            btn.classList.add('active');
        }
    });
}

// NUEVA FUNCIÓN: Mostrar video principal
function showMainVideo() {
    console.log('Mostrando video principal...');
    appState.showVideo = true;
    
    const videoPreview = document.getElementById('video-preview');
    const videoPlayer = document.getElementById('video-player');
    
    if (videoPreview && videoPlayer) {
        videoPreview.style.display = 'none';
        videoPlayer.classList.remove('hidden');
        videoPlayer.classList.add('flex');
        
        // Aquí podrías cargar el iframe de YouTube real
        videoPlayer.innerHTML = '<iframe src="https://www.youtube.com/embed/6YgdoXBrD7s?si=S4ftHBriAgSR3Scfautoplay=1" frameborder="0" allowfullscreen class="w-full h-full"></iframe>';
    }
}

// MENÚ MÓVIL
function setupEventListeners() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Formulario de contacto
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
    
    // Event listeners para inputs del paso 3
    const customerNameInput = document.getElementById('customer-name');
    const customMessageInput = document.getElementById('custom-message');
    
    if (customerNameInput) {
        customerNameInput.addEventListener('input', function(e) {
            appState.customizer.customerName = e.target.value;
            updateNavigationButtons();
        });
    }
    
    if (customMessageInput) {
        customMessageInput.addEventListener('input', function(e) {
            appState.customizer.customMessage = e.target.value;
            updateNavigationButtons();
        });
    }
    
    // Escuchar eventos de redimensionamiento
    window.addEventListener('resize', function() {
        closeMobileMenu();
    });
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
        mobileMenu.classList.add('hidden');
    }
}

// GALERÍA - Exacta como en React
function loadGallery() {
    const productsGrid = document.getElementById('products-grid');
    if (!productsGrid) return;
    
    renderProducts(pasteles);
}

function renderProducts(products) {
    const productsGrid = document.getElementById('products-grid');
    if (!productsGrid) return;
    
    productsGrid.innerHTML = products.map(pastel => `
        <div class="product-card overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white/90 backdrop-blur">
            <div class="relative">
                <img src="${pastel.imagen}" alt="${pastel.nombre}" class="w-full h-64 object-cover">
                <div class="absolute top-4 right-4 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    ${pastel.categoria}
                </div>
            </div>
            
            <div class="p-6 pb-3">
                <h3 class="text-xl font-semibold text-gray-800 mb-2">${pastel.nombre}</h3>
                <div class="flex justify-between items-center">
                    <span class="text-2xl font-bold text-pink-600">${formatPrice(pastel.precio)}</span>
                </div>
            </div>
            
            <div class="px-6 pt-0 pb-4">
                <div class="mb-4">
                    <h4 class="font-medium text-gray-700 mb-2">Ingredientes:</h4>
                    <div class="flex flex-wrap gap-1">
                        ${pastel.ingredientes.map(ingrediente => `
                            <span class="text-xs bg-pink-100 text-pink-700 px-2 py-1 rounded-full">${ingrediente}</span>
                        `).join('')}
                    </div>
                </div>
                
                <button onclick="navigateTo('personaliza')" class="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300">
                    Personalizar
                </button>
            </div>
        </div>
    `).join('');
}

function filterCategory(category) {
    console.log(`Filtrando por categoría: ${category}`);
    appState.gallery.selectedCategory = category;
    
    // Actualizar botones de categoría - exacto como React
    document.querySelectorAll('.filter-badge').forEach(badge => {
        badge.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Filtrar productos - exacta lógica de React
    const filteredProducts = category === 'Todos' 
        ? pasteles 
        : pasteles.filter(p => p.categoria === category);
    
    renderProducts(filteredProducts);
}

// PERSONALIZADOR - ACTUALIZADO PARA 4 PASOS
function loadCustomizer() {
    renderBaseOptions();
    updateStepContent();
}

function renderBaseOptions() {
    const baseOptionsContainer = document.getElementById('base-options');
    if (!baseOptionsContainer) return;
    
    baseOptionsContainer.innerHTML = baseOptions.map(cake => `
        <div class="cake-card ${appState.customizer.selectedCake === cake.id ? 'selected' : ''}" 
             onclick="selectBaseCake('${cake.id}')">
            <div class="relative">
                <img src="${cake.imagen}" alt="${cake.nombre}" class="w-full h-48 object-cover rounded-t-lg">
                ${appState.customizer.selectedCake === cake.id ? `
                    <div class="absolute top-2 right-2 bg-pink-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                        ✓
                    </div>
                ` : ''}
            </div>
            <div class="p-4">
                <h3 class="text-lg font-semibold text-gray-800">${cake.nombre}</h3>
                <p class="text-xl font-bold text-pink-600 mb-3">${formatPrice(cake.precio)}</p>
                <div class="space-y-1">
                    ${cake.ingredientes.map(ingrediente => `
                        <span class="inline-block border border-gray-300 text-gray-700 px-2 py-1 rounded-full mr-1 mb-1 text-xs">${ingrediente}</span>
                    `).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

function selectBaseCake(cakeId) {
    console.log(`Pastel seleccionado: ${cakeId}`);
    appState.customizer.selectedCake = cakeId;
    renderBaseOptions();
    updateNavigationButtons();
}

// FUNCIÓN: Seleccionar caja
function selectBox(boxId) {
    console.log(`Caja seleccionada: ${boxId}`);
    appState.customizer.selectedBox = boxId;
    
    // Actualizar visualización de cajas
    document.querySelectorAll('.box-card').forEach(card => {
        card.classList.remove('selected');
        const checkmark = card.querySelector('.box-check');
        if (checkmark) {
            checkmark.classList.add('hidden');
        }
    });
    
    // Marcar la caja seleccionada
    const selectedCard = document.querySelector(`[onclick="selectBox('${boxId}')"]`);
    if (selectedCard) {
        selectedCard.classList.add('selected');
        const checkmark = selectedCard.querySelector('.box-check');
        if (checkmark) {
            checkmark.classList.remove('hidden');
        }
    }
    
    // Actualizar resumen si estamos en el paso 4
    if (appState.customizer.currentStep === 4) {
        updateOrderSummary();
    }
    
    updateNavigationButtons();
}

function updateStepContent() {
    const step = appState.customizer.currentStep;
    
    // Actualizar título y descripción - ACTUALIZADO PARA 4 PASOS
    const titles = [
        "Paso 1: Elige tu pastel base",
        "Paso 2: Personaliza ingredientes", 
        "Paso 3: Mensaje personalizado",
        "Paso 4: Selección de tipo de caja" // NUEVO
    ];
    
    const descriptions = [
        "Selecciona el sabor base para tu pastel personalizado",
        "Modifica los ingredientes según tus preferencias",
        "Añade un mensaje especial para tu pastel",
        "Elige la presentación perfecta para tu pastel" // NUEVO
    ];
    
    document.getElementById('step-title').textContent = titles[step - 1];
    document.getElementById('step-description').textContent = descriptions[step - 1];
    
    // Actualizar indicadores de paso - ACTUALIZADO PARA 4 PASOS
    document.querySelectorAll('.step-indicator').forEach((indicator, index) => {
        indicator.classList.toggle('active', index < step);
    });
    
    // Actualizar líneas de progreso - ACTUALIZADO PARA 4 PASOS
    document.getElementById('line-1').classList.toggle('active', step > 1);
    document.getElementById('line-2').classList.toggle('active', step > 2);
    document.getElementById('line-3').classList.toggle('active', step > 3);
    
    // Mostrar contenido del paso actual
    document.querySelectorAll('.step-content').forEach((content, index) => {
        content.classList.toggle('active', index === step - 1);
    });
    
    // Actualizar botones de navegación
    updateNavigationButtons();
    
    // Cargar contenido específico del paso
    if (step === 2) {
        loadIngredientsStep();
    } else if (step === 3) {
        loadMessageStep();
    } else if (step === 4) {
        loadBoxStep(); // NUEVO
    }
}

function loadIngredientsStep() {
    if (!appState.customizer.selectedCake) return;
    
    const selectedCakeData = baseOptions.find(cake => cake.id === appState.customizer.selectedCake);
    
    // Ingredientes para remover - exacta implementación de React
    const removeContainer = document.getElementById('remove-ingredients');
    if (removeContainer && selectedCakeData) {
        removeContainer.innerHTML = selectedCakeData.ingredientes.map(ingredient => `
            <div class="flex items-center space-x-2">
                <input type="checkbox" 
                       id="remove-${ingredient.replace(/\s+/g, '-')}" 
                       class="custom-checkbox"
                       ${appState.customizer.removedIngredients.includes(ingredient) ? 'checked' : ''}
                       onchange="toggleRemovedIngredient('${ingredient}')">
                <label for="remove-${ingredient.replace(/\s+/g, '-')}" class="text-sm cursor-pointer">${ingredient}</label>
            </div>
        `).join('');
    }
    
    // Ingredientes para agregar - exacta implementación de React con precio actualizado
    const addContainer = document.getElementById('add-ingredients');
    if (addContainer) {
        addContainer.innerHTML = availableIngredients.map(ingredient => `
            <div class="flex items-center space-x-2">
                <input type="checkbox" 
                       id="add-${ingredient.replace(/\s+/g, '-')}" 
                       class="custom-checkbox"
                       ${appState.customizer.addedIngredients.includes(ingredient) ? 'checked' : ''}
                       onchange="toggleAddedIngredient('${ingredient}')">
                <label for="add-${ingredient.replace(/\s+/g, '-')}" class="text-sm cursor-pointer">${ingredient}</label>
                <span class="text-xs text-gray-500">+${formatPrice(INGREDIENT_PRICE)}</span>
            </div>
        `).join('');
    }
}

function loadMessageStep() {
    // Cargar valores guardados
    const nameInput = document.getElementById('customer-name');
    const messageInput = document.getElementById('custom-message');
    
    if (nameInput) nameInput.value = appState.customizer.customerName;
    if (messageInput) messageInput.value = appState.customizer.customMessage;
}

// FUNCIÓN: Cargar paso de cajas
function loadBoxStep() {
    // Asegurar que hay una caja seleccionada por defecto (básica)
    if (!appState.customizer.selectedBox) {
        appState.customizer.selectedBox = 'basica';
        selectBox('basica');
    }
    
    // Actualizar resumen del pedido
    updateOrderSummary();
}

function toggleRemovedIngredient(ingredient) {
    console.log(`Toggle removed ingredient: ${ingredient}`);
    const index = appState.customizer.removedIngredients.indexOf(ingredient);
    if (index > -1) {
        appState.customizer.removedIngredients.splice(index, 1);
    } else {
        appState.customizer.removedIngredients.push(ingredient);
    }
}

function toggleAddedIngredient(ingredient) {
    console.log(`Toggle added ingredient: ${ingredient}`);
    const index = appState.customizer.addedIngredients.indexOf(ingredient);
    if (index > -1) {
        appState.customizer.addedIngredients.splice(index, 1);
    } else {
        appState.customizer.addedIngredients.push(ingredient);
    }
    
    if (appState.customizer.currentStep === 3 || appState.customizer.currentStep === 4) {
        updateOrderSummary();
    }
}

function updateOrderSummary() {
    const selectedCake = baseOptions.find(cake => cake.id === appState.customizer.selectedCake);
    const selectedBox = boxOptions.find(box => box.id === appState.customizer.selectedBox);
    
    if (!selectedCake) return;
    
    // Cálculo exacto con precios actualizados incluyendo caja
    const basePrice = selectedCake.precio;
    const addedPrice = appState.customizer.addedIngredients.length * INGREDIENT_PRICE;
    const boxPrice = selectedBox ? selectedBox.precio : 0;
    const totalPrice = basePrice + addedPrice + boxPrice;
    
    const summaryContent = document.getElementById('summary-content');
    if (summaryContent) {
        summaryContent.innerHTML = `
            <div class="flex justify-between">
                <span>Pastel base (${selectedCake.nombre})</span>
                <span>${formatPrice(basePrice)}</span>
            </div>
            ${appState.customizer.addedIngredients.length > 0 ? `
                <div class="flex justify-between">
                    <span>Ingredientes adicionales (${appState.customizer.addedIngredients.length})</span>
                    <span>+${formatPrice(addedPrice)}</span>
                </div>
            ` : ''}
            ${selectedBox && selectedBox.precio > 0 ? `
                <div class="flex justify-between">
                    <span>Caja (${selectedBox.nombre})</span>
                    <span>+${formatPrice(boxPrice)}</span>
                </div>
            ` : ''}
            <hr class="my-2">
            <div class="flex justify-between font-semibold text-lg">
                <span>Total estimado</span>
                <span class="text-pink-600">${formatPrice(totalPrice)}</span>
            </div>
        `;
    }
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    if (!prevBtn || !nextBtn) return;
    
    const step = appState.customizer.currentStep;
    
    // Botón anterior - ACTUALIZADO PARA 4 PASOS
    if (step === 1) {
        prevBtn.textContent = 'Volver a Galería';
        prevBtn.onclick = () => navigateTo('galeria');
    } else {
        prevBtn.textContent = 'Anterior';
        prevBtn.onclick = previousStep;
    }
    
    // Botón siguiente - ACTUALIZADO PARA 4 PASOS
    if (step === 4) {
        nextBtn.textContent = 'Solicitar Cotización';
        nextBtn.onclick = submitQuote;
    } else {
        nextBtn.textContent = 'Siguiente';
        nextBtn.onclick = nextStep;
    }
    
    // Deshabilitar botón si es necesario - ACTUALIZADO PARA 4 PASOS
    let disabled = false;
    if (step === 1 && !appState.customizer.selectedCake) {
        disabled = true;
    } else if (step === 3 && (!appState.customizer.customerName || !appState.customizer.customMessage)) {
        disabled = true;
    } else if (step === 4 && !appState.customizer.selectedBox) {
        disabled = true;
    }
    
    nextBtn.disabled = disabled;
    if (disabled) {
        nextBtn.classList.add('opacity-50', 'cursor-not-allowed');
    } else {
        nextBtn.classList.remove('opacity-50', 'cursor-not-allowed');
    }
}

function nextStep() {
    console.log('Siguiente paso');
    if (appState.customizer.currentStep < 4) { // CAMBIADO DE 3 A 4
        appState.customizer.currentStep++;
        updateStepContent();
    }
}

function previousStep() {
    console.log('Paso anterior');
    if (appState.customizer.currentStep > 1) {
        appState.customizer.currentStep--;
        updateStepContent();
    }
}

function submitQuote() {
    console.log('Enviando cotización...');
    const nextBtn = document.getElementById('next-btn');
    nextBtn.classList.add('loading');
    nextBtn.textContent = 'Enviando...';
    nextBtn.disabled = true;
    
    // Simular envío - exacta implementación de React
    setTimeout(() => {
        alert('¡Cotización enviada! Te contactaremos pronto por WhatsApp para coordinar los detalles.');
        
        // Resetear personalizador - ACTUALIZADO PARA 4 PASOS
        appState.customizer = {
            currentStep: 1,
            selectedCake: null,
            removedIngredients: [],
            addedIngredients: [],
            customerName: '',
            customMessage: '',
            selectedBox: null // NUEVO
        };
        
        navigateTo('inicio');
    }, 1500);
}

// SORTEOS - Exacto como en React
function participate() {
    console.log('Participando en sorteo...');
    const participateBtn = document.getElementById('participate-btn');
    const participatedMessage = document.getElementById('participated-message');
    
    if (!appState.participated) {
        appState.participated = true;
        
        participateBtn.classList.add('loading');
        participateBtn.textContent = 'Registrando...';
        participateBtn.disabled = true;
        
        setTimeout(() => {
            participateBtn.classList.add('hidden');
            participatedMessage.classList.remove('hidden');
            
            setTimeout(() => {
                alert('¡Te has registrado en el sorteo! Revisa las instrucciones para participar en Instagram.');
            }, 500);
        }, 1000);
    }
}

// FORMULARIO DE CONTACTO - Exacto como sería en React
function handleContactSubmit(e) {
    e.preventDefault();
    console.log('Enviando formulario de contacto...');
    
    const name = document.getElementById('contact-name').value;
    const whatsapp = document.getElementById('contact-whatsapp').value;
    const message = document.getElementById('contact-message').value;
    
    if (!name || !whatsapp || !message) {
        alert('Por favor completa todos los campos.');
        return;
    }
    
    const submitBtn = e.target.querySelector('button[type="submit"]');
    submitBtn.classList.add('loading');
    submitBtn.textContent = 'Enviando...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        alert('¡Mensaje enviado! Te contactaremos pronto por WhatsApp.');
        e.target.reset();
        submitBtn.classList.remove('loading');
        submitBtn.textContent = 'Enviar Mensaje';
        submitBtn.disabled = false;
    }, 1500);
}

// ANIMACIONES Y EFECTOS
function setupAnimations() {
    // Animación de scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observar elementos que necesitan animación
    document.querySelectorAll('.product-card, .box-card').forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
    
    // Agregar animaciones a las tarjetas cuando se cargan
    setTimeout(() => {
        document.querySelectorAll('.product-card, .box-card').forEach((card, index) => {
            card.style.animationDelay = `${index * 100}ms`;
            card.classList.add('animate-on-scroll');
        });
    }, 100);
}

// UTILIDADES
function showNotification(message, type = 'info') {
    // Crear notification toast simple
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transition-all duration-300 ${
        type === 'success' ? 'bg-green-500' : 
        type === 'error' ? 'bg-red-500' : 
        'bg-blue-500'
    } text-white`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// FUNCIONES DE DEBUGGING
function getAppState() {
    return appState;
}

function resetAppState() {
    appState = {
        currentPage: 'inicio',
        customizer: {
            currentStep: 1,
            selectedCake: null,
            removedIngredients: [],
            addedIngredients: [],
            customerName: '',
            customMessage: '',
            selectedBox: null // NUEVO
        },
        gallery: {
            selectedCategory: 'Todos'
        },
        participated: false,
        showVideo: false
    };
    
    initializeApp();
    loadGallery();
    loadCustomizer();
}

// Exponer funciones globales para debugging
window.donaIsabela = {
    getAppState,
    resetAppState,
    navigateTo,
    showNotification,
    showMainVideo,
    appState
};

console.log('🎂 Doña Isabela - JavaScript cargado correctamente');