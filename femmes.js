class femme {
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


let personnage2 = new femme("50", "Pays des merveilles", "femme19-25-1.jpg", "femme", "Auvergne", "19", "Homme", "J'adore la musique et la danse.")
let personnage4 = new femme("52", "CandyCrush", "femme19-25-2.jpg", "femme", "Auvergne", "20", "Femme", "Je suis passionnée de cuisine.");
let personnage6 = new femme("54", "Queeny", "femme19-25-3.jpg", "femme", "Normandie", "21", "Homme", "J'adore les animaux.");
let personnage7 = new femme("55","La violoniste", "femme26-35-1.jpg", "femme", "Bretagne", "32", "Homme", "Je suis musicienne.");
let personnage9 = new femme("57", "Bella", "femme26-35-2.jpg", "femme", "Bretagne", "33", "Homme", "Je suis une passionnée de sport.");
let personnage11 = new femme("59", "Geekeuse", "femme26-35-3.jpg", "femme", "Bourgogne", "29", "Femme", "Je suis une geek.");
let personnage13 = new femme("61", "Bella", "femme36-50-1.jpg", "femme", "Pays-de-la-Loire", "37", "Homme", "Je suis une amatrice d'art.");
let personnage15 = new femme("63", "Globe Trotteuse", "femme36-50-2.jpg", "femme", "Bourgogne", "45", "Homme", "Je suis une voyageuse passionné.");
let personnage17 = new femme("65", "Bob la bricoleuse", "femme36-50-3.jpg", "femme", "Ile-de-France", "38", "Les deux", "J'adore le bricolage.");
let personnage19 = new femme("67", "Sophiadu80", "femmeplus50-1.jpg", "femme", "Grand-Est", "54", "Homme", "Je suis une amatrice de sports extrêmes.");
let personnage21 = new femme("69", "Chichi", "femmeplus50-2.jpg", "femme", "Bretagne", "59", "Femme", "Je suis fan de jeux vidéo.");
let personnage23 = new femme("71", "Douceur", "femmeplus50-3.jpg", "femme", "Centre-Val de Loire", "55", "Homme", "J'adore la danse de salon'.");


const femmes = [personnage2, personnage4, personnage6, personnage7, personnage9,personnage11, personnage13, personnage15, personnage17,personnage19, personnage21, personnage23]



let createElement = {
    createCard() {
        for (let i = 0; i < hommes.length; i++) {
            let card = document.createElement("div")
            card.classList.add("card")
            card.innerHTML =
                `
            
            
             <h2>${femmes[i].pseudo}</h2>
             <img src="img/${femmes[i].picture}"  alt="Photo Héros">
             <ul>
             <li>J'ai ${femmes[i].age} ans</li>
             <li>Genre : ${femmes[i].gender}</li>
             <li>Je recherche : ${femmes[i].search}</li>
             <li>Région : ${femmes[i].region}</li>
             </ul>
             <p>${hommes[i].description}</p>
             
            `

          profilFemme.appendChild(card)

        }

    }
}

profilFemme.appendChild(createElement.createCard())