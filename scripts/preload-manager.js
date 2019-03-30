console.log("bridgeport integrated services helper (bish) loaded    ▉▇▆▅▄▃▂▁")

const { ipcRenderer } = require('electron')    
console.log("├ ipcRenderer connected")

//this section prevents drag in
 document.addEventListener('dragover',function(event){
    event.preventDefault();
    return false;
  },false);

  document.addEventListener('drop',function(event){
    event.preventDefault();
    return false;
  },false);

console.log("├ no-drop running")

var remote = require('electron').remote;
var webFrame = require('electron').webFrame;
var SpellCheckProvider = require('electron-spell-check-provider');
// `remote.require` since `Menu` is a main-process module.
var buildEditorContextMenu = remote.require('electron-editor-context-menu');
 
var selection;
function resetSelection() {
  selection = {
    isMisspelled: false,
    spellingSuggestions: []
  };
}
resetSelection();
 
// Reset the selection when clicking around, before the spell-checker runs and the context menu shows.
window.addEventListener('mousedown', resetSelection);
 
// The spell-checker runs when the user clicks on text and before the 'contextmenu' event fires.
// Thus, we may retrieve spell-checking suggestions to put in the menu just before it shows.
webFrame.setSpellCheckProvider(
  'en-US',
  // Not sure what this parameter (`autoCorrectWord`) does: https://github.com/atom/electron/issues/4371
  // The documentation for `webFrame.setSpellCheckProvider` passes `true` so we do too.
  true,
  new SpellCheckProvider('en-US').on('misspelling', function(suggestions) {
    // Prime the context menu with spelling suggestions _if_ the user has selected text. Electron
    // may sometimes re-run the spell-check provider for an outdated selection e.g. if the user
    // right-clicks some misspelled text and then an image.
    if (window.getSelection().toString()) {
      selection.isMisspelled = true;
      // Take the first three suggestions if any.
      selection.spellingSuggestions = suggestions.slice(0, 3);
    }
  }));
 
window.addEventListener('contextmenu', function(e) {
  // Only show the context menu in text editors.
  if (!e.target.closest('textarea, input, [contenteditable="true"]')) return;
 
  var menu = buildEditorContextMenu(selection);
 
  // The 'contextmenu' event is emitted after 'selectionchange' has fired but possibly before the
  // visible selection has changed. Try to wait to show the menu until after that, otherwise the
  // visible selection will update after the menu dismisses and look weird.
  setTimeout(function() {
    menu.popup(remote.getCurrentWindow());
  }, 30);
});

console.log("├ spell check service running")

//this section defines the notification service
function notifyService(){
try{  
  var ncount = document.getElementsByClassName("rn-o9xkwf")[0].innerHTML
  var ncountint = Number.isInteger(ncount)
  // console.log(ncount + " notifications")
  if (ncount >= 1){
    ipcRenderer.sendToHost(ncount)
    console.log("isinteger")
  }else{
    // ipcRenderer.sendToHost(ncount)
  };
} catch (err) {
    // do literally fucking nothing because this SHOULD fail quite frequently when there is no notifications
}
}
console.log("├ notification service loaded")

//this section starts the notification service
window.setTimeout(notifyServiceInit,200)

function notifyServiceInit(){
  window.setInterval(notifyService,1000)
}
console.log("├ notification service started")

function imageChecker(){
  var currenturl = window.location.href
  var image = document.getElementsByTagName("img")
  if (currenturl.includes("/photo/")){
    // console.log(image[0].src)
    var imagesrc = image[0].src
    // ipcRenderer.sendToHost(imagesrc)
    console.log(imagesrc)
  }else{
    // console.log("no image found")
  }
}
window.setInterval(imageChecker,100)
console.log("├ looking for images...")


console.log("└ the soup will now rise (bish executed successfully)")

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
          c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
      }
  }
}

function checkCookie() {
  var nm = getCookie("night_mode");
  // console.log(nm);
  if (nm == undefined || nm == null) {
      ipcRenderer.sendToHost("lightmode")
  } else if (nm == "1") {
      ipcRenderer.sendToHost("darkmode")
  } else{
    //do nothing
  }
}

window.setInterval(checkCookie, 50)
// document.addEventListener("mousedown", checkCookie);
//get cookie "twid" for twitter id which can be converter into username