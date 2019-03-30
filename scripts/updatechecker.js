function updateCheck(){
if(currentVersionServer > currentVersionLocal){
	document.getElementById("header").innerHTML = "An update is Available"
	document.getElementById("button").style.display = "inline"
} else {
	document.getElementById("header").innerHTML = "You're all up to date!"
	document.getElementById("button").style.display = "none"
}
}

function dl(){
	window.location = "https://bridgeportapp.github.io/Bridgeport.zip"
	document.getElementById("button").innerHTML = "Downloading..."
}

function updateCheckCheck(){
window.setInterval(updateCheck, 250) //updates header text once every x milliseconds
}

window.setTimeout(updateCheckCheck, 200)