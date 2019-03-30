devSplah("intload.js")
function invertShow(){
	window.setTimeout(invertShowforReal,33)
	function invertShowforReal(){
		document.getElementById("ibtbg").style.display = "inline"
	}
}

function invertHide(){
	window.setTimeout(invertHideForReal,333)
	function invertHideForReal(){
		document.getElementById("ibtbg").style.display = "none"
	
	}	
}

// webview.addEventListener("did-start-loading", invertShow);
webview.addEventListener("did-stop-loading", invertHide);
webview.addEventListener("dom-ready", invertHide);
// webview.addEventListener("dom-ready", invertHide);
