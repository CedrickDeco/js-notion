let array = ["développeur,", "infographe,", "admin reseau"];
const target = document.getElementById("target");
let wordIndex = 0;
let letterIndex = 0;

const createLetter = () => {
    const letter = document.createElement("span");
    target.appendChild(letter);
    letter.innerHTML = array[wordIndex][letterIndex];
    setTimeout(() => {
        letter.remove();
    }, 3000)
};


const loop = () => {
    setTimeout(() => {
        if (wordIndex >= array.length) {
            wordIndex = 0;
            letterIndex = 0;
            setTimeout(() => {
                letter.remove();
                loop();
            }, 3000)

        }
        if (letterIndex < array[wordIndex].length) {
            createLetter();
            letterIndex++
            loop();
        } else {
            wordIndex++;
            letterIndex = 0;
            setTimeout(() => {
                loop();
            }, 3000)
        }
    }, 150)
};
loop();





// setInterval(() => {
//     letterIndex++;
//     createLetter();
//     if (letterIndex >= array[wordIndex].length) {
//         wordIndex++;
//         letterIndex = -1;
//     }
// }, 200)




// const createLetter = () => {
//         const letter = document.createElement("span");
//         target.appendChild(letter);
//         letter.textContent = array[wordIndex][letterIndex];
//         setTimeout(() => {
//             letter.remove();
//         }, 2800)
//     }
//     //createLetter();
// console.log(array[wordIndex].length);


// const loop = () => {
//     setTimeout(() => {
//         if (letterIndex < array[wordIndex].length) {
//             createLetter();
//             letterIndex++;
//             loop();
//         } else {
//             wordIndex++;
//             letterIndex = 0;
//             setTimeout(() => {
//                 loop();
//             }, 2800)
//         }
//     }, 150);
// }


// loop();