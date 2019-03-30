function themeSet(){
    if (localStorage["auxTheme"] == "dark"){
    document.getElementById("darwin-title-bar").style.borderBottom = "1px solid #191f24"
    document.getElementById("darwin-title-bar").style.background = "linear-gradient(#434343,#373737)"
    document.getElementById("darwin-title-bar").style.color = "white"
    document.getElementById("urlbar").style.color = "white"
    document.getElementById("goback").style.filter = "invert(0)"
    document.getElementById("goforward").style.filter = "invert(0)"
    document.getElementById("refresh").style.filter = "invert(0)"
    document.getElementById("openExternal").style.filter = "invert(0)"
} else{
    document.getElementById("darwin-title-bar").style.borderBottom = "1px solid #a4a2a4"
    document.getElementById("darwin-title-bar").style.background = "linear-gradient(#eceaeb, #d6d4d5)"
    document.getElementById("darwin-title-bar").style.color = "black"
    document.getElementById("urlbar").style.color = "black"
    document.getElementById("goback").style.filter = "invert(1)"
    document.getElementById("goforward").style.filter = "invert(1)"
    document.getElementById("refresh").style.filter = "invert(1)"
    document.getElementById("openExternal").style.filter = "invert(1)"
}
}

window.setInterval(themeSet,250)
themeSet()