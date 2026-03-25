@echo off
REM ╔════════════════════════════════════════════════════════════╗
REM ║  ✨ CONFIGURACIÓN RÁPIDA - FOTOS + DESCRIPCIONES ✨      ║
REM ║                                                            ║
REM ║  Este script automatiza TODO:                             ║
REM ║  1️⃣  Copia tus fotos automáticamente                      ║
REM ║  2️⃣  Abre el editor para personalizar descripciones       ║
REM ║  3️⃣  Inicia la página web dentro de 10 segundos           ║
REM ╚════════════════════════════════════════════════════════════╝

title ⚡ Instalación Rápida - Página Romántica
color 0A

cls
echo ╔════════════════════════════════════════════════════════════╗
echo ║           📸 CONFIGURACIÓN RÁPIDA 📸                      ║
echo ║                                                            ║
echo ║  Hola Alessandro! 👋                                       ║
echo ║                                                            ║
echo ║  Este script va a:                                         ║
echo ║  1. Copiar todas tus fotos con Valeria                     ║
echo ║  2. Dejar que edites las descripciones                     ║
echo ║  3. Iniciar tu página romántica                            ║
echo ║                                                            ║
echo ║  ¿Estás listo? (Presiona una tecla)                        ║
echo ╚════════════════════════════════════════════════════════════╝
pause

REM PASO 1: Copiar fotos
cls
echo.
echo 📸 PASO 1: COPIANDO TUS FOTOS...
echo.

if not exist "c:\fotos con mi vale" (
    echo ❌ ERROR: No encontré la carpeta "c:\fotos con mi vale"
    echo.
    echo Por favor:
    echo 1. Copia todas tus fotos a: c:\fotos con mi vale\
    echo 2. Vuelve a ejecutar este script
    echo.
    pause
    exit /b 1
)

if not exist "c:\practica\static\images" (
    mkdir "c:\practica\static\images"
)

xcopy "c:\fotos con mi vale\*.*" "c:\practica\static\images\" /Y /Q >nul

echo ✅ Fotos copiadas con éxito!
echo.
echo Archivos encontrados:
dir "c:\practica\static\images\" /B /O:N
echo.

REM PASO 2: Editar descripciones
echo 📝 PASO 2: PERSONALIZAR DESCRIPCIONES...
echo.
echo Se abrirá tu app.py para editar las descripciones
echo.
echo INSTRUCCIONES:
echo - Busca la sección 'imagenes': [
echo - Cambia las descripciones por tus propias frases
echo - Por ejemplo: 'descripcion': 'Tú siendo hermosa 💕'
echo - Guarda el archivo (Ctrl+S)
echo - Luego cierra la ventana
echo.
pause

start notepad "c:\practica\app.py"

echo.
echo ⏳ Esperando a que termines de editar...
echo    (Presiona una tecla cuando hayas guardado y cerrado)
echo.
pause

REM PASO 3: Iniciar la página
cls
echo ✨ PASO 3: INICIANDO TU PÁGINA ROMÁNTICA...
echo.
echo ⏱️  Iniciando en 5 segundos...
timeout /t 5 /nobreak

REM Ir a la carpeta y ejecutar
cd /d c:\practica
py app.py

pause
