window.resizeTo(0,0)

if (localStorage["isDev"] == "yes" && localStorage["slowLoad"] == "true"){
    document.getElementById("textbranding").style.display = "none"
    document.getElementById("texthero").innerHTML = "Loading Module:"
    document.getElementById("devbranding").style.display = "inline"
}

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

function devSplah(input){
    if (localStorage["isDev"] == "yes" && localStorage["slowLoad"] == "true"){
        document.getElementById("devbranding").innerHTML = input
        sleep(400)
    }
}

