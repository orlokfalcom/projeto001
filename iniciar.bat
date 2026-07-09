@echo off
title Silencios da Saude - Portal Educativo
chcp 65001 > nul

echo ==========================================================
echo                  SILENCIOS DA SAUDE
echo          Portal Educativo de Saude Feminina
echo ==========================================================
echo.

rem 1. Verificar se a pasta estatica out/ existe
if exist "out\" (
    echo [INFO] Pasta estática "out/" detectada (versão de produção).
    echo.
    echo Como você deseja iniciar a aplicação?
    echo [1] Versão de Produção (Rápida, offline e independente de recursos) [PADRÃO]
    echo [2] Versão de Desenvolvimento (Requer Node.js, executa em tempo real)
    echo.
    set /p opcao="Escolha uma opção (1 ou 2) e pressione Enter: "
    
    if "%opcao%"=="2" goto run_dev
    goto run_prod
)

:run_dev
rem 2. Iniciar em modo desenvolvimento (requer Node.js)
where node >nul 2>nul
if %ERRORLEVEL% equ 0 (
    echo.
    echo [OK] Node.js detectado.
    
    rem Verificar se as dependencias existem na pasta node_modules
    if not exist "node_modules\" (
        echo [INFO] Pasta node_modules não encontrada. Instalando dependências...
        cmd.exe /c npm install
    )
    
    echo [INFO] Iniciando servidor de desenvolvimento Next.js...
    echo [INFO] O navegador abrirá automaticamente em instantes...
    echo.
    echo Pressione CTRL+C nesta janela para encerrar o servidor.
    echo.
    
    rem Inicia um processo minimizado para abrir o navegador apos 4 segundos
    start /min cmd.exe /c "timeout /t 4 /nobreak >nul && start http://localhost:3000"
    
    cmd.exe /c npm run dev
    goto end
) else (
    echo [ERRO] Node.js não foi detectado neste sistema.
    echo Não é possível rodar o modo de desenvolvimento.
    echo.
    if exist "out\" (
        echo Iniciando em modo de produção como fallback...
        timeout /t 3 >nul
        goto run_prod
    )
)
goto erro_no_node

:run_prod
echo.
echo [INFO] Iniciando em modo de Produção (Offline)...
echo.

rem 3.1 Verificar se o emulador de servidor local pre-compilado (server.exe) existe
if exist "server.exe" (
    echo [OK] Emulador de servidor local autônomo (server.exe) encontrado!
    echo [INFO] Iniciando servidor em http://localhost:3000
    echo [INFO] Este emulador funciona de forma independente de qualquer suporte instalado.
    echo.
    server.exe 3000
    goto end
)

rem 3.2 Verificar se o Python esta instalado para rodar o servidor estatico
where python >nul 2>nul
if %ERRORLEVEL% equ 0 (
    echo [OK] Python detectado.
    echo [INFO] Iniciando servidor estático local via Python...
    echo [INFO] O navegador abrirá automaticamente em instantes...
    echo.
    echo Pressione CTRL+C para encerrar o servidor.
    echo.
    
    rem Inicia o navegador apos 2 segundos
    start /min cmd.exe /c "timeout /t 2 /nobreak >nul && start http://localhost:3000"
    
    python -m http.server 3000 --directory out
    goto end
)

where python3 >nul 2>nul
if %ERRORLEVEL% equ 0 (
    echo [OK] Python 3 detectado.
    echo [INFO] Iniciando servidor estático local via Python 3...
    echo [INFO] O navegador abrirá automaticamente em instantes...
    echo.
    echo Pressione CTRL+C para encerrar o servidor.
    echo.
    
    rem Inicia o navegador apos 2 segundos
    start /min cmd.exe /c "timeout /t 2 /nobreak >nul && start http://localhost:3000"
    
    python3 -m http.server 3000 --directory out
    goto end
)

rem 3.3 Emulador via PowerShell (Padrao do Windows, sem necessidade de programas adicionais)
where powershell >nul 2>nul
if %ERRORLEVEL% equ 0 (
    echo [OK] Iniciando EMULAÇÃO DE SERVIDOR LOCAL via PowerShell...
    echo [INFO] Este método emula um servidor web completo sem precisar instalar nada!
    echo [INFO] O navegador abrirá automaticamente em instantes...
    echo.
    echo Pressione CTRL+C nesta janela para encerrar o servidor de emulação.
    echo.
    
    rem Inicia o navegador apos 2 segundos
    start /min cmd.exe /c "timeout /t 2 /nobreak >nul && start http://localhost:3000"
    
    powershell -NoProfile -ExecutionPolicy Bypass -Command "$l = New-Object System.Net.HttpListener; $l.Prefixes.Add('http://localhost:3000/'); $l.Start(); Write-Host 'Servidor de Emulação ativo em http://localhost:3000/'; try { while ($l.IsListening) { $ctx = $l.GetContext(); $req = $ctx.Request; $res = $ctx.Response; $p = $req.Url.LocalPath; if ($p -eq '/') { $p = '/index.html' }; $fp = Join-Path 'out' $p; if (Test-Path $fp -PathType Container) { $fp = Join-Path $fp 'index.html' }; if (!(Test-Path $fp -PathType Leaf)) { $alt = $fp + '.html'; if (Test-Path $alt -PathType Leaf) { $fp = $alt } }; if (Test-Path $fp -PathType Leaf) { $b = [System.IO.File]::ReadAllBytes($fp); $ext = [System.IO.Path]::GetExtension($fp).ToLower(); $ct = 'application/octet-stream'; if ($ext -eq '.html' -or $ext -eq '.htm') { $ct = 'text/html; charset=utf-8' } elseif ($ext -eq '.css') { $ct = 'text/css; charset=utf-8' } elseif ($ext -eq '.js' -or $ext -eq '.mjs') { $ct = 'application/javascript; charset=utf-8' } elseif ($ext -eq '.png') { $ct = 'image/png' } elseif ($ext -eq '.jpg' -or $ext -eq '.jpeg') { $ct = 'image/jpeg' } elseif ($ext -eq '.webp') { $ct = 'image/webp' } elseif ($ext -eq '.gif') { $ct = 'image/gif' } elseif ($ext -eq '.svg') { $ct = 'image/svg+xml; charset=utf-8' } elseif ($ext -eq '.json') { $ct = 'application/json; charset=utf-8' } elseif ($ext -eq '.webmanifest') { $ct = 'application/manifest+json; charset=utf-8' } elseif ($ext -eq '.ico') { $ct = 'image/x-icon' } elseif ($ext -eq '.woff') { $ct = 'font/woff' } elseif ($ext -eq '.woff2') { $ct = 'font/woff2' } elseif ($ext -eq '.ttf') { $ct = 'font/ttf' } elseif ($ext -eq '.xml') { $ct = 'application/xml; charset=utf-8' }; $res.Headers.Add('Content-Type', $ct); $res.ContentLength64 = $b.Length; $res.OutputStream.Write($b, 0, $b.Length); } else { $res.StatusCode = 404; }; $res.Close(); } } finally { $l.Stop(); }"
    goto end
)

echo [ERRO] Não foi possível encontrar Node.js, Python ou PowerShell neste computador.
echo.
echo [INFO] Mas a pasta out/ contendo os arquivos do portal está pronta!
echo [INFO] Você pode simplesmente copiar a pasta out/ para um pendrive ou abri-la diretamente.
echo.
goto end

:erro_no_node
echo.
echo [ERRO] Não foi possível iniciar a aplicação localmente:
echo.
echo 1. O Node.js não está instalado neste computador.
echo 2. A pasta estática out/ ainda não foi gerada.
echo.
echo Para resolver isso:
echo a) Instale o Node.js nesta máquina para iniciar em modo de desenvolvimento.
echo b) Ou copie a pasta estática "out/" para a raiz deste projeto.
echo.

:end
pause
