let cgu = document.getElementById("cgu");
let majeur = document.getElementById("majeur");
let button = document.getElementById("button");

function checkedd() {
    console.log('ok')
    if(cgu.checked && majeur.checked){
        button.disabled = false;
    }else{
        button.disabled = true;
    }

}

cgu.addEventListener("change", checkedd);

majeur.addEventListener("change", checkedd);



