//variables
let cours = 'le cours sur javascript. yes ooh';
console.log(cours);
cours = 'Deco';
console.log(cours + '. // Ceci est la deuxieme valeur de la variable cours');
//functions
function faireQuelqueChose() {
    console.log('Je fais quelque chose');
}
const faireUneTache = (type) => {
    console.log('Je fais ' + type);
}
faireQuelqueChose();
faireUneTache('la vaisselle');