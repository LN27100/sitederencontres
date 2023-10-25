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


document.getElementById("button").addEventListener("click", function (event) {
    document.cookie = "cgu=on"
})

function getCookie(name) {
    const cookies = document.cookie.split('; ')
    const value = cookies.find(c => c.startsWith(name + "="))?.split('=')[1]
    if (value === undefined) {
        return false
    } else {
        return true
    }
} 

if (getCookie('cgu')) {
    window.location.href = '../HTML/search.html';
    exit()
}

console.log(getCookie("toto"))



