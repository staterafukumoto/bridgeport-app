devSplah("Initializing...")

// theWindow.focus()
var pseudoOnlnine = false
var maxWindowHeight = 550
theWindow.setHasShadow(false)
theWindow.setSize(0,0) //resizes the window to the smallest possible size
prefPaneShow()
var height = window.screen.height
theWindow.setMaximumSize(maxWindowHeight,height)
function startSpinnerDelay(){
	var check = localStorage["password"]
	if(check == "tobemade" && window.location.href.endsWith("index.html")){
		reloadToPasswordCreate()
	// }else if(pseudoOnlnine == false){
	} else if(navigator.onLine == false){
		reloadToNoInternet()
	} else {
		// theWindow.setOpacity(1)
		window.setTimeout(hideSpinner,800)
			// window.setTimeout(hideSpinner,600)
		theWindow.setOpacity(0)
		prefPaneHide()
		// setSize()
		if (localStorage["width"] == undefined){
			window.resizeTo(490,750)
			theWindow.center()
			getSize()
		} else{
			setSize()
		}
		// badgeLoad()
		getProfileImage()
		theWindow.setAlwaysOnTop(false)
	}
	}


function hideSpinner(){
	ipc.send('has-loaded')
	theWindow.setFullScreenable(false)
	document.getElementById("darwin-title-bar").style.webkitAppRegion = "drag"
	document.getElementById("loader").style.display = "none"
	document.getElementById("loader").style.pointerEvents = "none"
	document.getElementById("loaderfirmbg").style.display = "none"
	moveToLastSaved()
	theWindow.setHasShadow(true)
	window.setTimeout(function(){theWindow.setOpacity(1)},100);
	theWindow.setResizable(true)
	window.addEventListener("resize", getSize);
	window.setInterval(resizeAgent,750)
	webview.removeEventListener("did-finish-load", startSpinnerDelay);
	ipc.send("unlock-all")
	// theWindow.setProgressBar(-1)
	if (localStorage["password"] == "enabled" && sessionStorage["unlocked"] != "yes"){
		liveLock()
		console.log("passcode enabled")
	} else{
		sessionStorage["loggedin"] = "yes"
		console.log("passcode not enabled")
	}
}

webview.addEventListener("did-finish-load", startSpinnerDelay);

function regetWindow(){
	if(theWindow == null){
		var theWindow = BrowserWindow.getFocusedWindow();		
		// alert('ya fucked it')
		window.clearInterval(regetWindow, 50);
	} else{
		//do nothing
	}
}

window.setInterval(regetWindow, 50)


function checkForNet(){
	if(navigator.onLine == false){
		toast("Network connection dropped")
		window.internetinactive = "true"
	} else{
		//conditions for there being internet
		window.internetinactive = "false"
	}
}

window.setInterval(checkForNet,250)

function reloadToNoInternet(){
	window.setTimeout(function(){window.location.href = "invalid.html"},333);
	document.getElementById("loader").style.transform = "scale(0.8)"
	document.getElementById("loader").style.opacity = "0"
}

function reloadToPasswordEntry(){
	window.setTimeout(function(){window.location.href = "minAppPassword.html"},333);
	document.getElementById("loader").style.transform = "scale(0.8)"
	document.getElementById("loader").style.opacity = "0"
}

function reloadToPasswordCreate(){
	window.setTimeout(function(){window.location.href = "minAppPCreate.html"},333);
	document.getElementById("loader").style.transform = "scale(0.8)"
	document.getElementById("loader").style.opacity = "0"
}