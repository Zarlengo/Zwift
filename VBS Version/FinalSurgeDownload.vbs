Option Explicit
 '************** NOTES *****************
 ' v2.0 has updated the script to work with net-inspect v5. Excel files are exported into the CC_Script folder and then uploaded to the SQL with an excel application portion
 '********* VERSION HISTORY ************
 ' 1.0	10/8/2018	Initial Release for production
 ' 1.1	10/20/2018	Removed functions transfered to PowerShell
 ' 1.2	11/08/2018	Added supplier issue identification
 ' 1.3	11/14/2018	Added searching for missing e-tags
 ' 1.4	1/10/2019	Added termination steps for running iexplorer and wscript
 '					Added an auto-email when the termination happens (script must have failed previously)
 '					Changed the net-inspect columns from fixed to variable (they added a new one and it broke the script)
 ' 1.5	2/11/2019	Updated to V5 only script (v4 no longer available)
 '					Added AppActivate() prior to IE.focus(), script would fail when PowerShell script ran and momentarily took focus
 '
 ' 2.0	2/19/2019	Changed to excel export. v5 was too slow and would not update
 ' 2.1	6/28/2019	Added full reset of database to update E-Tags if they were changed, to be done once daily
 ' 2.2	8/1/2019	Added e-tag last edit date to database
 '************** TO DO *****************
 ' 
 '
 '****** CHANGE THESE SETTINGS *********
 Const adminMode = false
 Const debugMode = false
 Dim resetMode : resetMode = false
 
 Const startTagPrefix = "C12"
 Const tabletPassword = "Fl0wSh0p17"
 Const computerPassword = "Snowball18!"
 
 Dim DispositionArray : DispositionArray = Array("E-Tag Open", "Scrap", "Return to Customer", "Supplier Rework/Remake", "Advanced Rejection", "Rework", "in MRB", "Use As Is", "Void")
 Dim StatusArray : StatusArray = Array("Open", "Closed")

 '***************** Database Settings *******************
 Const dataSource = "PRODSQLAPP01\PRODSQLAPP01"
 Const initialCatalog = "CMM_Repository"								'Initial database
 Const MSNL = "G:\Flow\Operations\Seattle\Quality\Contract Cutting\Master Serial Number Listing-AeroEdge.xlsx"
 Const MRBL = "G:\Flow\Operations\Seattle\Quality\Contract Cutting\MRB Review\MRB Inventory.xlsx"
 
 '*********************************************************************************************************************************************
 '**************** INITIAL PARAMETERS *******************
 Dim ScriptHost : ScriptHost = Mid(WScript.FullName, InStrRev(WScript.FullName, "\") + 1, Len(WScript.FullName))
 Dim objShell : Set objShell = CreateObject("WScript.Shell")
 Dim oProcEnv : Set oProcEnv = objShell.Environment("Process")

 Dim allOPSsource : allOPSsource = "G:\Flow\Operations\Seattle\Quality\Contract Cutting\Operation Documents\Scripts\All Operations.vbs"
 Dim sOPsCmd : sOPsCmd = """" &  oProcEnv("windir") & "\SysWOW64\" & ScriptHost & """" & " """ & allOPSsource & """" & sArg

 Dim closeWindow : closeWindow = false
 Dim waitLoop : waitLoop = true
 Dim errorWindow : errorWindow = false
 Dim POChange : POChange = false
 Dim notFoundCount : notFoundCount = 0
 Dim errorSTring : errorString = ""
 Dim fileCnt : fileCnt = 0
 
 Dim strData, AccessArray, fieldArray(4), fieldsBad, sArg, Arg
 Dim SendData, RecieveData, wmi, cProcesses, oProcess
 Dim machineBox, strSelection, RemoteHost, RemotePort, machineString
 Dim objFolder, colFiles, objFile, objWorkbook,objExcel

 '**************** EXCEL CONSTANTS *******************
 
 Const xlDown				= -4121
 Const xlToLeft				= -4159
 Const xlToRight			= -4161
 Const xlUp					= -4162
 
 '**************** DATABASE CONSTANTS *******************

 Const sckClosed             = 0  '// Default. Closed 
 Const sckOpen               = 1  '// Open 
 Const sckListening          = 2  '// Listening 
 Const sckConnectionPending  = 3  '// Connection pending 
 Const sckResolvingHost      = 4  '// Resolving host 
 Const sckHostResolved       = 5  '// Host resolved 
 Const sckConnecting         = 6  '// Connecting 
 Const sckConnected          = 7  '// Connected 
 Const sckClosing            = 8  '// Peer is closing the connection 
 Const sckError              = 9  '// Error 

 Const adOpenDynamic		= 2	 '// Uses a dynamic cursor. Additions, changes, and deletions by other users are visible, and all types of movement through the Recordset are allowed, except for bookmarks, if the provider doesn't support them.
 Const adOpenForwardOnly	= 0	 '// Default. Uses a forward-only cursor. Identical to a static cursor, except that you can only scroll forward through records. This improves performance when you need to make only one pass through a Recordset.
 Const adOpenKeyset			= 1	 '// Uses a keyset cursor. Like a dynamic cursor, except that you can't see records that other users add, although records that other users delete are inaccessible from your Recordset. Data changes by other users are still visible.
 Const adOpenStatic			= 3	 '// Uses a static cursor, which is a static copy of a set of records that you can use to find data or generate reports. Additions, changes, or deletions by other users are not visible.
 Const adOpenUnspecified	= -1 '// Does not specify the type of cursor.

 Const adLockBatchOptimistic= 4	 '// Indicates optimistic batch updates. Required for batch update mode.
 Const adLockOptimistic		= 3	 '// Indicates optimistic locking, record by record. The provider uses optimistic locking, locking records only when you call the Update method.
 Const adLockPessimistic	= 2	 '// Indicates pessimistic locking, record by record. The provider does what is necessary to ensure successful editing of the records, usually by locking records at the data source immediately after editing.
 Const adLockReadOnly		= 1	 '// Indicates read-only records. You cannot alter the data.
 Const adLockUnspecified	= -1 '// Does not specify a type of lock. For clones, the clone is created with the same lock type as the original.

 Const adStateClosed		= 0  '// The object is closed
 Const adStateOpen			= 1  '// The object is open
 Const adStateConnecting	= 2  '// The object is connecting
 Const adStateExecuting		= 4  '// The object is executing a command
 Const adStateFetching		= 8  '// The rows of the object are being retrieved

 '********************************************************* 
 If Not WScript.Arguments.Count = 0 Then
	sArg = ""
	For Each Arg In Wscript.Arguments
		If Arg = "reset" Then
			resetMode = true
		Else
			sArg = Arg
		End If
	Next
 End If

 'Checks for existing vbs scripts that are running and terminates them, avoids locking up ports
 Set wmi = GetObject("winmgmts:root\cimv2") 
 Set cProcesses = wmi.ExecQuery("select * from win32_process where Name like '%mshta.exe%'") 
 For Each oProcess in cProcesses
	errorString = errorString & "MSHTA.exe PID: " & oProcess.ProcessID & "<br>"
	oProcess.Terminate()
 Next

 'Checks for existing vbs scripts and terminates them, ignores this script
 Dim sCmd : sCmd = "powershell -command exit (gwmi Win32_Process -Filter \""processid='$PID'\"").parentprocessid"
 Set objShell = CreateObject("WScript.Shell")
 Dim wsPID : wsPID = objShell.Run(sCmd, 0, True)
 Set cProcesses = wmi.ExecQuery("select * from win32_process where Name like '%wscript.exe%'") 
 For Each oProcess in cProcesses
	If oProcess.ProcessId <> wsPID Then
		errorString = errorString & "WScript.exe PID: " & oProcess.ProcessID & "<br>"
		oProcess.Terminate()
	End If
 Next

 'Checks for existing internet explorer instances and terminates any open ones
 Set cProcesses = wmi.ExecQuery("select * from win32_process where Name like '%iexplore.exe%'") 
 For Each oProcess in cProcesses
	errorString = errorString & "IExplorer.exe PID: " & oProcess.ProcessID & "<br>"
	oProcess.Terminate()
 Next
 
'  'Might not need this!!
'  If debugMode = False Then On Error Resume Next
' 	objShell.RegWrite "HKCU\Software\Microsoft\Windows\CurrentVersion\Internet Settings\Zones\3\1406", 0, "REG_DWORD"	'Changes security settings on ie to allow HTA
' 	objShell.RegWrite "HKLM\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters\TcpTimedWaitDelay", "30", "REG_DWORD"	'Changes TCP timeout settings if needing to restart program w/in 5 minutes
'  On Error Goto 0
  
 If errorString <> "" Then Error_File(errorString)


Dim objDictionary, obj
Const TXTlocation = "W:\Zwift_VBS\TXT Files\"
Const ZWOlocation = "W:\Zwift_VBS\ZWO Files\"
Dim objFSO : Set objFSO=CreateObject("Scripting.FileSystemObject")
Dim objHTMLFolder : Set objHTMLFolder = objFSO.GetFolder(TXTlocation)
Const ForReading = 1
Const ForWriting = 2
Const ForAppending = 8
Const TristateUseDefault = -2
Const TristateTrue = -1
Const TristateFalse = 0


' HM Time of 2:35:30 (11:51) 711s
Const HMString = "2:35:00"
Const HMDistance = 21097.5 'M
Const MIDistance = 1609 'M
Dim HMArr : HMArr = Split(HMString, ":")
Dim runKMperMin : runKMperMin = HMDistance / (HMArr(0) * 60 + HMArr(1) + HMArr(2) / 60)
Const runZone0 =   0.60	' Zone 0 / Walk: 60%
Const runSPD = 	   0.78 ' SPD / Interval Pace
Const runZone1 =   0.84	' Zone 1 / LRP / Easy: 84%
Const runZoneTRP = 0.90	' TRP / Run Durability: 90% (STR)
Const runZone2 =   0.96	' Zone 2 / MP / Steady: 96%
Const runZone3 =   0.98	' Zone 3 / HMP / ModHard: 98%
Const runZone4 =   1.03	' Zone 4 / TP / Hard: 103%
Const runZone5 =   1.11	' Zone 5 / IP / Very Hard 111%

Dim mileTime : mileTime = Int((HMArr(0) * 60 * 60 + HMArr(1) * 60 + HMArr(2)) / (HMDistance / MIDistance))
Dim timeString, miTime
Dim runZoneString : runZoneString = vbCrLf

miTime = mileTime / runZone1
timeString = Int(miTime / 60) & ":" & Right("00" & miTime MOD 60, 2)
runZoneString = runZoneString & "Zone 1 / LRP / Easy: " & timeString & vbCrLf

miTime = mileTime / runZoneTRP
timeString = Int(miTime / 60) & ":" & Right("00" & miTime MOD 60, 2)
runZoneString = runZoneString & "TRP / Run Durability: " & timeString & vbCrLf

miTime = mileTime / runZone2
timeString = Int(miTime / 60) & ":" & Right("00" & miTime MOD 60, 2)
runZoneString = runZoneString & "Zone 2 / MP / Steady: " & timeString & vbCrLf

miTime = mileTime / runZone3
timeString = Int(miTime / 60) & ":" & Right("00" & miTime MOD 60, 2)
runZoneString = runZoneString & "Zone 3 / HMP / ModHard: " & timeString & vbCrLf

miTime = mileTime / runZone4
timeString = Int(miTime / 60) & ":" & Right("00" & miTime MOD 60, 2)
runZoneString = runZoneString & "Zone 4 / TP / Hard: " & timeString & vbCrLf

miTime = mileTime / runZone5
timeString = Int(miTime / 60) & ":" & Right("00" & miTime MOD 60, 2)
runZoneString = runZoneString & "Zone 5 / IP / Very Hard: " & timeString & vbCrLf

Const bikeZone0 = 0.25
Const bikeZone1 = 0.65
Const bikeZone2 = 0.72
Const bikeZone3 = 0.82
Const bikeZone4 = 1.00
Const bikeZone5 = 1.15

Const testMode = True

Const casesLocation = "W:\Zwift_VBS\Cases\"
Include(casesLocation & "warmUp.vbs")
Include(casesLocation & "mainSetBike.vbs")
Include(casesLocation & "mainSetRun.vbs")
Include(casesLocation & "coolDown.vbs")
Sub Include (strFile)
	'Create objects for opening text file
	Dim objTextFile : Set objTextFile = objFSO.OpenTextFile(strFile, 1)
	ExecuteGlobal objTextFile.ReadAll	'Execute content of file.
	objTextFile.Close					'Close file
	Set objTextFile = Nothing			'Clean up
End Sub

' checkAndLoad
Set objDictionary = CreateObject("Scripting.Dictionary")
objDictionary.CompareMode = vbTextCompare
searchForTXTFiles(objHTMLFolder)
For Each obj in objDictionary.keys
	If testMode = True Then
		If obj = "7b85d341-4a7b-4f22-9af4-d132501419d8" Then
			createZWOFiles obj, objDictionary(obj)
		End If
	Else
		createZWOFiles obj, objDictionary(obj)
		Wscript.Echo "Complete"
		Wscript.Quit
	End If
Next



Wscript.Echo "Complete"
Wscript.Quit


'Calls function to create ie window, check final surge for new plans and downloads plans to an html file
Sub checkAndLoad()	
 Dim IE : Set IE = CreateObject("InternetExplorer.Application")
 IE.Visible = True


	'Gets the PID of the internet explorer window, fixes issue with IE.document.focus() moving into the background when the powershell script runs
	Set cProcesses = wmi.ExecQuery("select * from win32_process where Name like '%iexplore.exe%'") 
	Dim iePID : iePID = 0 : For Each oProcess in cProcesses
		iePID = oProcess.ProcessID
	Next
	If iePID = 0 Then
		Error_File("Error finding PID of iexplore.exe")
		Wscript.Quit
	End If

    'ADD CHECK FOR LOGIN REQUIREMENTS
        ' IE.Navigate ("https://log.finalsurge.com/login.cshtml")
        ' Do While (IE.Busy)
        '     wscript.sleep 200
        ' Loop




        ' objShell.AppActivate(iePID)
        ' IE.document.focus()	
        ' IE.document.getElementByID("login_name").innerText = "christopher@zarlengo.net"
        ' IE.document.getElementByID("login_password").innerText = "Cu0ngnhu"
        ' IE.document.getElementByID("login-validate").getElementsByClassName("submit_sect")(0).children(0).click

	IE.Navigate ("https://log.finalsurge.com/EnduranceNation/Plans")
	Do While (IE.Busy)
		wscript.sleep 200
	Loop
    Dim objDictionary, obj
    Set objDictionary = CreateObject("Scripting.Dictionary")
    objDictionary.CompareMode = vbTextCompare
    Dim planString, planID, planName
    Const planHTML = "https://log.finalsurge.com/EnduranceNation/planpreview?id="
    Dim plans, plan : Set plans = IE.document.getElementsByTagName("a")
    For Each plan in plans
        planString = plan.href
        planName = plan.InnerText
        If InStr(1, planString, "planpreview") <> 0 and plan.InnerText <> "Preview" Then
            planID = Split(planString, "=")(1)
            fileName = TXTlocation & planID & ".txt"
            If NOT FileExists(fileName) Then objDictionary.Add planID, planName
        End If
    Next
    Dim fileName, planDetails
    For Each obj in objDictionary.keys
        IE.Navigate (planHTML & obj)
        Do While (IE.Busy)
            wscript.sleep 200
        Loop
        planDetails = IE.document.getElementsByTagName("body")(0).children(0).children(3).children(0).children(0).children(0).children(1).InnerText
        fileName = TXTlocation & obj & ".txt"
        CreateAfile fileName, objDictionary(obj), planDetails
        Wscript.Echo  "created: " & objDictionary(obj)
    Next
	IE.Quit
 End Sub

Sub CreateAfile(fileName, fileTitle, fileBody)
    Dim fs : Set fs = CreateObject("Scripting.FileSystemObject")
    Dim a : Set a = fs.CreateTextFile(fileName, True, True)
    a.WriteLine(fileTitle)
    a.WriteLine(fileBody)
    a.Close
 End Sub

Function FileExists(FilePath)
  Dim fso : Set fso = CreateObject("Scripting.FileSystemObject")
  If fso.FileExists(FilePath) Then
    FileExists=CBool(1)
  Else
    FileExists=CBool(0)
  End If
 End Function
 
Sub searchForTXTFiles(fFolder)
    Dim objFileToRead, strFileText
	Set objFolder = objFSO.GetFolder(fFolder.Path)
	Set colFiles = objFolder.Files
	Dim objFile : For Each objFile in colFiles
		If UCase(objFSO.GetExtensionName(objFile.name)) = "TXT" Then
            If NOT objFSO.FolderExists(TXTlocation & objFSO.GetBaseName(objFile)) Then

                Set objFileToRead = objFile.OpenAsTextStream(ForReading, TristateUseDefault)
                strFileText = objFileToRead.ReadAll()
                objDictionary.Add objFSO.GetBaseName(objFile), strFileText
                objFileToRead.Close
                Set objFileToRead = Nothing
            ' Else
            '     Wscript.Echo "Already completed: " & objFSO.GetBaseName(objFile)
			    fileCnt = fileCnt + 1
            End If
		End If
	Next

	' Dim Subfolder : For Each Subfolder in fFolder.SubFolders
	' 	Call searchForTXTFiles(Subfolder)
	' Next
 End Sub

Sub createZWOFiles(folderName, fileTXT)
    Dim fileName, line, title, levelTrue
    Dim fs : Set fs = CreateObject("Scripting.FileSystemObject")
    If Not fs.FolderExists(TXTlocation & folderName) and testMode = False Then
        fs.CreateFolder(TXTlocation & folderName)
    End If
	Wscript.Echo folderName
	Dim dayDICT : Set dayDICT = CreateObject("Scripting.Dictionary")
    title = False
	Dim dayString : dayString = ""
	Dim daySave : daySave = ""
	Dim titleString : titleString = ""
    For Each line In Split(fileTXT, vbCrLf)
        If titleString = "" Then
            titleString = line
        Else
			If TrimString(line) = "" Then
            ElseIf left(line, 10) = "Plan Day #" Then
				If daySave = "" Then
					daySave = line
				Else
					dayDICT.add daySave, dayString
					daySave = line
					dayString = ""
				End If
			Else
				dayString = dayString & line & vbCrLf
            End If
        End If        
    Next
	If InStr(fileTXT, "Level 1") and InStr(fileTXT, "Level 1") and InStr(fileTXT, "Level 1") Then
		levelTrue = True
	Else
		levelTrue = False
	End If
	Dim dayInfo
	fileName = Split(Split(titleString, ",")(0), "[")(0)
	dayDICT.add daySave, dayString
	For Each dayInfo in dayDict.keys
		' Wscript.Echo dayInfo
		formatDayTXT titleString, dayInfo, dayDICT(dayInfo), TXTlocation & folderName, fileName, levelTrue
		' Wscript.Echo vbCrLf & vbCrLf
	Next
    If Not fs.FolderExists(ZWOlocation & fileName) and testMode = False Then
		fs.CopyFolder TXTlocation & folderName, ZWOlocation & fileName
		Wscript.Echo fileName
    End If
 End Sub

Sub formatDayTXT(header, weekDaySTR, dayText, fileLocation, fileName, isLevel)
    Dim fs : Set fs = CreateObject("Scripting.FileSystemObject")
	' Wscript.Echo header
	' Wscript.Echo vbCrLf
	Dim dayNum : dayNum = Split(weekDaySTR, "#")(1)
	Dim weekdayNum : weekdayNum = (Split(weekDaySTR, "#")(1) - 1) Mod 7 + 1
	Dim weekNum : weekNum = Int((Split(weekDaySTR, "#")(1) - 1) / 7) + 1
	Dim fileDesc : fileDesc = ""
	Dim dayDesc : dayDesc = ""
	Dim saveName, a, txtString, prevString
	Dim search, line, firstLine
	Dim searchString : searchString = array("Run", "Bike", "Swim", "Swim - Intervals", "Swim - Endurance", "Run - VO2 Max")
	Dim daysEvent : daysEvent = ""
	Dim eventTitle : eventTitle = ""
	Dim eventType : eventType = ""
	Dim newLine : newLine = False
	Dim headerString : headerString = "<workout_file>" & vbCrLf & "<author>Endurance Nation</author>" & vbCrLf & "<author_alias>Chris Zarlengo</author_alias>" & vbCrLf & "<authorIcon>UI/WhiteOrangeTheme/JerseyIcons/EnduranceNation2019_thumb.tga</authorIcon>" & vbCrLf & "<name>"
	Dim footerString : footerString = vbCrLf & "</workout>" & vbCrLf & "</workout_file>"
	Dim fileCnt : fileCnt = 0
	Dim zwoName : zwoName = ""
	Dim workoutString, cnt, maxCnt
	If isLevel Then
		maxCnt = 2
	Else
		maxCnt = 0
	End If
	For Each line in Split(dayText, vbCrLf)
		For Each search in searchString
			If TrimString(line) = search and TrimString(line) <> prevString Then
				If eventType <> "" and eventTitle <> "Other" Then
					workoutString = getWorkouts(daysEvent, eventType, isLevel)
					If workoutString <> False Then
						' Wscript.Echo "1 " & weekDaySTR & "|" & eventTitle
						workoutString = Replace(workoutString, chr(39), chr(34))
						saveName = "Zwift - EN " & fileName & " Day " & dayNum & " " & dayDesc & eventType
						zwoName = fileName & "_D" & dayNum & "_" & fileCnt & ".zwo"
						txtString = headerString & "Day " & weekdayNum & " " & eventTitle & "</name>" & vbCrLf
						txtString = txtString & "<activitySaveName>" & saveName & "</activitySaveName>" & vbCrLf
						txtString = txtString & "<description>" & fileName & vbCrLf & "Plan Day #" & dayNum & vbCrLf & eventTitle & vbCrLf & daysEvent & "</description>" & vbCrLf
						If eventType = "Run" Then
							txtString = txtString & runZoneString
						End If
						txtString = txtString & "<WorkoutPlan>" & fileName & "</WorkoutPlan>" & vbCrLf
						txtString = txtString & "<category>" & fileName & "</category>" & vbCrLf
						txtString = txtString & "<categoryIndex>0</categoryIndex>" & vbCrLf
						txtString = txtString & "<subcategory>Week " & Right("0" & weekNum, 2) & "</subcategory>" & vbCrLf
						txtString = txtString & "<sportType>" & LCase(eventType) & "</sportType>" & vbCrLf
						txtString = txtString & "<tags>" & eventTitle & "</tags>" & vbCrLf
						txtString = txtString & "<workout>"
						For cnt = 0 To maxCnt
							Wscript.Echo fileLocation & "\" & zwoName
							Set a = fs.CreateTextFile(fileLocation & "\" & zwoName, True, False)
							a.WriteLine(txtString & workoutString(cnt) & footerString)
							a.Close
							fileCnt = fileCnt + 1
						Next
					End If
				End If
				newLine = True
				If InStr(search, " ") > 0 Then
					eventType = Split(search, " ")(0)
				Else
					eventType = search
				End If
				firstLine = ""
				eventTitle = ""
				daysEvent = ""
				Exit For
			End If
		Next
		If newLine = True Then
			newLine = False
		ElseIf eventTitle = "" Then
			eventTitle = TrimString(line)
		Else
			daysEvent = daysEvent & line & vbCrLf
		End If
		If Left(line, 8) = "Priority" Then
			daysEvent = daysEvent & vbCrLf
		End If
		prevString = TrimString(line)
	Next
	If TrimString(eventTitle) <> "" Then
		If eventType = "" Then
			eventType = Split(eventTitle, " ")(0)
		End If
		workoutString = getWorkouts(daysEvent, eventType, isLevel)
		If workoutString <> False Then
			' Wscript.Echo "2 " & weekDaySTR & "|" & eventTitle
			workoutString = Replace(workoutString, chr(39), chr(34))
			saveName = "Zwift - EN " & fileName & " Day " & dayNum & " " & dayDesc & eventType
			zwoName = fileName & "_D" & dayNum & "_" & fileCnt & ".zwo"
			txtString = headerString & "Day " & weekdayNum & " " & eventTitle & "</name>" & vbCrLf
			txtString = txtString & "<activitySaveName>" & saveName & "</activitySaveName>" & vbCrLf
			txtString = txtString & "<description>" & fileName & vbCrLf & "Plan Day #" & dayNum & vbCrLf & eventTitle & vbCrLf & daysEvent
			If eventType = "Run" Then
				txtString = txtString & runZoneString
			End If
			txtString = txtString & "</description>" & vbCrLf
			txtString = txtString & "<WorkoutPlan>" & fileName & "</WorkoutPlan>" & vbCrLf
			txtString = txtString & "<category>" & fileName & "</category>" & vbCrLf
			txtString = txtString & "<categoryIndex>0</categoryIndex>" & vbCrLf
			txtString = txtString & "<subcategory>Week " & Right("0" & weekNum, 2) & "</subcategory>" & vbCrLf
			txtString = txtString & "<sportType>" & LCase(eventType) & "</sportType>" & vbCrLf
			txtString = txtString & "<tags>" & eventTitle & "</tags>" & vbCrLf
			txtString = txtString & "<workout>"
			For cnt = 0 To maxCnt
				Wscript.Echo workoutString
				Set a = fs.CreateTextFile(fileLocation & "\" & zwoName, True, False)
				a.WriteLine(txtString & workoutString(cnt) & footerString)
				a.Close
				fileCnt = fileCnt + 1
			Next
		End If
	End If
 End Sub

Function getWorkouts(workoutTXT, swimBikeRun, isLevel)
	Dim WUDictionary, MSDictionary, CDDictionary, maxCnt, workoutArr(2)
	If isLevel Then
		maxCnt = 2
	Else
		maxCnt = 0
	End If
	Dim exitLoop : exitLoop = False
	If (swimBikeRun <> "Run" and swimBikeRun <> "Bike") or workoutTXT = "" Then
		getWorkouts = False
		Exit Function
	End If

	Dim replaceArr :  replaceArr = array(chr(10), chr(34), 			 chr(96), chr(145), chr(146), chr(180))
	Dim newChrArr :    newChrArr = array(chr(13), chr(39) & chr(39), chr(39),  chr(39),  chr(39),  chr(39))
	Dim cnt : For cnt = 0 To UBound(replaceArr)
		workoutTXT = Replace(UCase(workoutTXT), replaceArr(cnt), newChrArr(cnt))
	Next

	If InStr(workoutTXT, "PLANNED:") > 0 Then
		Dim priorityStr : priorityStr = Right(workoutTXT, len(workoutTXT) - InStr(workoutTXT, "PLANNED:") - 8)
		priorityStr = TrimString(Left(priorityStr, InStr(priorityStr, chr(13)) - 1))
		If InStr(priorityStr, ":") > 0 Then
			duration = Split(priorityStr, ":")
			If InStr(duration(0), " ") > 0 Then
				durError = Split(duration(0), " ")
				duration(0) = durError(UBound(durError))
				durDistance = durError(0)
				If InStr(durDistance, ",") > 0 Then
					Wscript.Echo "YARDS? " & swimBikeRun & vbCrLf & workoutTXT
				End If
			End If
			If UBound(duration) = 1 Then
				If duration(1) <> "00" Then
					workoutTime = duration(0) * 60 + duration(1)
				Else
					workoutTime = duration(0) + duration(1) / 60
				End If
			ElseIf UBound(duration) = 2 Then
				workoutTime = duration(0) * 60 + duration(1) + duration(2) / 60
			Else
				Wscript.Echo "DURATION ERROR: " & line & "" & vbCrLf
			End If
			workoutTXT = Right(workoutTXT, len(workoutTXT) - InStr(workoutTXT, "PLANNED:"))
			workoutTXT = Right(workoutTXT, len(workoutTXT) - InStr(workoutTXT, chr(13)))
		Else
			'MILES ONLY
			Wscript.Echo "MILES ONLY? " & swimBikeRun & vbCrLf & workoutTXT
		End If
	End If
	Dim leftArr : leftArr = array("PRIORITY:", "CHOOSE YOUR ABILITY LEVEL:", "INDOOR SWEAT TEST", "RUN:", "ALL ABILITY LEVELS:", "RUN:")
	For cnt = 0 To UBound(leftArr)
		If InStr(workoutTXT, leftArr(cnt)) > 0 Then
			workoutTXT = Right(workoutTXT, len(workoutTXT) - InStr(workoutTXT, leftArr(cnt)))
			workoutTXT = Right(workoutTXT, len(workoutTXT) - InStr(workoutTXT, chr(13)) - 1)
		End If
	Next
	Do While AscW(Left(workoutTXT, 1)) = 13
		workoutTXT = Right(workoutTXT, Len(workoutTXT) - 1)
		If Len(workoutTXT) = 1 Then
			getWorkouts = False
			Exit Function
		End If
	Loop

	Dim rightArr : rightArr = array("COACH NOTE", "WARM DOWN: AS NEEDED.", "GOAL IS TO BE STEADY HERE, NOT FLASHY", "SWEAT TEST:")
	For cnt = 0 To UBound(rightArr)
		If InStr(workoutTXT, rightArr(cnt)) > 0 Then
			workoutTXT = Left(workoutTXT, InStr(workoutTXT, rightArr(cnt)) - 1)
		End If
	Next
	Do While AscW(Right(workoutTXT, 1)) = 13
		workoutTXT = Left(workoutTXT, Len(workoutTXT) - 1)
		If Len(workoutTXT) = 1 Then
			getWorkouts = False
			Exit Function
		End If
	Loop
	
	' Exit scenarios, don't make a workout
	Dim singleArr : singleArr = array("HR TEST", "DO NOT DO BOTH TESTS!", "HR ATHELTES DO THIS WORKOUT")
	For cnt = 0 To UBound(singleArr)
		If InStr(workoutTXT, singleArr(cnt)) > 0 Then
			getWorkouts = False
			Exit Function
		End If
	Next

	If swimBikeRun = "Run" Then
		Set WUDictionary = runWUDictionary
		Set MSDictionary = runMSDictionary
		Set CDDictionary = runCDDictionary
	ElseIf swimBikeRun = "Bike" Then
		Set WUDictionary = bikeWUDictionary
		Set MSDictionary = bikeMSDictionary
		Set CDDictionary = bikeCDDictionary
	Else
		WScript.Echo "1 Wrong sport type"
	End If

	' Full workouts
	Dim fullArr : fullArr = array("BIKE TEST, FOR POWER ATHLETES ONLY!")
	For cnt = 0 To UBound(fullArr)
		If InStr(workoutTXT, fullArr(cnt)) > 0 Then
			getWorkouts = vbCrLf & MSDictionary(fullArr(cnt))(0)
	getWorkouts = False
			Exit function
		End If
	Next
	
	Dim itemCnt, WULoc, WUString : WUString = ""
	Dim WUArr : WUArr = array("WU:", "WARM UP")
	For cnt = 0 To UBound(WUArr)
		itemCnt = (len(workoutTXT) - len(replace(workoutTXT, WUArr(cnt), ""))) / len(WUArr(cnt))
		If itemCnt = 1 Then
			WULoc = InStr(workoutTXT, WUArr(cnt))
			WUString = Right(workoutTXT, len(workoutTXT) - WULoc + 1)
			workoutTXT = Right(workoutTXT, len(workoutTXT) - len(WUString) + 1)
			WUString = Left(WUString, InStr(WUString, chr(13)) - 1)
			Do While AscW(Right(WUString, 1)) = 46 or AscW(Right(WUString, 1)) = 32
				WUString = Left(WUString, Len(WUString) - 1)
			Loop
		End If
	Next

	Dim CDLoc, CDString : CDString = ""
	Dim CDArr : CDArr = array("CD:", "WD:", "WARM DOWN:", "REMAINDER OF", "REMAINDER AS")
	For cnt = 0 To UBound(CDArr)
		itemCnt = (len(workoutTXT) - len(replace(workoutTXT, CDArr(cnt), ""))) / len(CDArr(cnt))
		If itemCnt = 1 Then
			CDLoc = InStr(workoutTXT, CDArr(cnt))
			CDString = Right(workoutTXT, len(workoutTXT) - CDLoc + 1)
			workoutTXT = Left(workoutTXT, CDLoc - 1)
		End If
	Next

	WScript.Echo "Begin:" & TrimString(WUString) & "|"
	WScript.Echo "Middle:" & TrimString(workoutTXT) & "|"
	WScript.Echo "End:" & TrimString(CDString) & "|" & vbCrLf

	getWorkouts = False
	Exit Function

	Dim stringARR : stringARR = Split(workoutTXT, vbCrLf)
	' If InStr(workoutTXT, "MS") > 0 Then
	Dim line, duration, workoutTime, durError, durDistance
	Dim lineWithSpace : For Each lineWithSpace in stringARR
		line = UCase(TrimString(lineWithSpace))

		If TrimString(line) = "" or Left(line, 11) = "ONLY DO ONE" or Left(line, 13) = "IF DON'T NEED" Then
		Else










			' Full workout line in one string
			' Time: -1 is need to create string, not enough info for block
			' Time: -2 is do not include additional data, full workout included (i.e. run test)
			' Time: -3 is out and back 2 different zones, needs 2 iterations of the calculator
			' Time: other - #'s need a remainder at zone added to the workout
			Dim workoutLNG, workout, levelNum, workOutPieces : workOutPieces = Split(line, ". ")
			For Each workoutLNG in workoutPieces
				workout = TrimString(workoutLNG)
				If  workout = "TAKE SHORT RECOVERIES AS NEEDED (EAT, DRINK, ETC)"  or _
					workout = "REMAINDER AS YOU FEEL IN ZONE 1 TO ZONE 2."  or _
					workout = "RACE REHEARSAL BRICK SET UP TRANSITION AT CAR/HOUSE, IF POSSIBLE"  or _
					workout = "MAKE THIS TRANSITION AS YOU SEE FIT; DON'T FORCE IT!"  or _
					workout = "NOTE HR, HOW YOU FEEL, ETC"  or _
					workout = "FRIDAY WOULD BE OFF IN THIS SCENARIO"  or _
					workout = "WARM DOWN: AS NEEDED"  or _
					workout = "THEN ADD 5 MINUTES TO THAT TIME"  or _
					workout = "" Then
				ElseIf workout <> "" Then
					IF workout = "MS: RUN A 5K TIME TRIAL" or InStr(workout, "FOR HR ATHLETES") > 0 or _
							workout = "MS: 1' " & Chr(34) & "ON" & Chr(34) & " @ 120%/ZONE5/VERY HARD, 1' " & Chr(34) & "OFF" & Chr(34) & " @ 60-65%/ZONE1/EASY" Then
						
						For cnt = 0 To maxCnt : workoutArr(cnt) = vbCrLf & MSDictionary("RUN A 5K TIME TRIAL")(0) : Next
						exitLoop = True
						Exit For
					ElseIf Left(workout, 3) = "WU:" or Left(workout, 7) = "WARM UP" Then
						If WUDictionary.Exists(workout) Then
							For cnt = 0 To maxCnt
								workoutArr(cnt) = workoutArr(cnt) & vbCrLf & WUDictionary(workout)(0)
								workoutTime = workoutTime - WUDictionary(workout)(1)
							Next
						Else
							Wscript.Echo "2 MISSING WARMUP FOR " & swimBikeRun & " | " & workout & vbCrLf
						End If
					ElseIf Left(workout, 3) = "CD:" or Left(workout, 3) = "WD:" or Left(workout, 10) = "WARM DOWN:" or _
							Left(workout, 12) = "REMAINDER OF" or Left(workout, 12) = "REMAINDER AS" Then
						If CDDictionary.Exists(workout) Then
							If CDDictionary(workout)(1) < 0 Then
								If CDDictionary(workout)(2) <> "" Then
									For cnt = 0 To maxCnt : workoutArr(cnt) = workoutArr(cnt) & vbCrLf & CDDictionary(workout)(0) : Next
								End If
								For cnt = 0 To maxCnt : workoutArr(cnt) = workoutArr(cnt) & vbCrLf & getMSRun(CDDictionary(workout)(0), workoutTime) : Next
							Else
								For cnt = 0 To maxCnt
									workoutArr(cnt) = workoutArr(cnt) & vbCrLf & CDDictionary(workout)(0)
									workoutTime = workoutTime - CDDictionary(workout)(1)
								Next
							End If
						Else
							Wscript.Echo "3 MISSING COOL DOWN FOR " & swimBikeRun & " | " & workout & vbCrLf
						End If
					ElseIf Left(workout, 11) = "ENTIRE RUN:" or Left(workout, 4) = "RUN " or Left(workout, 4) = "RIDE" Then
						If MSDictionary.Exists(workout) Then
							If MSDictionary(workout)(1) < 0 Then
								If MSDictionary(workout)(2) <> "" Then
									For cnt = 0 To maxCnt : workoutArr(cnt) = workoutArr(cnt) & vbCrLf & MSDictionary(workout)(0) : Next
								End If
								Wscript.Echo "4 " & workout & MSDictionary(workout)(0) & "|" & MSDictionary(workout)(1)
							Else
								For cnt = 0 To maxCnt
									workoutArr(cnt) = workoutArr(cnt) & vbCrLf & MSDictionary(workout)(0)
									workoutTime = workoutTime - MSDictionary(workout)(1)
								Next
							End If
						Else
							Wscript.Echo "5 MISSING MAIN SET FOR " & swimBikeRun & " | " & workout & vbCrLf
						End If
					ElseIf workout = "REMAINDER OF RUN IS HOW YOU FEEL, BUT TRY TO ACCUMULATE TIME TRP." Then
						For cnt = 0 To maxCnt : workoutArr(cnt) = workoutArr(cnt) & vbCrLf & getMSRun(MSDictionary(workout)(0), workoutTime) : Next
					ElseIf InStr(workout, "**") > 0 or Left(workout, 23) = "THESE SESSIONS ARE YOUR" or Left(workout, 25) = "PURPOSE OF THESE SESSIONS"  or _
							Left(workout, 12) = "THIS RIDE IS" Then
						exitLoop = True
						Exit For
					ElseIf InStr(workout, "LEVEL 1") or  InStr(workout, "LEVEL 2") or InStr(workout, "LEVEL 3") Then
						Wscript.Echo workout
						levelNum = TrimString(Right(Left(workout, InStr(workout, ":") - 1), 1)) - 1
						workout = TrimString(Right(workout, len(workout) - InStr(workout, ":")))
						If MSDictionary.Exists(workout) Then
							If MSDictionary(workout)(1) < 0 Then
								If MSDictionary(workout)(2) <> "" Then
									workoutArr(levelNum) = workoutArr(levelNum) & vbCrLf & MSDictionary(workout)(0)
								End If
								workoutArr(levelNum) = getMSRun(MSDictionary(workout)(0), workoutTime)
							Else
								If InStr(MSDictionary(workout)(0), "<") <= 0 Then
									Wscript.Echo "6 ERROR BIKE MAIN SET:" & line & vbCrLf & workout & vbCrLf
								Else
									workoutArr(levelNum) = workoutArr(levelNum) & vbCrLf & MSDictionary(workout)(0)
									workoutTime = workoutTime - MSDictionary(workout)(1)
								End If
							End If
						Else
							Wscript.Echo "7 MISSING MAIN SET FOR " & swimBikeRun & " |" & MSDictionary.Exists(workout) & "|" & workout & "|" & workoutLNG & "|"
						End If
					ElseIf Left(workout, 2) = "MS" or Left(workout, 8) = "MAIN SET" or _
							InStr(workout, "STRIDES") > 0 or Left(workout, 10) = "REPEAT FOR" or _
							Left(workout, 7) = "5 MILE " or Left(workout, 5) = "THEN " or Left(workout, 12) = "15' @ 80-85%" Then
						If InStr(workout, ":") > 0 and InStr(workout, ":") <> Len(workout) Then
							For cnt = 0 To maxCnt : workout = TrimString(Right(workout, Len(workout) - InStr(workout, ":") - 1)) : Next
						End If
						If MSDictionary.Exists(workout) Then
							If MSDictionary(workout)(1) < 0 Then
								If MSDictionary(workout)(2) <> "" Then
									For cnt = 0 To maxCnt : workoutArr(cnt) = workoutArr(cnt) & vbCrLf & MSDictionary(workout)(0) : Next
								End If
								For cnt = 0 To maxCnt : workoutArr(cnt) = getMSRun(MSDictionary(workout)(0), workoutTime) : Next
							Else
								If InStr(MSDictionary(workout)(0), "<") <= 0 Then
									Wscript.Echo "8 ERROR BIKE MAIN SET:" & line & vbCrLf & workout & vbCrLf
								Else
									For cnt = 0 To maxCnt
										workoutArr(cnt) = workoutArr(cnt) & vbCrLf & MSDictionary(workout)(0)
										workoutTime = workoutTime - MSDictionary(workout)(1)
									Next
								End If
							End If
						Else
							Wscript.Echo "9 MISSING MAIN SET FOR " & swimBikeRun & " |" & MSDictionary.Exists(workout) & "|" & workout & "|" & workoutLNG & "|"
						End If
					Else
						' Wscript.Echo "MISSING IGNORES FOR: " & workout ' & vbCrLf & workoutTXT & vbCrLf
					End If
				End If
			Next
		End If
	Next
	getWorkouts = workoutArr

	If testMode = True Then
		getWorkouts = False
	End If
	Set WUDictionary = Nothing
	Set MSDictionary = Nothing
	Set CDDictionary = Nothing
 End Function

Function TrimString(ByVal VarIn)
	VarIn = Trim(VarIn)
	If Len(VarIn) > 0 Then
		Do While AscW(Right(VarIn, 1)) = 10 or AscW(Right(VarIn, 1)) = 13 or AscW(Right(VarIn, 1)) = 32 or AscW(Right(VarIn, 1)) = vbCrLf or AscW(Right(VarIn, 1)) = 46
			VarIn = Left(VarIn, Len(VarIn) - 1)
		Loop
		Do While AscW(Left(VarIn, 1)) = 10 or AscW(Left(VarIn, 1)) = 13 or AscW(Left(VarIn, 1)) = 32 or AscW(Left(VarIn, 1)) = vbCrLf or AscW(Left(VarIn, 1)) = 46
			VarIn = Right(VarIn, Len(VarIn) - 1)
		Loop
	End If
	TrimString = Trim(VarIn)
 End Function