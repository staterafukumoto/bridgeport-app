devSplah("bgupdatecheck.js")
var updateOpt = localStorage["noUpdates"]
if(updateOpt == "noCheck"){
	console.log("will not check for update: auto updates opted out of")
}else{
	
	var date = new Date().toLocaleDateString();
	if (localStorage["date"] == date){
		console.log("will not check for update: already checked for update today")
	} else{
		console.log("checking for updates in 5s")
		setTimeout(function() { miniUpd(); }, 5000);
	}
	
	localStorage["date"] = date
	
	function miniUpd(){
		if (currentVersionServer > currentVersionLocal){
			// document.getElementById("updatewindow").style.display = "inline";
			// modalButtons(modalHide, updateDownload)
			// modalShow("An Update is available","You are running: " + currentVersionLocal + "<br> Build: " + currentVersionServer + " is available","Update Later","Download Now")
			ipc.send('check-updates')
		} else{
			console.log("no updates available")
		}
	}
	
}

function updateOptOut(){
	localStorage["noUpdates"] = "noCheck"
	document.getElementById("updatewindow").style.display = "none"
	console.log("will never check for updates")
}

function updateLater(){
	// document.getElementById("updatewindow").style.display = "none"
	modalHide()
}

function updateDownload(){
	window.location = "https://bridgeportapp.github.io/Bridgeport.zip"
	// document.getElementById("updatewindow").style.display = "none"
	modalHide()
}

