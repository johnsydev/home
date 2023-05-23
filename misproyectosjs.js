var selectLanguage = document.getElementById("language");
selectLanguage.addEventListener("change", checkLang)

function checkLang() {
    console.log("changed")
    var sLang = document.getElementById("language").value;
    var targets = document.getElementById("targets");
    var proyects = document.getElementsByClassName("proyect");
    var proyectsByCat = document.getElementsByClassName(sLang);
    var total_p = proyectsByCat.length;
    var text = ""
    
    console.log(proyectsByCat)
    for(var i=0; i < proyects.length; i++) {
        console.log(proyects[i])
        proyects[i].style.display = "none";
    }
    for(var i=0; i < total_p; i++) {
        console.log(proyectsByCat[i])
        proyectsByCat[i].style.display = "block";
    }
    
    
}