devSplah("ipchandler.js")

function composeNewTweet(){
    ipc.send("new-tweet","hi")
}

function logTest(arg){
    ipc.send("log-test",arg)
}

var ipc = require('electron').ipcRenderer;

ipc.on('search', function(arg){
    document.getElementById("searchbtn").click()
});

ipc.on('more-pane', function(arg){
    document.getElementById("morebutton").click()
});

ipc.on('myacct', function(arg){
    document.getElementById("profilepicture").click() 
});

ipc.on('home', function(arg){
    document.getElementById("homebtn").click() 
});

ipc.on('explore', function(arg){
    document.getElementById("explorebtn").click()    
});

ipc.on('logout', function(arg){
    actErase()
});

ipc.on('ntfy', function(arg){
    document.getElementById("notificationsbtn").click()    
});

ipc.on('msg', function(arg){
    document.getElementById("messagebtn").click()    
});

ipc.on('bookmarks', function(arg){
    document.getElementById("bookmarksbtn").click()    
});

ipc.on('go-back', function(arg){
    // webview.goBack()
    if (isBackOpen != "true"){
        webview.goBack()
    } else{
        //do nothing
    }
});

ipc.on('go-fwd', function(arg){
    webview.goForward()
});

ipc.on('wbvreload', function(arg){
    webview.reload()
});

ipc.on('give-focus', function(arg){
    theWindow.show();
});

ipc.on('bridgeport-twitter', function(arg){
    invertShow()
    webview.clearHistory()
    webview.loadURL("https://mobile.twitter.com/macwayoutware");
});

ipc.on('new-message', function(arg){
    ppMessages();
});

ipc.on('copy-to-clipboard', function(arg){
    copyToClipboard()
});

ipc.on('share-to-telegram', function(arg){
    shareViaTelegram()
});

ipc.on('share-to-facebook', function(arg){
    shareViaFacebook()
});

ipc.on('share-to-pinterest', function(arg){
    shareViaPinterest()
});

ipc.on('share-to-reddit', function(arg){
    shareViaReddit()
});

ipc.on('share-to-email', function(arg){
    shareViaEmail()
});

ipc.on('variable', function(arg){
    console.log(arg)
});

ipc.on('reply', function(arg){
    // console.log(arg)
    // generateTweetIntent()
    replyToTweet()
});

// ipc.on('url-initiate', function(url){
//     console.log(url)
//     // theWindow.focus()
// 	// theWindow.show()
//     // webview.loadURL(arg)
// 	// webview.clearHistory()
//     // invertShow()
// });

ipc.on('url-initiate' , function(event , data){ validateURL(data) });

function validateURL(data){
    console.log(data)
    if(data.startsWith("https://twitter.com/")){
        var tweetlessurl = data.substring(20)
        var tweetfulurl = "https://mobile.twitter.com/" + tweetlessurl
        webview.loadURL(tweetfulurl)
        webview.clearHistory()
        theWindow.show()
        theWindow.focus()
        invertShow()
    } else{
        toast("Cannot Open this URL")
    }
}

// ipc.on('immersive', function(arg){
//     copyToClipboard()
// });

ipc.on('immersive', function(arg){
    if (immersiveMode == "on"){
        showSidebar()
    } else{
        hideSidebar()
    }
});

ipc.on('commandbar', function(arg){
    if (cmdbaropen == false){
        showCMDBar()
    } else{
        hideCMDBar()
    }
});

ipc.on('lock', function(arg){
    if(localStorage["password"] == "enabled"){
        //do lock here
        // window.location.href = "minAppPassword.html";
        liveLock()
    } else{
        // alert("You must set a password to lock")
            // modalImage("img/steve.png")
			modalShow("Passcode","You must have a local password set to lock Bridgeport","Nevermind","Set a Password")
			modalButtons(modalHide, enablePassOnRestart)
    }
});

ipc.on('lmtorenderer', function(arg){
    theWindow.focus()
	theWindow.show()
    webview.loadURL('https://mobile.twitter.com/account/')
	webview.clearHistory()
    invertShow()
});

function unlockAll(){
    ipc.send("unlock-all","hi")
}

window.systemTheme = "";

ipc.on('theme-dark', function(arg){
    window.systemTheme = "Dark"
    localStorage["auxTheme"] = "dark"
});

ipc.on('theme-light', function(arg){
    // console.log("light mode")
    window.systemTheme = "Light"
    localStorage["auxTheme"] = "light"
});

ipc.on('define-word', function(arg){
    webview.showDefinitionForSelection()
});

ipc.on('pw-config', function (event, arg) {
    // enablePassOnRestart()
    if (sessionStorage["loggedin"] != "yes" && localStorage["password"] == "enabled"){
        createToast("You cannot do this while locked")
    } else{
        // toast("You cannot do this while locked")
        promptPW()
    }
})