@echo off
title Silencios da Saude - Portal Educativo
chcp 65001 > nul

echo ==========================================================
echo                  SILENCIOS DA SAUDE
echo          Portal Educativo de Saude Feminina
echo ==========================================================
echo.

rem 1. Verificar se o Node.js e o npm estao instalados
where node >nul 2>nul
set NODE_OK=%ERRORLEVEL%
where npm >nul 2>nul
set NPM_OK=%ERRORLEVEL%

if %NODE_OK% equ 0 if %NPM_OK% equ 0 (
    echo [OK] Node.js e npm detectados.
    
    rem Verificar se as dependencias existem na pasta node_modules
    if not exist "node_modules\" (
        echo [INFO] Pasta node_modules nao encontrada. Instalando dependencias...
        cmd.exe /c npm install
    )
    
    echo [INFO] Iniciando servidor de desenvolvimento Next.js...
    echo [INFO] O navegador abrira automaticamente em instantes...
    echo.
    echo Pressione CTRL+C nesta janela para encerrar o servidor.
    echo.
    
    rem Inicia um processo minimizado para abrir o navegador apos 4 segundos
    start /min cmd.exe /c "timeout /t 4 /nobreak >nul && start http://localhost:3000"
    
    cmd.exe /c npm run dev
    goto end
)

rem 2. Se nao tiver Node.js/npm, verificar se a pasta estatica out existe
echo [AVISO] Node.js ou npm nao foram detectados neste sistema.
echo [INFO] Tentando iniciar via pasta de compilacao estatica out/...
echo.

if exist "out\" (
    echo [INFO] Pasta estatica out/ encontrada!
    
    rem 2.1 Verificar se o emulador de servidor local pre-compilado [server.exe] existe
    if exist "server.exe" (
        echo [OK] Emulador de servidor local autônomo [server.exe] encontrado!
        echo [INFO] Iniciando servidor em http://localhost:3000
        echo [INFO] Este emulador funciona de forma independente de qualquer suporte instalado.
        echo.
        server.exe 3000
        goto end
    )
    
    rem 2.2 Verificar se o Python esta instalado para rodar o servidor estatico
    where python >nul 2>nul
    if %ERRORLEVEL% equ 0 (
        echo [OK] Python detectado.
        echo [INFO] Iniciando servidor estatico local...
        echo [INFO] O navegador abrira automaticamente em instantes...
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
        echo [INFO] Iniciando servidor estatico local...
        echo [INFO] O navegador abrira automaticamente em instantes...
        echo.
        echo Pressione CTRL+C para encerrar o servidor.
        echo.
        
        rem Inicia o navegador apos 2 segundos
        start /min cmd.exe /c "timeout /t 2 /nobreak >nul && start http://localhost:3000"
        
        python3 -m http.server 3000 --directory out
        goto end
    )
    
    rem 2.3 Emulador via PowerShell - Padrao do Windows, sem necessidade de programas adicionais
    where powershell >nul 2>nul
    if %ERRORLEVEL% equ 0 (
        echo [OK] Iniciando EMULACAO DE SERVIDOR LOCAL via PowerShell...
        echo [INFO] Este metodo emula um servidor web completo sem precisar instalar nada!
        echo [INFO] O navegador abrira automaticamente em instantes...
        echo.
        echo Pressione CTRL+C nesta janela para encerrar o servidor de emulacao.
        echo.
        
        rem Inicia o navegador apos 2 segundos
        start /min cmd.exe /c "timeout /t 2 /nobreak >nul && start http://localhost:3000"
        
        powershell -NoProfile -ExecutionPolicy Bypass -Command "$l = New-Object System.Net.HttpListener; $l.Prefixes.Add('http://localhost:3000/'); $l.Start(); Write-Host 'Servidor de Emulacao ativo em http://localhost:3000/'; try { while ($l.IsListening) { $ctx = $l.GetContext(); $req = $ctx.Request; $res = $ctx.Response; $p = $req.Url.LocalPath; if ($p -eq '/') { $p = '/index.html' }; $fp = Join-Path 'out' $p; if (Test-Path $fp -PathType Container) { $fp = Join-Path $fp 'index.html' }; if (!(Test-Path $fp -PathType Leaf)) { $alt = $fp + '.html'; if (Test-Path $alt -PathType Leaf) { $fp = $alt } }; if (Test-Path $fp -PathType Leaf) { $b = [System.IO.File]::ReadAllBytes($fp); $ext = [System.IO.Path]::GetExtension($fp).ToLower(); $ct = 'application/octet-stream'; if ($ext -eq '.html' -or $ext -eq '.htm') { $ct = 'text/html; charset=utf-8' } elseif ($ext -eq '.css') { $ct = 'text/css' } elseif ($ext -eq '.js') { $ct = 'application/javascript' } elseif ($ext -eq '.png') { $ct = 'image/png' } elseif ($ext -eq '.jpg' -or $ext -eq '.jpeg') { $ct = 'image/jpeg' } elseif ($ext -eq '.svg') { $ct = 'image/svg+xml' } elseif ($ext -eq '.json') { $ct = 'application/json' } elseif ($ext -eq '.ico') { $ct = 'image/x-icon' }; $res.Headers.Add('Content-Type', $ct); $res.ContentLength64 = $b.Length; $res.OutputStream.Write($b, 0, $b.Length); } else { $res.StatusCode = 404; }; $res.Close(); } } finally { $l.Stop(); }"
        goto end
    )
    
    echo [ERRO] Nao foi possivel encontrar Node.js, Python ou PowerShell neste computador.
    echo.
    echo [INFO] Mas a pasta out/ contendo os arquivos do portal esta pronta!
    echo [INFO] Voce pode simplesmente copiar a pasta out/ para um pendrive e usa-la.
    echo.
    goto end
)

echo [ERRO] Nao foi possivel iniciar a aplicacao localmente:
echo.
echo 1. O Node.js ou o npm nao estao instalados/configurados neste computador.
echo 2. A pasta estatica out/ ainda nao foi gerada.
echo.
echo Para resolver isso:
echo a) Instale o Node.js completo (que inclui o npm) para iniciar em modo de desenvolvimento.
echo    (Se ja instalou, feche todas as janelas e tente abrir o iniciar.bat de novo).
echo b) Ou gere a pasta estatica out/ executando "npm run build" em um computador
echo    que tenha o Node.js instalado e depois copie os arquivos para ca.
echo.

:end
pause
