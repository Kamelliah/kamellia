// Theme Toggle Script
document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const currentTheme = localStorage.getItem("theme") || "auto";

    // Function to apply theme
    function applyTheme(theme) {
        if (theme === "dark") {
            document.body.classList.add("dark-theme");
            localStorage.setItem("theme", "dark");
        } else if (theme === "light") {
            document.body.classList.remove("dark-theme");
            localStorage.setItem("theme", "light");
        } else {
            // Auto Theme: Apply based on system preference
            if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                document.body.classList.add("dark-theme");
            } else {
                document.body.classList.remove("dark-theme");
            }
            localStorage.setItem("theme", "auto");
        }
    }

    // Apply stored theme on load
    applyTheme(currentTheme);
    themeToggle.value = currentTheme;

    // Listen for changes
    themeToggle.addEventListener("change", function () {
        applyTheme(this.value);
    });
});
