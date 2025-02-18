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