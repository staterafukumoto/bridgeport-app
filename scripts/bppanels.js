devSplah("bppanels.js")

window.ispanelopen = "no"

function panelShow(urlinput){
    if (ispanelopen == "yes"){
        //do nothing
        document.getElementById("spwbv").loadURL(urlinput)
    } else{
        makePanel()
        spTheme()
	    document.getElementById("all").style.transition = "0s all ease";
        theWindow.setMaximumSize(maxWindowHeight + 500,height)
        window.resizeBy(500,0)
        document.getElementById("all").style.width = "calc(100% - 500px)"
        document.getElementById("spwbv").src = urlinput
        document.getElementById("sidepanel").style.display = "inline"
        document.getElementById("side-title-bar").style.display = "inline"
        window.ispanelopen = "yes"
	    window.setTimeout(reanimateWindowPanel,333)
    }
}

function panelHide(){
    if (ispanelopen == "yes"){
        window.resizeBy(-500,0)
        getSize()
	    document.getElementById("all").style.transition = "0s all ease";
        theWindow.setMaximumSize(maxWindowHeight,height)
        document.getElementById("all").style.width = "100%"
        document.getElementById("side-title-bar").style.display = "none"
        document.getElementById("sidepanel").style.display = "none"
        removeTag("spwbv")
        window.ispanelopen = "no"
	    window.setTimeout(reanimateWindowPanel,333)
    } else{
        //do nothing
    }

}

function reanimateWindowPanel(){
	document.getElementById("all").style.transition = "0.2s all ease";
}

function makePanel(){
    // var element = document.createElement("webview");
    var wbvt = document.createElement('webview');
    wbvt.setAttribute('id', 'spwbv');
    wbvt.setAttribute('partition', 'persist:1');
    document.body.appendChild(wbvt);
}