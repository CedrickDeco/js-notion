// Créer un événement au scroll

// Réduire la navbar quand on descend vers le bas, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours

// const theMenu = document.getElementById("main");
// const btn = document.getElementById("btn");
// const content = document.querySelector(".content");
const theNav = document.getElementById("nav");

btn.addEventListener("click", () => {
    console.log("deco");
    theNav.classList.toggle("active");


});

// content.addEventListener("click", () => {
//     sidebar.classList.remove("active");
// });

// Priorités en CSS : !important > id > classe > baliseHtml