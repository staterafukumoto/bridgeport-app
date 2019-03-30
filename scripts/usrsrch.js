devSplah("usrsrch.js")
var searchField = document.getElementById("searchbar");
var userInput;
var ipc = require('electron').ipcRenderer;
window.isBackOpen = "false"


// //this code finally doesn't need to be here!
// function parser() {
// 	alert('hello')
// 	var stage0 = userInput.string()
// 	var stage1 = stage0.replace(' ','+')
// 	var stage2 = stage1.replace('#','%23')
// 	var stage3 = stage2.replace('@','40')
// }


function regSearch(){
	var userInput = searchField.value
	if (userInput.startsWith("@")){
		var stage1 = userInput.replace(" ","")
		var stage2 = stage1.replace("#","%23")
		webview.loadURL('https://mobile.twitter.com/' + stage2);
		webview.clearHistory()
		barInvisible();
	} else if (userInput == ""){
		toast("Enter a search query.")
		barInvisible()
		invertHide()
	}else if (userInput.startsWith("bpsc-")){
		if (userInput == "bpsc-potato"){
			shell.openExternal("https://www.youtube.com/watch?v=IFfLCuHSZ-U")
		} else if(userInput == "bpsc-whoishe"){
			if (localStorage["whoishe"] == "run"){
				toast("maybe you don't get to know his name")
				localStorage["whoishe"] = "scarred"
			} else if(localStorage["whoishe"] == "scarred"){
				toast("maybe he doesn't want you to")
				localStorage["whoishe"] = ""
			} else if(localStorage["whoishe"] == ""){
				modalShow("Alright, Fine.","Do you want to enable haunted mode?","No","YES")
				modalButtons(dontEnableHauntedMode,enableHauntedMode)
				function enableHauntedMode(){
					localStorage["hm1"] = "true"
					toast("████████████████████████")
					modalHide()
				}
				function dontEnableHauntedMode(){
					modalHide()
					toast("Then don't bother me again.")
					localStorage.removeItem("whoishe")
				}
			} else{
				document.documentElement.innerHTML = 
				"<br><br><center><font face='verdana' color='white' size='72px'>My you're inquisitive</font> <br><b>Try again later.";
				localStorage["whoishe"] = "run"
			}

		} else if(userInput == "bpsc-console"){
			theWindow.openDevTools({mode:'undocked'})
			clearConsole()
		} else if(userInput == "bpsc-meme"){
			modalButtons(modalHide,modalHide)
			modalShow("Hidden Image 1","<center><img width='280px' src='img/bpmeme.png'></center>","Cool","Cool")
			if (localStorage["meme1"] == true){
				//do nothing
			} else{
				toast("You have unlocked item: <code>Hidden Image 1</code>")
			}
			localStorage["meme1"] = true
		} else if(userInput == "bpsc-joel") {
			localStorage["theme"] = "pink"
			theWindow.reload()
		}else if(userInput == "bpsc-reset") {
			modalShow("WARNING","Are you sure you want to reset?<br><br> This will also log you out","No","YES")
			modalButtons(modalHide,eraseSilent)
		} else if(userInput == "bpsc-eatmyshorts"){
			shell.openExternal("https://youtu.be/ByHsLzU4kbU")
		}else if(userInput == "bpsc-corndog"){
			webview.loadURL("http://corndog.io")
		}else if(userInput == "bpsc-lucky"){
			webview.loadURL("http://www.partridgegetslucky.com")
		}else if(userInput == "bpsc-epilepsydogs"){
			webview.loadURL("https://omfgdogs.com")
		}else if(userInput == "bpsc-lsreset"){
			modalShow("WARNING","Are you sure you want to reset?<br><br> This will NOT log you out","No","YES")
			modalButtons(modalHide,softErase)	
			function softErase(){
				localStorage.clear();
				ipc.send('restart','hi')
			}
		}else if(userInput == "bpsc-"){
			searchField.placeholder = "Bridgeport Special Code"
			window.setTimeout(barVisible, 50)
		}else if(userInput == "bpsc-impulse101"){
			// document.documentElement.innerHTML = "(At that moment Gordon Freeman barges into your room and cracks your skull with a crowbar.)"
			toast("At that moment Gordon Freeman barges into your room and cracks your skull with a crowbar.")
		}else if(userInput == "bpsc-sicc"){
			webview.loadURL("https://www.warnerbros.com/archive/spacejam/movie/jam.htm")
		}else if(userInput == "bpsc-windows"){
			localStorage["theme"] = "windows"
			theWindow.reload()
		}else if(userInput == "bpsc-nointernet"){
			simulateNoInternet()
		}else if(userInput == "bpsc-invalidate"){
			localStorage["theme"] = "invalidconfiguration"
			theWindow.reload()
		}else if(userInput == "bpsc-notifytest"){
			showNotifications(1)
		}else if(userInput == "bpsc-consolewbv"){
			webview.openDevTools()
		}else if(userInput == "bpsc-immerse"){
			document.getElementById("titlebars").style.display = "none"
			document.getElementById("ppbg").style.height = "100%"
			document.getElementById("ppbg").style.top = "0px"
			document.getElementById("searchbg").style.height = "100%"
			document.getElementById("searchbg").style.top = "0px"
			webview.insertCSS('header:not(form) { height: 0px !important;}')
		}else if(userInput == "bpsc-unimmerse"){
			document.getElementById("titlebars").style.display = "inline"
			webview.insertCSS('header:not(form) { height: 38px !important;}')
		}else if(userInput == "bpsc-canvas"){
			iabOpen("https://zorinos.com/start/")
		}else if(userInput == "bpsc-whybonelesschicken"){
			iabOpen("https://youtu.be/DZVr5UcZE-E")
		}else if(userInput == "bpsc-dynamicsfile"){
			shell.openItem('file://' + __dirname + 'scripts/dynamic.js')
		}else if(userInput == "bpsc-crashtest"){
			unrecoverableError("renderer.search.usertest")
		}else if(userInput == "bpsc-badge"){
			setDockBadge("hi")
			toast("look down")
		}else if(userInput == "bpsc-modaltest"){
			modalImage("img/steve.png")
			modalShow("Steve Sez","Wait a second, this isn't a twiggy. But The modal library is working.","uh, okay?","uh, okay?")
			modalButtons(modalHide, modalHide)
		}else if(userInput == "bpsc-iamadeveloper"){
			localStorage["isDev"] = "yes"
			toast("you are now a developer")
			if (localStorage["isDev"] == "yes"){
				console.log("running in: dev mode")
				if(sessionStorage["hasSentDev"] == "yes"){
					//do nothing
				} else{
					ipc.send('add-dev','hi')
					sessionStorage["hasSentDev"] = "yes"
				}
			} else{
				console.log("you are not registered as a developer.")
			}
		}
		barInvisible()
		var showloader =  "false"
	}else{
		var stage1 = userInput.replace(" ","+")
		var stage2 = stage1.replace("#","%23")
		var stage3 = stage2.replace("@","%40")
		if(stage3 == ""){
			// toast("Enter a search query.")
			stop()
		} else{
			webview.loadURL('https://mobile.twitter.com/search?q=' + stage3);
			barInvisible();
			webview.clearHistory()
		}

	}
	if (showloader == "false"){
		//do nothing
	} else{
		invertShow()
	}
}


function barVisible(){
	if (sessionStorage["loggedin"] == "yes"){
    	document.getElementById("searchbar").disabled = false
		var userInput;
		searchField.value = ""
		document.getElementById("searchbarcontainer").classList.add('searchbaractive')
		if(localStorage["blur"] == "disabled"){
			document.getElementById("searchbg").classList.add('bgActive')
		} else{
				document.getElementById("searchbg").classList.add('bgActiveUA')
		}
		// document.getElementById("searchbg").style.display = "inline"
		webview.style.transform = "scale(0.98)"
		document.getElementById("searchbutton").classList.add('searchActive')
		document.getElementById("searchbutton").onclick = barInvisible;
		document.getElementById("searchbg").onclick = barInvisible;
		document.getElementById("searchbar").focus();
		document.getElementById("morebutton").style.pointerEvents = "none"
		prefPaneHide()
		window.isBackOpen = "true"
	}
}

function barInvisible(){
    document.getElementById("searchbar").disabled = true
	document.getElementById("searchbarcontainer").classList.remove('searchbaractive')
	document.getElementById("searchbg").classList.remove('bgActive')
	document.getElementById("searchbg").classList.remove('bgActiveUA')
	// document.getElementById("searchbg").style.display = "none"
	webview.style.transform = "scale(1)"
	document.getElementById("searchbutton").classList.remove('searchActive')
	document.getElementById("searchbutton").onclick = barVisible;
	document.getElementById("morebutton").style.pointerEvents = "auto"
	// searchField.value = "" //the searchbar is now cleared on run and not after, because the animation looks cleaner
	window.isBackOpen = "false"
}

document.getElementById("searchbar")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
		document.getElementById("searchicon").click();
    }else if (event.keyCode === 27) {
        document.getElementById("searchbg").click();
    }
});

if (localStorage["isDev"] == "yes"){
	console.log("running in: dev mode")
	if(sessionStorage["hasSentDev"] == "yes"){
		console.log("└ already told main process to add developer menu")
	} else{
		ipc.send('add-dev','hi')
		sessionStorage["hasSentDev"] = "yes"
		console.log("└ pinging main process to add developer menu")
	}
} else{
	console.log("you are not registered as a developer. how are you even here?")
}


// //replace spaces with "+"
// //replace "#" with "%23"
// //replace "@" with "%40"
