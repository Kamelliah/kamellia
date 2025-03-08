document.addEventListener("DOMContentLoaded", function () {
    const themeButton = document.querySelector(".theme-button");
    const themeDropdown = document.querySelector(".theme-dropdown");
    const themeOptions = document.querySelectorAll(".theme-option");

    function getSystemTimeBasedTheme() {
        const currentHour = new Date().getHours();
        return (currentHour >= 6 && currentHour < 18) ? "light" : "dark";
    }

    function applyTheme(theme) {
        document.body.classList.remove("dark-theme");

        if (theme === "dark") {
            document.body.classList.add("dark-theme");
        } else if (theme === "auto") {
            const systemTheme = getSystemTimeBasedTheme();
            if (systemTheme === "dark") {
                document.body.classList.add("dark-theme");
            }
        }
        
        localStorage.setItem("theme", theme);
    }

    // Load saved theme or fallback to time-based auto theme
    const savedTheme = localStorage.getItem("theme") || "auto";
    applyTheme(savedTheme);

    // Open/Close Dropdown on Click
    themeButton.addEventListener("click", (e) => {
        e.stopPropagation();
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

    // Automatically update theme every minute in case time changes
    setInterval(() => {
        if (localStorage.getItem("theme") === "auto") {
            applyTheme("auto");
        }
    }, 60000); // Check every 60 seconds
});
