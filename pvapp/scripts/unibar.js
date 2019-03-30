var hasrun
var webview = document.getElementById('c-agg')
const shell = require('electron').shell;
const {BrowserWindow} = require('electron').remote;

var theWindow = BrowserWindow.getFocusedWindow();

function loading(){
	document.getElementById("urlbar").placeholder = "Loading..."
}

function doneLoading(){
	document.getElementById("urlbar").value = ""
}

function loadURL(){
	webview.loadURL(localStorage["pagetoload"])
}

// document.getElementById("c-agg").addEventListener("did-start-loading", loading);
// document.getElementById("c-agg").addEventListener("did-stop-loading", doneLoading);

// window.setTimeout(500,loadurl)
function loadURL(){
	if (document.getElementById("c-agg") && hasrun != "yes"){
	window.setTimeout(function(){
		webview.loadURL(localStorage["photoToLoad"])
		var hasrun = "yes"
	},150)
	} else{
		//do nothing
	}
}

function openExternal(){
	var url = webview.getURL()
	shell.openExternal(url)
	window.close()
}

window.setTimeout(loadURL,100)

function beforeUnload(){
	document.getElementById('c-agg').style.display = "none"
	localStorage["pagetoload"] = ""
}

window.onbeforeunload = beforeUnload

// webview.addEventListener("did-start-loading", invertShow);
webview.addEventListener("did-stop-loading", invertHide);

function invertShow(){
	document.getElementById("loadingDevBackground").style.display = "inline"
}

function invertHide(){
	function invertHideForReal(){
		document.getElementById("loadingDevBackground").style.display = "none"
		// resizeInner()
	}
	window.setTimeout(invertHideForReal,333)
	// webview.removeEventListener("did-start-loading", invertShow)
}

function resizeInner(){
	document.getElementById("all").style.transform = "scale(1)"
	document.getElementById("c-agg").style.transform = "scale(1)"
}

invertShow()