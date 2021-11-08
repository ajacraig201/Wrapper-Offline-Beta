setlocal
if "%SUBSCRIPT%"=="" ( start notepad.exe "%CD%\%~nx0" & exit )
endlocal

:: verbose
set VERBOSEWRAPPER=n

:: skip check depends
set SKIPCHECKDEPENDS=n


:: dry run
set DRYRUN=n

set DEVMODE=n


:: headless mode
set APPCHROMIUM=y

set PORT=4343

