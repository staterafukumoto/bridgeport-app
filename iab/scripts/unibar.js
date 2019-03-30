var hasrun
var webview = document.getElementById('c-agg')
const shell = require('electron').shell;
var ipc = require('electron').ipcRenderer;
// ipc.send("rich-presence-update", "Looking at external Media")

function loading(){
	document.getElementById("urlbar").placeholder = "Loading..."
}

function doneLoading(){
	document.getElementById("urlbar").value = ""
}

function loadURL(){
	webview.loadURL(localStorage["pagetoload"])
}

document.getElementById("c-agg").addEventListener("did-start-loading", loading);
document.getElementById("c-agg").addEventListener("did-stop-loading", doneLoading);

// window.setTimeout(500,loadurl)
function loadURL(){
	if (document.getElementById("c-agg") && hasrun != "yes"){
	window.setTimeout(function(){
		webview.loadURL(localStorage["pagetoload"])
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

webview.addEventListener("did-start-loading", invertShow);
webview.addEventListener("did-stop-loading", invertHide);

function invertShow(){
	document.getElementById("loadingDevBackground").style.display = "inline"
}

function invertHide(){
	document.getElementById("loadingDevBackground").style.display = "none"
}