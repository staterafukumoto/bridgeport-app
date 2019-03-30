devSplah("accountmanager.js")

function getTwitterAcct(){
	window.urlbefore = "https://mobile.twitter.com/home"
	// console.log(urlbefore)
	webview.loadURL("https://mobile.twitter.com/following")
	// webview.addEventListener("dom-ready", function(){window.setTimeout(getTwitterAcct2, 1000)});
	window.setTimeout(getTwitterAcct2, 1000)
	function getTwitterAcct2(){
		var currentURL = webview.getURL()
		var st1 = currentURL.substring(27)
		console.log(st1)
		var st2 = st1.substring(0, st1.length - 10)
		console.log(st2)
		localStorage["loggedinacct"] = st2
			console.log('account: ' + st2 + ' stored successfully') // do some more useful code here
		goBackToURL()
		window.setTimeout(function(){theWindow.setOpacity(1)}, 50)
		getProfileImage()
}}

function goBackToURL(){
	webview.loadURL(urlbefore)
	webview.clearHistory()
}

function getProfileImage(){
	var username = localStorage["loggedinacct"]
	var image = document.getElementById("profilepicture")
	var imagetwo = document.getElementById("llpfp")
	if(username == undefined){
		image.src = "img/placeholder.png"
	}else {
		image.src = "https://twitter.com/" + username + "/profile_image?size=bigger"
		imagetwo.src = "https://twitter.com/" + username + "/profile_image?size=original"
		// image.title = "@" + username
		document.getElementById("mnuname").innerHTML = username
		document.getElementById("llusername").innerHTML = "@" + username
	}
}

function profileImage(){
	var username = localStorage["loggedinacct"]
	if(localStorage["loggedinacct"] == undefined){
		getTwitterAcct()
	} else{
		webview.loadURL("https://mobile.twitter.com/" + username)
		webview.clearHistory()
	}
}

function showAccountMenu(){
	document.getElementById("profilepicture").oncontextmenu = hideAccountMenu
	webview.style.pointerEvents = "none"
	document.getElementById("accountmenu").style.transform = "scale(1,1)"
	document.getElementById("accountmenu").style.opacity = "1"
	document.getElementById("accountmenu").style.pointerEvents = "auto"
}

function hideAccountMenu(){
	document.getElementById("profilepicture").oncontextmenu = showAccountMenu
	webview.style.pointerEvents = "auto"
	document.getElementById("accountmenu").style.transform = "scale(0.6,0)"
	document.getElementById("accountmenu").style.opacity = "0"
	document.getElementById("accountmenu").style.pointerEvents = "none"
}

var box = document.querySelector("#accountmenu");

// Detect all clicks on the document
document.addEventListener("click", function(event) {

// If user clicks inside the element, do nothing
if (event.target.closest(".box")) return;

// If user clicks outside the element, hide it!
	hideAccountMenu()
});

function actMyProfile(){
	webview.loadURL("https://mobile.twitter.com/" + loggedacct)
	webview.clearHistory()
	invertShow()
}

function actFollowers(){
	webview.loadURL('https://mobile.twitter.com/followers')
	webview.clearHistory()
	invertShow()
}

function actFollowing(){
	webview.loadURL('http://mobile.twitter.com/following')
	webview.clearHistory()
	invertShow()
}

function actLists(){
	webview.loadURL("https://mobile.twitter.com/" + loggedacct + "/lists")
	webview.clearHistory()
	invertShow()
}

function actLikes(){
	webview.loadURL("https://mobile.twitter.com/" + loggedacct + "/likes")
	webview.clearHistory()
	invertShow()
}

function actProfile(){
	webview.loadURL("https://mobile.twitter.com/settings/profile")
	webview.clearHistory()
	invertShow()
}

function actMoments(){
	webview.loadURL("https://mobile.twitter.com/" + loggedacct + "/moments")
	webview.clearHistory()
	invertShow()
}

function actSettings(){
	ipc.send("app-settings")
}

function actErase(){
	modalShow("Twitter Account","Are you sure you want to Logout?<br><i> (This will also reset your settings)</i>","Cancel","Yes")
	modalButtons(modalHide,eraseSilent)
}

function getNameFromFavUsers(){
	if(webview.getURL().endsWith("/followers")){
		var trim1 = webview.getURL().substring(27)
		var trim2 = trim1.substring(0, trim1.length - 10)
		return trim2
	} else if(webview.getURL().endsWith("/following")){
		var trim1 = webview.getURL().substring(27)
		var trim2 = trim1.substring(0, trim1.length - 10)
		return trim2
	} else{
		return "invalid"
	}
}

function generateTweetIntent(){
	if(webview.getURL().includes("/status/")){
		var trim1 = webview.getURL().substring(27)
		var trim2 = trim1.substring(0, trim1.length)
		//https://twitter.com/intent/tweet?in_reply_to=id
		// return trim2
		var trim3 = trim2.split('/status/')[1]
		return trim3
	}else{
		return "invalid"
		// toast("Open a Tweet to reply to")
	}
}

function replyToTweet(){
	if(webview.getURL().includes("/status/")){
		var trim1 = webview.getURL().substring(27)
		var trim2 = trim1.substring(0, trim1.length)
		//https://twitter.com/intent/tweet?in_reply_to=id
		// return trim2
		var trim3 = trim2.split('/status/')[1]
		var url = "https://twitter.com/intent/tweet?in_reply_to=" + trim3
		localStorage["tweetToReply"] = url
		let win = new BrowserWindow({width: 500, maxWidth: 500, height: 300, minHeight: 300, frame: false, backgroundColor: '#ffffff'})
        win.loadURL('file://' + __dirname + '/respond/index.html');
	}else{
		// return "invalid"
		toast("You must have a tweet focused to reply")
	}
}