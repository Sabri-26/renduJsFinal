// 💻📝 Rendu final JS – Génération d'un site web dynamique à partir des données d'une API
// Objectif : utilisation de fetch() pour récupérer des données JSON, manipulation DOM, boucles, gestion d'images et cartes interactives.
// 🟢 Niveau 1 – Récupérer les données de l'API
// Utilise fetch() pour récupérer les données JSON depuis l'API https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/.
// Tu as le choix du sujet, donc clique bien sur le sujet de ton choix pour avoir l'URL finale.
// Vérifie si la réponse de l'API est correcte. Si oui, passe les données à une fonction qui affichera le contenu du site.
// 🟡 Niveau 2 – Affichage du contenu principal
// Dans la fonction, crée un élément div pour afficher le nom de l'entreprise, sa phrase d'accroche et un bouton d'appel à l'action.
// Affiche ces informations dynamiquement avec les données récupérées depuis l'API.
// 🔴 Niveau 3 – Afficher les activités
// Pour chaque activité dans les données JSON, crée dynamiquement une div contenant un titre, une description et une image.
// Affiche ces informations dans une section dédiée, avec une carte pour chaque activité si les données contiennent un lien vers une image.
// 🔴🔴 Niveau 4 – Afficher les témoignages
// Pour chaque témoignage dans les données JSON, crée dynamiquement une div contenant le prénom, le commentaire.
// Ajoute ces témoignages sous les activités dans la page.
// 🔴🔴🔴 Niveau 5 (optionnel) – Ajouter une carte interactive
// Ajoute une carte interactive à la page à l’aide de la bibliothèque Leaflet.js.
// Utilise les coordonnées fournies dans les données JSON pour centrer la carte et y ajouter un fond de carte interactif.
// 💎 Bonus – Design et personnalisation
// Fonts personnalisées : Ajoute des fonts depuis Google Fonts
// Icônes : Utilise une bibliothèque comme Font Awesome ou Material Icons
// Favicon personnalisé : via balise <link rel="icon" ...>
// Design : styles CSS avec couleurs, espaces, ombres, transitions, animations légères



// 🟢 Niveau 1 – Récupérer les données de l'API
// Utilise fetch() pour récupérer les données JSON depuis l'API https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/.
// const url = "https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/escape-game.json";

// Vérifie si la réponse de l'API est correcte. Si oui, passe les données à une fonction qui affichera le contenu du site.

// function afficherContenu() {


fetch("https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/escape-game.json")
    .then(response => response.json()) // transforme la réponse en JSON
    .then(data => {

        let div = document.getElementById("container");
        div.classList.add("container");
        // ici on utilise les données reçues
        console.log(data);
        // Dans la fonction, crée un élément div pour afficher le nom de l'entreprise, sa phrase d'accroche et un bouton d'appel à l'action.
        div.innerHTML = `
       <div>
        <h1>${data.nomCommercial}</h1>
        <h2>${data.phraseAccroche} </h2> 
        <button>${data.texteAppelAction}</button>
        </div>
        `
        // Pour chaque activité dans les données JSON, crée dynamiquement une div contenant un titre, une description et une image.
        // Affiche ces informations dans une section dédiée, avec une carte pour chaque activité si les données contiennent un lien vers une image
        let section = document.getElementById("section");
        section.classList.add("section");

        data.avantagesClients.forEach(element => {
            section.innerHTML += `
<div>
<h3>${element} </h3>
</div>`;

        });

        let section2 = document.getElementById("section2")
        section2.classList.add("section2")

        data.activites.forEach(element => {
            section2.innerHTML += `
 <div   >
<h3>${element.nom}</h3>
 <p>${element.description} </p>
 <img src=${element["image-url"]}></img>  
</div>`;
        });

        // 🔴🔴 Niveau 4 – Afficher les témoignages
        // // Pour chaque témoignage dans les données JSON, crée dynamiquement une div contenant le prénom, le commentaire.
        // // Ajoute ces témoignages sous les activités dans la page.

        let sectionCommentaire = document.getElementById("sectionCommentaire")
        sectionCommentaire.classList.add("sectionCommentaire");       
        data.temoignages.forEach(element => {
            sectionCommentaire.innerHTML += `
    <h3>${element.prenom} </h3>
    <p>${element.commentaire} </p>`

        });


    })
    .catch(error => {
        // ici on gère les erreurs
        console.error('Erreur lors du fetch :', error);
    });
//   }

//   afficherContenu();

