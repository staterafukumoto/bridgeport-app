// const webview = document.getElementById("acctchecker")

// // function getTwitterAcct(){
// // 	window.urlbefore = "https://mobile.twitter.com/home"
// // 	console.log(urlbefore)
// // 	webview.loadURL("https://mobile.twitter.com/following")
// // 	// webview.addEventListener("dom-ready", function(){window.setTimeout(getTwitterAcct2, 1000)});
// // 	window.setTimeout(getTwitterAcct2, 1000)
// // 	function getTwitterAcct2(){
// // 		var currentURL = webview.getURL()
// // 		var st1 = currentURL.substring(27)
// // 		console.log(st1)
// // 		var st2 = st1.substring(0, st1.length - 10)
// // 		console.log(st2)
// // 		localStorage["loggedinacct"] = st2
// // 			console.log('account stored successfully') // do some more useful code here}
// // 		goBackToURL()
// // 		window.setTimeout(function(){theWindow.setOpacity(1)}, 50)
// // 		getProfileImage()
// // }}

// function getTwitterAcct(){
//     var wURL = "webview.getURL()"
//     if(wURL == "https://mobile.twitter.com/login"){
//         window.close()
//     } else{
//         webview.loadURL("https://mobile.twitter.com/following")
//         function getTwitterAcct2(){
//             var currentURL = webview.getURL()
//             var st1 = currentURL.substring(27)
//             console.log(st1)
//             var st2 = st1.substring(0, st1.length - 10)
//             console.log(st2)
//             localStorage["loggedinacct"] = st2
//                 console.log('account stored successfully') // do some more useful code here}
//             goBackToURL()
//             window.setTimeout(function(){theWindow.setOpacity(1)}, 50)
//             getProfileImage()
//     }
// }





// // webview.removeEventListener("dom-ready", getTwitterAcct)