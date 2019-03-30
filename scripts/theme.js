var theme = localStorage["theme"]
var rEdges = localStorage["roundedEdges"]
var bigFont = localStorage["bigFont"]
var webview = document.getElementById("c-agg")
devSplah("theme.js")


//starts here

var webview = document.getElementById('c-agg');
    webview.addEventListener('dom-ready', function () {
        // app specific rules
        // webview.insertCSS('header:not(form) { display: none !important;}') //standard app header
        webview.insertCSS('::-webkit-scrollbar {width: 0px; background: transparent;}') //scroll bar
        webview.insertCSS('header:not(form) { visibility: hidden !important;}') //standard app header
        webview.insertCSS('header:not(form) { pointer-events: none !important;}') //standard app header
        webview.insertCSS('* { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica", "Ubuntu", sans-serif !important;}') //standard app header
        webview.insertCSS('.rn-10ytdpq{display: none !important;') //twitter new tweet button
        webview.insertCSS('@keyframes bp-fadein {from { opacity: 0; }, to { opacity: 1; }}') //bp-fadein animation definition
        webview.insertCSS('@keyframes bp-slidein {from { opacity: 0; }, to { opacity: 1; }}') //bp-fadein animation definition
        webview.insertCSS('div[data-testid="tweetDetail"] { animation: bp-fadein 300ms; }') //tweet detail animation
        webview.insertCSS('*{ cursor: default !important; }') //default cursor for everything
        // webview.insertCSS('*{ animation: bp-slidein 75ms; }') //everything fades in
        // webview.insertCSS('.rn-pm9dpa{ animation: bp-flyin 200ms; }') //everything fades in
        // webview.insertCSS('*[role="navigation"]{ position: sticky !important; top: 37px !important; z-index: 44 !important; opacity: 1;}') //nav is sticky
        webview.insertCSS('.rn-19nsbbv{display: none !important;}') //that stupid padding at top of the nav on profiles
        webview.insertCSS('.rn-1ye8kvj{max-width: 98%; !important;}') //100% max width
        webview.insertCSS('.rn-1bo11z6{display: none !important;}') //the fucking new tweet button, assholes.
        webview.insertCSS('.rn-13qz1uu,.rn-1f3wni4{animation: fadein 0.2s ease !important;}') //animate 100% divs
        webview.insertCSS('@keyframes bp-flyin {from { bottom: -400px; } to   { bottom: 0; }}') //animations 100% divs
        // webview.insertCSS('a[role="link"]:not(span){position: sticky !important; top: 42px !important; z-index: 44 !important;}') //pfp is sticky
})

function spTheme(){
        var spwebview = document.getElementById('spwbv');
          webview.addEventListener('dom-ready', function () {
        // app specific rules
        spwebview.insertCSS('::-webkit-scrollbar {width: 0px; background: transparent;}') //scroll bar
        spwebview.insertCSS('header:not(form) { visibility: hidden !important;}') //standard app header
        spwebview.insertCSS('header:not(form) { pointer-events: none !important;}') //standard app header
        spwebview.insertCSS('header:not(form) { height: 38px !important;}') //standard app header
        spwebview.insertCSS('* { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica", "Ubuntu", sans-serif !important;}') //standard app header
        spwebview.insertCSS('.rn-10ytdpq{display: none !important;') //twitter new tweet button
        spwebview.insertCSS('@keyframes bp-fadein {from { opacity: 0; }, to { opacity: 1; }}') //bp-fadein animation definition
        spwebview.insertCSS('@keyframes bp-slidein {from { opacity: 0; }, to { opacity: 1; }}') //bp-fadein animation definition
        spwebview.insertCSS('div[data-testid="tweetDetail"] { animation: bp-fadein 300ms; }') //tweet detail animation
        spwebview.insertCSS('*{ cursor: default !important; }') //default cursor for everything
        spwebview.insertCSS('.rn-19nsbbv{display: none !important;}') //that stupid padding at top of the nav on profiles
        spwebview.insertCSS('.rn-1ye8kvj{max-width: 98%; !important;}') //100% max width
        spwebview.insertCSS('.rn-1bo11z6{display: none !important;}') //the fucking new tweet button, assholes.
        spwebview.insertCSS('.rn-13qz1uu,.rn-1f3wni4{animation: fadein 0.2s ease !important;}') //animate 100% divs
        spwebview.insertCSS('@keyframes bp-flyin {from { bottom: -400px; } to   { bottom: 0; }}') //animations 100% divs
})

}

if (bigFont == "enabled"){
         var webview = document.getElementById('c-agg');
         webview.addEventListener('dom-ready', function () {
            webview.insertCSS('.rn-1b43r93{font-size: 16px !important;}') //changes text to 16px
    });
} else {
        var webview = document.getElementById('c-agg');
        webview.addEventListener('dom-ready', function () {
            webview.insertCSS('.rn-1b43r93{font-size: 13px !important;}') //changes text to 13px
    });
}

if (process.platform == "win32" || localStorage["theme"] == "windows"){
        var webview = document.getElementById('c-agg');
        webview.addEventListener('dom-ready', function () {
                webview.insertCSS('header:not(form) { height: 31px !important;}') //standard app header
                webview.insertCSS('*{ border-radius: 0px !important;}') //standard app header
   });
} else {
       var webview = document.getElementById('c-agg');
       webview.addEventListener('dom-ready', function () {
                webview.insertCSS('header:not(form) { height: 38px !important;}') //standard app header
   });
}


