//Gestion de la navbar

// const theNav = document.getElementById("nav");
// btn.addEventListener("click", () => {
//     theNav.classList.toggle("active");


// });

// Gestion du login

const display_form = document.getElementById("displayForm");
const contentForm = document.querySelector(".form-content");
const login = document.getElementById("Login");
const register = document.getElementById("Register");
const registerForm = document.getElementById("register-form");
const loginForm = document.getElementById("login-form");
const formBody = document.querySelector(".form-body")


display_form.addEventListener(("click"), () => {
    contentForm.classList.toggle("show");
});

register.addEventListener(("click"), () => {
    login.classList.remove("active");
    register.classList.add("active");
    if (registerForm.classList.contains("toggleForm")) {
        formBody.style.transform = "translate(-100%)";
        formBody.style.transition = "0.3s";
        loginForm.classList.add("toggleForm");
        registerForm.classList.remove("toggleForm");
    }
});
login.addEventListener(("click"), () => {
    login.classList.add("active");
    register.classList.remove("active");
    if (loginForm.classList.contains("toggleForm")) {
        formBody.style.transform = "translate(0)";
        formBody.style.transition = "0.3s";
        loginForm.classList.remove("toggleForm");
        registerForm.classList.add("toggleForm");

    }
})