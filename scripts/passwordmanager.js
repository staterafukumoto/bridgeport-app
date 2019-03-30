try{
    devSplah("passwordmanager.js")
} catch(err){
    //do nothing
}

var ipc = require('electron').ipcRenderer;
ipc.send("lock-all","hi")

function encryptPW(input){
    localStorage["password"] = "enabled"
    var pwencoded = sjcl.encrypt("password", input)
    localStorage["passhash"] = pwencoded
    return '[bpsc-pw-manager (powered by sjcl)]: password encoded';
}

function disablePW(){
    localStorage["password"] = ""
    localStorage["passhash"] = ""
}

function promptPW(){
    if (localStorage["password"] != "enabled"){
        var pconfirm = 
        "Would you like to exit and create a local passcode? This can help secure your Twitter from passersby or unauthorized users. This will interrupt what you're doing"
    } else{
        pconfirm = "Are you sure you want to exit to configure your password? This will interrupt what you're doing"
    }
    modalButtons(modalHide,enablePassOnRestart)
    modalShow("Passcode",pconfirm,"No","Yes")
}

function enablePassOnRestart(){
    localStorage["password"] = "tobemade"
    localStorage["passhash"] = ""
    theWindow.reload()
}


function decryptPW(){
    var passwordstore = localStorage["passhash"]
    var pwraw = sjcl.decrypt("password", passwordstore)
}

// var check = localStorage["password"]
// if(check == "enabled" && window.location.href.endsWith("index.html") && sessionStorage["loggedin"] != "yes"){
//     window.location.href = "minAppPassword.html";
// }else if(check == "tobemade" && window.location.href.endsWith("index.html")){
//     window.location.href = "minAppPCreate.html"
// } else if(window.location.href.endsWith("index.html")){
//     ipc.send("unlock-all","hi")
// }

window.passwordCount = 0

function passwordSubmit(){
    var pwencoded = localStorage["passhash"]
    var pwraw = sjcl.decrypt("password", pwencoded)
    var input = document.getElementById("pwbox").value
    // console.log(input)
    if(input == pwraw){
        sessionStorage["loggedin"] = "yes"
        // window.location.href ="index.html"
        submitAnimate()
    } else{
        document.getElementById("pwbox").value = ""
        document.getElementById("pwbox").placeholder = "Try Again"
        document.getElementById("pwbox").style.borderBottom = "4px solid red"
        window.setTimeout(returnToBlue, 1000)
        window.passwordCount++
        inCorrectCount()
    }
}

function returnToBlue(){
    document.getElementById("pwbox").style.borderBottom = "2px solid #478dff"
    document.getElementById("pwbox").placeholder = "Type your Password"    
}

if(localStorage["passworderror"] == "errored"){
    document.getElementById("pwfield").style.display = "none";
    document.getElementById("pwerrorcover").style.display = "inline";
        window.setTimeout(restoreToFunctionality,15000)
}

function inCorrectCount(){
    if(window.passwordCount >= 5 || localStorage["passworderror"] == "errored"){
        document.getElementById("pwfield").style.display = "none";
        document.getElementById("pwerrorcover").style.display = "inline";
        window.setTimeout(restoreToFunctionality,15000)
        localStorage["passworderror"] = "errored"
    }
}

function restoreToFunctionality(){
    window.passwordCount = 0
    localStorage["passworderror"] = ""
    document.getElementById("pwfield").style.display = "inline";
    document.getElementById("pwerrorcover").style.display = "none";
}
try{
    if (window.location.href.endsWith("minAppPassword.html")){
        document.getElementById("pwbox")
            .addEventListener("keyup", function(event) {
            event.preventDefault();
            if (event.keyCode === 13) {
                document.getElementById("submit").click();
            }
        });
    } else{
        document.getElementById("pwbox")
        .addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            // document.getElementById("submit").click();
            document.getElementById("pwbox").focus
        }
    });
        document.getElementById("pwbox2")
        .addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById("submit").click();
        }
        });
    }
} catch(err){
    //don't log a thing boyo.
}

function submitAnimate(){
    window.setTimeout(function(){window.location.assign('index.html')},333);
    document.getElementById("body").style.transform = "scale(0.8)"
    document.getElementById("body").style.opacity = "0"
}