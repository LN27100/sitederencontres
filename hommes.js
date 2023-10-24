class homme {
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

let personnage1 = new homme("49", "Sexy Boy", "homme19-25-1.jpg", "homme", "Normandie", "23", "Femme", "Je suis un amoureux de la nature.");
let personnage3 = new homme("51", "Juste moi", "homme19-25-2.jpg", "homme", "Somme", "25", "Homme", "J'aime les voyages et l'aventure.");
let personnage5 = new homme("53", "Dany", "homme19-25-3.jpg", "homme", "Occitanie", "24", "Les deux", "Je suis fan de cinéma.");
let personnage8 = new homme("56", "Will91", "homme26-35-1.jpg", "homme", "Ile-de-France", "26", "Femme", "J'adore les randonnées.");
let personnage10 = new homme("58", "Shoot Boy", "homme26-35-2.jpg", "homme", "Hauts-de-France", "30", "Femme", "J'adore la photographie.");
let personnage12 = new homme("60", "Chaton tout doux", "homme26-35-3.jpg", "Normandie", "Liam", "28", "Les deux", "J'adore la lecture.");
let personnage14 = new homme("62", "Dark Vador", "homme36-50-1.jpg", "homme", "Provence-Alpes", "42", "Femme", "Je suis fan de science-fiction.");
let personnage16 = new homme("64", "Le danseur", "homme36-50-2.jpg", "homme", "Occitanie", "48", "Femme", "J'adore la danse.");
let personnage18 = new homme("66", "Sweety Candy", "homme36-50-3.jpg", "homme", "Nouvelle-Aquitaine", "40", "Femme", "Je suis un gourmand.");
let personnage20 = new homme("68", "Bisounours", "hommeplus50-1.jpg", "homme", "Ile-de-France", "52", "Femme", "Je suis une amoureuse de la nature.");
let personnage22 = new homme("70", "Globe Trotteur", "hommeplus50-2.jpg", "homme", "Hauts-de-France", "61", "Homme", "J'adore les voyages.");
let personnage24 = new homme("72", "Grand matou", "hommeplus50-3.jpg", "homme", "Provence-Alpes", "64", "Femme", "J'adore les animaux.");


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

let createElement = {
    createCard() {
        for (let i = 0; i < hommes.length; i++) {
            let card = document.createElement("div")
            card.classList.add("card")
            card.innerHTML =
                `
            
            
             <h2>${hommes[i].pseudo}</h2>
             <img src="img/${hommes[i].picture}"  alt="Photo Héros">
             <ul>
             <li>J'ai ${hommes[i].age} ans</li>
             <li>Genre : ${hommes[i].gender}</li>
             <li>Je recherche : ${hommes[i].search}</li>
             <li>Région : ${hommes[i].region}</li>
             </ul>
             <p>${hommes[i].description}</p>


            `


            profil.appendChild(card);

        }

    }
}


profil.appendChild(createElement.createCard())

