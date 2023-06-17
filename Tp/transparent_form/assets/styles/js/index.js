const theNav = document.getElementById("nav");
btn.addEventListener("click", () => {
    theNav.classList.toggle("active");


});

const display_form = document.getElementById("displayForm");
const for_login = document.getElementById("forLogin");
const for_register = document.getElementById("forRegister");
const form_login = document.getElementById("formLogin");
const form_register = document.getElementById("formRegister");
const form_container = document.getElementById("formContainer");
const card = document.querySelector(".card");

display_form.addEventListener(("click"), () => {
    card.classList.toggle("show");
});

for_register.addEventListener(("click"), () => {
    for_login.classList.remove("active");
    for_register.classList.add("active");
    if (form_register.classList.contains("toggleForm")) {
        form_container.style.transform = "translate(-100%)";
        form_container.style.transition = "0.3s";
        form_register.classList.remove("toggleForm");
        form_login.classList.add("toggleForm")
    }
});

for_login.addEventListener(("click"), () => {
    for_login.classList.add("active");
    for_register.classList.remove("active");
    if (form_login.classList.contains("toggleForm")) {
        form_container.style.transform = "translate(0)";
        form_container.style.transition = "0.3s";
        form_login.classList.remove("toggleForm");
        form_register.classList.add("toggleForm")
    }
});