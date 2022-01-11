setlocal
if "%SUBSCRIPT%"=="" ( start notepad.exe "%CD%\%~nx0" & exit )
endlocal

set VERBOSEWRAPPER=n

set SKIPCHECKDEPENDS=y

set DRYRUN=n

set DEVMODE=n

set PORT=4343

set AUTOUPDATE=y

