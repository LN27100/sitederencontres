class personnage {
    constructor(id, pseudo, picture, gender, region, age, search, description) {
        this.id = id;
        this.pseudo = pseudo;
        this.picture = picture;
        this.gender = gender;
        this.region = region;
        this.age = age;
        this.search = search;
        this.description = description;
    }
}

let personnage1 = new personnage("49", "Sexy Boy", "homme19-25-1.jpg", "homme", "Normandie", "23", "Femme", "Je suis un amoureux de la nature.");
let personnage2 = new personnage("50", "Pays des merveilles", "femme19-25-1.jpg", "femme", "Auvergne", "19", "Homme", "J'adore la musique et la danse.");
let personnage3 = new personnage("51", "Juste moi", "homme19-25-2.jpg", "homme", "Somme", "25", "Homme", "J'aime les voyages et l'aventure.");
let personnage4 = new personnage("52", "CandyCrush", "femme19-25-2.jpg", "femme", "Auvergne", "20", "Femme", "Je suis passionnée de cuisine.");
let personnage5 = new personnage("53", "Dany", "homme19-25-3.jpg", "homme", "Occitanie", "24", "Les deux", "Je suis fan de cinéma.");
let personnage6 = new personnage("54", "Queeny", "femme19-25-3.jpg", "femme", "Normandie", "21", "Homme", "J'adore les animaux.");
let personnage7 = new personnage("55", "La violoniste", "femme26-35-1.jpg", "femme", "Bretagne", "32", "Homme", "Je suis musicienne.");
let personnage8 = new personnage("56", "Will91", "homme26-35-1.jpg", "homme", "Ile-de-France", "26", "Femme", "J'adore les randonnées.");
let personnage9 = new personnage("57", "Bella", "femme26-35-2.jpg", "femme", "Bretagne", "33", "Homme", "Je suis une passionnée de sport.");
let personnage10 = new personnage("58", "Shoot Boy", "homme26-35-2.jpg", "homme", "Hauts-de-France", "30", "Femme", "J'adore la photographie.");
let personnage11 = new personnage("59", "Geekeuse", "femme26-35-3.jpg", "femme", "Bourgogne", "29", "Femme", "Je suis une geek.");
let personnage12 = new personnage("60", "Chaton tout doux", "homme26-35-3.jpg", "Normandie", "Liam", "28", "Les deux", "J'adore la lecture.");
let personnage13 = new personnage("61", "Bella", "femme36-50-1.jpg", "femme", "Pays-de-la-Loire", "37", "Homme", "Je suis une amatrice d'art.");
let personnage14 = new personnage("62", "Dark Vador", "homme36-50-1.jpg", "homme", "Provence-Alpes", "42", "Femme", "Je suis fan de science-fiction.");
let personnage15 = new personnage("63", "Globe Trotteuse", "femme36-50-2.jpg", "femme", "Bourgogne", "45", "Homme", "Je suis une voyageuse passionné.");
let personnage16 = new personnage("64", "Le danseur", "homme36-50-2.jpg", "homme", "Occitanie", "48", "Femme", "J'adore la danse.");
let personnage17 = new personnage("65", "Bob la bricoleuse", "femme36-50-3.jpg", "femme", "Ile-de-France", "38", "Les deux", "J'adore le bricolage.");
let personnage18 = new personnage("66", "Sweety Candy", "homme36-50-3.jpg", "homme", "Nouvelle-Aquitaine", "40", "Femme", "Je suis un gourmand.");
let personnage19 = new personnage("67", "Sophiadu80", "femmeplus50-1.jpg", "femme", "Haut-de-France", "54", "Homme", "Je suis une amatrice de sports extrêmes.");
let personnage20 = new personnage("68", "Bisounours", "hommeplus50-1.jpg", "homme", "Ile-de-France", "52", "Femme", "Je suis une amoureuse de la nature.");
let personnage21 = new personnage("69", "Chichi", "femmeplus50-2.jpg", "femme", "Bretagne", "59", "Homme", "Je suis fan de jeux vidéo.");
let personnage22 = new personnage("70", "Globe Trotteur", "hommeplus50-2.jpg", "homme", "Hauts-de-France", "61", "Homme", "J'adore les voyages.");
let personnage23 = new personnage("71", "Douceur", "femmeplus50-3.jpg", "femme", "Centre-Val de Loire", "55", "Femme", "J'adore la danse de salon'.");
let personnage24 = new personnage("72", "Grand matou", "hommeplus50-3.jpg", "homme", "Provence-Alpes", "64", "Femme", "J'adore les animaux.");


const All = [personnage1,
    personnage3,
    personnage5,
    personnage8,
    personnage10,
    personnage12,
    personnage14,
    personnage16,
    personnage18,
    personnage20,
    personnage22,
    personnage24,
    personnage2,
    personnage4,
    personnage6,
    personnage9,
    personnage11,
    personnage13,
    personnage15,
    personnage17,
    personnage19,
    personnage21,
    personnage23

]

const hommes = [
    personnage1,
    personnage3,
    personnage5,
    personnage8,
    personnage10,
    personnage12,
    personnage14,
    personnage16,
    personnage18,
    personnage20,
    personnage22,
    personnage24
]

const femmes = [
    personnage2,
    personnage4,
    personnage6,
    personnage9,
    personnage11,
    personnage13,
    personnage15,
    personnage17,
    personnage19,
    personnage21,
    personnage23,]



function affichage() {
    let filter = document.getElementById("genderFilter").value;

    if (filter == "Hommes") {
        infos.innerHTML = ""
        for (let i = 0; i < hommes.length; i++) {
            let card = document.createElement("div")
            card.classList.add("card")
            card.innerHTML =
                `
                         <h2>${hommes[i].pseudo}</h2>
                         <img src="../img/${hommes[i].picture}"  alt="Photo">
                         <ul>
                         <li>J'ai ${hommes[i].age} ans</li>
                         <li>Genre : ${hommes[i].gender}</li>
                         <li>Je recherche : ${hommes[i].search}</li>
                         <li>Région : ${hommes[i].region}</li>
                         </ul>
                         <p>${hommes[i].description}</p>
                         <button href="">Voir plus</button>
                        `

            infos.appendChild(card)
        }
    } else if (filter == "Femmes") {
        infos.innerHTML = ""
        for (let i = 0; i < femmes.length; i++) {
            let card = document.createElement("div")
            card.classList.add("card")
            card.innerHTML =
                `
                         <h2>${femmes[i].pseudo}</h2>
                         <img src="../img/${femmes[i].picture}"  alt="Photo">
                         <ul>
                         <li>J'ai ${femmes[i].age} ans</li>
                         <li>Genre : ${femmes[i].gender}</li>
                         <li>Je recherche : ${femmes[i].search}</li>
                         <li>Région : ${femmes[i].region}</li>
                         </ul>
                         <p>${femmes[i].description}</p>
                         <button href="">Voir plus</button>
                        `
            infos.appendChild(card)
        }
    }

    else if (filter == "all") {
        infos.innerHTML = ""
        for (let i = 0; i < All.length; i++) {
            let card = document.createElement("div")
            card.classList.add("card")
            card.innerHTML =
                `
                         <h2>${All[i].pseudo}</h2>
                         <img src="../img/${All[i].picture}"  alt="Photo">
                         <ul>
                         <li>J'ai ${All[i].age} ans</li>
                         <li>Genre : ${All[i].gender}</li>
                         <li>Je recherche : ${All[i].search}</li>
                         <li>Région : ${All[i].region}</li>
                         </ul>
                         <p>${All[i].description}</p>
                         <a><button>Voir plus</button></a>
                        `

            infos.appendChild(card)
        }

    }

}


let filter = document.getElementById("genderFilter")

filter.addEventListener("change", affichage)

const resetProfilesLink = document.getElementById("resetProfiles")
resetProfilesLink.addEventListener("click", function (event) {
    event.preventDefault(); // Empêche la navigation vers une autre page

    // Réinitialisez l'affichage en supprimant les éléments actuels de 'infos'
    infos.innerHTML = ""
})