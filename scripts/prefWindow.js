var ipc = require('electron').ipcRenderer;
const fs = require('fs-extra')
const username = require('username');

function rAlertShow()
{
	document.getElementById('restart-alert').style.display = "inline"
	document.getElementById('restart-warn').style.display = "none"
}

//------------------------------------------------------ auto update check settings
function aucToggleCheck(){
	var updateOpt = localStorage["noUpdates"]	
	if(updateOpt == "noCheck"){
		document.getElementById("updatetoggle").className = "toggle-off"
		document.getElementById("updatetoggle").onclick = aucON
	} else{
		document.getElementById("updatetoggle").className = "toggle-on"
		document.getElementById("updatetoggle").onclick = aucOFF
	}
}

window.setInterval(aucToggleCheck, 40)

function aucON(){
	localStorage["noUpdates"] = ""
	console.log("aucON")
}

function aucOFF(){
	localStorage["noUpdates"] = "noCheck"
	console.log("aucOFF")
}

//------------------------------------------------------ auto show patchnotes
function aucToggleCheck(){
	var pnOpt = localStorage["showpatchnotesonupdate"]
	if(pnOpt == "disabled"){
		document.getElementById("pntoggle").className = "toggle-off"
		document.getElementById("pntoggle").onclick = pnOn
	} else{
		document.getElementById("pntoggle").className = "toggle-on"
		document.getElementById("pntoggle").onclick = pnOff
	}
}
// localStorage["showpatchnotesonupdate"] == "disabled"
window.setInterval(aucToggleCheck, 40)

function pnOn(){
	localStorage["showpatchnotesonupdate"] = "enabled"
	console.log("pnOn")
}

function pnOff(){
	localStorage["showpatchnotesonupdate"] = "disabled"
	console.log("pnOff")
}

//------------------------------------------------------ content blur settings
function blurCheck(){
	var blurOpt = localStorage["blur"]	
	if(blurOpt == "disabled"){
		document.getElementById("blurtoggle").className = "toggle-off"
		document.getElementById("blurtoggle").onclick = blurON
	} else{
		document.getElementById("blurtoggle").className = "toggle-on"
		document.getElementById("blurtoggle").onclick = blurOFF
	}
}

window.setInterval(blurCheck, 40)

function blurON(){
	localStorage["blur"] = "enabled"
	console.log("blurON")
}

function blurOFF(){
	localStorage["blur"] = "disabled"
	console.log("blurOFF")
}

// //------------------------------------------------------ popout image viewer
// function imgToggleCheck(){
// 	var imgOpt = localStorage["imgViewer"]	
// 	if(imgOpt == "disabled"){
// 		document.getElementById("imgtoggle").className = "toggle-off"
// 		document.getElementById("imgtoggle").onclick = imgON
// 	} else{
// 		document.getElementById("imgtoggle").className = "toggle-on"
// 		document.getElementById("imgtoggle").onclick = imgOFF
// 	}
// }

// window.setInterval(imgToggleCheck, 40)

// function imgON(){
// 	localStorage["imgViewer"] = "enabled"
// 	console.log("imgON")
// }

// function imgOFF(){
// 	localStorage["imgViewer"] = "disabled"
// 	console.log("imgOFF")
// }

//------------------------------------------------------ discord rich presence
function dscToggleCheck(){
	var dscOpt = localStorage["richPresence"]	
	if(dscOpt == "disabled"){
		document.getElementById("discordtoggle").className = "toggle-off"
		document.getElementById("discordtoggle").onclick = dscOn
	} else{
		document.getElementById("discordtoggle").className = "toggle-on"
		document.getElementById("discordtoggle").onclick = dscOff
	}
}

window.setInterval(dscToggleCheck, 40)

function dscOn(){
	localStorage["richPresence"] = "enabled"
	console.log("imgON")
	// rAlertShow()
}

function dscOff(){
	localStorage["richPresence"] = "disabled"
	console.log("imgOFF")
	rAlertShow()
}

//------------------------------------------------------ dark mode settings
// function dmToggleCheck(){
// 	var updateDM = localStorage["theme"]	
// 	if(updateDM != "light"){
// 		document.getElementById("darkmodetoggle").className = "toggle-off"
// 		document.getElementById("darkmodetoggle").onclick = dmON
// 	} else{
// 		document.getElementById("darkmodetoggle").className = "toggle-on"
// 		document.getElementById("darkmodetoggle").onclick = dmOFF
// 	}
// }

// function dmON(){
// 	localStorage["theme"] = "light"
// 	rAlertShow()
// }

// function dmOFF(){
// 	localStorage["theme"] = "dark"
// 	rAlertShow()
// }

// window.setInterval(dmToggleCheck, 40)


//------------------------------------------------------ rounded edges
function reON(){
	localStorage["roundedEdges"] = "enabled"
	rAlertShow()
	console.log("reON")
}

function reOFF(){
	localStorage["roundedEdges"] = "disabled"
	rAlertShow()
	console.log("reOFF")
}

function reToggleCheck(){
	var updateRE = localStorage["roundedEdges"]	
	if(updateRE == "disabled"){
		document.getElementById("roundedgestoggle").className = "toggle-off"
		document.getElementById("roundedgestoggle").onclick = reON
	} else{
		document.getElementById("roundedgestoggle").className = "toggle-on"
		document.getElementById("roundedgestoggle").onclick = reOFF
	}
}

window.setInterval(reToggleCheck, 40)

//------------------------------------------------------ big font settings
function bfON(){
	localStorage["bigFont"] = "enabled"
	rAlertShow()
	console.log("bfON")
}

function bfOFF(){
	localStorage["bigFont"] = "disabled"
	rAlertShow()
	console.log("bfOFF")
}

function bfToggleCheck(){
	var updateBF = localStorage["bigFont"]	
	if(updateBF == "disabled"){
		document.getElementById("bigfonttoggle").className = "toggle-off"
		document.getElementById("bigfonttoggle").onclick = bfON
	} else{
		document.getElementById("bigfonttoggle").className = "toggle-on"
		document.getElementById("bigfonttoggle").onclick = bfOFF
	}
}

window.setInterval(bfToggleCheck, 40)

//------------------------------------------------------ angled edge settings
// function angON(){
// 	localStorage["angledEdge"] = "enabled"
// 	// rAlertShow()
// 	console.log("bfON")
// }

// function angOFF(){
// 	localStorage["angledEdge"] = "disabled"
// 	// rAlertShow()
// 	console.log("bfOFF")
// }

// function angToggleCheck(){
// 	var updateang = localStorage["angledEdge"]	
// 	if(updateang == "disabled"){
// 		document.getElementById("angletoggle").className = "toggle-off"
// 		document.getElementById("angletoggle").onclick = angON
// 	} else{
// 		document.getElementById("angletoggle").className = "toggle-on"
// 		document.getElementById("angletoggle").onclick = angOFF
// 	}
// }

// window.setInterval(angToggleCheck, 40)

//------------------------------------------------------ notification settings
function ntfyON(){
	localStorage["ntfy"] = "enabled"
	rAlertShow()
}

function ntfyOFF(){
	localStorage["ntfy"] = "disabled"
	rAlertShow()
}

function ntfyToggleCheck(){
	var updateang = localStorage["ntfy"]	
	if(updateang == "disabled"){
		document.getElementById("ntfytoggle").className = "toggle-off"
		document.getElementById("ntfytoggle").onclick = ntfyON
	} else{
		document.getElementById("ntfytoggle").className = "toggle-on"
		document.getElementById("ntfytoggle").onclick = ntfyOFF
	}
}

window.setInterval(ntfyToggleCheck, 40)

//------------------------------------------------------ grey settings
function greyON(){
	localStorage["buttonStyle"] = "grey"
}

function greyOFF(){
	localStorage["buttonStyle"] = "color"
}

function greyToggleCheck(){
	var updateang = localStorage["buttonStyle"]	
	if(updateang != "grey"){
		document.getElementById("greytoggle").className = "toggle-off"
		document.getElementById("greytoggle").onclick = greyON
	} else{
		document.getElementById("greytoggle").className = "toggle-on"
		document.getElementById("greytoggle").onclick = greyOFF
	}
}

window.setInterval(greyToggleCheck, 40)

//------------------------------------------------------ in app browser settings
function iabON(){
	localStorage["inAppBrowser"] = "enabled"
	// rAlertShow()
	console.log("iabON")
}

function iabOFF(){
	localStorage["inAppBrowser"] = "disabled"
	// rAlertShow()
	console.log("iabOFF")
}

function iabToggleCheck(){
	var updateiab = localStorage["inAppBrowser"]
	if(updateiab != "disabled"){
		document.getElementById("iabtoggle").className = "toggle-off"
		document.getElementById("iabtoggle").onclick = iabOFF
	} else{
		document.getElementById("iabtoggle").className = "toggle-on"
		document.getElementById("iabtoggle").onclick = iabON
	}
}

window.setInterval(iabToggleCheck, 40)

//------------------------------------------------------ call ipc to restart app
function restartNow(){
	ipc.send('restart','hi')
}
//------------------------------------------------------ dialogue box
function resetWarn(){
	modalShow("Twitter Account:","Are you sure you want to Logout?<br><i> (This will also reset your settings)</i>","Cancel","Yes")
	// modalShow("WARNING","<b>Are you sure you want to reset?</b><br><br> THIS WILL ALSO LOG YOU OUT","NO","YES")
	modalButtons(modalHide,pwSoftReset)
}
function pwSoftReset(){
	erase()
}

function erase(){
	fs.emptyDir('/users/' + username.sync() + '/Library/Application\ Support/Bridgeport')
	.then(() => {
	//   console.log('success!')
	ipc.send('restart')
	})
	.catch(err => {
		crashAndRestart("reset_failed")
	})
}

function crashAndRestart(arg){
	function errorHandler(){
		alert("An error has occured with the error code:" + "\n" + arg + "\n" + "\n" + "ui and logic has been frozen and Bridgeport will now restart.");
    	ipc.send("restart","hi")
	}
	window.setTimeout(errorHandler,333)
}