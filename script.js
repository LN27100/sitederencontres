class personnage {
    constructor(id, pseudo, picture, gender, name, age, search, description) {
        this.id = id;
        this.pseudo = pseudo;
        this.picture = picture;
        this.gender = gender;
        this.name = name;
        this.age = age;
        this.search = search;
        this.description = description;
    }
}

let personnage1 = new personnage(49, "", "image1.jpg", "homme", "John", 23, "Femme", "Je suis un amoureux de la nature.");
let personnage2 = new personnage(50, "", "image2.jpg", "femme", "Alice", 19, "Homme", "J'adore la musique et la danse.");
let personnage3 = new personnage(51, "", "image3.jpg", "homme", "Michael", 25, "Homme", "J'aime les voyages et l'aventure.");
let personnage4 = new personnage(52, "", "image4.jpg", "femme", "Emily", 20, "Femme", "Je suis passionnée de cuisine.");
let personnage5 = new personnage(53, "", "image5.jpg", "homme", "Daniel", 24, "Les deux", "Je suis fan de cinéma.");
let personnage6 = new personnage(54, "", "image6.jpg", "femme", "Olivia", 21, "Homme", "J'adore les animaux.");
let personnage7 = new personnage(55, "", "image7.jpg", "femme", "Sophie", 32, "Homme", "Je suis musicien.");
let personnage8 = new personnage(56, "", "image8.jpg", "homme", "William", 26, "Femme", "J'adore les randonnées.");
let personnage9 = new personnage(57, "", "image9.jpg", "femme", "Chloe", 33, "Homme", "Je suis un passionné de sport.");
let personnage10 = new personnage(58, "", "image10.jpg", "homme", "James", 30, "Femme", "J'adore la photographie.");
let personnage11 = new personnage(59, "", "image11.jpg", "femme", "Ella", 29, "Femme", "Je suis un geek.");
let personnage12 = new personnage(60, "", "image12.jpg", "homme", "Liam", 28, "Les deux", "J'adore la lecture.");
let personnage13 = new personnage(61, "", "image13.jpg", "femme", "Ava", 37, "Homme", "Je suis un amateur d'art.");
let personnage14 = new personnage(62, "", "image14.jpg", "homme", "Henry", 42, "Femme", "Je suis fan de science-fiction.");
let personnage15 = new personnage(63, "", "image15.jpg", "femme", "Mia", 45, "Homme", "Je suis un voyageur passionné.");
let personnage16 = new personnage(64, "", "image16.jpg", "homme", "David", 48, "Femme", "J'adore la danse.");
let personnage17 = new personnage(65, "", "image17.jpg", "femme", "Emma", 38, "Les deux", "Je suis un gourmand.");
let personnage18 = new personnage(66, "", "image18.jpg", "homme", "Oliver", 40, "Femme", "J'adore le bricolage.");
let personnage19 = new personnage(67, "", "image19.jpg", "femme", "Sophia", 54, "Homme", "Je suis un amateur de sports extrêmes.");
let personnage20 = new personnage(68, "", "image20.jpg", "homme", "Noah", 52, "Femme", "Je suis une amoureuse de la nature.");
let personnage21 = new personnage(69, "", "image21.jpg", "femme", "Isabella", 59, "Femme", "Je suis fan de jeux vidéo.");
let personnage22 = new personnage(70, "", "image22.jpg", "homme", "Alexander", 61, "Homme", "J'adore les voyages.");
let personnage23 = new personnage(71, "", "image23.jpg", "femme", "Grace", 55, "Homme", "Je suis musicienne.");
let personnage24 = new personnage(72, "", "image24.jpg", "homme", "Ethan", 64, "Femme", "J'adore les animaux.");


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

let createPersonnage = {
    addCard() {
        for (let i = 0; i < personnages.length; i++) {
            let card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
            
            `

            
    }
}}



