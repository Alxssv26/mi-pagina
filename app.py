# ============================================
# 💕 PÁGINA WEB ROMÁNTICA - BACKEND FLASK 💕
# ============================================
# Este archivo configura el servidor Flask
# y proporciona los datos que se mostrarán
# en la página web romántica.

import os
from flask import Flask, render_template, send_from_directory
from datetime import datetime

# Inicializar la aplicación Flask
app = Flask(__name__)

# ============================================
# 🎨 CONFIGURACIÓN PERSONALIZABLE
# ============================================

CONFIGURACION = {
    # Información personal
    'mi_nombre': 'Alessandro',
    'nombre_novia': 'Valeria',
    
    # Fecha de inicio de la relación (formato: 'YYYY-MM-DD')
    'fecha_inicio': '2024-11-01',
    
    # Color temático
    'color_tema': '#ff6b9d',  # Rosa romántico
    
    'mensajes': [
        '🥺 Me haces feliz de una forma tan bonita que no sé explicarla',
        '💕 Eres mi lugar seguro en este mundo',
        '🌷 Contigo todo se siente más suave y más bonito',
        '🐻 Solo quiero abrazarte y no soltarte nunca',
        '✨ Eres lo más tierno que tengo en mi vida',
        '🌸 Tu forma de ser me enamora todos los días',
        '🫶 A tu lado todo está bien, aunque todo esté mal',
        '💖 Eres mi persona favorita, siempre',
        '🌙 Pensar en ti me da paz',
        '🍓 Eres tan dulce que haces bonito mi mundo',
        '🐣 Me encantas en todas tus versiones',
        '🌼 Gracias por existir y estar conmigo',
    ],
    
    'imagenes': [
        {'url': '/static/images/1 AÑO.jpeg', 'descripcion': 'Un año de amor contigo💕'},
        {'url': '/static/images/CAFECITO.jpeg', 'descripcion': 'Una noche especial con cafecito☕'},
        {'url': '/static/images/FLORES AMARILLAS.jpeg', 'descripcion': 'Un dia especial con flores amarillas🌼'},
        {'url': '/static/images/INICIALES.jpeg', 'descripcion': 'Nuestras iniciales 💕'},
        {'url': '/static/images/NOSOTRO FILTRO.jpeg', 'descripcion': 'Nosotros haciendo locuras 😍'},
        {'url': '/static/images/NOSOTROS.jpeg', 'descripcion': 'La foto que mas me gusto y que sales hermosa 🥰'},
        {'url': '/static/images/PICNIC.jpeg', 'descripcion': 'Día de picnic🧺'},
        {'url': '/static/images/TAPADA.jpeg', 'descripcion': 'Nuestro 14 de febrero✨'},
    ]
}

# ============================================
# 📅 FUNCIONES AUXILIARES
# ============================================

def calcular_dias_juntos():
    fecha_inicio = datetime.strptime(CONFIGURACION['fecha_inicio'], '%Y-%m-%d')
    dias_juntos = (datetime.now() - fecha_inicio).days
    return dias_juntos

def obtener_mensaje_especial():
    import random
    return random.choice(CONFIGURACION['mensajes'])

# ============================================
# 🌐 RUTAS DE LA APLICACIÓN
# ============================================

@app.route('/')
def inicio():
    return render_template('index.html',
                         mi_nombre=CONFIGURACION['mi_nombre'],
                         nombre_novia=CONFIGURACION['nombre_novia'],
                         fecha_inicio=CONFIGURACION['fecha_inicio'],
                         color_tema=CONFIGURACION['color_tema'],
                         mensajes=CONFIGURACION['mensajes'],
                         imagenes=CONFIGURACION['imagenes'],
                         dias_juntos=calcular_dias_juntos(),
                         mensaje_especial=obtener_mensaje_especial())

@app.route('/sorpresa')
def sorpresa():
    return render_template('sorpresa.html',
                           nombre_novia=CONFIGURACION['nombre_novia'],
                           mi_nombre=CONFIGURACION['mi_nombre'])

# ============================================
# 🔑 RUTA PARA VERIFICACIÓN DE GOOGLE
# ============================================

@app.route('/google097f8cb6f34439b5.html')
def google_verification():
    return send_from_directory('static', 'google097f8cb6f34439b5.html')

# ============================================
# 🗺️ SITEMAP PARA MOTOR DE BÚSQUEDA
# ============================================

@app.route('/sitemap.xml')
def sitemap():
    return send_from_directory('static', 'sitemap.xml')

# ============================================
# ▶️ EJECUCIÓN DEL SERVIDOR
# ============================================

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 10000))
    print(f"""
    ╔═══════════════════════════════════════════╗
    ║   💕 PÁGINA WEB ROMÁNTICA INICIADA 💕   ║
    ║                                           ║
    ║     Accede a: http://localhost:{port}     ║
    ║                                           ║
    ║   Presiona Ctrl+C para detener           ║
    ╚═══════════════════════════════════════════╝
    """)
    app.run(host="0.0.0.0", port=port)