if (localStorage["lastbuild"] == currentVersionLocal){
    //do not
} else{
    if (localStorage["showpatchnotesonupdate"] == "disabled"){
        //do not
    } else{
        console.log("update detected since last launch")
        ipc.send("patchnotes")
        localStorage["lastbuild"] = currentVersionLocal
    }

}