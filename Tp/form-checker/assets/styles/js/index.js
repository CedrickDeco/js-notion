// const form = document.querySelector("form");
// const inputs = document.querySelectorAll(
//     'input[type="text"], input[type="password"]'
// );
// const progressBar = document.getElementById("progress-bar");
// let pseudo, email, password, confirmPass;

// const errorDisplay = (tag, message, valid) => {
//     const container = document.querySelector("." + tag + "-container");
//     const span = document.querySelector("." + tag + "-container > span");

//     if (!valid) {
//         container.classList.add("error");
//         span.textContent = message;
//     } else {
//         container.classList.remove("error");
//         span.textContent = message;
//     }
// };

// const pseudoChecker = (value) => {
//     if (value.length > 0 && (value.length < 3 || value.length > 20)) {
//         errorDisplay("pseudo", "Le pseudo doit faire entre 3 et 20 caractères");
//         pseudo = null;
//     } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
//         errorDisplay(
//             "pseudo",
//             "Le pseudo ne doit pas contenir de caractères spéciaux"
//         );
//         pseudo = null;
//     } else {
//         errorDisplay("pseudo", "", true);
//         pseudo = value;
//     }
// };

// const emailChecker = (value) => {
//     if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
//         errorDisplay("email", "Le mail n'est pas valide");
//         email = null;
//     } else {
//         errorDisplay("email", "", true);
//         email = value;
//     }
// };

// const passwordChecker = (value) => {
//     progressBar.classList = "";

//     if (!value.match(
//             /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/
//         )) {
//         errorDisplay(
//             "password",
//             "Minimum de 8 caractères, une majuscule, un chiffre et un caractère spécial"
//         );
//         progressBar.classList.add("progressRed");
//         password = null;
//     } else if (value.length < 12) {
//         progressBar.classList.add("progressBlue");
//         errorDisplay("password", "", true);
//         password = value;
//     } else {
//         progressBar.classList.add("progressGreen");
//         errorDisplay("password", "", true);
//         password = value;
//     }
//     if (confirmPass) confirmChecker(confirmPass);
// };

// const confirmChecker = (value) => {
//     if (value !== password) {
//         errorDisplay("confirm", "Les mots de passe ne correspondent pas");
//         confirmPass = false;
//     } else {
//         errorDisplay("confirm", "", true);
//         confirmPass = true;
//     }
// };

// inputs.forEach((input) => {
//     input.addEventListener("input", (e) => {
//         switch (e.target.id) {
//             case "pseudo":
//                 pseudoChecker(e.target.value);
//                 break;
//             case "email":
//                 emailChecker(e.target.value);
//                 break;
//             case "password":
//                 passwordChecker(e.target.value);
//                 break;
//             case "confirm":
//                 confirmChecker(e.target.value);
//                 break;
//             default:
//                 nul;
//         }
//     });
// });

// form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     if (pseudo && email && password && confirmPass) {
//         const data = {
//             pseudo,
//             email,
//             password,
//         };
//         console.log(data);

//         inputs.forEach((input) => (input.value = ""));
//         progressBar.classList = "";

//         pseudo = null;
//         email = null;
//         password = null;
//         confirmPass = null;
//         alert("Inscription validée !");
//     } else {
//         alert("veuillez remplir correctement les champs");
//     }
// });

const form = document.querySelector("form");
const inputs = document.querySelectorAll('input[type="text"], input[type="password"]');
const progressBar = document.getElementById("progress-bar");
let pseudo, email, password, confirmPass;


const errorDisplay = (tag, message, valid) => {
    const container = document.querySelector("." + tag + "-container");
    const span = document.querySelector("." + tag + "-container > span");

    if (!valid) {
        container.classList.add("error");
        span.textContent = message;
    } else {
        container.classList.remove("error");
        span.innerHTML = message;
    }
}

const pseudoChecker = (value) => {
    if (value.length > 0 && (value.length < 3 || value.length > 20)) {
        console.log(value.length);
        errorDisplay("pseudo", "Le pseudo doit contenir au moins 3 caractères et pas plus de 20 caractères", false)
    } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
        console.log(value.length);
        errorDisplay("pseudo", "Le pseudo ne doit contenir des caractères speciaux", false)
    } else {
        console.log(value.length);
        errorDisplay("pseudo", "", true)
        pseudo = value;
    }
}


const emailChecker = (value) => {
    if (!value.match(/^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/, /i/)) {
        // emailContainer.classList.add("error");
        // errorDisplay.innerHTML = "L'email n'est pas conforme"
        errorDisplay("email", "L'email n'est pas conforme", false)
    } else {
        // emailContainer.classList.remove("error");
        // errorDisplay.innerHTML = "";
        errorDisplay("email", "", true)
        email = value;
    }
}

const passwordChecker = (value) => {
    if (value.length < 8) {
        errorDisplay("password", "Le password doit contenir au moins huit caractères", false)
        progressBar.classList.add("progressRed");
        password = null;
    } else if (!value.match(/[a-z]/)) {
        errorDisplay("password", "Le password doit contenir au moins une lettre minuscule ", false);
        password = null;
    } else if (!value.match(/[A-Z]/)) {
        errorDisplay("password", "Le password doit contenir au moins une lettre majuscule", false);
        password = null;
    } else if (!value.match(/[0-9]/)) {
        errorDisplay("password", "Le password doit contenir au moins un chiffre", false);
        password = null;
    } else if (!value.match(/[,;:!?./ù*µ%£°@&~]/)) {
        errorDisplay("password", "Le password doit contenir au moins un caractère special", false);
        password = null;
    } else if (value.length < 12) {
        errorDisplay("password", "", true);
        progressBar.classList.add("progressRed")
        password = value;
    } else if (value.length < 15) {
        errorDisplay("password", "", true);
        progressBar.classList.add("progressBlue")
        password = value;
    } else {
        errorDisplay("password", "", true);
        progressBar.classList.add("progressGreen")
        password = value;
    }
}

const confirmChecker = (value) => {
    if (value == password) {
        errorDisplay("confirm", "", true);
        confirmPass = true
    } else {
        errorDisplay("confirm", "Les mots de passe ne correspondent pas", false);
        confirmPass = false;
    }
}

inputs.forEach((input) => {
    input.addEventListener("input", (e) => {
        switch (e.target.id) {
            case "pseudo":
                pseudoChecker(e.target.value);
                break;
            case "email":
                emailChecker(e.target.value);
                break;
            case "password":
                passwordChecker(e.target.value);
                break;
            case "confirm":
                confirmChecker(e.target.value);
                break;
            default:
                null;
        }
    })
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (pseudo && email && password && confirmPass) {
        const data = {
            pseudo,
            email,
            password
        }
        console.log(data);
        inputs.forEach((input) => (input.value = ""));
        progressBar.classList = "";

        pseudo = null;
        email = null;
        password = null;
        confirmPass = null;
        alert("Inscription validée !");
    } else {
        alert("veuillez remplir correctement les champs");
    }
});