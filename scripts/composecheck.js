function composeTitleChecker() {
 var cc = tweet.getURL() //this gets webview title

    if (cc == 'https://mobile.twitter.com/compose/tweet'){
        document.getElementById("closebutton").style.display = "inline"
        document.getElementById("titletext").style.display = "inline"
    } else if(cc.startsWith('https://mobile.twitter.com/i/foundmedia')) {
        document.getElementById("closebutton").style.display = "none"
        document.getElementById("titletext").style.display = "none"
    }else {
        window.close()
    }
    // console.log(cc)
}
document.getElementById("tweet").addEventListener("dom-ready", routines);

function routines(){
    window.setInterval(composeTitleChecker, 50) //checks every x miliseconds
}

window.setInterval(windowSize, 400) //checks every x miliseconds

function windowSize(){
    var height = document.body.scrollHeight
}

theWindow.setAlwaysOnTop(true)

// if (localStorage["theme"] == "dark"){
//         var webview = document.getElementById('tweet');
//         webview.addEventListener('dom-ready', function () {
// 		//app specific rules
//         webview.insertCSS('.rn-qb5c1y{border-bottom-left-radius: 4px !important;}') //bottom left radius
//         webview.insertCSS('.rn-sqtsar{border-bottom-right-radius: 4px !important;}') //bottom right radius
//         webview.insertCSS('.rn-waaub4{border-top-right-radius: 4px !important;}') //top right radius
//         webview.insertCSS('.rn-1bxrh7q{border-top-left-radius: 4px !important;}') //top left radius
//         webview.insertCSS('*{ cursor: default !important; }') //default cursor for everything
//         //dark theme specific rules
//         webview.insertCSS('div[role="article"] { background: #212121 !important;}') //tweets
//         webview.insertCSS('.rn-drjvcx{ background: #212121 !important;}') //tweets
//         webview.insertCSS('.rn-bauka4{ color: #ededed !important}') //this line can change the text color
//         webview.insertCSS('.rn-1uhmdza{ background: #5e6066 !important}') //anything with a background of rgb(204, 214, 221); poll results
//         webview.insertCSS('.rn-1mlj4tw{ background: #444549 !important}') //anything with a background of rgb(230, 236, 240) (follows you button)
//         webview.insertCSS('.rn-cwv21{ background: #444549 !important}') //hover effect for most things (quoted tweets + show this thread)
//         webview.insertCSS('.rn-mikf4x{ background: #444549 !important}') //hover effect for ul (menu on profile)
//         webview.insertCSS('.rn-44z8sh{ background: #212121 !important}') //white elements
//         webview.insertCSS('.rn-84x3in{border-bottom-color: #202a30 !important;}') //bottom border for tweets
//         webview.insertCSS('div[data-testid=primaryColumn]{ background-color: #212121 !important;}') //background
//         webview.insertCSS('.rn-orekzk{ background-color: #5e6066 !important;}') //unread notification
//         webview.insertCSS('ul[role=list]{ background-color: #212121; !important;}') //menu items in header
//         webview.insertCSS('div[aria-label=Loading…]{ background: transparent !important;}') //loading screen
//         webview.insertCSS('body{ background-color: #212121 !important;}') //body background
//    		});
// } else {
//         var webview = document.getElementById('tweet');
//         webview.addEventListener('dom-ready', function () {
//         webview.insertCSS('.rn-qb5c1y{border-bottom-left-radius: 4px !important;}') //bottom left radius
//         webview.insertCSS('.rn-sqtsar{border-bottom-right-radius: 4px !important;}') //bottom right radius
//         webview.insertCSS('.rn-waaub4{border-top-right-radius: 4px !important;}') //top right radius
//         webview.insertCSS('.rn-1bxrh7q{border-top-left-radius: 4px !important;}') //top left radius
//         webview.insertCSS('*{ cursor: default !important; }') //default cursor for everything
//     });
// }















