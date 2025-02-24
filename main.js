const button = document.querySelector("#button")
const disclaimer = document.querySelector("#disclaimer")

const onClick = function () {
    if (disclaimer.innerHTML === "") {
        disclaimer.innerHTML = "the orange currant scone may contain traces of tree nuts.";
    } else {
        disclaimer.innerHTML = "";
    }
}

button.addEventListener("click", onClick)

window.onload = function () {
    document.querySelectorAll(".coffee-container").forEach(container => {
        const steamElements = container.querySelectorAll(".steam");
        container.addEventListener("mouseenter", () => {
            steamElements.forEach(steam => steam.classList.add("show"));
        });
        container.addEventListener("mouseleave", () => {
            steamElements.forEach(steam => steam.classList.remove("show"));
        });
    });
};