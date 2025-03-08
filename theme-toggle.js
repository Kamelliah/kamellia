document.addEventListener("DOMContentLoaded", function () {
    const themeButton = document.querySelector(".theme-button");
    const themeDropdown = document.querySelector(".theme-dropdown");
    const themeOptions = document.querySelectorAll(".theme-option");

    function applyTheme(theme) {
        document.body.classList.remove("dark-theme");
        if (theme === "dark") {
            document.body.classList.add("dark-theme");
        } else if (theme === "auto") {
            if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                document.body.classList.add("dark-theme");
            }
        }
        localStorage.setItem("theme", theme);
    }

    // Load saved theme on page load
    const savedTheme = localStorage.getItem("theme") || "auto";
    applyTheme(savedTheme);

    // Open/Close Dropdown on Click
    themeButton.addEventListener("click", (e) => {
        e.stopPropagation(); // Prevents closing when clicking inside
        themeDropdown.classList.toggle("active");
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", (e) => {
        if (!themeDropdown.contains(e.target)) {
            themeDropdown.classList.remove("active");
        }
    });

    // Handle Theme Selection
    themeOptions.forEach(option => {
        option.addEventListener("click", () => {
            const selectedTheme = option.getAttribute("data-theme");
            applyTheme(selectedTheme);
            themeDropdown.classList.remove("active"); // Close menu after selection
        });
    });
});
