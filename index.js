let cgu = document.getElementById("cgu");
let majeur = document.getElementById("majeur");
let button = document.getElementById("button");

function checkedd() {
    if(cgu.checked && majeur.checked){
        button.disabled = false;
    }else{
        button.disabled = true;
    }

}

cgu.addEventListener("change", checkedd);

majeur.addEventListener("change", checkedd);



document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=index.html";