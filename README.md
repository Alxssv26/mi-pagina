
# 💕 Página Web Romántica - Flask

Una hermosa página web romántica interactiva hecha con **Flask**, **HTML**, **CSS** y **JavaScript**. Perfecta para sorprender a tu amor con un diseño moderno, animaciones hermosas y funcionalidades interactivas.

## ✨ Características

- ✅ **Contador de tiempo juntos** - Actualización en tiempo real
- ✅ **Galería dinámiva** - Muestra fotos especiales
- ✅ **Corazones flotantes** - Animaciones románticas
- ✅ **Botón sorpresa** - Modal con animaciones especiales
- ✅ **Diseño responsivo** - Funciona en móvil y PC
- ✅ **Mensajes personalizables** - Desde Python
- ✅ **Animated y moderno** - Efectos visuales hermosos
- ✅ **Fácil de personalizar** - Solo edita `app.py`

## 📋 Requisitos

- Python 3.7+
- Flask
- Navegador web moderno

## 🚀 Instalación

### 1. Instalar Flask

```bash
pip install flask
```

O si tienes `requirements.txt`:

```bash
pip install -r requirements.txt
```

### 2. Ejecutar la aplicación

```bash
python app.py
```

### 3. Abrir en el navegador

```
http://localhost:5000
```

## ⚙️ Personalización

### Editar datos desde `app.py`

Abre el archivo `app.py` y modifica la sección **CONFIGURACIÓN** (línea ~20):

```python
CONFIGURACION = {
    # ← Tu nombre
    'mi_nombre': 'Tu Nombre',
    
    # ← Nombre de tu novia
    'nombre_novia': 'Tu Novia',
    
    # ← Fecha de inicio (YYYY-MM-DD)
    'fecha_inicio': '2023-01-15',
    
    # ← Color temático
    'color_tema': '#ff6b9d',
    
    # ← Mensajes personalizados
    'mensajes': [
        '❤️ Te amo más cada día',
        '💕 Eres lo más hermoso en mi vida',
        # Agrega más mensajes aquí
    ],
    
    # ← URLs de imágenes
    'imagenes': [
        'https://via.placeholder.com/400x400/ff6b9d/ffffff?text=Nos+Juntos+💕',
        # Agrega más imágenes aquí
    ]
}
```

## 📁 Estructura del Proyecto

```
practica/
│
├── app.py                      # Backend Flask
│
├── templates/
│   └── index.html             # HTML con Jinja2
│
├── static/
│   ├── css/
│   │   └── styles.css         # Estilos y animaciones
│   │
│   ├── js/
│   │   └── script.js          # Funcionalidades JavaScript
│   │
│   └── images/                # Carpeta para fotos locales
│
└── README.md                   # Este archivo
```

## 🎨 Personalizar Imágenes

### Opción 1: Usar URLs externas

En `app.py`, usa URLs completas en la lista `imagenes`:

```python
'imagenes': [
    'https://ejemplo.com/foto1.jpg',
    'https://ejemplo.com/foto2.jpg',
]
```

### Opción 2: Usar imágenes locales

1. Guarda tus fotos en `static/images/`
2. Usa rutas relativas en `app.py`:

```python
'imagenes': [
    url_for('static', filename='images/foto1.jpg'),  # En Python
    '/static/images/foto2.jpg',                      # O URL directo
]
```

## 🎯 Funcionalidades Principales

### 📅 Contador en Tiempo Real
- Muestra días, horas, minutos y segundos juntos
- Se actualiza automáticamente cada segundo
- Animaciones suaves al cambiar números

### 💫 Corazones Flotantes
- Corazones que flotan aleatoriamente por la pantalla
- Crean un efecto muy romántico
- Se generan continuamente

### 🎁 Botón Sorpresa
- Modal que explota en corazones al hacer clic
- Animaciones espectaculares
- Cierra con botón o al hacer clic afuera

### 📸 Galería de Imágenes
- Grid responsivo
- Efectos hover suave
- Overlay con información

### 💬 Mensajes Personalizados
- Varios mensajes románticos
- Se muestran en cards bonitas
- Personalizables desde Python

## 🎵 Música de Fondo (Opcional)

Descomenta la función `inicializarMúsicaDeFondo()` en `static/js/script.js` y proporciona una URL de música:

```javascript
function inicializarMúsicaDeFondo() {
    const audio = document.createElement('audio');
    audio.src = 'https://ejemplo.com/musica.mp3';
    audio.loop = true;
    audio.volume = 0.3;
    // ... resto del código
}
```

## 🌈 Cambiar Colores

En `static/css/styles.css`, busca las **variables root**:

```css
:root {
    --color-primario: #ff6b9d;      /* Color principal (rosa) */
    --color-secundario: #ff85a1;    /* Color secundario */
    --color-acento: #ffb3d9;        /* Color acento */
    --color-fondo: #fff5f7;         /* Fondo */
    /* ... más variables ... */
}
```

Cambia los valores hex por los colores que quieras.

## 📱 Responsivo

La página se adapta automáticamente a:
- 📱 Teléfonos móviles (480px+)
- 📊 Tablets (768px+)
- 💻 Pantallas grandes (1200px+)

## 🐛 Solución de Problemas

### No funciona el contador
- Verifica que `fecha_inicio` en `app.py` sea correcto (formato: 'YYYY-MM-DD')

### Imágenes no se cargan
- Verifica las URLs de las imágenes
- Si usas imágenes locales, asegúrate de que estén en `static/images/`

### Flask no funciona
- Instala: `pip install flask`
- Verifica que estés en la carpeta correcta
- Prueba: `python app.py`

### Puerto 5000 en uso
- Cambia el puerto en `app.py` línea final:
  ```python
  app.run(debug=True, host='localhost', port=8000)  # Cambia a otro puerto
  ```

## 🎓 Estructura Técnica

### Backend
- **Framework**: Flask (microframework de Python)
- **Motor de plantillas**: Jinja2 (viene con Flask)
- **Datos**: Se pasan del backend al frontend

### Frontend
- **HTML5**: Estructura semántica
- **CSS3**: Grid, Flexbox, animaciones
- **Vanilla JavaScript**: Sin dependencias externas
- **Responsive Design**: Media queries

## 📚 Tecnologías Usadas

- [Flask](https://flask.palletsprojects.com/) - Backend web
- [Jinja2](https://jinja.palletsprojects.com/) - Plantillas
- [HTML5](https://www.w3.org/TR/html5/) - Marcado
- [CSS3](https://www.w3.org/Style/CSS/) - Estilos
- [JavaScript Vanilla](https://developer.mozilla.org/es/docs/Web/JavaScript) - Interactividad
- [Google Fonts](https://fonts.google.com/) - Tipografías

## 💝 Consejos Finales

1. **Personaliza todo** - Cambia nombres, fechas, mensajes
2. **Agrega tu música favorita** - Descomenta la parte de audio
3. **Usa fotos reales** - Sustituye los placeholders por tus fotos
4. **Comparte el código** - Muestra a tu novia cómo está hecho
5. **¡Sorprende!** - Abre la página en su dispositivo

---

**Hecho con ❤️ para hacer sonreír a tu amor**

¿Preguntas? Consulta el código - ¡Está bien comentado!

**Versión**: 1.0  
**Última actualización**: 2026-03-24  
**Estado**: Listo para usar 🚀
