:: Wrapper: Offline Registration
:: License: MIT
:: Author: xomdjl_#9058 (ytpmaker1000@gmail.com)

@echo off
SETLOCAL ENABLEDELAYEDEXPANSION
set META=utilities\metadata.bat
set TMPMETA=utilities\tempmetadata.bat
if "%SUBSCRIPT%"=="" ( 
	set SUBSCRIPT=y
	call !META!
	set "SUBSCRIPT="
) else (
	call !META!
)
title Wrapper: Offline Registration

:register
if not "%FIRST_NAME%"=="n" (
	echo ^(If you are seeing this and your copy ISN'T registered, that's a bug.^)
	echo It appears you already have this copy registered.
	echo:
	echo Would you like to re-register your copy of Wrapper: Offline to
) else (
	echo Would you like to register your copy of Wrapper: Offline to
)
echo be under your name? [Y/n]
echo:
set /p REGISTER= Response: 
if not '%REGISTER%'=='' set REGISTER=%REGISTER:~0,1%
if /i "%REGISTER%"=="y" (
	goto start
	:start
	cls
	:firstnamereask
	echo What is your first name?
	echo:
	set /p FIRSTNAME= First name: 
	if "%FIRSTNAME%"=="" ( echo You must put in your first name. && goto firstnamereask)
	:lastnamereask
	echo:
	echo What is your last name?
	echo:
	set /p LASTNAME= Last name: 
	if "%LASTNAME%"=="" ( echo You must put in your last name. && goto lastnamereask)
	echo:
	echo What is your email address? ^(Optional, press Enter to skip.^)
	echo:
	set /p MAIL= E-mail address: 
	echo:
	echo What is your Discord tag? ^(Optional, press Enter to skip.^)
	echo:
	set /p DISCORDTAG= Discord tag: 
	echo:
	echo Registering...
	PING -n 3 127.0.0.1>nul
	set PROCESS=y
	goto process
	:process
	if "%PROCESS%"=="y" (
	del %META%>nul
	echo :: Wrapper: Offline Metadata>> %META%
	echo :: Important useful variables that are displayed by start_wrapper.bat>> %META%
	echo :: You probably shouldn't touch this. This only exists to make things easier for the devs everytime we go up a build number or something like that.>> %META%
	echo:>> %META%
	echo :: Opens this file in Notepad when run>> %META%
	echo setlocal>> %META%
	echo if "%%SUBSCRIPT%%"=="" ( start notepad.exe "%%CD%%\%%~nx0" ^& exit )>> %META%
	echo endlocal>> %META%
	echo:>> %META%
	echo :: Version number and build number>> %META%
	echo set WRAPPER_VER=%WRAPPER_VER%>> %META%
	echo set WRAPPER_BLD=%WRAPPER_BLD%>> %META%
	echo:>> %META%
	echo :: Custom stuff>> %META%
	echo set FIRST_NAME=%FIRSTNAME%>> %META%
	echo set LAST_NAME=%LASTNAME%>> %META%
	echo set FULL_NAME=%%FIRST_NAME%% %%LAST_NAME%%>> %META%
	if "%MAIL%"=="" (
		echo set EMAIL=n>> %META%
	) else (
		echo set EMAIL=%MAIL%>> %META%
	)
	if "%DISCORDTAG%"=="" (
		echo set DISCORD=n>> %META%
	) else (
		echo set DISCORD=%DISCORDTAG%>> %META%
	)
	)
	cls
	goto finish
	:finish
	echo This copy of Wrapper: Offline has successfully been registered^^!
	echo:
	pause & exit /B
)
if /i "%REGISTER%"=="n" (
	set PROCESS=n
	goto seinfeld
	:seinfeld
	echo NO REGISTRATION FOR YOU^!
	PING -n 3 127.0.0.1>nul
	echo COME BACK, ONE YEAR^!
	PING -n 3 127.0.0.1>nul
	echo Closing...
	pause & exit /B
)
echo You must answer Yes or No. && goto register