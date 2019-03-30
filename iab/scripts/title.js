function headerTitle(){
    var spantitle = document.getElementById("urlbar")
    spantitle.innerHTML = webview.getTitle()
}

window.setInterval(headerTitle, 200)