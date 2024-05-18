


@echo off
wt -d "%CD%" powershell -NoExit -Command "code ."
timeout /t 5
taskkill /IM WindowsTerminal.exe /F









