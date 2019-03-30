devSplah("history.js")
var loggedacct = localStorage["loggedinacct"]


function getLastVisitedPage(){
    var lvpos = webview.getWebContents().history.indexOf(webview.getURL())
    var lvp = webview.getWebContents().history[lvpos - 1]
    return lvp
}

function getNextVisitedPage(){
    var lvpos = webview.getWebContents().history.indexOf(webview.getURL())
    var lvp = webview.getWebContents().history[lvpos + 1]
    return lvp
}

function backUpdater(){
    var output = document.getElementById("gobackHack")
    try{
        if (getLastVisitedPage().includes("/status/")){
            output.innerHTML = "Tweet"
        } else if(getLastVisitedPage() == 'https://mobile.twitter.com/home'){
            output.innerHTML = "Timeline"
        } else if(getLastVisitedPage().startsWith("https://mobile.twitter.com/notifications")){
            output.innerHTML = "Notifications"
        } else if(getLastVisitedPage().startsWith("https://mobile.twitter.com/messages/") && getLastVisitedPage() != "https://mobile.twitter.com/messages/"){
            output.innerHTML = "Conversation"
        } else if(getLastVisitedPage() == "https://mobile.twitter.com/messages"){
            output.innerHTML = "Conversations"
        } else if(getLastVisitedPage() == "https://mobile.twitter.com/i/bookmarks"){
            output.innerHTML = "Bookmarks"
        } else if(getLastVisitedPage().startsWith("https://mobile.twitter.com/notifications")){
            output.innerHTML = "Notifications"
        } else if(getLastVisitedPage() == "https://mobile.twitter.com/account"){
            output.innerHTML = "Account"
        } else if(getLastVisitedPage().endsWith('/followers')){
            output.innerHTML = "Followers"
        } else if(getLastVisitedPage().endsWith('/following')){
            output.innerHTML = "Following"
        } else if(getLastVisitedPage() == "https://mobile.twitter.com/explore"){
            output.innerHTML = "Explore"
        } else if(getLastVisitedPage().includes("/search?")){
            output.innerHTML = "Search"
        } else if(getLastVisitedPage() == "https://mobile.twitter.com/i/timeline"){
            output.innerHTML = "Details"
        } else{
            output.innerHTML = "Back"
        }
    } catch(err){
        output.innerHTML = output.innerHTML
    }

}

window.setInterval(backUpdater, 250)
webview.addEventListener("did-start-loading", backUpdater);
webview.addEventListener("page-title-updated", backUpdater);
