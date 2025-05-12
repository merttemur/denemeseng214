@echo off
echo Mermaid Diyagramı PNG'ye Dönüştürme Aracı
echo =======================================
echo.

REM Node.js kontrol ediliyor
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
  echo Node.js bulunamadı! Lütfen https://nodejs.org adresinden yükleyin.
  pause
  exit /b
)

REM mermaid-cli kontrol ediliyor
where mmdc >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
  echo mermaid-cli bulunamadı. Yüklemeye çalışılıyor...
  call npm install -g @mermaid-js/mermaid-cli
  if %ERRORLEVEL% NEQ 0 (
    echo mermaid-cli kurulumu başarısız oldu!
    pause
    exit /b
  )
)

echo Diyagram dönüştürülüyor...
echo.

REM Diyagramı dönüştür
call node export_script.js

echo.
if %ERRORLEVEL% EQU 0 (
  echo Dönüştürme işlemi başarılı!
  echo PNG dosyası: prestige_hotel_architecture.png
) else (
  echo Dönüştürme işleminde bir hata oluştu.
)

pause 