devSplah("firstrun.js")
var session = localStorage['firstRun2'];

if (session != "false"){
	// window.location.href = "firstrunver2/index.html";
	// write the code to send the function to main.js to run the first run applet.
	// it should also close this window. and then restart after.
	ipc.send("run-setup","hi")
} else{
	console.log("welcome back");
	window.setTimeout(function(){console.log("bridgeport version: " + currentFullVersion)}, 0)
}