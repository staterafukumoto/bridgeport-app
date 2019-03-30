devSplah("livelock.js")

function liveLock(){
    document.getElementById("llwrapper").style.display = "inline"
    document.getElementById("llwrapper").style.opacity = "1"
    document.getElementById("llpwbox").focus()
    sessionStorage["loggedin"] = "no"
    ipc.send("lock-all","hi")
}

function llSubmit(){
    var pwencoded = localStorage["passhash"]
    var pwraw = sjcl.decrypt("password", pwencoded)
    var input = document.getElementById("llpwbox").value
    if(input == pwraw){
        liveUnlock()
    } else{
        document.getElementById("llpwbox").value = ""
        document.getElementById("llpwboxlabel").innerHTML = "Try Again"
        document.getElementById("llpwbox").style.borderBottom = "4px solid red"
        document.getElementById("llpwbox").classList.add("shakePW")
        document.getElementById("llsubmit").classList.add("shakePW")
        document.getElementById("llpwboxlabel").classList.add("shakePW")
        window.setTimeout(llToBlue, 1000)
        window.passwordCount++
        llIncorrectCount()
    }
    function liveUnlock(){
        sessionStorage["loggedin"] = "yes"
        document.getElementById("llinner").style.transform = "scale(0.8)"
        // document.getElementById("llinner").style.opacity = "0"
        document.getElementById("llwrapper").style.opacity = "0"
        function p1(){
            document.getElementById("llwrapper").style.display = "none"
            ipc.send("unlock-all","hi")
            document.getElementById("llpwbox").value = ""
            document.getElementById("llinner").style.transform = "scale(1)"
            document.getElementById("llinner").style.opacity = "1"
        }
        window.setTimeout(p1,333)
        if (localStorage["welcomebackmsg"] == "enabled"){
            superHot("welcome","back")
        }
    }
}

function llToBlue(){
    document.getElementById("llpwbox").style.borderBottom = "2px solid #478dff"
    document.getElementById("llpwboxlabel").innerHTML = "Enter your local pasword"
    document.getElementById("llpwbox").classList.remove("shakePW")
    document.getElementById("llsubmit").classList.remove("shakePW")
    document.getElementById("llpwboxlabel").classList.remove("shakePW")
}

document.getElementById("llpwbox")
.addEventListener("keyup", function(event) {
event.preventDefault();
if (event.keyCode === 13) {
    document.getElementById("llsubmit").click();
}
});

function labelChecker(){
    if (document.getElementById('llpwbox') == document.activeElement && document.hasFocus() == true){
        document.getElementById("llpwboxlabel").style.top = "190px"
        document.getElementById("llpwboxlabel").style.filter = "grayscale(0)"
        document.getElementById("llpwboxlabel").style.fontSize = "14px"
        document.getElementById("llsubmit").style.color = "#478dff"
        document.getElementById("llpwbox").style.borderBottom = "2px solid #478dff"
    } else if(document.getElementById("llpwbox").value != ""){
        document.getElementById("llpwboxlabel").style.top = "190px"
        document.getElementById("llpwboxlabel").style.filter = "grayscale(1)"
        document.getElementById("llpwboxlabel").style.fontSize = "14px"
        document.getElementById("llsubmit").style.color = "grey"
        document.getElementById("llpwbox").style.borderBottom = "2px solid grey"
    } else{
        document.getElementById("llpwboxlabel").style.top = "210px"
        document.getElementById("llpwboxlabel").style.filter = "grayscale(1)"
        document.getElementById("llpwboxlabel").style.fontSize = "16px"
        document.getElementById("llsubmit").style.color = "grey"
        document.getElementById("llpwbox").style.borderBottom = "2px solid grey"
    }

    if (document.getElementById("llpwbox").value == ""){
        document.getElementById("llsubmit").style.opacity = "0"
        document.getElementById("llpwbox").style.width = "300px"
    } else{
        document.getElementById("llsubmit").style.opacity = "1"
        document.getElementById("llpwbox").style.width = "265px"
    }
}
labelChecker()
window.setInterval(labelChecker,50)

function llIncorrectCount(){
    if(window.passwordCount >= 5 || localStorage["passworderror"] == "errored"){
        // document.getElementById("llinner").style.display = "none";
        document.getElementById("llerrorcover").style.display = "inline";
        document.getElementById("llpwbox").disabled = true
        document.getElementById("llinner").style.filter = "blur(6px)"
        document.getElementById("llinner").style.transform = "scale(0.9)"
        window.setTimeout(llRestoreToFunc,15000)
        localStorage["passworderror"] = "errored"
    }

    function llRestoreToFunc(){
        window.passwordCount = 0
        localStorage["passworderror"] = ""
        document.getElementById("llpwbox").disabled = false
        document.getElementById("llinner").style.transform = "scale(1)"
        document.getElementById("llinner").style.filter = "blur(0px)"
        document.getElementById("llerrorcover").style.display = "none";
    }

}

llIncorrectCount()