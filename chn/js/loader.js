function loader() {
    document.querySelector(".loader").style.display = "none";
    document.querySelector(".container").style.display = "block";
    document.querySelector(".footer").style.display = "flex";
}

function fadeOut() {
    setInterval(loader, 3500);
}

window.onload = fadeOut;