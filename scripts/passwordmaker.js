function passwordCreateSubmit(){
    var input = document.getElementById("pwbox").value
    var inputSecondBox = document.getElementById("pwbox2").value
    if (inputSecondBox == input){
        encryptPW(input)
        console.log("password accepted")
        sessionStorage["loggedin"] = "yes"
        window.location.href ="index.html"
    } else{
        document.getElementById("pwerror").style.display = "inline"
    }
}