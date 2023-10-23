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
let personnage2 = new personnage("50", "Au pays des merveilles", "femme19-25-1.jpg", "femme", "Auvergne", "19", "Homme", "J'adore la musique et la danse.");
let personnage3 = new personnage("51", "Juste moi", "homme19-25-2.jpg", "homme", "Somme", "25", "Homme", "J'aime les voyages et l'aventure.");
let personnage4 = new personnage("52", "CandyCrush", "femme19-25-2.jpg", "femme", "Auvergne", "20", "Femme", "Je suis passionnée de cuisine.");
let personnage5 = new personnage("53", "Dany", "homme19-25-3.jpg", "homme", "Occitanie", "24", "Les deux", "Je suis fan de cinéma.");
let personnage6 = new personnage("54", "Queeny", "femme19-25-3.jpg", "femme", "Normandie", "21", "Homme", "J'adore les animaux.");
let personnage7 = new personnage("55","La violoniste", "femme26-35-1.jpg", "femme", "Bretagne", "32", "Homme", "Je suis musicienne.");
let personnage8 = new personnage("56", "Will91", "homme26-35-1.jpg", "homme", "Ile-de-France", "26", "Femme", "J'adore les randonnées.");
let personnage9 = new personnage("57", "Bella", "femme26-35-2.jpg", "femme", "Bretagne", "33", "Homme", "Je suis une passionnée de sport.");
let personnage10 = new personnage("58", "Shoot Boy", "homme26-35-2.jpg", "homme", "Hauts-de-France", "30", "Femme", "J'adore la photographie.");
let personnage11 = new personnage("59", "Geekeuse", "femme26-35-3.jpg", "femme", "Bourgogne", "29", "Femme", "Je suis une geek.");
let personnage12 = new personnage("60", "Chaton tout doux", "homme26-35-3.jpg", "Normandie", "Liam", "28", "Les deux", "J'adore la lecture.");
let personnage13 = new personnage("61", "Bella", "femme36-50-1.jpg", "femme", "Pays-de-la-Loire", "37", "Homme", "Je suis une amatrice d'art.");
let personnage14 = new personnage("62", "Dark Vador", "homme36-50-1.jpg", "homme", "Provence-Alpes-Côte d'Azur", "42", "Femme", "Je suis fan de science-fiction.");
let personnage15 = new personnage("63", "Globe Trotteuse", "femme36-50-2.jpg", "femme", "Bourgogne", "45", "Homme", "Je suis une voyageuse passionné.");
let personnage16 = new personnage("64", "Le danseur", "homme36-50-2.jpg", "homme", "Occitanie", "48", "Femme", "J'adore la danse.");
let personnage17 = new personnage("65", "Bob la bricoleuse", "femme36-50-3.jpg", "femme", "Ile-de-France", "38", "Les deux", "J'adore le bricolage.");
let personnage18 = new personnage("66", "Sweety Candy", "homme36-50-3.jpg", "homme", "Nouvelle-Aquitaine", "40", "Femme", "Je suis un gourmand.");
let personnage19 = new personnage("67", "Sophiadu80", "femmeplus50-1.jpg", "femme", "Grand-Est", "54", "Homme", "Je suis une amatrice de sports extrêmes.");
let personnage20 = new personnage("68", "Bisounours", "hommeplus50-1.jpg", "homme", "Ile-de-France", "52", "Femme", "Je suis une amoureuse de la nature.");
let personnage21 = new personnage("69", "Chichi", "femmeplus50-2.jpg", "femme", "Bretagne", "59", "Femme", "Je suis fan de jeux vidéo.");
let personnage22 = new personnage("70", "Globe Trotteur", "hommeplus50-2.jpg", "homme", "Hauts-de-France", "61", "Homme", "J'adore les voyages.");
let personnage23 = new personnage("71", "Douceur", "femmeplus50-3.jpg", "femme", "Centre-Val de Loire", "55", "Homme", "J'adore la danse de salon'.");
let personnage24 = new personnage("72", "Grand matou", "hommeplus50-3.jpg", "homme", "Provence-Alpes Côte d'Azur", "64", "Femme", "J'adore les animaux.");


const personnages = [
    personnage1,
    personnage2,
    personnage3,
    personnage4,
    personnage5,
    personnage6,
    personnage7,
    personnage8,
    personnage9,
    personnage10,
    personnage11,
    personnage12,
    personnage13,
    personnage14,
    personnage15,
    personnage16,
    personnage17,
    personnage18,
    personnage19,
    personnage20,
    personnage21,
    personnage22,
    personnage23,
    personnage24
]

let createElement = {
    createCard() {
        for (let i = 0; i < personnages.length; i++) {
            let card = document.createElement("div")
            card.classList.add("card")
            card.innerHTML = 
            `
            
            
             <h2>${personnages[i].pseudo}</h2>
             <img src="img/${personnages[i].picture}"  alt="Photo Héros">
             <ul>
             <li>J'ai ${personnages[i].age} ans</li>
             <li>Genre : ${personnages[i].gender}</li>
             <li>Je recherche : ${personnages[i].search}</li>
             <li>Région : ${personnages[i].region}</li>
             </ul>
             <p>${personnages[i].description}</p>


            `

           infos.appendChild(card)
                profil.appendChild(card);

            }

        }
    }


infos.appendChild(createElement.createCard())

