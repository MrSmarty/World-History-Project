function showHide(id) {
    var x = document.getElementById(id);
    if (x.style.display == "none") {
        document.getElementById("achaea").style.display = "none";
        document.getElementById("britannia").style.display = "none";
        document.getElementById("judea").style.display = "none";
        document.getElementById("gaul").style.display = "none";
        document.getElementById("rome").style.display = "none";
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}