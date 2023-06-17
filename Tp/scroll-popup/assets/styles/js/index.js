// Créer un événement au scroll

// Réduire la navbar quand on descend vers le bas, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours

const nav = document.getElementById("navbar");
const navHeight = nav.clientHeight;
console.log(navHeight);
window.addEventListener("scroll", () => {
    if (window.scrollY > navHeight) {
        nav.style.height = "45px"
    } else {
        nav.style.height = "90px";
    }
});
// image appearence
const imgimprovise = document.getElementById("imgImprovise");
let scrollValue = (window.scrollY + window.innerHeight) / document.body.offsetHeight;
console.log(scrollValue);
window.addEventListener("scroll", () => {
        let scrollValue = (window.scrollY + window.innerHeight) / document.body.offsetHeight;
        console.log(scrollValue);
        if (scrollValue > 0.40) {
            imgimprovise.style.opacity = 1;
            imgimprovise.style.transform = "none";
        }
    })
    //popup
const poPup = document.getElementById("popup");
let popupOn = true;
window.addEventListener("scroll", () => {
    let scrollValue = (window.scrollY + window.innerHeight) / document.body.offsetHeight;
    console.log(scrollValue);
    if (scrollValue > 0.80) {
        poPup.style.opacity = 1;
        poPup.style.transform = "none";
    } else {
        poPup.style.opacity = 0;
        poPup.style.transform = "translateX(500px)";
        popupOn = false;
    }
});
closebtn = document.getElementById("closeBtn");
closebtn.addEventListener("click", () => {
    poPup.style.opacity = 0;
    poPup.style.transform = "translateX(500px)";
});