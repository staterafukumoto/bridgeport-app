// function headerTitle(){
//     var spantitle = document.getElementById("urlbar")
//     spantitle.innerHTML = webview.getTitle()
// }

// window.setInterval(headerTitle, 200)

// function getPhotoURL(){
//     if(webview.getURL().includes("/photo/")){
//         //do nothing
//     } else{
//         window.close()
//     }
// }

function urlChecker() {
    // var cc = tweet.getURL() //this gets webview title
   
       if (webview.getURL().includes("/photo/") || webview.getURL().includes("/video/")){
            //do nothing
       }else if(webview.isLoading() == true){
           //do nothing
       }
       else {
           window.close()
       }
}

   document.getElementById("c-agg").addEventListener("dom-ready", routines);
   
   function routines(){
        window.setInterval(urlChecker, 33) //checks every x miliseconds
        webview.addEventListener("did-start-loading", urlChecker);
   }