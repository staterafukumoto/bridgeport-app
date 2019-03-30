function sizeManagement(){

    document.getElementsByTagName("img")[0].draggable = "true"

    function getHeight(){
        var rawHeight = document.getElementsByTagName("img")[0].height
        window.height = rawHeight + 70
        // ipc.send("photoviewerHeight",height)
    }
    function getWidth(){
        window.width = document.getElementsByTagName("img")[0].width
        // ipc.send("photoviewerWidth",width)
    }

    window.resizeTo(height,width)
}

window.setInterval(sizeManagement,133)