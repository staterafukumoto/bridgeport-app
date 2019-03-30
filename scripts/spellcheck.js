// var remote = require('electron').remote;
// var webFrame = require('electron').webFrame;
// var SpellCheckProvider = require('electron-spell-check-provider');
// // `remote.require` since `Menu` is a main-process module.
// var buildEditorContextMenu = remote.require('electron-editor-context-menu');
 
// var selection;
// function resetSelection() {
//   selection = {
//     isMisspelled: false,
//     spellingSuggestions: []
//   };
// }
// resetSelection();
 
// // Reset the selection when clicking around, before the spell-checker runs and the context menu shows.
// window.addEventListener('mousedown', resetSelection);
 
// // The spell-checker runs when the user clicks on text and before the 'contextmenu' event fires.
// // Thus, we may retrieve spell-checking suggestions to put in the menu just before it shows.
// webFrame.setSpellCheckProvider(
//   'en-US',
//   // Not sure what this parameter (`autoCorrectWord`) does: https://github.com/atom/electron/issues/4371
//   // The documentation for `webFrame.setSpellCheckProvider` passes `true` so we do too.
//   true,
//   new SpellCheckProvider('en-US').on('misspelling', function(suggestions) {
//     // Prime the context menu with spelling suggestions _if_ the user has selected text. Electron
//     // may sometimes re-run the spell-check provider for an outdated selection e.g. if the user
//     // right-clicks some misspelled text and then an image.
//     if (window.getSelection().toString()) {
//       selection.isMisspelled = true;
//       // Take the first three suggestions if any.
//       selection.spellingSuggestions = suggestions.slice(0, 3);
//     }
//   }));
 
// window.addEventListener('contextmenu', function(e) {
//   // Only show the context menu in text editors.
//   if (!e.target.closest('textarea, input, [contenteditable="true"]')) return;
 
//   var menu = buildEditorContextMenu(selection);
 
//   // The 'contextmenu' event is emitted after 'selectionchange' has fired but possibly before the
//   // visible selection has changed. Try to wait to show the menu until after that, otherwise the
//   // visible selection will update after the menu dismisses and look weird.
//   setTimeout(function() {
//     menu.popup(remote.getCurrentWindow());
//   }, 30);
// });

// let provider = new SpellCheckProvider('en-US');
// // ...
// let newWord = window.getSelection().toString();
// provider.add(newWord);

// Require the electron spellchecker
const electronSpellchecker = require('electron-spellchecker');

// Retrieve required properties
const SpellCheckHandler = electronSpellchecker.SpellCheckHandler;
const ContextMenuListener = electronSpellchecker.ContextMenuListener;
const ContextMenuBuilder = electronSpellchecker.ContextMenuBuilder;

// Configure the spellcheckhandler
window.spellCheckHandler = new SpellCheckHandler();
window.spellCheckHandler.attachToInput();

// Start off as "US English, America"
window.spellCheckHandler.switchLanguage('en-US');

// Create the builder with the configured spellhandler
let contextMenuBuilder = new ContextMenuBuilder(window.spellCheckHandler);

// Add context menu listener
let contextMenuListener = new ContextMenuListener((info) => {
    if(isTextBox()){
        contextMenuBuilder.showPopupMenu(info);
    } else{

    }
});


function isTextBox(){
    var xyz = document.querySelectorAll( ":hover" )
    if (xyz[xyz.length - 1].toString().includes("HTMLInputElement")){
        return true
    } else if(xyz[xyz.length - 1].toString().includes("HTMLTextareaElement")){
        return true
    } else{
        return false
    }
}