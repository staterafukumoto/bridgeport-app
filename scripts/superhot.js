devSplah("superhot.js")

function superHot(line1,line2){
    document.getElementById("shbg").style.opacity = "0.5"
    document.getElementById("superhot").className = "shNarrow"    
    document.getElementById("superhot").innerHTML = line1
    document.getElementById("superhotwrapper").style.display = "inline"
    window.setTimeout(function(){
        document.getElementById("superhotwrapper").style.display = "none"
    }, 500)
    window.setTimeout(function(){
        document.getElementById("superhot").className = "shBold"    
        document.getElementById("superhot").innerHTML = line2
        document.getElementById("superhotwrapper").style.display = "inline"
    }, 1000)
    window.setTimeout(function(){
        document.getElementById("superhotwrapper").style.display = "none"
        document.getElementById("shbg").style.opacity = "0"
    },1600)
}