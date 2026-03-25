/* ============================================
   💕 PÁGINA WEB ROMÁNTICA - JAVASCRIPT 💕
   ============================================ */

// ▌ CUANDO EL DOCUMENTO ESTÉ LISTO ▌
window.addEventListener('load', function() {
    const loader = document.getElementById('loader-screen');
    const progress = document.getElementById('loader-progress');
    const text = document.getElementById('loader-text');
    const audio = document.getElementById('audio-todo-cambio');

    let value = 0;

    const intentarReproducirMusica = () => {
        if (!audio) return;

        audio.currentTime = 0;
        audio.volume = 0.65;

        audio.play().then(() => {
            console.log('🎵 Reproduciendo TODO CAMBIO de Camila');
        }).catch((err) => {
            console.warn('⚠️ Autoplay bloqueado; usuario debe interactuar para habilitar audio:', err);
            text.textContent = 'Toca la pantalla para activar la canción 🎶';
        });
    };

    const interval = setInterval(() => {
        value += Math.floor(Math.random() * 8) + 3;
        if (value >= 100) {
            value = 100;
            progress.style.width = value + '%';
            text.textContent = '¡Carga completa! Abriendo tu amor... ❤️';
            clearInterval(interval);
            setTimeout(() => {
                loader.style.opacity = '0';
                loader.style.pointerEvents = 'none';
                setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: 'instant' });
                    loader.remove();
                    intentarReproducirMusica();
                }, 450);
            }, 500);
            return;
        }

        progress.style.width = value + '%';
        text.textContent = `Cargando nivel: ${value}%... 🌸`;
    }, 90);
});

// ▌ CUANDO EL DOCUMENTO ESTÉ LISTO ▌
document.addEventListener('DOMContentLoaded', function() {
    console.log('💕 Página romántica súper dinámica cargada');
    
    // Inicializar todas las funcionalidades avanzadas
    inicializarContador();
    inicializarCorazionesFlorantes();
    inicializarBotónSorpresa();
    inicializarAnimacionesScroll();
    inicializarEfectosHover();
    inicializarParticulasFondo();
    inicializarAnimacionesEntrada();
    crearEfectosEspeciales();
    inicializarGaleriaModal();
    
    // Agregar índices para animaciones escalonadas
    agregarIndicesAnimacion();
});

// ============================================
// 📅 CONTADOR DE TIEMPO JUNTOS
// ============================================

function inicializarContador() {
    /**
     * Obtiene la fecha de inicio del HTML
     * Calcula el tiempo que llevan juntos
     * Actualiza el contador cada segundo
     */
    
    // Obtener la fecha de inicio del data attribute del HTML
    const fechaInicioStr = document.documentElement.getAttribute('data-fecha-inicio');
    const fechaInicio = new Date(fechaInicioStr + 'T00:00:00');
    // La fecha viene dinámicamente de Flask ✨
    
    function actualizarContador() {
        const ahora = new Date();
        const diferencia = ahora - fechaInicio;
        
        // Calcular días, horas, minutos, segundos
        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
        
        // Actualizar elementos del DOM con animación
        actualizarElemento('dias', dias, 'dias-anterior');
        actualizarElemento('horas', horas, 'horas-anterior');
        actualizarElemento('minutos', minutos, 'minutos-anterior');
        actualizarElemento('segundos', segundos, 'segundos-anterior');
    }
    
    function actualizarElemento(id, valor, clase) {
        const elemento = document.getElementById(id);
        const valorActual = parseInt(elemento.textContent);
        
        if (valorActual !== valor) {
            elemento.textContent = valor;
            // Agregar pequeña animación cuando cambia
            elemento.classList.add('contador-actualizado');
            setTimeout(() => elemento.classList.remove('contador-actualizado'), 300);
        }
    }
    
    // Actualizar inmediatamente
    actualizarContador();
    
    // Actualizar cada segundo
    setInterval(actualizarContador, 1000);
}

// ============================================
// 💭 CORAZONES FLOTANTES ALEATORIOS
// ============================================

function inicializarCorazionesFlorantes() {
    /**
     * Crea corazones que flotan aleatoriamente en la pantalla
     * Se generan continuamente para crear efecto romántico
     */
    
    const contenedor = document.getElementById('corazones-flotantes');
    
    function crearCorazonFlotante() {
        // Crear elemento corazón
        const corazon = document.createElement('div');
        corazon.className = 'corazon-flotante';
        corazon.textContent = '❤️';
        
        // Posición aleatoria en X
        const posicionX = Math.random() * window.innerWidth;
        corazon.style.left = posicionX + 'px';
        corazon.style.top = window.innerHeight + 'px';
        
        // Duración aleatoria
        const duracion = 6 + Math.random() * 4;
        corazon.style.animationDuration = duracion + 's';
        
        // Agregar al contenedor
        contenedor.appendChild(corazon);
        
        // Remover después de la animación
        setTimeout(() => corazon.remove(), duracion * 1000);
    }
    
    // Crear corazones cada 2-3 segundos
    setInterval(crearCorazonFlotante, 2500);
}

// ============================================
// 🎁 BOTÓN SORPRESA
// ============================================

function inicializarBotónSorpresa() {
    /**
     * Redirige a la ruta /sorpresa cuando el usuario
     * hace clic en el botón de sorpresa.
     */
    
    const botonSorpresa = document.getElementById('boton-sorpresa');

    if (!botonSorpresa) return;

    botonSorpresa.addEventListener('click', function() {
        window.location.href = '/sorpresa';
    });
}

function reproducirAnimacionSorpresa() {
    /**
     * Crea fuegos artificiales y confeti espectacular
     * cuando se abre la sorpresa
     */
    
    const contenedor = document.getElementById('particulas-contenedor');
    
    // Crear múltiples explosiones de fuegos artificiales
    for (let explosion = 0; explosion < 5; explosion++) {
        setTimeout(() => {
            crearFuegoArtificial(contenedor);
            crearConfeti(contenedor);
        }, explosion * 200);
    }
}

function crearFuegoArtificial(contenedor) {
    /**
     * Crea una explosión de fuegos artificiales desde el centro
     */
    const numParticulas = 80;
    const colores = ['#FF6B9D', '#FF85A1', '#FFB3D9', '#FF99C8', '#E1255E', '#FFD9EA'];
    
    for (let i = 0; i < numParticulas; i++) {
        const particula = document.createElement('div');
        const angulo = (Math.PI * 2 * i) / numParticulas;
        const velocidad = 300 + Math.random() * 150;
        const duracion = 1.5 + Math.random() * 0.8;
        
        const finalX = Math.cos(angulo) * velocidad;
        const finalY = Math.sin(angulo) * velocidad;
        const color = colores[Math.floor(Math.random() * colores.length)];
        
        particula.style.cssText = `
            position: fixed;
            width: 8px;
            height: 8px;
            background: ${color};
            border-radius: 50%;
            top: 50%;
            left: 50%;
            pointer-events: none;
            box-shadow: 0 0 15px ${color};
        `;
        
        particula.style.setProperty('--finalX', finalX + 'px');
        particula.style.setProperty('--finalY', finalY + 'px');
        particula.style.animation = `explotar ${duracion}s ease-out forwards`;
        
        contenedor.appendChild(particula);
        
        setTimeout(() => particula.remove(), duracion * 1000);
    }
}

function crearConfeti(contenedor) {
    /**
     * Crea lluvia de confeti decorativo
     */
    const numConfeti = 40;
    const emojis = ['💕', '🌹', '✨', '💓', '💖', '🌸'];
    
    for (let i = 0; i < numConfeti; i++) {
        const confeti = document.createElement('div');
        const emoji = emojis[Math.floor(Math.random() * emojis.length)];
        const duracion = 3 + Math.random() * 1.5;
        const delay = Math.random() * 0.5;
        const startX = Math.random() * window.innerWidth;
        const rotacion = Math.random() * 360;
        
        confeti.style.cssText = `
            position: fixed;
            font-size: 1.5rem;
            top: -20px;
            left: ${startX}px;
            pointer-events: none;
            animation: caerConfeti ${duracion}s linear ${delay}s forwards;
            opacity: 0.8;
            transform: rotate(${rotacion}deg);
        `;
        
        confeti.textContent = emoji;
        contenedor.appendChild(confeti);
        
        setTimeout(() => confeti.remove(), (duracion + delay) * 1000);
    }
}

// Agregar keyframe de explosión dinámicamente
if (!document.querySelector('style[data-explosioner]')) {
    const style = document.createElement('style');
    style.setAttribute('data-explosioner', 'true');
    style.textContent = `
        @keyframes exploder {
            0% {
                transform: translate(0, 0);
                opacity: 1;
            }
            100% {
                transform: translate(var(--finalX), var(--finalY));
                opacity: 0;
            }
        }
        
        .contador-actualizado {
            animation: contadorAnimacion 0.3s ease-out;
        }
        
        @keyframes contadorAnimacion {
            0% {
                transform: scale(1.3);
                color: #ff6b9d;
            }
            100% {
                transform: scale(1);
                color: #ff6b9d;
            }
        }
    `;
    document.head.appendChild(style);
}

// ============================================
// 🎭 ANIMACIONES DE ENTRADA AVANZADAS
// ============================================

function inicializarAnimacionesEntrada() {
    /**
     * Crea animaciones de entrada escalonadas para todos los elementos
     * Hace que la página se sienta viva al cargar
     */
    
    // Animar elementos con delay escalonado
    const elementosAnimar = document.querySelectorAll('.galeria-item, .mensaje-card, .info-card');
    
    elementosAnimar.forEach((elemento, index) => {
        elemento.style.opacity = '0';
        elemento.style.transform = 'translateY(50px) scale(0.9)';
        elemento.style.transition = 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        elemento.style.transitionDelay = `${index * 0.1}s`;
        
        // Forzar reflow y activar animación
        setTimeout(() => {
            elemento.style.opacity = '1';
            elemento.style.transform = 'translateY(0) scale(1)';
        }, 100);
    });
}

// ============================================
// 📜 EFECTOS DE SCROLL AVANZADOS
// ============================================

function inicializarAnimacionesScroll() {
    /**
     * Crea efectos parallax y animaciones basadas en scroll
     * Hace que la página responda al movimiento del usuario
     */
    
    let ultimoScrollY = window.scrollY;
    
    function manejarScroll() {
        const scrollY = window.scrollY;
        const deltaY = scrollY - ultimoScrollY;
        
        // Efecto parallax en el fondo
        const parallaxElements = document.querySelectorAll('.parallax');
        parallaxElements.forEach(element => {
            const speed = 0.5;
            const yPos = -(scrollY * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
        
        // Animaciones de revelación al hacer scroll
        const elementosRevelar = document.querySelectorAll('.galeria-item, .mensaje-card, .info-card');
        
        elementosRevelar.forEach((elemento, index) => {
            const rect = elemento.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            if (rect.top < windowHeight * 0.8 && rect.bottom > 0) {
                // Elemento visible, aplicar animación
                elemento.style.transform = `translateY(0) scale(1) rotate(${Math.sin(scrollY * 0.001 + index) * 2}deg)`;
                elemento.style.opacity = '1';
            }
        });
        
        ultimoScrollY = scrollY;
    }
    
    // Throttle para mejor rendimiento
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (!scrollTimeout) {
            scrollTimeout = setTimeout(() => {
                manejarScroll();
                scrollTimeout = null;
            }, 16); // ~60fps
        }
    });
    
    // Ejecutar una vez al cargar
    manejarScroll();
}

// ============================================
// ✨ EFECTOS HOVER AVANZADOS
// ============================================

function inicializarEfectosHover() {
    /**
     * Agrega efectos hover dinámicos y sorprendentes
     * Hace que cada interacción sea especial
     */
    
    // Efecto magnético en botones
    document.querySelectorAll('.boton-sorpresa, .cerrar-sorpresa').forEach(boton => {
        boton.addEventListener('mousemove', (e) => {
            const rect = boton.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            boton.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.05)`;
        });
        
        boton.addEventListener('mouseleave', () => {
            boton.style.transform = 'translate(0, 0) scale(1)';
        });
    });
    
    // Efecto de ondas en tarjetas
    document.querySelectorAll('.mensaje-card, .info-card').forEach(card => {
        card.addEventListener('click', function(e) {
            // Crear onda desde el punto de clic
            const ripple = document.createElement('div');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 107, 157, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
    
    // Agregar keyframe de ripple dinámicamente
    if (!document.querySelector('style[data-ripple]')) {
        const style = document.createElement('style');
        style.setAttribute('data-ripple', 'true');
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(2);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// ============================================
// 🌟 PARTÍCULAS DE FONDO ANIMADAS
// ============================================

function inicializarParticulasFondo() {
    /**
     * Crea un sistema de partículas flotantes en el fondo
     * Agrega profundidad visual y movimiento constante
     */
    
    const contenedorParticulas = document.createElement('div');
    contenedorParticulas.id = 'particulas-fondo';
    contenedorParticulas.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
        overflow: hidden;
    `;
    
    document.body.appendChild(contenedorParticulas);
    
    // Crear partículas
    for (let i = 0; i < 50; i++) {
        crearParticula(contenedorParticulas, i);
    }
    
    function crearParticula(contenedor, index) {
        const particula = document.createElement('div');
        const tamaño = Math.random() * 6 + 2;
        const velocidad = Math.random() * 20 + 10;
        
        particula.style.cssText = `
            position: absolute;
            width: ${tamaño}px;
            height: ${tamaño}px;
            background: ${Math.random() > 0.5 ? 'var(--color-primario)' : 'var(--color-secundario)'};
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            opacity: ${Math.random() * 0.5 + 0.1};
            animation: flotarParticula ${velocidad}s linear infinite;
            animation-delay: ${Math.random() * 20}s;
        `;
        
        contenedor.appendChild(particula);
        
        // Recrear partícula cuando termine la animación
        particula.addEventListener('animationend', () => {
            particula.remove();
            crearParticula(contenedor, index);
        });
    }
    
    // Agregar keyframe de flotación
    if (!document.querySelector('style[data-particulas]')) {
        const style = document.createElement('style');
        style.setAttribute('data-particulas', 'true');
        style.textContent = `
            @keyframes flotarParticula {
                0% {
                    transform: translateY(0) translateX(0) rotate(0deg);
                }
                25% {
                    transform: translateY(-20px) translateX(10px) rotate(90deg);
                }
                50% {
                    transform: translateY(-40px) translateX(-10px) rotate(180deg);
                }
                75% {
                    transform: translateY(-20px) translateX(5px) rotate(270deg);
                }
                100% {
                    transform: translateY(0) translateX(0) rotate(360deg);
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// ============================================
// 🎨 EFECTOS ESPECIALES DINÁMICOS
// ============================================

function crearEfectosEspeciales() {
    /**
     * Crea efectos especiales que hacen la página única
     * Incluye efectos de cursor, sonidos, y sorpresas
     */
    
    // Efecto de cursor personalizado con corazones
    agregarEfectoCursorCorazones();
    
    // Efecto de typing en el título
    efectoTypingTitulo();
    
    // Animación de números contadores
    animarContadores();
    
    // Efecto de confeti al hacer clic en el botón sorpresa
    agregarEfectoConfeti();
}

function agregarEfectoCursorCorazones() {
    let corazonesCursor = [];
    
    document.addEventListener('mousemove', (e) => {
        // Solo crear cada 100ms para no saturar
        if (Math.random() < 0.05) {
            const corazon = document.createElement('div');
            corazon.textContent = Math.random() > 0.5 ? '💕' : '❤️';
            corazon.style.cssText = `
                position: fixed;
                left: ${e.clientX}px;
                top: ${e.clientY}px;
                font-size: ${Math.random() * 20 + 10}px;
                pointer-events: none;
                z-index: 9999;
                animation: corazonCursor 1s ease-out forwards;
                color: ${Math.random() > 0.5 ? 'var(--color-primario)' : 'var(--color-secundario)'};
            `;
            
            document.body.appendChild(corazon);
            corazonesCursor.push(corazon);
            
            // Limitar número de corazones
            if (corazonesCursor.length > 10) {
                const viejo = corazonesCursor.shift();
                viejo.remove();
            }
            
            setTimeout(() => {
                if (corazon.parentNode) {
                    corazon.remove();
                    const index = corazonesCursor.indexOf(corazon);
                    if (index > -1) corazonesCursor.splice(index, 1);
                }
            }, 1000);
        }
    });
    
    // Agregar keyframe
    if (!document.querySelector('style[data-corazon-cursor]')) {
        const style = document.createElement('style');
        style.setAttribute('data-corazon-cursor', 'true');
        style.textContent = `
            @keyframes corazonCursor {
                0% {
                    transform: scale(0) rotate(0deg);
                    opacity: 1;
                }
                50% {
                    transform: scale(1.2) rotate(180deg);
                    opacity: 0.8;
                }
                100% {
                    transform: scale(0) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

function efectoTypingTitulo() {
    const titulo = document.querySelector('.titulo-principal');
    if (!titulo) return;
    
    const textoOriginal = titulo.textContent;
    titulo.textContent = '';
    
    let i = 0;
    const timer = setInterval(() => {
        if (i < textoOriginal.length) {
            titulo.textContent += textoOriginal.charAt(i);
            i++;
        } else {
            clearInterval(timer);
            // Agregar efecto de parpadeo del cursor
            titulo.style.borderRight = '2px solid var(--color-primario)';
            setTimeout(() => {
                titulo.style.borderRight = 'none';
            }, 500);
        }
    }, 100);
}

function animarContadores() {
    // Los contadores ya se animan, pero podemos agregar más efectos
    const contadores = document.querySelectorAll('.contador-numero');
    
    contadores.forEach(contador => {
        contador.addEventListener('DOMSubtreeModified', () => {
            contador.style.transform = 'scale(1.2)';
            contador.style.color = 'var(--color-secundario)';
            
            setTimeout(() => {
                contador.style.transform = 'scale(1)';
                contador.style.color = 'var(--color-primario)';
            }, 200);
        });
    });
}

function agregarEfectoConfeti() {
    const botonSorpresa = document.getElementById('boton-sorpresa');
    
    if (botonSorpresa) {
        botonSorpresa.addEventListener('click', () => {
            crearConfeti();
        });
    }
}

function crearConfeti() {
    const colores = ['#ff6b9d', '#ff85a1', '#ffb3d9', '#ff99c8', '#e1255e'];
    
    for (let i = 0; i < 50; i++) {
        const confeti = document.createElement('div');
        confeti.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            background: ${colores[Math.floor(Math.random() * colores.length)]};
            left: 50%;
            top: 50%;
            pointer-events: none;
            z-index: 9999;
            animation: confetiExplosion 1s ease-out forwards;
            border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
        `;
        
        // Dirección aleatoria
        const angulo = (Math.PI * 2 * i) / 50;
        const velocidad = Math.random() * 200 + 100;
        const x = Math.cos(angulo) * velocidad;
        const y = Math.sin(angulo) * velocidad;
        
        confeti.style.setProperty('--x', `${x}px`);
        confeti.style.setProperty('--y', `${y}px`);
        
        document.body.appendChild(confeti);
        
        setTimeout(() => confeti.remove(), 1000);
    }
    
    // Agregar keyframe
    if (!document.querySelector('style[data-confeti]')) {
        const style = document.createElement('style');
        style.setAttribute('data-confeti', 'true');
        style.textContent = `
            @keyframes confetiExplosion {
                0% {
                    transform: translate(-50%, -50%) scale(0) rotate(0deg);
                    opacity: 1;
                }
                50% {
                    transform: translate(calc(-50% + var(--x) * 0.5), calc(-50% + var(--y) * 0.5)) scale(1) rotate(180deg);
                    opacity: 1;
                }
                100% {
                    transform: translate(calc(-50% + var(--x)), calc(-50% + var(--y))) scale(0.5) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// ============================================
// 🏷️ FUNCIONES AUXILIARES
// ============================================

function agregarIndicesAnimacion() {
    /**
     * Agrega índices CSS personalizados para animaciones escalonadas
     */
    
    document.querySelectorAll('.galeria-item').forEach((item, index) => {
        item.style.setProperty('--item-index', index);
    });
    
    document.querySelectorAll('.mensaje-card').forEach((card, index) => {
        card.style.setProperty('--card-index', index);
    });
}

// ============================================
// 🎵 MÚSICA DE FONDO (OPCIONAL)
// ============================================

function inicializarMúsicaDeFondo() {
    /**
     * Función opcional para agregar música de fondo
     * Descomenta para usar con una URL de música
     */
    
    /*
    const audio = document.createElement('audio');
    audio.src = 'https://example.com/musica-romantica.mp3';
    audio.loop = true;
    audio.volume = 0.3; // Volumen bajo
    
    // Reproducir al hacer clic en la página
    document.addEventListener('click', () => {
        if (audio.paused) {
            audio.play().catch(err => console.log('No se puede reproducir audio:', err));
        }
    }, { once: true });
    */
}

// ============================================
// 📝 FUNCIONES ÚTILES
// ============================================

/**
 * Función para cambiar datos dinámicamente
 * Útil si quieres actualizar información sin recargar
 */
function actualizarDatos(nuevosDatos) {
    console.log('Actualizando datos en la página:', nuevosDatos);
    
    if (nuevosDatos.nombre_novia) {
        document.title = `💕 ${nuevosDatos.nombre_novia} & ${nuevosDatos.mi_nombre} 💕`;
    }
    
    // Aquí puedes agregar más actualizaciones según necesites
}

function inicializarGaleriaModal() {
    document.querySelectorAll('.galeria-item').forEach(item => {
        item.addEventListener('click', () => {
            item.style.transition = 'transform 0.35s ease';
            item.style.transform = 'scale(1.05)';

            setTimeout(() => {
                item.style.transform = 'scale(1)';
            }, 250);
        });
    });
}

// El modal de galería se mantiene en el HTML pero no se usa en este modo de interacción.

/**
 * Función para reproducir sonido de éxito
 */
function reproducirSonidoExito() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscilador = audioContext.createOscillator();
    const ganador = audioContext.createGain();
    
    oscilador.connect(ganador);
    ganador.connect(audioContext.destination);
    
    oscilador.frequency.value = 528; // Frecuencia del amor ❤️
    oscilador.type = 'sine';
    
    ganador.gain.setValueAtTime(0.5, audioContext.currentTime);
    ganador.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
    
    oscilador.start(audioContext.currentTime);
    oscilador.stop(audioContext.currentTime + 0.5);
}

console.log(`
╔═══════════════════════════════════════════════════════════════════╗
║         💕 PÁGINA ROMÁNTICA SÚPER DINÁMICA 💕                  ║
║                                                                 ║
║   ✨ Animaciones avanzadas activadas                            ║
║   🌟 Partículas flotantes activadas                             ║
║   🎭 Efectos hover dinámicos activados                          ║
║   📜 Scroll parallax activado                                   ║
║   🎨 Efectos de cursor activados                                ║
║   🎊 Confeti sorpresa activado                                  ║
║                                                                 ║
║   ¡La página está viva y responde a cada interacción!           ║
╚═══════════════════════════════════════════════════════════════════╝
`);
