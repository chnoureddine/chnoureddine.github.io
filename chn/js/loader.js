function loader() {
    document.querySelector(".loader").style.display = "none";
    document.querySelector(".container").style.display = "block";
}

function fadeOut() {
    setInterval(loader, 4000);
}

window.onload = fadeOut;