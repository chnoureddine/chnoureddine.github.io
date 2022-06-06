let navbar = document.querySelector(".header .links ul");

document.querySelector("#navbar").onclick = function() {
    if (navbar.style.display === "none") {
        navbar.style.display = "block";
    } else {
        navbar.style.display = "none";
    }
};