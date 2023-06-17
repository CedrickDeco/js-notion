const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "$^*ùm!:;,&é\"'(-è_ç)";
const rangeValue = document.getElementById("password-length");
const passwordOutput = document.getElementById("password-output");
const lowercaseChecked = document.getElementById("lowercase");
const uppercaseChecked = document.getElementById("uppercase");
const numbersChecked = document.getElementById("numbers");
const symbolsChecked = document.getElementById("symbols");

function generatePassword() {
    let data = [];
    let password = "";

    if (lowercaseChecked.checked) data.push(...dataLowercase);
    if (uppercaseChecked.checked) data.push(...dataUppercase);
    if (numbersChecked.checked) data.push(...dataNumbers);
    if (symbolsChecked.checked) data.push(...dataSymbols);

    if (data.length === 0) {
        alert("Veuillez sélectionner des critères");
        return;
    }

    for (i = 0; i < rangeValue.value; i++) {
        password += data[Math.floor(Math.random() * data.length)];
    }

    passwordOutput.value = password;

    passwordOutput.select();
    document.execCommand("copy");

    generateButton.textContent = "Copié !";

    setTimeout(() => {
        generateButton.textContent = "Générer mot de passe";
    }, 2000);
}

generateButton.addEventListener("click", generatePassword);