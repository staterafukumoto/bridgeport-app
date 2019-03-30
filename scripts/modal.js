devSplah("modal.js")
var modalOpen;

function modalShow(modalTitle,modalBody,modalDeny,modalConfirm){
    try{
        theWindow.focus()
    } catch(err){
        console.warn("Could not lock window, probably running outside of main window.")
    }
    document.getElementById("modalTitle").innerHTML = modalTitle;
    document.getElementById("modalBody").innerHTML = modalBody;
    document.getElementById("modalButtonDeny").innerHTML = modalDeny;
    document.getElementById("modalButtonConfirm").innerHTML = modalConfirm;
    document.getElementById("modalbg").style.visibility = "visible";
    document.getElementById("modalwindow").style.visibility = "visible";
    document.getElementById("modalwindow").style.transform = "scale(1)";
    document.getElementById("modalwindow").style.opacity = "1";
    if (process.platform == "win32" || process.platform == "linux" || localStorage["theme"] == "windows"){
        document.getElementById("modalwindow").style.borderRadius = "0px"
    } else{
        document.getElementById("modalwindow").style.borderRadius = "5px"
    }
    document.getElementById("modalbg").style.opacity = "1"
    modalOpen = "true"
    try{
        document.getElementById("all").classList.add("mdlvisible")
    } catch(err){
        //do nothing
    }
}

function modalButtons(modalDeny, modalConfirm){
    document.getElementById("modalButtonDeny").onclick = modalDeny
    document.getElementById("modalButtonConfirm").onclick = modalConfirm
    
}

function modalImage(path){
    document.getElementById("modalImage").src = path
}

function modalHide(){
    document.getElementById("modalwindow").style.transform = "scale(0.6)"
    document.getElementById("modalwindow").style.borderRadius = "60px"
    document.getElementById("modalwindow").style.opacity = "0"
    document.getElementById("modalbg").style.opacity = "0"
    document.getElementById("modalwindow").style.visibility = "hidden"
    document.getElementById("modalButtonDeny").onclick = modalHide
    document.getElementById("modalButtonConfirm").onclick = ""
    window.setTimeout(modalHideForReal,300)
    modalOpen = "false"
    try{
        document.getElementById("all").classList.remove("mdlvisible")
    } catch(err){
        //do nothing
    }
}

function modalHideForReal(){
    document.getElementById("modalwindow").style.visibility = "hidden"
    document.getElementById("modalbg").style.visibility = "hidden"
    modalImage("img/iconDark.png")
}

document.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 27) {
        if (modalOpen == "true"){
            document.getElementById("modalButtonDeny").click();
        }
    }
});

document.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        if (modalOpen == "true"){
            document.getElementById("modalButtonConfirm").click();
        }
    }
});