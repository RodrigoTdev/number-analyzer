


@echo off
start firefox "http://localhost:5190/" -WindowStyle Maximized -WindowPosition Left
wt -d "%CD%" PowerShell -NoExit -Command "npm run dev"









