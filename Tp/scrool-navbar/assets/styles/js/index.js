const mouses = document.querySelectorAll(".mouse");

window.addEventListener("mousemove", (e) => {
    mouses.forEach((mouse) => {
        mouse.style.top = e.y + "px";
        mouse.style.left = e.x + "px";
    });
});

// window.addEventListener("mousemove", (e) => {
//   cursor.style.top = e.y + "px";
//   cursor.style.left = e.x + "px";

//   mouse1.style.top = e.y + "px";
//   mouse1.style.left = e.x + "px";

//   mouse2.style.top = e.y + "px";
//   mouse2.style.left = e.x + "px";
// })
//-----------------------evenement au scrool-------------------
let lastScrool = 0;
const nav_bar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
    if (window.scrollY < lastScrool) {
        nav_bar.style.top = 0;
        nav.style.position = "fixed";
    } else {
        nav_bar.style.top = "-60px"
        nav.style.position = "fixed";
    }
    lastScrool = window.scrollY;
    console.log(lastScrool);
})