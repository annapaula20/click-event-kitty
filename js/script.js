let button = document.querySelector(".show-cat");
let cat = document.querySelector(".cat");

button.addEventListener("click", function () {
    if (cat.classList.contains("show")) {
        cat.classList.remove("show");
        button.innerText = "Wait, come back!";
        button.classList.remove("disappear")
    } else {
        cat.classList.add("show");
        button.innerText = "Shoo, cat!";
        button.classList.add("disappear");
    }
});