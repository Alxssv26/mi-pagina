@echo off
REM =========================================================
REM 📸 SCRIPT PARA COPIAR FOTOS A LA PÁGINA ROMÁNTICA 📸
REM =========================================================

title Copiar Fotos - Pagina Romantica
color 0F

echo.
echo ╔═══════════════════════════════════════════════════════╗
echo ║   📸 COPIANDO TUS FOTOS CON VALERIA 📸              ║
echo ║                                                       ║
echo ║   Origen:  c:\fotos con mi vale\                    ║
echo ║   Destino: c:\practica\static\images\               ║
echo ╚═══════════════════════════════════════════════════════╝
echo.

REM Verificar si la carpeta de origen existe
if not exist "c:\fotos con mi vale" (
    echo ❌ ERROR: La carpeta "c:\fotos con mi vale" no existe
    echo.
    echo Verifica la ruta y crea la carpeta si es necesario.
    pause
    exit /b 1
)

REM Crear la carpeta de destino si no existe
if not exist "c:\practica\static\images" (
    echo 📁 Creando carpeta de destino...
    mkdir "c:\practica\static\images"
)

REM Copiar las fotos
echo 📋 Copiando fotos...
xcopy "c:\fotos con mi vale\*.*" "c:\practica\static\images\" /Y /Q

if %errorlevel% equ 0 (
    echo.
    echo ✅ ¡FOTOS COPIADAS CON ÉXITO! ✅
    echo.
    echo Las siguientes fotos están listas:
    dir "c:\practica\static\images\" /B
    echo.
    echo 🌟 Ahora ve a app.py y personaliza las descripciones
    echo 🌟 Luego ejecuta iniciar.bat
    echo.
) else (
    echo.
    echo ❌ Hubo un error al copiar las fotos
    echo.
)

pause
