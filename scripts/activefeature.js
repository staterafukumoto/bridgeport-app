devSplah("activefeature.js")
function activeFeature(){
	try{
		var cURL = webview.getURL()
	} catch(err){
		var cURL = "undefined"
	}
		if (cURL == "https://mobile.twitter.com/home"){
			document.getElementById("profilepicture").classList.remove("focuspfp")
			document.getElementById("homebtn").classList.add("focusDM")
			document.getElementById("searchbtn").classList.remove("focusDM")
			document.getElementById("explorebtn").classList.remove("focusDM")
			document.getElementById("notificationsbtn").classList.remove("focusDM")
			document.getElementById("messagebtn").classList.remove("focusDM")
			document.getElementById("bookmarksbtn").classList.remove("focusDM")
		} else if(cURL.startsWith("https://mobile.twitter.com/explore")){
			document.getElementById("profilepicture").classList.remove("focuspfp")
			document.getElementById("homebtn").classList.remove("focusDM")
			document.getElementById("searchbtn").classList.remove("focusDM")
			document.getElementById("explorebtn").classList.add("focusDM")
			document.getElementById("notificationsbtn").classList.remove("focusDM")
			document.getElementById("messagebtn").classList.remove("focusDM")
			document.getElementById("bookmarksbtn").classList.remove("focusDM")
		}else if(cURL.startsWith("https://mobile.twitter.com/notifications")){
			document.getElementById("profilepicture").classList.remove("focuspfp")
			document.getElementById("homebtn").classList.remove("focusDM")
			document.getElementById("searchbtn").classList.remove("focusDM")
			document.getElementById("explorebtn").classList.remove("focusDM")
			document.getElementById("notificationsbtn").classList.add("focusDM")
			document.getElementById("messagebtn").classList.remove("focusDM")
			document.getElementById("bookmarksbtn").classList.remove("focusDM")
		}else if(cURL.startsWith("https://mobile.twitter.com/messages")){
			document.getElementById("profilepicture").classList.remove("focuspfp")
			document.getElementById("homebtn").classList.remove("focusDM")
			document.getElementById("searchbtn").classList.remove("focusDM")
			document.getElementById("explorebtn").classList.remove("focusDM")
			document.getElementById("notificationsbtn").classList.remove("focusDM")
			document.getElementById("messagebtn").classList.add("focusDM")
			document.getElementById("bookmarksbtn").classList.remove("focusDM")
		}else if(cURL.startsWith("https://mobile.twitter.com/i/bookmarks")){
			document.getElementById("profilepicture").classList.remove("focuspfp")
			document.getElementById("homebtn").classList.remove("focusDM")
			document.getElementById("searchbtn").classList.remove("focusDM")
			document.getElementById("explorebtn").classList.remove("focusDM")
			document.getElementById("notificationsbtn").classList.remove("focusDM")
			document.getElementById("messagebtn").classList.remove("focusDM")
			document.getElementById("bookmarksbtn").classList.add("focusDM")
		}else if(cURL.startsWith("https://mobile.twitter.com/search")){
			document.getElementById("profilepicture").classList.remove("focuspfp")
			document.getElementById("homebtn").classList.remove("focusDM")
			// document.getElementById("searchbtn").classList.add("focusDM")
			document.getElementById("explorebtn").classList.remove("focusDM")
			document.getElementById("notificationsbtn").classList.remove("focusDM")
			document.getElementById("messagebtn").classList.remove("focusDM")
			document.getElementById("bookmarksbtn").classList.remove("focusDM")
		}else if(cURL.startsWith("https://mobile.twitter.com/" + localStorage["loggedinacct"]) && cURL.includes('/status/')){
			document.getElementById("profilepicture").classList.remove("focuspfp")
			document.getElementById("homebtn").classList.remove("focusDM")
			document.getElementById("searchbtn").classList.remove("focusDM")
			document.getElementById("explorebtn").classList.remove("focusDM")
			document.getElementById("notificationsbtn").classList.remove("focusDM")
			document.getElementById("messagebtn").classList.remove("focusDM")
			document.getElementById("bookmarksbtn").classList.remove("focusDM")
			}else if(cURL.startsWith("https://mobile.twitter.com/" + localStorage["loggedinacct"])){
			document.getElementById("profilepicture").classList.add("focuspfp")
			document.getElementById("homebtn").classList.remove("focusDM")
			document.getElementById("searchbtn").classList.remove("focusDM")
			document.getElementById("explorebtn").classList.remove("focusDM")
			document.getElementById("notificationsbtn").classList.remove("focusDM")
			document.getElementById("messagebtn").classList.remove("focusDM")
			document.getElementById("bookmarksbtn").classList.remove("focusDM")
		} else{
			document.getElementById("profilepicture").classList.remove("focuspfp")
			document.getElementById("homebtn").classList.remove("focusDM")
			document.getElementById("searchbtn").classList.remove("focusDM")
			document.getElementById("explorebtn").classList.remove("focusDM")
			document.getElementById("notificationsbtn").classList.remove("focusDM")
			document.getElementById("messagebtn").classList.remove("focusDM")
			document.getElementById("bookmarksbtn").classList.remove("focusDM")
		}
		if (cURL == "https://mobile.twitter.com/settings/profile"){
			document.getElementById("profilepicture").classList.add("shakeIcon")
		} else{
			document.getElementById("profilepicture").classList.remove("shakeIcon")
		}
}

window.setInterval(activeFeature,100)