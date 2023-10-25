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



function getCookie (cgu){
    const cookie = document.cookie.split(";");
    const value = cookie .find(cookie => cookie.startsWith(cgu)) ?.split ("=")[1]
    if(value === undefined){
        return null;

    }
    return decodeURI(value)
}

function getCookieA (majeur){
    const cookie = document.cookie.split(";");
    const value = cookie .find(cookie => cookie.startsWith(majeur)) ?.split ("=")[1]
    if(value === undefined){
        return null;

    }
    return decodeURI(value)}



