console.log("connected")

const button = document.querySelector("#toggleBtn");
const content = document.querySelector("#extraContent");

function toggleContent() {
    content.classList.toggle("hidden");
}

button.addEventListener("click", toggleContent);

