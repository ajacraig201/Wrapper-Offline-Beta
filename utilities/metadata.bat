:: Wrapper: Offline Metadata
:: Important useful variables that are displayed by start_wrapper.bat
:: You probably shouldn't touch this. This only exists to make things easier for the devs everytime we go up a build number or something like that.

:: Opens this file in Notepad when run
setlocal
if "%SUBSCRIPT%"=="" ( start notepad.exe "%CD%\%~nx0" & exit )
endlocal

:: Version number and build number
set WRAPPER_VER=1.3.0
set WRAPPER_BLD=10

:: Custom stuff
set FIRST_NAME=n
set LAST_NAME=n
set FULL_NAME=%FIRST_NAME% %LAST_NAME%
set EMAIL=n
set DISCORD=n