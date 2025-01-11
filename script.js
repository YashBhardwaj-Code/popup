const openBtn = document.getElementById("open");
const menu = document.getElementById("popup");
const noBtn = document.getElementById("nobtn");
const yesBtn = document.getElementById("yesbtn");

openBtn.addEventListener("click", () => {
    menu.style.display = "inline-block";
})

noBtn.addEventListener("click", () => {
    menu.style.display = "none";
})
