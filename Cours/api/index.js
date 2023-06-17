const quote = document.getElementById("quote");
const picture = document.getElementById("pic");

const getQuote = () => {
    fetch("https://api.quotable.io/random")
        .then((res) => res.json()) //cette ligne n'est pas obligatoire
        .then((data) => {
            quote.innerHTML = data.content + "<br>" + "author: " +
                data.author;
        });

    fetch('https://picsum.photos/1380/700')
        .then((res) => {
            picture.innerHTML = `<img src=${res.url} />`

        });
    fetch('https://picsum.photos/1380/700')
        .then((res) => console.log(res.url))


};

quote.addEventListener("click", () => getQuote());

getQuote();