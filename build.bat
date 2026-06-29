@echo off
cd /d "c:\Users\Administrator\Documents\GitHub\厄瓜多尔\plaza-rodolfo-baquerizo-moreno"
echo Cleaning up old build files...
if exist ".next" (
  echo Removing .next folder...
  rmdir /s /q ".next" 2>nul
)
if exist "out" (
  echo Removing out folder...
  rmdir /s /q "out" 2>nul
)
echo Running build...
set CURRENT_SITE_DOMAIN=plazabaquerizo.com
call npm run build
echo Build complete with exit code %ERRORLEVEL%
pause
