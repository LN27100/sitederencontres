let cgu = document.getElementById("cgu");
let majeur = document.getElementById("majeur");
let button = document.getElementById("button");

function checkedd() {
    console.log('ok')
    if (cgu.checked && majeur.checked) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }

}

cgu.addEventListener("change", checkedd);

majeur.addEventListener("change", checkedd);



document.getElementById("cgu").addEventListener("click", function () {
    if (cgu.checked) {
        var expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 365);
        document.cookie = "acceptConditions=true; expires=" + expirationDate.toUTCString();
    }
});

document.getElementById("majeur").addEventListener("click", function () {
    if (majeur.checked) {
        var expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 365);
        document.cookie = "Majeur=true; expires=" + expirationDate.toUTCString();
    }
});



