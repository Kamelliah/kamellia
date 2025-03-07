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

            // Theme Toggle Functionality
            const themeToggle = document.querySelector(".theme-toggle i");
            let currentTheme = localStorage.getItem("theme") || "auto";

            function applyTheme(theme) {
                document.body.classList.remove("light-theme", "dark-theme");

                if (theme === "dark") {
                    document.body.classList.add("dark-theme");
                    themeToggle.classList.replace("fa-moon", "fa-sun");
                } else if (theme === "light") {
                    document.body.classList.add("light-theme");
                    themeToggle.classList.replace("fa-sun", "fa-moon");
                } else {
                    // Auto mode - Detect system preference
                    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                    document.body.classList.add(prefersDark ? "dark-theme" : "light-theme");
                    themeToggle.classList.replace(prefersDark ? "fa-moon" : "fa-sun", prefersDark ? "fa-sun" : "fa-moon");
                }

                localStorage.setItem("theme", theme);
            }

            applyTheme(currentTheme);

            themeToggle.addEventListener("click", function () {
                if (currentTheme === "light") {
                    currentTheme = "dark";
                } else if (currentTheme === "dark") {
                    currentTheme = "auto";
                } else {
                    currentTheme = "light";
                }
                applyTheme(currentTheme);
            });
        })
        .catch(error => console.error("Error loading navigation:", error));
});
