devSplah("b-integration.js")
const shell = require('electron').shell;
function iabOpen(url){
  localStorage["pagetoload"] = url
  ipc.send("open-browser")
} 

  webview.addEventListener('new-window', (e) => {
    if(localStorage["inAppBrowser"] == "disabled"){
      var protocol = require('url').parse(e.url).protocol
        if (e.url.startsWith("https://mobile.twitter.com/") && localStorage["panels"] == "enabled") {
           panelShow(e.url)
        }else if (protocol === 'http:' || protocol === 'https:') {
          shell.openExternal(e.url)
        }
    } else{
      var protocol = require('url').parse(e.url).protocol
        if (e.url.startsWith("https://mobile.twitter.com/")&& localStorage["panels"] == "enabled") {
          panelShow(e.url)
         }else if (protocol === 'http:' || protocol === 'https:') {
          //   let win = new BrowserWindow({width: 1152, height: 640, titleBarStyle: 'hidden', backgroundColor: '#ededed'})
          //   win.loadURL('file://' + __dirname + '/iab/index.html');
          //  localStorage["pagetoload"] = (e.url)
          iabOpen(e.url)
         }
    }
 })


//legacy browser integration code, requires restart
// if (localStorage["inAppBrowser"] == "disabled"){
//  	webview.addEventListener('new-window', (e) => {
//     const protocol = require('url').parse(e.url).protocol
//     // if (e.url.startsWith("https://mobile.twitter.com/")) {
//     //   window.urlinput = e.url
//     //   panelShow()
//     // }else 
//     if (protocol === 'http:' || protocol === 'https:') {
//       shell.openExternal(e.url)
//     }
// })
// }else {
//  	webview.addEventListener('new-window', (e) => {
//     const protocol = require('url').parse(e.url).protocol
//       if (protocol === 'http:' || protocol === 'https:') {
//         let win = new BrowserWindow({width: 1152, height: 640, titleBarStyle: 'hidden', backgroundColor: '#ffffff'})
//         win.loadURL('file://' + __dirname + '/iab/index.html');
//         localStorage["pagetoload"] = (e.url)
//     }
//   })
// }
