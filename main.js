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