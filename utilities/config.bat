setlocal
if "%SUBSCRIPT%"=="" ( start notepad.exe "%CD%\%~nx0" & exit )
endlocal

:: verbose
set VERBOSEWRAPPER=n

:: skip check depends
set SKIPCHECKDEPENDS=y


:: dry run
set DRYRUN=n

set DEVMODE=y


:: headless mode
set APPCHROMIUM=y

set PORT=4343

