console.log("✅ initiated \n")
const electron = require('electron');
const BrowserWindow = electron.BrowserWindow;
const Menu = electron.Menu;
const path = require('path');
const shell = require('electron').shell;
const {app, globalShortcut, Tray, TouchBar, protocol} = require('electron')
const imgDirectory = path.join(__dirname, 'img')
let browserWindow = null;
const ipc = require('electron').ipcMain
const remote = require('electron').remote;
const {TouchBarLabel, TouchBarButton, TouchBarSpacer} = TouchBar
const client = require('discord-rich-presence')('491096329242804225');
const fs = require('fs-extra')
const exec = require('child_process').exec;
const username = require('username');
const {systemPreferences} = require('electron')
var themeCheckIntvl;

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'; //please stop yelling at me over experimentalFeatures, i need it for pretty css
app.setAsDefaultProtocolClient("bridgeport")
darwinForceDarkModeSupport: true,

app.on("open-url", function(event, url) {
  // console.log("Open URL: " + url);
  var toOpen = url.substr(13)
  // console.log(toOpen)
  browserWindow.webContents.send('url-initiate', toOpen)
});

ipc.on('log-test', function (event, arg) {
  console.log(arg)
})

console.log("🔄 Bridgeport is starting... \n")

function mainWindow()
{
  browserWindow = new BrowserWindow({
    width: 420, 
    height: 550, 
    backgroundColor: '#000000',
    // backgroundColor: '#191919',
    // fullscreen: false,
    frame: false,
    // maxWidth: 600,  
    hasShadow: false,
    resizable: false,
    minWidth: 420,
    minHeight: 550,
    opacity: 1,
    webPreferences: { experimentalFeatures: true },
    acceptFirstMouse: true,
    icon: __dirname + '/assets/icon/png/icon.png',
    });

  browserWindow.loadURL(path.join('file://', __dirname, '/index.html'));
  browserWindow.setAlwaysOnTop(true);

  ipc.on('has-loaded', function (event, arg) {
    browserWindow.setSheetOffset(38,34)
  })

  ipc.on('center-sheet', function (event, arg) {
  browserWindow.setSheetOffset(38,0)
  })

  ipc.on('offcenter-sheet', function (event, arg) {
    browserWindow.setSheetOffset(38,34)
  })

  browserWindow.on('app-command', (e, cmd) => {
  })

  let tweetBtn = new TouchBarButton({
    // label: 'New Tweet',
    icon: `${__dirname}/touchbar/new.png`,
    click () {newTweetWithAuth()},
	});

  let msgBtn = new TouchBarButton({
    // label: 'New Message',
    icon: `${__dirname}/touchbar/newmsg.png`,
    click () {browserWindow.webContents.send('new-message', 'Hi')},
	});
//seperarator is here
  let homeBtn = new TouchBarButton({
    // label: 'Home',
    icon: `${__dirname}/touchbar/home.png`,
    click () {browserWindow.webContents.send('home', 'Hi')},    
	});

  let exploreBtn = new TouchBarButton({
    // label: 'Explore',
    icon: `${__dirname}/touchbar/explore.png`,
    click () {browserWindow.webContents.send('explore', 'Hi')},  
	});

  let ntfyBtn = new TouchBarButton({
    // label: 'Notifications',
    icon: `${__dirname}/touchbar/notifications.png`,
    click () {browserWindow.webContents.send('ntfy', 'Hi')},
	});

  let msgsBtn = new TouchBarButton({
    // label: 'Messages',
    icon: `${__dirname}/touchbar/messages.png`,
    click () {browserWindow.webContents.send('msg', 'Hi')},
	});

  let bmBtn = new TouchBarButton({
    // label: 'Bookmarks',
    icon: `${__dirname}/touchbar/bookmark.png`,
    click () {browserWindow.webContents.send('bookmarks', 'Hi')},
	});

  let srchBtn = new TouchBarButton({
    // label: 'Bookmarks',
    icon: `${__dirname}/touchbar/search.png`,
    click () {browserWindow.webContents.send('search', 'Hi')},
	});

  let prefBtn = new TouchBarButton({
    // label: 'Bookmarks',
    icon: `${__dirname}/touchbar/settings.png`,
    click () {prefWindow()},
	});

	let touchBar = new TouchBar([
		tweetBtn,
    msgBtn,
    new TouchBarSpacer({ size: 'large' }),
    homeBtn,
    exploreBtn,
    ntfyBtn,
    msgsBtn,
    bmBtn,
    new TouchBarSpacer({ size: 'large' }),
    srchBtn,
    // prefBtn,
	]);
if (process.platform === "darwin"){
	browserWindow.setTouchBar(touchBar);
}

  console.log("💻 Interface Loading \n")

  browserWindow.on('close', (event) => {
    if (app.quitting) {
      browserWindow = null
    } else {
      if (process.platform == 'darwin'){
        event.preventDefault()
        browserWindow.hide()
      } else{
        clearInterval(themeCheckIntvl)
        setTimeout(function(){app.quit();}, 20)
      }
    }
  });

  const template = //put the fucker in an array
  [
    {
      label: 'Action', //File menu
      submenu: [
        {
          label: 'New Tweet',
          click () {newTweetWithAuth()},
          accelerator: 'CmdOrCtrl+N',
        },
        {
          label: 'New Direct Message',
          click () {browserWindow.webContents.send('new-message', 'Hi')},
          accelerator: 'CmdOrCtrl+Shift+N',
        },
        {type: 'separator'},
        {
          label: 'Pop-out Reply',
          click () {replyTweetWithAuth()},
          accelerator: 'CmdOrCtrl+R',
        },
        {type: 'separator'},
        {
          label: 'Search...',
          click () {browserWindow.webContents.send('search', 'Hi')},
          accelerator: 'CmdOrCtrl+F',
        },
        {
          label: 'Show "More Actions" Menu',
          click () {browserWindow.webContents.send('more-pane', 'Hi')},
          accelerator: 'CmdOrCtrl+P',
        },
        {
          label: 'Toggle Immersive Mode',
          click () {browserWindow.webContents.send('immersive', 'Hi')},
          accelerator: 'CmdOrCtrl+Enter',
        },
        {
          label: 'Toggle Command Bar',
          click () {browserWindow.webContents.send('commandbar', 'Hi')},
          accelerator: 'CmdOrCtrl+/',
        },
        {type: 'separator'},
        {
          label: 'Close',
          role: 'close'
        },
      ]
    },
    {
      label: 'Share', //Share menu
        submenu: [
          {
            label: 'Copy Link',
            click () {browserWindow.webContents.send('copy-to-clipboard', 'Hi')},
            accelerator: 'CmdOrCtrl+Shift+C',
          },
          {type: 'separator'},
          {
            label: 'Telegram',
            click () { browserWindow.webContents.send('share-to-telegram', 'Hi') },
            accelerator: 'CmdOrCtrl+Shift+T',
          },
          {
            label: 'Facebook',
            click () { browserWindow.webContents.send('share-to-facebook', 'Hi') },
            accelerator: 'CmdOrCtrl+Shift+F',
          },
          {
            label: 'Reddit',
            click () { browserWindow.webContents.send('share-to-reddit', 'Hi') },
            accelerator: 'CmdOrCtrl+Shift+A',
          },
          {
            label: 'Pinterest',
            click () { browserWindow.webContents.send('share-to-pinterest', 'Hi') },
            accelerator: 'CmdOrCtrl+Shift+P',
          },
          {
            label: 'Email',
            click () { browserWindow.webContents.send('share-to-email', 'Hi') },
            accelerator: 'CmdOrCtrl+I',
          },
        ]
      },
    {
      label: 'Navigate', //navigate menu
      submenu: [
        {
          label: 'Backwards',
          click () {browserWindow.webContents.send('go-back', 'Hi')},
          accelerator: 'Cmd + [',
          // accelerator: 'Escape',
        },
        {
          label: 'Forwards',
          click () {browserWindow.webContents.send('go-fwd', 'Hi')},
          // accelerator: 'Shift+Escape',
          accelerator: 'Cmd + ]',
        },
        {type: 'separator'},
        {
          label: 'My Profile',
          click () {browserWindow.webContents.send('myacct', 'Hi')},
          accelerator: 'CmdOrCtrl+`',
        },
        {type: 'separator'},
        {
          label: 'Timeline',
          click () {browserWindow.webContents.send('home', 'Hi')},
          accelerator: 'CmdOrCtrl+1',
        },
        {
          label: 'Explore Feed',
          click () {browserWindow.webContents.send('explore', 'Hi')},
          accelerator: 'CmdOrCtrl+2',
        },
        {
          label: 'Notifications',
          click () {browserWindow.webContents.send('ntfy', 'Hi')},
          accelerator: 'CmdOrCtrl+3',
        },
        {
          label: 'Direct Messages',
          click () {browserWindow.webContents.send('msg', 'Hi')},
          accelerator: 'CmdOrCtrl+4',
        },
        {
          label: 'Bookmarks',
          click () {browserWindow.webContents.send('bookmarks', 'Hi')},
          accelerator: 'CmdOrCtrl+5',
        },
      ]
    },
    {
      label: 'Edit', //edit menu
      submenu: [
        {role: 'undo'},
        {role: 'redo'},
        {type: 'separator'},
        {role: 'cut'},
        {role: 'copy'},
        {role: 'paste'},
        {role: 'delete'},
        {role: 'selectall'},
        {type: 'separator'},
        {
          label: 'Speech',
          submenu: [
            {role: 'startspeaking'},
            {role: 'stopspeaking'},
          ]
        }
      ]
    },
    {
      role: 'window', //window menu
      submenu: [
        {role: 'minimize'},
        {role: 'close'},
        {role: 'front'},
      ]
    },
    {
      role: 'help', //help menu
      submenu: [
      // {
      //     label: 'Bridgeport Help',
      //     click () {helpWindow()},
      //     accelerator: 'CmdOrCtrl+Shift+H',
      //   },
        {
          label: 'Support the Developer',
          click () { require('electron').shell.openExternal('https://www.paypal.me/StateraAF') }
        },  
        { type: 'separator'},
        {
          label: 'Report Bug / Request Feature',
          submenu: [
            {
            label: '...via email',
            click () { require('electron').shell.openExternal('mailto:bridgeportfortwitter@gmail.com') }
            },
            {
            label: '...via twitter',
            click () { browserWindow.webContents.send('bridgeport-twitter', 'Hi') }
            },
          ]
        },
      ]
    },
  ]

    template.unshift({
      label: app.getName(),
      submenu: [
         {
          label: 'About Bridgeport',
          click () {aboutBridgeport()},
        },         
        {type: 'separator'},
        {
          label: 'Preferences...',
          click () {prefWithAuth()},
          accelerator: 'CmdOrCtrl+,',
        },
        {
          label: 'Check for Updates...',
          click () {updCheck()},
        },
        {
          label: "Bridgeport Patchnotes",
          click () {patchNotes()},
        },
        {type: 'separator'},
        {type: 'separator'},
        {label: 'Hide Bridgeport', role: 'hide'},
        {role: 'hideothers'},
        {role: 'unhide'},
        {type: 'separator'},
        {
          label: 'Logout...',
          click () {browserWindow.webContents.send('logout', 'Hi')},
        },
        {
          label: 'Quit Bridgeport',
          role: 'quit'
        }
      ]
    })

    // // Edit menu
    // template[2].submenu.push(

    // )

    // Window menu
    template[5].submenu = [
      {
        label: 'Lock',
        click () {browserWindow.webContents.send('lock', 'Hi')},
        accelerator: 'CmdOrCtrl+L',
      },
      // {type: 'separator'},
      {
        label: 'Change Local Passcode',
        click () {browserWindow.webContents.send('pw-config', 'Hi')},
        accelerator: 'CmdOrCtrl+Shift+L',
      },
      {type: 'separator'},
      {role: 'minimize'},
      {role: 'zoom'},
      {type: 'separator'},
      {role: 'front'}
    ]
  
  //dock menu
  const dockMenu = Menu.buildFromTemplate([
    { label: 'Bridgeport for Twitter',
      enabled: 'false',
    },
    { type: 'separator'},
    {
      label: 'Search...',
      click () {browserWindow.webContents.send('search', 'Hi'); browserWindow.webContents.send('give-focus', 'Hi')},
      accelerator: 'CmdOrCtrl+F',
    },
    {type: 'separator'},
    {
      label: 'Compose New Tweet...',
      click () { newTweetWithAuth() }
    },
    {
      label: 'Compose New Direct Message...',
      click () {browserWindow.webContents.send('new-message', 'Hi'); browserWindow.webContents.send('give-focus', 'Hi')},
    },
    {
      label: 'Check for Updates...',
      click () { updCheck() }
    },
    {type: 'separator'},
    {
      label: 'Timeline',
      click () {browserWindow.webContents.send('home', 'Hi'); browserWindow.webContents.send('give-focus', 'Hi')},
    },
    {
      label: 'Explore Feed',
      click () {browserWindow.webContents.send('explore', 'Hi'); browserWindow.webContents.send('give-focus', 'Hi')},
    },
    {
      label: 'Notifications',
      click () {browserWindow.webContents.send('ntfy', 'Hi'); browserWindow.webContents.send('give-focus', 'Hi')},
    },
    {
      label: 'Direct Messages',
      click () {browserWindow.webContents.send('msg', 'Hi'); browserWindow.webContents.send('give-focus', 'Hi')},
    },
    {
      label: 'Bookmarks',
      click () {browserWindow.webContents.send('bookmarks', 'Hi'); browserWindow.webContents.send('give-focus', 'Hi')},
    },
    // {type: 'separator'},
    // {
    //   label: 'Open Browser...',
    //   click () {iabOpen()},
    // },
  ])

  let menu = Menu.buildFromTemplate(template); //build the menu from the hobbled together array
  Menu.setApplicationMenu(menu); //set the menu
  if (process.platform === 'darwin'){
    app.dock.setMenu(dockMenu)
  } else{
    //don't do shit lul
  } 
  console.log("🍗 Menu set successfully \n")
  
  ipc.on('add-dev', function (event, arg) {
    addDevMenu()
  })

  function varSend(){
    browserWindow.webContents.send('variable',"incoming from main.js!")
  }

  function addDevMenu(){
    template.push({
      label: "Developer",
      submenu: [
        { 
          label: '💻 Bridgeport Developer Stuff Menu',
          enabled: 'false',
        },
        { type: 'separator' },
        {
          label: '🔨 Main Window Developer Tools',
          click() {browserWindow.openDevTools({mode:'undocked'})}
        },
        {
          label: '🔨 Global Developer Tools',
          role: 'toggledevtools'
        },
        { type: 'separator' },
        {
          label: '🔁 Reload Focused Window',
          role: 'reload',
          accelerator: 'CmdOrCtrl+Shift+R',
        },
        {
          label: 'ℹ️ Developer Information',
          click () {diagWindow()},
          accelerator: 'CmdOrCtrl+Shift+D+I',
        },
        {
          label: 'ℹ️ Test IPC Connection',
          click () {varSend()},
          // accelerator: 'CmdOrCtrl+Shift+D+I',
        },
        {
          label: '🔄 Restart Bridgeport',
          click () { restartTheThing() },
          accelerator: '',
        }
      ]
    })
  let menu = Menu.buildFromTemplate(template); //build the menu from the array again
  Menu.setApplicationMenu(menu); //we'll do it live
  console.log("Developer Menu Triggered \n")
}

}

function aboutBridgeport() //makes the about window
{
  aboutBridgeportWin = new BrowserWindow({
    width: 383, 
    height: 412,
    maxWidth: 383,
    maxHeight: 412,
    minWidth: 383,
    minHeight: 412,
    titleBarStyle: "hidden",
    backgroundColor: "#212121",
    fullscreen: false,
    });
  aboutBridgeportWin.loadURL(path.join('file://', __dirname, '/minAppAbt.html')); //loads app ui
}

function photoViewer() //makes the about window
{
  photoFrame = new BrowserWindow({
    width: 700, 
    height: 700,
    minWidth: 384,
    minHeight: 384,
    maxWidth: 999,
    // alwaysOnTop: true,
    frame: false,
    backgroundColor: "#212121",
    fullscreen: false,
    });
  photoFrame.loadURL(path.join('file://', __dirname, '/pvapp/index.html')); //loads app ui
}

function diagWindow() //makes the diagnostics window
{
  diagWindow = new BrowserWindow({
    width: 512, 
    height: 542, 
    titleBarStyle:"hidden", 
    maxWidth: 512, 
    minWidth: 512,
    minHeight: 368,
    });
  diagWindow.loadURL(path.join('file://', __dirname, '/minAppDevDiag.html')); //loads app ui
}

function firstRun() //makes the welcome window
{
  welcomewin = new BrowserWindow({
    width: 768, 
    height: 550, 
    maxWidth: 768,  
    maxHeight: 550,  
    frame: false,
    fullscreen: false,
    backgroundColor: '#212121',
    minWidth: 768,
    minHeight: 550,
    opacity: 1,
    });
  welcomewin.loadURL(path.join('file://', __dirname, '/firstrunver2/index.html')); //loads app ui
  const newmenu = //put the fucker in an array
  [{label: 'Bridgeport'}];
  let menu = Menu.buildFromTemplate(newmenu); //build the menu from the array again
  Menu.setApplicationMenu(menu); //we'll do it live
}

function newTweet() //makes the compose window
{
  newTweetWin = new BrowserWindow({
    width: 500, 
    height: 275, 
    maxWidth: 500,  
    frame: false,
    fullscreen: false,
    backgroundColor: '#141d26',
    minWidth: 500,
    minHeight: 220,
    opacity: 1,
    });
  newTweetWin.loadURL(path.join('file://', __dirname, '/minAppComp.html')); //loads app ui
}

function replyTweet() //makes the compose window
{
  newReplyWin = new BrowserWindow({
    width: 500, 
    height: 250, 
    maxWidth: 500,  
    frame: false,
    fullscreen: false,
    backgroundColor: '#141d26',
    minWidth: 500,
    minHeight: 220,
    opacity: 1,
    });
  newReplyWin.loadURL(path.join('file://', __dirname, '/minAppReply.html')); //loads app ui
}

function updCheck() //makes the update checker window
{
  updCheckWin = new BrowserWindow({
    width: 500, 
    height: 220,
    maxWidth: 500, 
    maxHeight: 250,
    minWidth: 500,
    minHeight: 220, 
    titleBarStyle: "hidden",
    fullscreen: false,
    backgroundColor: '#111111',
    });
  updCheckWin.loadURL(path.join('file://', __dirname, '/minAppUpd.html')); //loads app ui
}

function patchNotes() //makes the patchnotes window
{
  patchNotesWin = new BrowserWindow({
    width: 800, 
    height: 550,
    maxWidth: 800, 
    maxHeight: 550,
    resizable: false, 
    titleBarStyle: "hidden",
    fullscreen: false,
    backgroundColor: '#212121',
    minWidth: 800,
    minHeight: 550,
    // parent: browserWindow,
    title: "Bridgeport Patchnotes",
    });
  patchNotesWin.loadURL(path.join('file://', __dirname, '/minAppPatchNotes.html')); //loads app ui
  // patchNotesWin.loadURL('https://bppatchnotes.blogspot.com/'); //loads app ui
}

function prefWindow() //makes the compose window
{
  prefWindowWin = new BrowserWindow({
    width: 500, 
    height: 500,
    maxWidth: 500, 
    maxHeight: 500,
    resizable: false, 
    titleBarStyle: "hidden",
    fullscreen: false,
    backgroundColor: '#212121',
    minWidth: 500,
    minHeight: 500,
    });
  prefWindowWin.loadURL(path.join('file://', __dirname, '/minAppPref.html')); //loads app ui
}

function helpWindow() //makes the help window
{
  helpWindowWin = new BrowserWindow({
    width: 800, 
    height: 600,
    titleBarStyle: "hidden",
    fullscreen: false,
    backgroundColor: '#212121',
    minWidth: 500,
    minHeight: 500,
    });
  helpWindowWin.loadURL(path.join('file://', __dirname, '/minAppHelp.html')); //loads app ui
}

function iabOpen(){
  let iabrowser = new BrowserWindow({
    width: 1152, 
    height: 640, 
    minWidth: 600,
    minHeight: 38,
    titleBarStyle: 'hidden', 
    backgroundColor: '#ffffff'
    })
  iabrowser.loadURL('file://' + __dirname + '/iab/index.html');
} 

function reOpen() //remakes the window
{
  browserWindow.close()
  mainWindow()
}

function reLoad() //reloads the window
{
  browserWindow.reload()
}

app.on('ready', () => {
    //register the key shortcut, THEN launches the main window
    const ret = globalShortcut.register('Option+Shift+N', () => {
      newTweetWithAuth()
    })
    mainWindow()
    var themeCheckIntvl = setInterval(systemThemeCheck, 400)
  })

  app.on('will-quit', () => {
    // Unregister all shortcuts.
    globalShortcut.unregisterAll()
  })


app.on('activate', function ()
{ 
  if (browserWindow == null){
    mainWindow()
  }
  else{
    try{
      browserWindow.show()
    } catch(err){
      //do nothing
    }
  }

});

app.on('window-all-closed', () =>
{
  if(process.platform !== 'darwin'){
    app.quit()
  }
});

app.on('before-quit', () => app.quitting = true)

ipc.on('new-tweet', function (event, arg) {
  newTweet()
})

ipc.on('open-browser', function (event, arg) {
  // newTweet()
  iabOpen()
})

ipc.on('run-code', function (event, arg) {
  eval(arg)
})

ipc.on('photoviewer', function (event, arg) {
  photoViewer()
})

ipc.on('run-setup', function (event, arg) {
  clearInterval(themeCheckIntvl)
  setTimeout(function(){
    browserWindow.destroy() //ohio will be eliminated
    firstRun()
  }, 100)
})

ipc.on('check-updates', function (event, arg) {
  updCheck()
})

ipc.on('app-settings', function (event, arg) {
  prefWindow()
})

ipc.on('restart', function (event, arg) {
  restartTheThing()
})

ipc.on('quit', function (event, arg) {
  app.quit()
})

ipc.on('lmtomain', function (event, arg) {
  // app.quit()
  browserWindow.webContents.send('lmtorenderer', 'Hi')
})

function restartTheThing(){
  app.relaunch()
  app.exit()
}

ipc.on('dock-badge', function (event, arg) {
  app.dock.setBadge(arg)
})

ipc.on('patchnotes', function (event, arg) {
  patchNotes()
})

const dateTime = Date.now();
const timestamp = Math.floor(dateTime / 1000)

ipc.on('rich-presence-update', function (event, arg) {
  client.updatePresence({
    state: arg,
    details: 'Unofficial Twitter app for macOS',
    startTimestamp: timestamp,
    instance: true,
    // largeImageKey: "canary-large",
  });
})

ipc.on('unlock-all', function (event, arg) {
  // console.log('unlocked')
  global.lock = "unlocked"
})

ipc.on('lock-all', function (event, arg) {
  // console.log('lock')
  global.lock = "locked"
})

ipc.on('break-everything', function (event, arg) {
  mainWindow()
})

function newTweetWithAuth(){
  // console.log(lock)
  if(lock == "locked"){
    
  } else{
    newTweet()
  }
}

function replyTweetWithAuth(){
  // console.log(lock)
  if(lock == "locked"){
    
  } else{
    browserWindow.webContents.send('reply')
  }
}

function prefWithAuth(){
  // console.log(lock)
  if(lock == "locked"){
    
  } else{
    prefWindow()
  }
}

function systemThemeCheck(){
  if (app.quitting){} else{
    if (systemPreferences.isDarkMode() == true && process.platform === "darwin"){
      try{
        browserWindow.webContents.send('theme-dark');
      } catch(err){
        //do nothing
      }
    } else{
      try{
        browserWindow.webContents.send('theme-light');       
      } catch(err){
        //do nothing
      }
    }
  }
}
