devSplah("notificationbubble.js")
var audio = new Audio('scripts/notification.mp3');
var audioplayed = "false"
audio.loop = false

function showNotifications(ntinput){
		if(ntinput < 10){
			document.getElementById("notificationcounter").innerHTML = ntinput;
		} else{
			document.getElementById("notificationcounter").innerHTML = "9+";
		}
		setDockBadge(ntinput.toString())
		// document.getElementById("notificationcounter").style.display = "inline";
		document.getElementById("npopoutmain").style.right = "-0px"
		window.countstore = localStorage["unreadnotifications"]
		window.notifycount = ntinput
		if (notifycount > countstore){
			notifyUser()
			localStorage["unreadnotifications"] = notifycount
		}
}

function hideNotifications(){
		document.getElementById("notificationcounter").innerHTML = ""
		clearDockBadge()
		document.getElementById("npopoutmain").style.right = "-99px"
		localStorage["unreadnotifications"] = 0
		window.notifycount = 0
		window.audioplayed = "false";
}

webview.addEventListener('ipc-message', event => {
	var ntfycnt = (event.channel)
	window.echannel = event.channel
	var parsed = parseInt(event.channel)
	if(event.channel == "lightmode"){
		changeToLight()
	}else if(event.channel == "darkmode"){
		changeToDark()
	} else if(parsed != NaN){
		showNotifications(parsed)
	}
  })

function notifyUser(){
if (echannel == "lightmode"){
	//do nothing
} else{
		window.audioplayed = "true";
	if (notifycount <= 1){
		var endmsg = " unread alert"
	} else{
		var endmsg = " unread alerts"
	}
	if (localStorage["ntfy"] == "enabled" && notifycount != "NaN"){
	var audio = new Audio('scripts/bpnotify.mp3');
	audio.play();
	Push.create('Ahem!',{
		body: "You have " + notifycount + endmsg,
		timeout: 5000,
		silent: 1,
		onClick: function () {
			invertShow()
			theWindow.show()
			this.close();
			webview.loadURL('https://mobile.twitter.com/notifications');
			webview.clearHistory()
		},
	})
	// new Notification('Ahem!',{
	// 	body: "You have " + "1" + "message",
	// 	timeout: 5000,
	// 	silent: true,
	// 	onclick: function () {
	// 		theWindow.show()
	// 		this.close();
	// 		webview.loadURL('https://mobile.twitter.com/notifications');
	// 		webview.clearHistory()
	// 	},
	// })
}
}
}

function setDockBadge(arg){
	// ipc.on('dock-badge', dock.badge(arg))
    ipc.send("dock-badge",arg)
}

function clearDockBadge(){
	// ipc.on('dock-badge', dock.badge(arg))
    ipc.send("dock-badge","")
}

function dumpData(input){
	document.getElementById("dumpcollector").innerHTML = input
}

function ntNotificationGet(){
	if (webview.getTitle().startsWith('(')){
		var betantfycnt = webview.getTitle().substr(1,1)
		return betantfycnt
	} else{
		return "none"
	}
}

function ntNotificationPost(){
	if (ntNotificationGet() == "none"){
		//do nothing
		dumpData("trash")
	} else{
		showNotifications(ntNotificationGet())
	}
}

window.setInterval(ntNotificationPost, 100)