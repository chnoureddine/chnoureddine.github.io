let navbar = document.querySelector(".header .links ul");

document.querySelector("#navbar").onclick = function() {
    if (navbar.style.display === "none") {
        navbar.style.display = "block";
    } else {
        navbar.style.display = "none";
    }
};

// let navbarpromos = document.querySelector("#headerpromos .links ul");

// document.querySelector("#navbarpromos").onclick = function() {
//     if (navbarpromos.style.display === "none") {
//         navbarpromos.style.display = "block";
//     } else {
//         navbarpromos.style.display = "none";
//     }
// };