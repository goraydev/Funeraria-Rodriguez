/* --------------- para cambiar el fondo del nav --------------- */
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("nav").style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    } else {
        document.getElementById("nav").style.backgroundColor = "rgba(255, 255, 255, 0.15)";
    }
}

const nav = document.getElementById("nav");
const icon = document.getElementById("icon");
const expand = (e) => {
    nav.classList.toggle("active");
    if (icon.classList.contains("fa-bars")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
    } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    }
};
