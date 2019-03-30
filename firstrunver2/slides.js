var ipc = require('electron').ipcRenderer;
const shell = require('electron').shell;

function show2(){
    document.getElementById("titletext").innerHTML = "Username"
    document.getElementById("all2").style.display = "inline"
    document.getElementById("pwbox")
        .addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
    		show3()
        }
    })
}

function show3(){
    if (document.getElementById("pwbox").value.startsWith("@")){
        var xyz = document.getElementById("pwbox").value
        document.getElementById("pwbox").value = xyz.substr(1)
        show3()
    } else if (document.getElementById("pwbox").value == ""){
        document.getElementById("2subheader").innerHTML = "Do not leave this empty."
        document.getElementById("2subheader").style.color = "red"
    }  else{
        window.username = document.getElementById("pwbox").value
        // document.getElementById("all2").style.display = "none"
        document.getElementById("all3").style.display = "inline"
        document.getElementById("pfp").src = "https://twitter.com/" + username + "/profile_image?size=original"
        document.getElementById("unametext").innerHTML = "@" + username
    }
}

function notMe(){
    document.getElementById("all3").style.display = "none"
    document.getElementById("all2").style.display = "inline"
    document.getElementById("pwbox").focus
}

function show4(){
    document.getElementById("titletext").innerHTML = "Discord"
    // document.getElementById("all3").style.display = "none"
    document.getElementById("all4").style.display = "inline"
    // document.getElementById("all5").style.display = "inline"
}

function show5(){
    if (selectedtheme == "true"){
        // document.getElementById("all4").style.display = "none"
        document.getElementById("all5").style.display = "inline"
        document.getElementById("titletext").innerHTML = "Roundness"
    }
}

function show6(){
    document.getElementById("titletext").innerHTML = "Account"
    document.getElementById("all6").style.display = "inline"
    window.webview = document.getElementById("login")
    webview.addEventListener("did-stop-loading",loginChecker)
}

function loginChecker() {
    if (selectedicons == "true"){
    var cc = webview.getURL() //this gets webview title
       if (cc.startsWith("https://mobile.twitter.com/login")){
            //do nothing
       } else if(cc == "https://mobile.twitter.com/i/flow/signup") {
            shell.openExternal('https://mobile.twitter.com/i/flow/signup')
            webview.loadURL("https://mobile.twitter.com/login")
       }else {
            webview.style.opacity = "0"
            window.setTimeout(show7,50)
       }
    }
   }

function show7(){
    
        document.getElementById("titletext").innerHTML = " &lt;/setup&gt; "
        // document.getElementById("all5").style.display = "none"
        document.getElementById("all7").style.display = "inline"
        writetostorage()
}

function yesDiscord(){
    window.discord = "enabled"
    window.selectedtheme = "true"
    show5()

}

function noDicsord(){
    window.discord = "disabled"
    window.selectedtheme = "true"
    show5()
}

function selectRound(){
    window.icons = "round"
    document.getElementById("ci").classList.add("modeswitchActive")
    document.getElementById("sq").classList.remove("modeswitchActive")
    window.selectedicons = "true"
}

function selectSquir(){
    window.icons = "square"
    document.getElementById("sq").classList.add("modeswitchActive")
    document.getElementById("ci").classList.remove("modeswitchActive")
    window.selectedicons = "true"
}
 
function writetostorage(){
    localStorage["noUpdates"] = ""
    localStorage["blur"] = "enabled"
    localStorage["inAppBrowser"] = "enabled"
    localStorage["bigFont"] = "disabled"
    localStorage["angledEdge"] = "disabled"
    localStorage["ntfy"] = "enabled"
    localStorage["imgViewer"] = "disabled"
    localStorage["slowLoad"] = "false"
    localStorage["showpatchnotesonupdate"] == "disabled"
    localStorage["lastbuild"] == currentVersionLocal
    // localStorage["theme"] = theme
    localStorage["loggedinacct"] = username
    if(icons == "round"){
        localStorage["roundedEdges"] = "enabled"
    } else{
        localStorage["roundedEdges"] = "disabled"
    }
    if(discord == "enabled"){
        localStorage["richPresence"] = "enabled"
    } else{
        localStorage["richPresence"] = "disabled"
    }
    localStorage['firstRun2'] = "false"
    window.setTimeout(restart,4000)
}

function restart(){
    ipc.send("restart","hi")
}

function quit(){
    ipc.send("quit","hi")
}