devSplah("prefpane.js")
const {clipboard} = require('electron')
window.prefPaneOpen = false

// var box2 = document.querySelector("#prefpaneside");
// document.addEventListener("click", function(event) {
// 	if (event.target.closest(".box2")){
// 		alert('hello')
// 	};
// 	prefPaneHide()
// });

function prefPaneShow(){
	document.getElementById("morebutton").style.transition = "0.3s all ease"
	document.getElementById("newbutton").style.transition = "0.3s all ease"
	document.getElementById("searchbutton").style.transition = "0.3s all ease"
	showSidebar()
	function actuallyShowIt(){
		document.getElementById("morebutton").onclick = prefPaneHide;
		document.getElementById("morebutton").style.color = "#01c9ff"
		document.getElementById("morebutton").style.transform = "rotate(0deg)"
		document.getElementById("morebutton").style.bottom = "302px"
		document.getElementById("newbutton").style.bottom = "350px"
		document.getElementById("searchbutton").style.bottom = "398px"
		document.getElementById("prefpaneside").style.bottom = "10px"
		if(localStorage["blur"] == "disabled"){
			document.getElementById("sideicons").style.opacity = "0.1"
			// document.getElementById("sideicons").style.filter = "blur(0px)"
		} else{
			document.getElementById("sideicons").style.opacity = "0.2"
			document.getElementById("sideicons").style.filter = "blur(5px)"
		}
		document.getElementById("sideicons").style.pointerEvents = "none"
	}
	if (immersiveMode == "on"){
		window.setTimeout(actuallyShowIt, 500)
	} else{
		actuallyShowIt()
	}
	window.prefPaneOpen = "true"
}

function prefPaneHide(){
	document.getElementById("morebutton").onclick = prefPaneShow;
	document.getElementById("morebutton").style.color = "#707070"
	document.getElementById("morebutton").style.transform = "rotate(180deg)"
	document.getElementById("morebutton").style.bottom = "10px"
	document.getElementById("newbutton").style.bottom = "48px"
	document.getElementById("searchbutton").style.bottom = "92px"
	document.getElementById("searchbutton").style.pointerEvents = "auto"
	document.getElementById("sideicons").style.opacity = "1"	
	document.getElementById("sideicons").style.pointerEvents = "auto"
	document.getElementById("sideicons").style.filter = "blur(0px)"
	document.getElementById("prefpaneside").style.bottom = "-290px"
	window.prefPaneOpen = "false"
}



function ppMessages(){
	webview.loadURL('https://mobile.twitter.com/messages/compose');
	webview.clearHistory()
	invertShow()
}

function ppLikes(){
	webview.loadURL('https://twitter.com/i/likes')
}

function ppMe(){
	webview.loadURL('https://mobile.twitter.com/account')
	webview.clearHistory()
	invertShow()
}

function ppSettings(){
	webview.loadURL('https://mobile.twitter.com/settings/')
}

function ppExplore(){
	webview.loadURL('https://mobile.twitter.com/explore')
}

function ppAlwaysTop(){
	document.getElementById("ppAlwaysOnTop").onclick = ppRegBehave;
	document.getElementById("ppRadioBtn1").textContent = "radio_button_checked";
	// localStorage["topStatus"] = "true"
	theWindow.setAlwaysOnTop(true)
}

function ppRegBehave(){
	document.getElementById("ppAlwaysOnTop").onclick = ppAlwaysTop;
	document.getElementById("ppRadioBtn1").textContent = "radio_button_unchecked";
	// localStorage["topStatus"] = "false"
	theWindow.setAlwaysOnTop(false)
}

function ppEyeBleach(){
	webview.loadURL('https://mobile.twitter.com/hourlywolvesbot/media')
	invertShow()
}

function ppUpdate(){
    ipc.send("check-updates","hi")
}

function ppSettingsWindow(){
	ipc.send("app-settings","hi")
}

function copyToClipboard(){
	// var currentURL = webview.getURL()
	// var step1 = currentURL.substring(15)
	// var step2 = "https://" + step1
	// clipboard.writeText(step2)
	if (universalLink() == "INVALID_CONTENT"){
		console.log("invalid_content")
	}else{
		clipboard.writeText(universalLink())
		toast("Copied URL")
	}
	// document.getElementById("clipboardsuccess").style.left = "72px"
	// document.getElementById("clipboardsuccess").style.opacity = "1"
	// window.setTimeout(hideClipNotification,1500)
}

function debugCopyToClipboard(){
	clipboard.writeText(webview.getURL())
}

function cbWrite(input){
	clipboard.writeText(input)
}

function shareViaEmail(){
	if (universalLink() == "INVALID_CONTENT"){
		console.log("invalid_content")
	}else{
		shell.openExternal('mailto:?subject=Check%20this%20out!&body=' + universalLink() + "%0D%0A %0D%0A %0D%0A via BridgeportApp %0D%0A https://bridgeportapp.me")

	}
}

function shareViaFacebook(){
	//i don't know why the fuck you'd ever do this but
	//knock yourself out
	if (universalLink() == "INVALID_CONTENT"){
		console.log("invalid_content")
	}else{
		shell.openExternal('https://www.facebook.com/sharer.php?u=' + universalLink())
	}
}

function shareViaReddit(){
	if (universalLink() == "INVALID_CONTENT"){
		console.log("invalid_content")
	}else{
		shell.openExternal('https://reddit.com/submit?url=' + universalLink() +'&title=')
	}
}

function shareViaTelegram(){
	if (universalLink() == "INVALID_CONTENT"){
		console.log("invalid_content")
	}else{
		shell.openExternal('tg://msg_url?url=' + universalLink() + " - via Bridgeport for Twitter")
	}
}
function shareViaPinterest(){
	if (universalLink() == "INVALID_CONTENT"){
		console.log("invalid_content")
	}else{
		shell.openExternal('https://pinterest.com/pin/create/button/?url=' + universalLink() + '&description=-via%20Bridgeport%20for%20Twitter')
	}
}

function hideClipNotification(){
	document.getElementById("clipboardsuccess").style.opacity = "0"
	document.getElementById("clipboardsuccess").style.left = "-328px"
	prefPaneHide()
}

var forbiddenLinks = [ "https://mobile.twitter.com/home", 
"https://mobile.twitter.com/explore", 
"https://mobile.twitter.com/notifications", 
"https://mobile.twitter.com/notifications/mentions", 
"https://mobile.twitter.com/messages", 
"https://mobile.twitter.com/i/bookmarks",
"https://mobile.twitter.com/account",
"https://mobile.twitter.com/settings",
"https://mobile.twitter.com/settings/account",
"https://mobile.twitter.com/settings/phone",
"https://mobile.twitter.com/settings/email",
"https://mobile.twitter.com/settings/password",
"https://mobile.twitter.com/settings/language",
"https://mobile.twitter.com/settings/country",
"https://mobile.twitter.com/settings/applications",
"https://twitter.com/i/timeline"]

function universalLink(){
	var currentURL = webview.getURL()
	var step1 = currentURL.substring(15)
	var step2 = "https://" + step1
	if (forbiddenLinks.includes(currentURL)){
		toast("This cannot be shared.")
		return "INVALID_CONTENT";
	} else{
		toast("Sharing...")	
		return step2	
	}
}

function toast(input){
	document.getElementById("toast").innerHTML = input
	// document.getElementById("toast").style.display = "inline"
	document.getElementById("toast").className = "toastActive"
	function toastHide(){
		// document.getElementById("toast").style.display = "none"
		document.getElementById("toast").className = "toastInactive"
	}
	window.setTimeout(toastHide, 2500)
}

function richPresence(arg){
	if (localStorage["richPresence"] == "disabled"){
		ipc.send("rich-presence-clear", arg)		
	}else if (discordIdle == "true"){
		ipc.send("rich-presence-update", "Idling")
	}else{
		ipc.send("rich-presence-update", arg)
	}
}

function simulateNoInternet(){
	window.location.href = "invalid.html"
}

document.getElementById("morebutton").style.transition = "0.3s all ease"
document.getElementById("newbutton").style.transition = "0.3s all ease"
document.getElementById("searchbutton").style.transition = "0.3s all ease"