@echo off & setlocal enabledelayedexpansion

rem 判断cmd中是否有JAVA_HOME
rem set JAVA_HOME=D:\App\Java\jdk1.8.0_172
IF "%JAVA_HOME%" == "" (
	goto END
) ELSE (
    goto START
)

:END
	rem cmd中未找到JAVA_HOME，请在此启动文件中第4行指定，然后尝试
    echo Not JAVA_HOME Find, Please add JAVA_HOME in this file line 4
	pause
	exit

:START
	rem 获取应用的根目录
	cd ../
	set BIN_DIR=%cd%
	set CONF_YML=%BIN_DIR%\conf\bootstrap.yml

	cd %BIN_DIR%\lib
	rem 查找aj-report*.jar启动文件，版本号每次会变
	for /f "delims=" %%i in ('dir /a-d /b /on aj-report*.jar') do (
	   set BOOT_JAR=%%i
	)

	rem 查找附加的驱动，加到java启动的classpath中
	for %%i in ("*") do (
		if "%%i" neq "%BOOT_JAR%" (
			set LIB_JARS=!LIB_JARS!%BIN_DIR%\lib\%%i;
		)
	)

	rem 启动内存设置，请根据自己需要调整
	cd %BIN_DIR%\bin
	set JAVA_OPTS= -server -Xms1g -Xmx2g -Xmn256m -XX:PermSize=128m -Xss256k

	rem 正式启动
	%JAVA_HOME%\bin\java %JAVA_OPTS% -Xbootclasspath/a:%LIB_JARS% -jar -Dspring.config.location=%CONF_YML% %BIN_DIR%\lib\%BOOT_JAR%
