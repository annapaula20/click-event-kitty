let button = document.querySelector(".show-cat");
let cat = document.querySelector(".cat");

button.addEventListener("click", function () {
    if (cat.classList.contains("show")) {
        cat.classList.remove("show");
    } else {
        cat.classList.add("show");
    }
});