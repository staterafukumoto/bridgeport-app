devSplah("photohandler.js")
function photoChecker(){
    try{
        var currentURL = webview.getURL()
    }catch(err){
        var currentURL = "undefined"
    }

    if(currentURL.includes("/photo/") && currentURL != "https://mobile.twitter.com/photo" || currentURL.includes("/video/")){
        if (localStorage["imgViewer"] == "enabled"){
        invertShow()
        localStorage["photoToLoad"] = currentURL
        webview.goBack()
        ipc.send("photoviewer",currentURL)
        }else{
            //do nothing
        }

    }
}

webview.addEventListener("did-stop-loading", photoChecker);
// window.setInterval(photoChecker,200)


// var tvd = require('twitter-video-downloader');
// function saveVideo(){
//     var url = webview.getURL()
//     window.location.href = tvd(url)
// }

// // tvd('https://twitter.com/GIPHY/status/836063152542482434')
// // .then(function(videoReadableBufferStream) {
// //   // DO SOMETHING WITH MP4 FORMATTED VIDEO
// // }
// // );