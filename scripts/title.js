// function missionControl(){
// 	var tl = webview.getTitle() //this creates a variable with the page title as "tl"
// 		var tle = tl.replace('Twitter','Bridgeport') //this replaces the "twitter" text from the title tl to say "Bridgeport"
// 		var tlee = tle
// 		var tleee = "Bridgeport (" + tle + ")"
// 	document.getElementById('missctrltxt').innerHTML = tleee //changes the text in mission control
// }
devSplah("title.js")
var loggedacct = localStorage["loggedinacct"]
var unknownTLE = "Paroozing"

if (new Date().toLocaleDateString().startsWith("10/31") || localStorage["fakehalloween"] == "enabled"){
	appName = "SpookyPort"
	var isHalloween = true
	document.getElementById("textbranding").color = "orange"
	window.setTimeout(function(){toast("Happy Halloween <br> from wayoutware!")},5000)
} else{
	appName = "Bridgeport"
	var isHalloween = false
}

function encodeHTML(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
}

function headerTitle(){
	try{
		var tl = webview.getTitle()
		var tlurl = webview.getURL()
	} catch(err){
		var tl = "Bridgeport"
		var tlurl = "https://mobile.twitter.com/"
	}
	if (tlurl.startsWith("https://mobile.twitter.com/messages")){
		var tle = "Messages"
		richPresence("Chatting")
	} else if (tlurl.startsWith("https://mobile.twitter.com/notifications")){
		var tle = "Notifications"
		richPresence("Checking Notifications")
	} else if (tl == "Compose new Tweet / Twitter"){
		var tle = "Compose"
		richPresence("Engaging in a Flamewar")
	} else if (tlurl == "https://mobile.twitter.com/account"){
		var tle = "Account Settings"
		richPresence(unknownTLE)
	} else if (tlurl.startsWith("https://mobile.twitter.com/explore")){
		var tle = "Explore"
		richPresence("Exploring	Explore Feed")
	} else if (tlurl.startsWith("https://mobile.twitter.com/i/bookmarks")){
		var tle = "Bookmarks"
		richPresence("Looking at Bookmarks")
	} else if(tl.startsWith('https://')){
		var tle = "Bridgeport"
		richPresence(unknownTLE)
	} else if(tlurl.startsWith('https://mobile.twitter.com/home')){
		var tle = "Timeline"
		richPresence("Reading Timeline")
	} else if(tlurl.endsWith('/followers')){
		if (getNameFromFavUsers() == loggedacct){
			tle = "Users who Follow Me"
		} else{
			tle = "Users who Follow @" + getNameFromFavUsers() + ""
		}
	} else if(tlurl.endsWith('/followers_you_follow')){
			tle = "Followers you Follow"
	} else if(tlurl.endsWith('/following')){
		if (getNameFromFavUsers() == loggedacct){
			tle = "Users who I am following"
		} else{
			tle = "Users who are Following @" + getNameFromFavUsers() + ""
		}
	} else if(tlurl.includes("/photo/")){
		var tle = "Photo"
		richPresence("Looking at a Photo")
	} else if(tlurl.includes("/video/")){
		var tle = "Video"
		richPresence("Looking at a Video")
	} else if(tlurl.includes("/status/")){
		var tle = "Tweet"
		richPresence("Looking at a Tweet")
	} else if(tlurl.includes("src=trend_click")){
		var tle = "Trend"
	} else if(tlurl.includes("/events/")){
		var tle = "Event"
	}
	else if(tlurl.includes("/search?")){
		var s1 = webview.getURL()
		var s2 = s1.substr(36)
		var s3 = s2.replace("+"," ")
		var tle = "Search results for <b>'" + encodeHTML(decodeURIComponent(s3)) + "'</b>"
		richPresence("Looking at a Tweet")
	}  else if(tlurl == "https://mobile.twitter.com/" + loggedacct){
		var tle = "My Tweets"
	} else if(tlurl == "https://mobile.twitter.com/" + loggedacct + "/with_replies"){
		var tle = "My Tweets & Replies"
	} else if(tlurl == "https://mobile.twitter.com/" + loggedacct + "/media"){
		var tle = "My Media"
	} else if(tlurl == "https://mobile.twitter.com/" + loggedacct + "/followers"){
		var tle = "Accounts that Follow you"
	} else if(tlurl == "https://mobile.twitter.com/" + loggedacct + "/following"){
		var tle = "Accounts that You Follow"
	} else if(tlurl == "https://mobile.twitter.com/" + loggedacct + "/likes"){ 
		var tle = "My Likes"
	} else if(tlurl == "https://mobile.twitter.com/i/timeline"){ 
		var tle = "Details"
		richPresence("Checking Notifications")
	} else if(tl == "Twitter"){
		// var tle = "<img draggable='false' src='img/loader.png' height='30px' class='titleimage'>"
		var tle = appName
		richPresence(unknownTLE)
	} else if(tl.endsWith("/ Twitter")){
		// var tle = tl.replace('/ Twitter',' - Bridgeport')
		// var tle = "<img draggable='false' src='img/loader.png' height='30px' class='titleimage'>"
		var tle = appName
		richPresence(unknownTLE)
	}else{
		// var tle = tl
		// var tle = tl.replace('Twitter','Bridgeport')
		// var tle = "<img draggable='false' src='img/loader.png' height='32px' class='titleimage'>"
		var tle = appName
		richPresence(unknownTLE)
	}
	document.getElementById("titletext").innerHTML = tle
	document.getElementById("titletextwin").innerHTML = tle
	document.getElementById("missctrltxt").innerHTML = "Bridgeport -  " + tle
}

function focusCheck(){
	if (document.hasFocus()) {
    document.getElementById("titleClose").classList.remove('dimtitlebtn')
    document.getElementById("titleMinimize").classList.remove('dimtitlebtn')
    document.getElementById("titleMaximize").classList.remove('dimtitlebtn')
    // document.getElementById("darwin-title-bar").classList.remove('dimstatusbar')
    // document.getElementById("side-title-bar").classList.remove('dimstatusbar')
    document.getElementById("classicbar").classList.remove('dimstatusbar')
	document.getElementById("clickblocker").style.pointerEvents = "none"
	window.discordIdle = "false"
} else{
	document.getElementById("titleClose").classList.add('dimtitlebtn')
	document.getElementById("titleMinimize").classList.add('dimtitlebtn')
	document.getElementById("titleMaximize").classList.add('dimtitlebtn')
    // document.getElementById("side-title-bar").classList.remove('dimstatusbar')
	// document.getElementById("darwin-title-bar").classList.add('dimstatusbar')
	document.getElementById("classicbar").classList.add('dimstatusbar')
	document.getElementById("clickblocker").style.pointerEvents = "auto"
	hideAccountMenu()
	window.discordIdle = "true"
}
}

function titlebarHide(){
	try{
		var tth = webview.getURL()
	} catch(err){
		var tth = "Bridgeport"
	}
	if (tth == "https://mobile.twitter.com/compose/tweet" || tth == "https://mobile.twitter.com/login"){
		document.getElementById("c-agg").style.top = "38px"
		document.getElementById("c-agg").style.height = "calc(100% - 38px)"
		hideBB()
	//repeat for the sake of seeing all the code without scrolling
	}else if(tth == "https://mobile.twitter.com/i/flow/signup" || tth.startsWith('https://mobile.twitter.com/i/foundmedia')){ 
		document.getElementById("c-agg").style.top = "38px"
		document.getElementById("c-agg").style.height = "calc(100% - 38px)"
		hideBB()
	}else if(tth == "https://mobile.twitter.com/settings/profile" || tth.endsWith("/retweets") || tth.endsWith("/likes") && tth.includes("status")){ 
		document.getElementById("c-agg").style.top = "38px"
		document.getElementById("c-agg").style.height = "calc(100% - 38px)"
		hideBB()
	}else if(tth.includes("/photo") || tth.includes("/video/")|| tth.endsWith("/people")|| tth.endsWith("/recipients") ){ 
		document.getElementById("c-agg").style.top = "38px"
		document.getElementById("c-agg").style.height = "calc(100% - 38px)"
		hideBB()
	}else if(tth == 'https://mobile.twitter.com/messages/compose' || tth.endsWith("/media_tags")) { 
		document.getElementById("c-agg").style.top = "38px"
		document.getElementById("c-agg").style.height = "calc(100% - 38px)"
		hideBB()
	}else if(tth.startsWith("https://mobile.twitter.com/i/report/")) { 
		document.getElementById("c-agg").style.top = "38px"
		document.getElementById("c-agg").style.height = "calc(100% - 38px)"
		hideBB()
	}else{
		document.getElementById("c-agg").style.top = "0px"
		document.getElementById("c-agg").style.height = "100%"
		window.setTimeout(showBB,100)
	}

}


function showBB(){
	document.getElementById("goback").style.visibility = "visible"
	// document.getElementById("goback").style.display = "block"
}

function hideBB(){
	// document.getElementById("goback").style.display = "none"
	document.getElementById("goback").style.visibility = "hidden"
}

function showErrorMsg(){
	document.getElementById("textheroerror").display = "inline"
}

webview.addEventListener("page-title-updated", headerTitle);
webview.addEventListener("page-title-updated", headerTitle);
webview.addEventListener("did-start-loading", headerTitle);
webview.addEventListener("page-title-updated", titlebarHide);

window.setInterval(titlebarHide, 150) //updates header text once every x milliseconds
window.setInterval(headerTitle, 150) //updates header text once every x milliseconds
// window.setInterval(missionControl, 750) //updates mission control text once every x milliseconds
window.setInterval(focusCheck, 10) //checks window focus every 10ms so that the buttons grey out on inactive