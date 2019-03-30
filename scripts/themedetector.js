devSplah("themedetector.js")
function roundedEdgesCheck(){
	if (process.platform == "win32" || localStorage["theme"] == "windows"){
		//do nothing
	} else{
		if (localStorage["roundedEdges"] == "disabled"){
			document.getElementById("searchbarcontainer").style.borderRadius = "6px"
			document.getElementById("llpfp").style.borderRadius = "6px"
			document.getElementById("profilepicture").style.borderRadius = "4px"
		} else{
			document.getElementById("searchbarcontainer").style.borderRadius = "999px"
			document.getElementById("llpfp").style.borderRadius = "999px"
			document.getElementById("profilepicture").style.borderRadius = "999px"
		} 

		}
	}

function angleCheck(){
	if (localStorage["angledEdge"] == "enabled"){
		document.getElementById("triangle-bottomleft").style.display = "inline"
		document.getElementById("triangle-topleft").style.display = "inline"
	}else{
		document.getElementById("triangle-bottomleft").style.display = "none"
		document.getElementById("triangle-topleft").style.display = "none"
	}
}


function roundedEdgesInletCheck(){
	if (process.platform ==  "win32" || localStorage["theme"] == "windows"){

	} else{
		if (rEdges == "enabled"){
			var webview = document.getElementById('c-agg');
			webview.addEventListener('dom-ready', function () {
			   webview.insertCSS('.rn-qb5c1y{border-bottom-left-radius: 999px !important;}') //bottom left radius
			   webview.insertCSS('.rn-sqtsar{border-bottom-right-radius: 999px !important;}') //bottom right radius
			   webview.insertCSS('.rn-waaub4{border-top-right-radius: 999px !important;}') //top right radius
			   webview.insertCSS('.rn-1bxrh7q{border-top-left-radius: 999px !important;}') //top left radius
	   });
		} else {
		   var webview = document.getElementById('c-agg');
		   webview.addEventListener('dom-ready', function () {
		   //app specific rules
			//    webview.insertCSS('*{border-radius: 4px !important;}') //bottom left radius
			   webview.insertCSS('.rn-qb5c1y{border-bottom-left-radius: 4px !important;}') //bottom left radius
			   webview.insertCSS('.rn-sqtsar{border-bottom-right-radius: 4px !important;}') //bottom right radius
			   webview.insertCSS('.rn-waaub4{border-top-right-radius: 4px !important;}') //top right radius
			   webview.insertCSS('.rn-1bxrh7q{border-top-left-radius: 4px !important;}') //top left radius
	   });
	}
	}
}

roundedEdgesInletCheck()
// window.setInterval(roundedEdgesInletCheck, 250)


function changeToLight(){
	if(localStorage["blur"] == "disabled"){
		// document.getElementById("darwin-title-bar").style.background = "linear-gradient(#e8e6e8, #d2d0d2)"
		document.getElementById("darwin-title-bar").style.background = "white"
		document.getElementById("ppbg").style.background = "rgb(255,255,255)"
		document.getElementById("searchbg").style.background = "white !important"
	} else{
		document.getElementById("darwin-title-bar").style.background = "#ffffffc8"
		document.getElementById("ppbg").style.background = "rgba(255,255,255,0.6)"
		document.getElementById("searchbg").style.background = "rgba(255,255,255,0.6)"
	}
	if (isHalloween == true){
		document.getElementById("titletext").style.color = "#875700"
		document.getElementById("titletextwin").style.color = "#875700"
		document.getElementById("sideicons").style.webkitTextStrokeColor = "orange"
		document.getElementById("toast").style.color = "orange"
		document.getElementById("npopoutmain").style.background = "orange"
		document.getElementById("notificationcounter").style.background = "orange"
		document.getElementById("winwindowborder").style.border = "1px solid orange"
	} else{
		document.getElementById("titletext").style.color = "black"
		document.getElementById("toast").style.color = "white"
		
	}
	document.getElementById("side-title-bar").style.background = "white"
	document.getElementById("side-title-bar").style.borderBottom = "1px solid #ededed"
	document.getElementById("windows-title-bar").style.background = "#ededed"
	document.getElementById("spclose").style.color = "black"
	document.getElementById("titletextwin").style.color = "black"
	document.getElementById("winclosebtn").style.color = "black"
	document.getElementById("winminbtn").style.color = "black"
	document.getElementById("backdrop2").style.background = "white"
	// document.getElementById("backdrop").style.background = "black"
	document.getElementById("backdrop").style.background = "#141d26"
	document.getElementById("searchbarcontainer").style.background = "#edededc8"
	document.getElementById("darwin-title-bar").style.borderBottom = "1px solid #ededed"
	document.getElementById("searchbarcontainer").style.border = "1px solid #adadad"
	document.getElementById("accountmenu").style.background = "#141d26c8"
	// document.getElementById("accountmenu").style.border = "1px solid #adadad"
	// document.getElementById("goback").style.color = "#147efb"
	document.getElementById("goback").style.color = "#444"
	document.getElementById("gofwd").style.color = "#444"
	document.getElementById("searchicon").style.color = "black"
	document.getElementById("searchbar").style.color = "black"
	document.getElementById("ibtbg").style.background = "white"
	document.getElementById("triangle-bottomleft").style.borderBottom = "4px solid #113259"
	document.getElementById("triangle-topleft").style.borderTop = "4px solid #113259"
	document.getElementById("toast").style.background = "#666666"
	//lock screen
	document.getElementById("llwrapper").style.background = "white"
	// document.getElementById("llwrapper").style.background = "#ededed"
	// document.getElementById("llltb").style.background = "linear-gradient(#e8e6e8, #d2d0d2)"
	document.getElementById("llltb").style.background = "#f4f4f4"
	document.getElementById("llltb").style.borderBottom = "1px solid #a4a2a4"
	document.getElementById("llltb").style.color = "black"
	document.getElementById("llpwbox").style.color = "black"
	document.getElementById("llusername").style.color = "black"
	document.getElementById("llreset1").style.color = "black"
	//modal theme light
	document.getElementById("modalwindow").style.background = "white"
	document.getElementById("modalBody").style.background = "#ededed"
	document.getElementById("modalButtonDeny").style.background = "#adadad"
	document.getElementById("modalButtonConfirm").style.background = "#35c5ff"
	document.getElementById("modalButtonDeny").style.color = "black"
	document.getElementById("modalButtonConfirm").style.color = "black"
	document.getElementById("modalTitle").style.color = "black"
	document.getElementById("modalBody").style.color = "black"

	if (process.platform == "win32" || localStorage["theme"] == "windows"){
		//do nothing
	} else{
		localStorage["theme"] = "light"
	}
}

function changeToDark(){
	if(localStorage["blur"] == "disabled"){
		document.getElementById("darwin-title-bar").style.background = "#15202b"
		document.getElementById("ppbg").style.background = "rgba(255,255,255,1)"
		document.getElementById("searchbg").style.background = "#1b2835"
	} else{
		document.getElementById("darwin-title-bar").style.background = "#15202bC8"
		document.getElementById("ppbg").style.background = "rgba(255,255,255,0.6)"
		document.getElementById("searchbg").style.background = "#1b28359f"
	}
	if (isHalloween == true){
		document.getElementById("titletext").style.color = "orange"
		document.getElementById("titletextwin").style.color = "orange"
		document.getElementById("sideicons").style.webkitTextStrokeColor = "orange"
		document.getElementById("toast").style.color = "orange"
		document.getElementById("npopoutmain").style.background = "orange"
		document.getElementById("winwindowborder").style.border = "1px solid orange"
		document.getElementById("notificationcounter").style.background = "orange"
		document.getElementById("goback").style.color = "orange"
	} else{
		document.getElementById("titletext").style.color = "#f9f9f9"
		document.getElementById("toast").style.color = "white"
		document.getElementById("goback").style.color = "white"
	}
	document.getElementById("windows-title-bar").style.background = "#0e161e"
	document.getElementById("spclose").style.color = "white"
	document.getElementById("titletextwin").style.color = "white"
	document.getElementById("winclosebtn").style.color = "white"
	document.getElementById("winminbtn").style.color = "white"
	document.getElementById("side-title-bar").style.background = "#1c2936"
	document.getElementById("side-title-bar").style.borderBottom = "1px solid #141d26"
	document.getElementById("backdrop2").style.background = "#15202b"
	document.getElementById("backdrop").style.background = "#101a23"
	document.getElementById("searchbarcontainer").style.background = "#141d26c8"
	document.getElementById("darwin-title-bar").style.borderBottom = "1px solid #141d26"
	document.getElementById("searchbarcontainer").style.border = "1px solid #adadad"
	document.getElementById("accountmenu").style.background = "#101a23c8"
	// document.getElementById("accountmenu").style.border = "1px solid #adadad"
	document.getElementById("gofwd").style.color = "white"
	document.getElementById("searchbg").style.background = "#1b28359f"
	document.getElementById("searchicon").style.color = "#adadad"
	document.getElementById("searchbar").style.color = "#f9f9f9"
	document.getElementById("ibtbg").style.background = "#15202b"
	document.getElementById("triangle-bottomleft").style.borderBottom = "4px solid #141d26"
	document.getElementById("triangle-topleft").style.borderTop = "4px solid #141d26"
	document.getElementById("toast").style.background = "#141d26"
	document.getElementById("toast").style.background = "#141d26"
	//lock screen
	document.getElementById("llwrapper").style.background = "#141d26"
	document.getElementById("llltb").style.background = "#1b2835"
	document.getElementById("llltb").style.color = "#ededed"
	document.getElementById("llltb").style.borderBottom = "1px solid #141d26"
	document.getElementById("llpwbox").style.color = "#ededed"
	document.getElementById("llusername").style.color = "#ededed"
	document.getElementById("llreset1").style.color = "#ededed"
	//modal theme light
	document.getElementById("modalwindow").style.background = "#141d26"
	document.getElementById("modalBody").style.background = "#1b2835"
	document.getElementById("modalButtonDeny").style.background = "#6d6d6d"
	document.getElementById("modalButtonConfirm").style.background = "#0e7ba5"
	document.getElementById("modalButtonDeny").style.color = "white"
	document.getElementById("modalButtonConfirm").style.color = "white"
	document.getElementById("modalTitle").style.color = "white"
	document.getElementById("modalTitle").style.color = "white"
	document.getElementById("modalBody").style.color = "white"

	if (process.platform == "win32" || localStorage["theme"] == "windows"){
		//do nothing
	} else{
		localStorage["theme"] = "dark"
	}
}

function buttonColorUpdate(){
	if (localStorage["buttonStyle"] == "grey"){
		//color codes here
		document.getElementById("titleClose").classList.add("titleGrey")
		document.getElementById("titleMinimize").classList.add("titleGrey")
		document.getElementById("titleMaximize").classList.add("titleGrey")
	} else{
		document.getElementById("titleClose").classList.remove("titleGrey")
		document.getElementById("titleMinimize").classList.remove("titleGrey")
		document.getElementById("titleMaximize").classList.remove("titleGrey")
	}
}

window.setInterval(angleCheck,250)
window.setInterval(roundedEdgesCheck,250)
window.setInterval(buttonColorUpdate,250)

// depreciated windows theme code
if (process.platform == "win32" || process.platform == "linux" || localStorage["theme"] == "windows"){
	// document.getElementById("backdrop2").style.background = "white"
	document.getElementById("winwindowborder").style.display = "block"
	document.getElementById("sideicons").style.top = "42px"
	document.getElementById("darwin-title-bar").style.display = "none"
	document.getElementById("titleButtonImage").style.display = "none"
	document.getElementById("titleButtonWrapper").style.display = "none"
	document.getElementById("windows-title-bar").style.display = "inline"
	document.getElementById("searchbarcontainer").style.borderRadius = "0px"
	document.getElementById("titletextwin").style.display = "inline"
	document.getElementById("gobackwin").style.display = "inline"
	document.getElementById("gobackwin").style.animation = "none"
	document.getElementById("gobackwin").style.background = "#094AB2"
	document.getElementById("gobackwin").style.height = "31px"
	document.getElementById("gobackwin").style.color = "white"
	document.getElementById("gobackwin").style.lineHeight = "31px"
	document.getElementById("gobackwin").style.left = "1px"
	document.getElementById("gobackwin").style.width = "40px"
	document.getElementById("gobackwin").style.fontSize = "24px"
	document.getElementById("gobackwin").style.paddingLeft = "5px"
	document.getElementById("goback").style.visibility = "hidden"
	document.getElementById("gofwd").style.visibility = "hidden"
	document.getElementById("goback").style.pointerEvents = "none"
	document.getElementById("gofwd").style.pointerEvents = "none"
	document.getElementById("c-agg").style.top = "31px"
	document.getElementById("triangle-bottomleft").style.display = "none"
	document.getElementById("triangle-topleft").style.display = "none"
	document.getElementById("ppbg").style.background = "rgba(255,255,255,0.6)"
	document.getElementById("ppbg").style.height = "calc(100% - 31px)"
	document.getElementById("ppbg").style.top = "31px"
	document.getElementById("searchbg").style.background = "rgba(255,255,255,0.6)"
	document.getElementById("searchbg").style.height = "calc(100% - 31px)"
	document.getElementById("searchbg").style.top = "31px"
	document.getElementById("searchicon").style.color = "black"
	document.getElementById("searchbar").style.color = "black"
	document.getElementById("searchbar").style.fontFamily = "'Segoe UI', 'Helvetica Neue', sans-serif;"
	document.getElementById("loader").style.background = "white"
	document.getElementById("texthero").style.color = "black"
	document.getElementById("texthero").style.fontFamily = "'Segpe UI', sans-serif"
	document.getElementById("loadhero").style.animation = "none"
	document.getElementById("ibtbg").style.background = "white"
	document.getElementById("titleButtonImage").style.display = "none"
	document.getElementById("titleButtonWrapper").style.display = "none"
	document.getElementById("modalwindow").style.borderRadius = "0px"
	document.getElementById("toast").style.borderRadius = "0px"
	document.getElementById("accountmenu").style.borderRadius = "0px"
	document.getElementById("modalButtonDeny").style.borderRadius = "0px"
	document.getElementById("modalButtonConfirm").style.borderRadius = "0px"
	document.getElementById("modalwindow").style.borderTop = "1px solid #298ecc"
	document.getElementById("modalwindow").style.borderLeft = "1px solid #298ecc"
	document.getElementById("modalwindow").style.borderRight = "1px solid #298ecc"
	document.getElementById("modalwindow").style.borderBottom = "1px solid #298ecc"
	document.getElementById("profilepicture").style.borderRadius = "0px"
	document.getElementById("llltb").style.height = "32px"
	document.getElementById("llltb").style.lineHeight = "32px"
	document.getElementById("llpfp").style.borderRadius = "0px"
	document.getElementById("accountmenu").style.backgroundFilter = "blur(0px)"
	document.getElementById("npopoutmain").style.borderRadius = "0px"
	document.getElementById("npopoutmain").style.background = "#298ecc"
	document.getElementById("notificationcounter").style.background = "#298ecc"
}