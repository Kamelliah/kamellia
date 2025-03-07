document.addEventListener("DOMContentLoaded", function () {
    fetch("nav-bar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-container").innerHTML = data;

            // Mobile menu functionality
            const hamburger = document.querySelector(".hamburger");
            const navLinks = document.querySelector(".nav-links");

            if (hamburger && navLinks) {
                hamburger.addEventListener("click", () => {
                    navLinks.classList.toggle("active");
                });
            }
        })
        .catch(error => console.error("Error loading navigation:", error));
});
