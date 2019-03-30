function startSpinnerDelay(){
	window.setTimeout(hideSpinner,200)
}

function hideSpinner(){
	document.getElementById("loader").style.opacity = 0
	window.setTimeout(hideSpinnerForReal,333)
	document.getElementById("loader").style.pointerEvents = "none"
}

function hideSpinnerForReal(){
	document.getElementById("loader").style.display = "none"
}

webview.addEventListener("did-finish-load", startSpinnerDelay);