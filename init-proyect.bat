


@echo off
start firefox "http://localhost:5173/" -WindowStyle Maximized -WindowPosition Left
wt -d "%CD%" PowerShell -NoExit -Command "npm run dev"









