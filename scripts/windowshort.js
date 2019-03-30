// alert('psst')
devSplah("windowshort.js")

const {BrowserWindow} = require('electron').remote;
const app = require('electron');
const electron = require('electron');
// window.focus()
var theWindow = BrowserWindow.getFocusedWindow();
var contents = document.getElementById("all")
var contentStyle = document.getElementById("all").style
// var theWindow = require('electron').remote.BrowserWindow;
window.immersiveMode = "off"

const fs = require('fs-extra')
const username = require('username');

var remote = require('electron').remote;
var webFrame = require('electron').webFrame;
// var SpellCheckProvider = require('electron-spell-check-provider');
// // `remote.require` since `Menu` is a main-process module.
// var buildEditorContextMenu = remote.require('electron-editor-context-menu');
 
// var selection;
// function resetSelection() {
//   selection = {
//     isMisspelled: false,
//     spellingSuggestions: []
//   };
// }
// resetSelection();
 
// // Reset the selection when clicking around, before the spell-checker runs and the context menu shows.
// window.addEventListener('mousedown', resetSelection);
 
// // The spell-checker runs when the user clicks on text and before the 'contextmenu' event fires.
// // Thus, we may retrieve spell-checking suggestions to put in the menu just before it shows.
// webFrame.setSpellCheckProvider(
//   'en-US',
//   // Not sure what this parameter (`autoCorrectWord`) does: https://github.com/atom/electron/issues/4371
//   // The documentation for `webFrame.setSpellCheckProvider` passes `true` so we do too.
//   true,
//   new SpellCheckProvider('en-US').on('misspelling', function(suggestions) {
//     // Prime the context menu with spelling suggestions _if_ the user has selected text. Electron
//     // may sometimes re-run the spell-check provider for an outdated selection e.g. if the user
//     // right-clicks some misspelled text and then an image.
//     if (window.getSelection().toString()) {
//       selection.isMisspelled = true;
//       // Take the first three suggestions if any.
//       selection.spellingSuggestions = suggestions.slice(0, 3);
//     }
//   }));
 
// window.addEventListener('contextmenu', function(e) {
//   // Only show the context menu in text editors.
//   if (!e.target.closest('textarea, input, [contenteditable="true"]')) return;
 
//   var menu = buildEditorContextMenu(selection);
 
//   // The 'contextmenu' event is emitted after 'selectionchange' has fired but possibly before the
//   // visible selection has changed. Try to wait to show the menu until after that, otherwise the
//   // visible selection will update after the menu dismisses and look weird.
//   setTimeout(function() {
//     menu.popup(remote.getCurrentWindow());
//   }, 30);
// });

// let provider = new SpellCheckProvider('en-US');
// // ...
// let newWord = window.getSelection().toString();
// provider.add(newWord);

function windShow(){
	theWindow.setOpacity(1)
}

function closeWin(){
	// var wSize = theWindow.getSize().toString()
	// localStorage["sizeHW"] = wSize
	// console.log("live:" + wSize)
	// console.log("stored:" + localStorage["sizeHW"])
	// theWindow.close()
	theWindow.hide()
}

function tParent(){
	document.getElementById("darwin-title-bar").ondblclick = untParent;
	// theWindow.setOpacity(0.8)
	hideSidebar()
}

function untParent(){
	document.getElementById("darwin-title-bar").ondblclick = tParent;
	// theWindow.setOpacity(1)
	showSidebar()
}

function winMaximize(){
	document.getElementById("titleMaximize").onclick = winUnmaximize;
	theWindow.maximize()
}

function winUnmaximize(){
	document.getElementById("titleMaximize").onclick = winMaximize;
	theWindow.unmaximize()
}

console.log(" ")
console.log("You probably shouldn't be in here if you don't know what you're doing")
console.log(" ")
console.log("Also I'd advise changing the view to external window by clicking the three dots in the top")
console.log("right corner and then clicking the icon that looks like two windows.")
console.log(" ")

function fwdChecker(){
	try{
		var canFWD = webview.canGoForward()
	} catch(err){
		var canFWD = false
	}
	if(canFWD == false){
		document.getElementById("gofwd").style.display = "none"
		// console.log("cannot go fwd")
	} else {
		document.getElementById("gofwd").style.display = "inline"
		// console.log("can go fwd")
	}
}

function backChecker(){
	try{
		var canGB = webview.canGoBack()
	} catch(err){
		var canGB = false
	}
	if(canGB == false){
		// document.getElementById("goback").style.display = "none"
		document.getElementById("goback").style.display = "none"
		// console.log("cannot go back")
	} else {
		document.getElementById("goback").style.display = "inline"
		// console.log("can go back")
	}
}

// window.setInterval(backChecker,600)
setTimeout(function() { windShow(); }, 150);
window.setInterval(fwdChecker, 150);
window.setInterval(backChecker, 150);

document.getElementById("titleButtonWrapper").addEventListener("mouseenter", function( event ) {   
	document.getElementById("titleButtonImage").style.display = "block";
  })

document.getElementById("titleButtonWrapper").addEventListener("mouseleave", function( event ) {   
	document.getElementById("titleButtonImage").style.display = "none";
  })

function getSize(){
	if (theWindow.isMaximized() == false && ispanelopen == "no"){
		localStorage["width"] = theWindow.getSize()[0]
		localStorage["height"] = theWindow.getSize()[1]
	} else{
		//do nothing
	}
}

function setSize(){
	var widthStr = localStorage["width"]
	var heightStr = localStorage["height"]
	var height = parseInt(heightStr,10)
	var width = parseInt(widthStr,10)
	var hxw = [height,width]
	window.resizeTo(width,height)
}

function resizeAgent(){
	if (theWindow.isMaximized() == false){
		var scrtop = window.screenTop
		var scrleft = window.screenLeft
		localStorage["postop"] = scrtop
		localStorage["posleft"] = scrleft
	}
}

function moveToLastSaved(){
	var scrtop = localStorage["postop"]
	var scrleft = localStorage["posleft"]
	window.moveTo(scrleft , scrtop)
}


function badgeLoad(){
	var i;
	for(i=1;i<=100;i++){
		// console.log(i);
		incremented  = i/100
		// console.log(incremented)
		theWindow.setProgressBar(incremented)
	}
}

function clearConsole(){
	console.clear()
}

function windowCenter(){
	// var storedheight = localStorage["height"]
	// var storedwidth = localStorage["width"]
	// moveTo(screen.width/2 - storedwidth , screen.height/2 - storedheight )
	// console.log( screen.width/2 - storedwidth , screen.height/2 - storedheight )
	theWindow.center()
}

function debugStop() {
    debugger;
    // do potentially buggy stuff to examine, step through, etc.
}

function isHighDensity(){
    return ((window.matchMedia && (window.matchMedia('only screen and (min-resolution: 124dpi), only screen and (min-resolution: 1.3dppx), only screen and (min-resolution: 48.8dpcm)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (min-device-pixel-ratio: 1.3)').matches)) || (window.devicePixelRatio && window.devicePixelRatio > 1.3));
}


function isRetina(){
    return ((window.matchMedia && (window.matchMedia('only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx), only screen and (min-resolution: 75.6dpcm)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min--moz-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2)').matches)) || (window.devicePixelRatio && window.devicePixelRatio >= 2)) && /(iPad|iPhone|iPod)/g.test(navigator.userAgent);
}

// if (process.platform == "linux"){
// 	document.getElementById("goback").style.display = "inline"
// }

function hideSidebar(){
	window.immersiveMode = "on"
	if (prefPaneOpen == "true"){
		prefPaneHide()
	} else{
		//do nothing
	}
	document.getElementById("c-agg").style.transition = "0.3s all ease";
	document.getElementById("darwin-title-bar").style.transition = "0.3s all ease";
	document.getElementById("searchbarcontainer").style.transition = "0.3s all ease";
	document.getElementById("sideicons").style.left = "-54px"
	document.getElementById("ppbtns").style.display = "none"
	document.getElementById("backdrop").style.left = "-68px"
	document.getElementById("backdrop").style.pointerEvents = "none"
	document.getElementById("sideicons").style.pointerEvents = "none"
	document.getElementById("c-agg").style.right = "0px"
	document.getElementById("c-agg").style.left = "0px"
	document.getElementById("darwin-title-bar").style.width = "100%"
	document.getElementById("darwin-title-bar").style.left = "0px"
	document.getElementById("titleButtonWrapper").style.left = "-54px"
	document.getElementById("titleButtonImage").style.left = "-54px"
	
	// document.getElementById("titletext").style.left = "48px"
	// document.getElementById("titletext").style.right = "48px"
	document.getElementById("searchbarcontainer").style.left = "5%"
	document.getElementById("ibtbg").style.width = "100%"
	document.getElementById("ibtbg").style.left = "0px"
	document.getElementById("toast").style.left = "60px"
	window.setTimeout(changeBackToBouncy,333)
	ipc.send("center-sheet")
}

function showSidebar(){
	window.immersiveMode = "off"
	document.getElementById("c-agg").style.transition = "0.3s all ease";
	document.getElementById("darwin-title-bar").style.transition = "0.3s all ease";
	document.getElementById("searchbarcontainer").style.transition = "0.3s all ease";
	document.getElementById("sideicons").style.left = "18px"
	document.getElementById("ppbtns").style.display = "inline"
	document.getElementById("backdrop").style.left = "0px"
	document.getElementById("backdrop").style.pointerEvents = "auto"
	document.getElementById("sideicons").style.pointerEvents = "auto"
	document.getElementById("c-agg").style.left = "68px"
	document.getElementById("c-agg").style.right = "0px"
	document.getElementById("darwin-title-bar").style.width = "calc(100% - 68px)"
	document.getElementById("darwin-title-bar").style.left = "68px"
	document.getElementById("titleButtonWrapper").style.left = "9px"
	document.getElementById("titleButtonImage").style.left = "9px"

	// document.getElementById("titletext").style.left = "32px"
	// document.getElementById("titletext").style.right = "32px"
	document.getElementById("searchbarcontainer").style.left = "calc(5% + 68px)"
	document.getElementById("ibtbg").style.width = "calc(100% - 68px)"
	document.getElementById("ibtbg").style.left = "68px"
	document.getElementById("toast").style.left = "128px"
	window.setTimeout(changeBackToBouncy,333)
	ipc.send("offcenter-sheet")
}

function changeBackToBouncy(){
	document.getElementById("darwin-title-bar").style.transition = "0.1s all ease";
	document.getElementById("searchbarcontainer").style.transition = "0.4s all cubic-bezier(.87,-.41,.19,1.44)";
	document.getElementById("c-agg").style.transition = "0.4s all cubic-bezier(.87,-.41,.19,1.44)";
}

webview.addEventListener("enter-html-full-screen", fullscreenPrep);
webview.addEventListener("leave-html-full-screen", fullscreenExit);

function fullscreenPrep(){
	var height = window.screen.height
	var width = window.screen.width
	hideSidebar()
	// document.getElementById("darwin-title-bar").style.opacity = 0
	document.getElementById("darwin-title-bar").style.display = "none"
	theWindow.setMaximumSize(width,height)
	theWindow.setFullScreenable(true)
	theWindow.setFullScreen(true)
}

function fullscreenExit(){
	var height = window.screen.height
	var width = window.screen.width
	showSidebar()
	// document.getElementById("darwin-title-bar").style.opacity = 1
	document.getElementById("darwin-title-bar").style.display = "inline"
	theWindow.setFullScreen(false)
	theWindow.setFullScreenable(false)
	theWindow.setMaximumSize(600,height)
}

function haltAndCatchFire(arg){
	crashAndRestart(arg)
}

function crashAndRestart(arg){
	contentStyle.transition = "0.3s all ease"
	// contentStyle.transform = "scale(0.9)"
	contentStyle.opacity = "0.7"
	try{
		removeTag("c-agg")
	} catch(err){
		throw err
	}
	function errorHandler(){
		document.getElementById("titletext").innerHTML = "Uh oh :("
		alert("An error has occured with the error code:" + "\n" + arg + "\n" + "\n" + "Bridgeport has been frozen and will restart after confirmation", "Fatal Error");
    	ipc.send("restart","hi")
	}
	window.setTimeout(errorHandler,111)
	throw new Error(arg);
}

function logToConsole(){
	for(var b in window) { 
		// if(window.hasOwnProperty(b)) console.log(b); 
		if(window.hasOwnProperty(b)){
			console.log(b); 	
		} 
	  }
}

function erase(){
	modalShow("WARNING","<b>Are you sure you want to reset?</b><br><br> THIS WILL ALSO LOG YOU OUT","NO","YES")
	modalButtons(modalHide,eraseSilent)
}

function eraseSilent(){
	fs.emptyDir('/users/' + username.sync() + '/Library/Application\ Support/Bridgeport')
	.then(() => {
	//   console.log('success!')
	ipc.send('restart','now')
	})
	.catch(err => {
	//   console.error(err)
	crashAndRestart("reset_failed")
	})
}

function fatalErrorFinder(){
	if(theWindow == null){
		crashAndRestart("RENDERER_WINDOW_INOPERABLE")
	}
	if (document.getElementById("sideicons") == null){
		crashAndRestart("ESSENTIAL_UI_NOT_FOUND")
	}
	if (document.getElementById("darwin-title-bar") == null){
		crashAndRestart("ESSENTIAL_UI_NOT_FOUND")
	}
	if (loggedacct == null || loggedacct == undefined){
		crashAndRestart("USER_NOT_FOUND")
	}
	if (webview.isCrashed() == true){
		crashAndRestart("WEBVIEW_CRASH")
	}
	if (webview.preload.endsWith("scripts/preload-manager.js")){
		// crashAndRestart("WEBVIEW_INVALID_PRELOAD")
	} else{
		crashAndRestart("WEBVIEW_INVALID_PRELOAD")		
	}
}
window.setInterval(fatalErrorFinder,500)

console.timeEnd('renderer process load time')
// console.log("to load core UI")
console.log("")

function unloadRoutine(){
	panelHide()
	resizeAgent()
	// alert('howdy')
}

function runAsMain(arg){
	ipc.send(arg)
}