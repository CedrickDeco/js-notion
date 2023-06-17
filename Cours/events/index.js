const theBtn = document.querySelector("#btn");
const theImg = document.querySelector("#img");
theBtn.addEventListener("click", () => {
    theImg.classList.toggle("show")
});


const theMouseEvent = document.querySelector(".mouseEvent");
const theVertical = document.querySelector(".vertical")
const theHorizontal = document.querySelector(".horizontal")
theMouseEvent.addEventListener("mousemove", (e) => {
    // console.log(e.x);
    theVertical.innerHTML = e.y;
    theHorizontal.innerHTML = e.x;
    theMouseEvent.style.left = e.x / window.innerWidth * 100 + "%";
    if (e.x > 500) {
        document.body.style.filter = "blur(3px)";
    } else {
        document.body.style.filter = null;
    }
});

const theInput = document.querySelector("#input");
theInput.addEventListener("input", (e) => {
    theVertical.innerHTML = e.target.value;
});

const theTheme = document.querySelectorAll(".theme");
theTheme.forEach((item) => {
    item.addEventListener("click", (e) => {
        console.log(e.target.id);
        document.body.classList.remove("darkTheme", "yellowTheme", "salmonTheme");
        switch (e.target.id) {
            case "dark":
                document.body.classList.add("darkTheme");
                break;
            case "yellow":
                document.body.classList.add("yellowTheme");
                break;
            case "salmon":
                document.body.classList.add("salmonTheme");
                break;
            default:
                null;
        };
    });
});