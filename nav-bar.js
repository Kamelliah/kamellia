document.addEventListener("DOMContentLoaded", function () {
    fetch("nav-bar.html") // Make sure this path is correct!
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-container").innerHTML = data;
        })
        .catch(error => console.error("Error loading navigation:", error));
});
