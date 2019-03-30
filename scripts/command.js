devSplah("command.js")
window.cmdbaropen = false
var cmdField = document.getElementById("cmdbar");
var cmdInput;
var rAlert = "You must restart to apply this"
var rSyntax = "Invalid Syntax"
var rCommand = "Invalid Command"

function showCMDBar(){
    if (sessionStorage["loggedin"] == "yes"){
        document.getElementById("cmdbar").disabled = false
        document.getElementById("all").style.top = "38px"
        document.getElementById("all").style.bottom = "0px"
        // document.getElementById("all").style.bottom = "-38px"
        document.getElementById("all").style.opacity = "0.8"
        document.getElementById("cmdbar").value = ""
        document.getElementById("cmdbar").focus()
        window.cmdbaropen = true
    }
}

function hideCMDBar(){
    document.getElementById("all").style.top = "0px"
    document.getElementById("all").style.bottom = "0px"
    document.getElementById("all").style.opacity = "1"
    document.getElementById("cmdbar").disabled = true
    window.cmdbaropen = false
}

document.getElementById("cmdbar")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
		document.getElementById("cmdicon").click();
    }else if (event.keyCode === 27) {
        hideCMDBar()
    }
});

function commandSubmit(){
    hideCMDBar()
    var cmdinput = cmdField.value
    // toast(cmdinput)
    if (cmdinput.startsWith("pref.")){
        if (cmdinput.startsWith("pref.blur") && cmdinput.endsWith("enable")){
            localStorage["blur"] = "enabled"
        } else if(cmdinput.startsWith("pref.blur") && cmdinput.endsWith("disable")){
            localStorage["blur"] = "disabled"
        } else if(cmdinput.startsWith("pref.round") && cmdinput.endsWith("enable")){
            localStorage["roundedEdges"] = "enabled"
            toast(rAlert)
        } else if(cmdinput.startsWith("pref.round") && cmdinput.endsWith("disable")){
            localStorage["roundedEdges"] = "disabled"
            toast(rAlert)            
        } else if(cmdinput.startsWith("pref.wbmessage") && cmdinput.endsWith("enable")){
            localStorage["welcomebackmsg"] = "enabled"
        } else if(cmdinput.startsWith("pref.wbmessage") && cmdinput.endsWith("disable")){
            localStorage["welcomebackmsg"] = "disabled"  
        } else if(cmdinput.startsWith("pref.bigfont") && cmdinput.endsWith("enable")){
            localStorage["bigFont"] = "enable"
            toast(rAlert)
        } else if(cmdinput.startsWith("pref.bigfont") && cmdinput.endsWith("disable")){
            localStorage["bigFont"] = "disable"
            toast(rAlert)
        } else if(cmdinput.startsWith("pref.aupdate") && cmdinput.endsWith("enable")){
	        localStorage["noUpdates"] = ""
        } else if(cmdinput.startsWith("pref.aupdate") && cmdinput.endsWith("disable")){
	        localStorage["noUpdates"] = "noCheck"
        } else if(cmdinput.startsWith("pref.rpresence") && cmdinput.endsWith("enable")){
	        localStorage["richPresence"] = "enabled"
        } else if(cmdinput.startsWith("pref.rpresence") && cmdinput.endsWith("disable")){
            localStorage["richPresence"] = "disable"
            toast(rAlert)
        } else if(cmdinput.startsWith("pref.bpcanvas") && cmdinput.endsWith("enable")){
	        localStorage["inAppBrowser"] = "enabled"
        } else if(cmdinput.startsWith("pref.bpcanvas") && cmdinput.endsWith("disable")){
	        localStorage["inAppBrowser"] = "disabled"
        } else if(cmdinput.startsWith("pref.imgviewer") && cmdinput.endsWith("enable")){
	        localStorage["imgViewer"] = "enabled"
        }else if(cmdinput.startsWith("pref.imgviewer") && cmdinput.endsWith("disable")){
	        localStorage["imgViewer"] = "disabled"
        }else if(cmdinput.startsWith("pref.alerts") && cmdinput.endsWith("enable")){
	        localStorage["ntfy"] = "enabled"
        }else if(cmdinput.startsWith("pref.alerts") && cmdinput.endsWith("disable")){
	        localStorage["ntfy"] = "disabled"
        }else if(cmdinput.startsWith("pref.panel") && cmdinput.endsWith("enable")){
	        localStorage["panels"] = "enabled"
        }else if(cmdinput.startsWith("pref.panel") && cmdinput.endsWith("disable")){
	        localStorage["panels"] = "disabled"
        }else if(cmdinput == "pref.reset"){
            erase()
        }else if(cmdinput == "pref.reset -y"){
            eraseSilent()
        } else{
            toast(rCommand)
        }
    } else if(cmdinput.startsWith("app.")){
        if (cmdinput == "app.restart"){
            ipc.send('restart')
        } else if (cmdinput == "app.devenable"){
            localStorage["isDev"] = "yes"
            if(sessionStorage["hasSentDev"] == "yes"){
                //do nothing
            } else{
                ipc.send('add-dev','hi')
                sessionStorage["hasSentDev"] = "yes"
            }
            } else if(cmdinput == "app.devdisable"){
                localStorage.removeItem("isDev")
                ipc.send('restart')                
            } else if(cmdinput == "app.quit" || cmdinput == "app.exit"){
                ipc.send("quit")
            } else if(cmdinput == "app.slowload"){
                localStorage["slowLoad"] = "true"
                ipc.send('restart')                
            } else if(cmdinput == "app.fastload"){
                localStorage["slowLoad"] = "false"
                ipc.send('restart')                
            } else if(cmdinput == "app.console"){
                theWindow.openDevTools({mode:'undocked'})
            } else if(cmdinput == "app.innerconsole"){
			    webview.openDevTools()                
            } else if(cmdinput == "app.build"){
                toast(currentVersionLocal + softwareCandidacy)
            } else if(cmdinput == "app.build -c"){
                toast("copied build number (" + currentVersionLocal + softwareCandidacy + ") to clipboard")
                clipboard.writeText(currentVersionLocal + softwareCandidacy)
            }
    } else if(cmdinput.startsWith("javascript: ")){
        if(localStorage["isDev"] == "yes"){
            var js = cmdinput.substring(12)
            eval(js)
        } else{
            toast("You must be in developer mode <br> to run custom javascript. <br> Do so at your own risk")
        }
    } else if(cmdinput.startsWith("!")){
        if (cmdinput == "!p"){
            actMyProfile()
        } else if(cmdinput == "!h"){
            document.getElementById("homebtn").click() 
        } else if(cmdinput == "!e"){
            document.getElementById("explorebtn").click() 
        } else if(cmdinput == "!n"){
            document.getElementById("notificationsbtn").click() 
        } else if(cmdinput == "!m"){
            document.getElementById("messagebtn").click() 
        } else if(cmdinput == "!b"){
            document.getElementById("bookmarksbtn").click() 
        } else if(cmdinput == "!nt"){
            composeNewTweet()
        } else if(cmdinput == "!nm"){
            ppMessages();
        } else if(cmdinput == "!pw"){
            enablePassOnRestart()
        } else if(cmdinput == "!ps"){
            actProfile()
        } else if(cmdinput == "!se"){
            ppSettingsWindow()
        } else if(cmdinput == "!fr"){
            actFollowers()
        } else if(cmdinput == "!fn"){
            actFollowing()
        } else if(cmdinput == "!eb"){
            ppEyeBleach()
        }
    } else if(cmdinput.startsWith("search: ")){
        var txt = cmdinput.substring(8)
        var stage1 = txt.replace(" ","+")
		var stage2 = stage1.replace("#","%23")
		var stage3 = stage2.replace("@","%40")
        webview.loadURL('https://mobile.twitter.com/search?q=' + stage3);
        invertShow()
		webview.clearHistory()
    }  else if(cmdinput.startsWith("user: ")){
        var txt = cmdinput.substring(6)
        var stage1 = txt.replace(" ","+")
		var stage2 = stage1.replace("#","%23")
        webview.loadURL('https://mobile.twitter.com/' + stage2);
        invertShow()
		webview.clearHistory()
    } else{
        toast(rSyntax)
    }
}