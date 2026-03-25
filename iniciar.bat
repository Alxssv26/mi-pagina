@echo off
REM ============================================
REM 💕 SCRIPT PARA INICIAR LA PAGINA ROMANTICA
REM ============================================

title Pagina Romantica - Flask
color 0A

echo.
echo ╔═══════════════════════════════════════════════╗
echo ║   💕 PAGINA WEB ROMANTICA - FLASK 💕        ║
echo ║                                               ║
echo ║         Iniciando servidor...                 ║
echo ╚═══════════════════════════════════════════════╝
echo.

REM Verificar si Flask está instalado
py -c "import flask" >nul 2>&1
if %errorlevel% neq 0 (
    echo ⚠️  Flask no está instalado.
    echo.
    echo Instalando dependencias...
    py -m pip install -r requirements.txt
    echo.
)

REM Iniciar el servidor
py app.py

pause
