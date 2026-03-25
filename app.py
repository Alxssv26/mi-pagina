# ============================================
# 💕 PÁGINA WEB ROMÁNTICA - BACKEND FLASK 💕
# ============================================
# Este archivo configura el servidor Flask
# y proporciona los datos que se mostrarán
# en la página web romántica.

import os
from flask import Flask, render_template
from datetime import datetime

# Inicializar la aplicación Flask
app = Flask(__name__)

# ============================================
# 🎨 CONFIGURACIÓN PERSONALIZABLE
# Cambia estos valores para personalizar tu página
# ============================================

CONFIGURACION = {
    # Información personal
    'mi_nombre': 'Alessandro',
    'nombre_novia': 'Valeria',
    
    # Fecha de inicio de la relación (formato: 'YYYY-MM-DD')
    'fecha_inicio': '2024-11-01',
    
    # Color temático (puedes cambiar el color principal)
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
    
    # Tu galería de fotos con descripciones personalizadas
    # Formato: {'url': ruta_de_imagen, 'descripcion': 'Tu descripción aquí'}
    'imagenes': [
        {
            'url': '/static/images/1 AÑO.jpeg',
            'descripcion': 'Un año de amor contigo💕'
        },
        {
            'url': '/static/images/CAFECITO.jpeg',
            'descripcion': 'Una noche especial con cafecito☕'
        },
        {
            'url': '/static/images/FLORES AMARILLAS.jpeg',
            'descripcion': 'Un dia especial con flores amarillas🌼'
        },
        {
            'url': '/static/images/INICIALES.jpeg',
            'descripcion': 'Nuestras iniciales 💕'
        },
        {
            'url': '/static/images/NOSOTRO FILTRO.jpeg',
            'descripcion': 'Nosotros haciendo locuras 😍'
        },
        {
            'url': '/static/images/NOSOTROS.jpeg',
            'descripcion': 'La foto que mas me gusto y que sales hermosa 🥰'
        },
        {
            'url': '/static/images/PICNIC.jpeg',
            'descripcion': 'Día de picnic🧺'
        },
        {
            'url': '/static/images/TAPADA.jpeg',
            'descripcion': 'Nuestro 14 de febrero✨'
        },
    ]
}

# ============================================
# 📅 FUNCIONES AUXILIARES
# ============================================

def calcular_dias_juntos():
    """
    Calcula los días que llevan juntos
    basándose en la fecha de inicio
    """
    fecha_inicio = datetime.strptime(CONFIGURACION['fecha_inicio'], '%Y-%m-%d')
    dias_juntos = (datetime.now() - fecha_inicio).days
    return dias_juntos

def obtener_mensaje_especial():
    """
    Obtiene un mensaje especial basado en el día actual
    """
    import random
    return random.choice(CONFIGURACION['mensajes'])

# ============================================
# 🌐 RUTAS DE LA APLICACIÓN
# ============================================

@app.route('/')
def inicio():
    """
    Ruta principal que renderiza la página romántica
    Pasa todos los datos necesarios al template HTML
    """
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
    """
    Ruta para la página de sorpresa roja con animación avanzada.
    """
    return render_template('sorpresa.html',
                           nombre_novia=CONFIGURACION['nombre_novia'],
                           mi_nombre=CONFIGURACION['mi_nombre'])

# ============================================
# ▶️ EJECUCIÓN DEL SERVIDOR
# ============================================

if __name__ == '__main__':
    # Ejecutar el servidor usando la configuración de entorno (útil en despliegues)
    puerto = int(os.environ.get('PORT', '5000'))
    host = os.environ.get('HOST', '0.0.0.0')
    deb = os.environ.get('DEBUG', 'True').lower() in ['1', 'true', 'yes']

    print("""
    ╔═══════════════════════════════════════════╗
    ║   💕 PÁGINA WEB ROMÁNTICA INICIADA 💕   ║
    ║                                           ║
    ║     Accede a: http://{host}:{port}      ║
    ║                                           ║
    ║   Presiona Ctrl+C para detener           ║
    ╚═══════════════════════════════════════════╝
    """.format(host=host, port=puerto))

    app.run(debug=deb, host=host, port=puerto)

