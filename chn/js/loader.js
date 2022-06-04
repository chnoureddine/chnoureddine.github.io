function loader() {
    document.querySelector(".loader").style.display = "none";
    document.querySelector(".container").style.display = "block";
}

function fadeOut() {
    setInterval(loader, 5000);
}

window.onload = fadeOut;