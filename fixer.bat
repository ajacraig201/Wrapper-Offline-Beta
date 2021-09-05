@echo off
title Wrapper: Offline Node.js Fixer

echo This will fix any problems having to do with Node.js in any
echo new updates of Wrapper: Offline.
echo:
pause
echo:
echo Running npm install...
PING -n 3 127.0.0.1>nul
pushd wrapper
call npm install
echo:
echo Alright, Node.js should be fixed now^!
echo:
pause & exit